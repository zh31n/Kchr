<template>
  <div class="content-wrapper">
    <div class="quotas">
      <statistics/>
      <div class="filter">
        <a class="btn btn-select center w-200" @click="$root.$emit('triggerModal', {name: 'groupOperationModal'})">Групповая
          операция</a>
      </div>
      <div class="row mt-3">
        <div class="col-md-2">
          <div class="select-service">
            <select class="custom-select" v-model="service_id" @change="fetchQuota">
              <option value="0" :disabled="true">Выберите услугу</option>
              <option v-for="(service, index) in getServices" :key="index" :value="service.id">{{
                  service.title
                }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="quotas-table" v-if="showQuotas">
        <table>
          <thead>
          <tr>
            <th scope="col">Услуга</th>
            <th scope="col">Часовой интервал</th>
            <template v-for="(item, index) in data.intervals.dates">
              <th scope="col" :key="index">{{ $moment(item).format('D MMMM, dd') }}</th>
            </template>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td :rowspan="data.intervals.days.length + 1">{{ data.title }}</td>
          </tr>
          <template v-for="item in data.intervals.days">
            <tr v-for="(item1, index1) in item" :key="index1">
              <td>{{ item1.time }}</td>
              <td v-for="(item2, index2) in item1.slots" :key="index2">
                {{ item2 }}<br>
                ({{ item1.price[index2] }})
              </td>
            </tr>
          </template>
          <tr>
            <td>ИТОГО:</td>
            <td></td>
            <td v-for="(item, index) in data.intervals.total" :key="index">{{ item }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Statistics from '../../components/Management/statistics'

export default {
  name: 'quotas',
  components: {Statistics},
  data: function () {
    return {
      data: {
        title: '',
        intervals: []
      },
      showQuotas: false,
      service_id: 0
    }
  },
  async mounted () {
    await this.fetchServices()
    this.$root.$on('linkFetchQuota', () => {
      this.fetchQuota()
    })
  },
  computed: {
    ...mapGetters(['getServices'])
  },
  methods: {
    // Получение квот
    fetchQuota: async function () {
      await this.$store.dispatch('getQuota', this.service_id).then((res) => {
        if (res.data.result === 'ok') {
          this.data.title = res.data.data.title
          this.data.intervals = JSON.parse(res.data.data.intervals)['intervals']
          this.showQuotas = true
        } else {
          this.showQuotas = false
          this.$toast.error(res.data.message)
        }
      })
    },
    // Получение списка услуг
    fetchServices: async function () {
      await this.$store.dispatch('getServices')
    }
  }
}
</script>
