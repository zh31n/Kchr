<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header-v2">
          <h1 class="title">Групповая операция</h1>
          <div class="close pointer" @click="close">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_b_631_2916)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                      fill="#F5F5F5"/>
              </g>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17.8754 8.34029C17.466 7.93081 16.8065 7.9264 16.4024 8.33045L12.9336 11.7993L9.54098 8.40673C9.1315 7.99725 8.46754 7.99731 8.05799 8.40686C7.64844 8.81641 7.64838 9.48036 8.05787 9.88984L11.4504 13.2824L8.1146 16.6183C7.71056 17.0223 7.71496 17.6818 8.12445 18.0913C8.53393 18.5008 9.19342 18.5052 9.59747 18.1011L12.9333 14.7653L16.326 18.158C16.7355 18.5675 17.3994 18.5674 17.809 18.1579C18.2185 17.7483 18.2186 17.0844 17.8091 16.6749L14.4164 13.2822L17.8853 9.81331C18.2893 9.40927 18.2849 8.74978 17.8754 8.34029Z"
                    fill="black"/>
              <defs>
                <filter id="filter0_b_631_2916" x="-45.7896" y="-45.7896" width="117.579" height="117.579"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feGaussianBlur in="BackgroundImage" stdDeviation="22.8948"/>
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_631_2916"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_631_2916" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div class="modal-body-default">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Выберите услугу</label>
                <select class="custom-select" v-model="data.service_id" @change="fetchService">
                  <option value="0" :disabled="true">Выберите услугу</option>
                  <option v-for="(service, index) in getServices" :key="index" :value="service.id">{{ service.title }}</option>
                </select>
              </div>
            </div>
          </div>
          <template v-if="showQuotas">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Период с - по</label>
                  <datepicker range v-model="data.dates" placeholder="Даты бронирования" :format="'DD-MM-YYYY'"
                              :value-type="'YYYY-MM-DD'" :disabled-date="this.$core.disabledDate"></datepicker>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Дни работы</label>
                  <multiselect v-model="data.schedule" :options="schedule" :searchable="false" :multiple="true"
                               placeholder="График работы"></multiselect>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label>Часовые интервалы</label>
                  <multiselect v-model="data.intervals" :options="intervals" :searchable="false" :multiple="true"
                               placeholder="График работы"></multiselect>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2">
                <div class="form-group">
                  <label>Квота</label>
                  <input v-model="data.quota"/>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label>Цена</label>
                  <input v-model="data.price" placeholder="Цена"/>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="modal-footer">
          <button class="btn btn-select" @click="close">Отменить</button>
          <button class="btn btn-success" @click="save">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'group-operation-modal',
  data: function () {
    return {
      data: {
        dates: null,
        intervals: [],
        schedule: [],
        service_id: 0,
        quota: 0,
        price: 0
      },
      schedule: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
      intervals: ['00:00-01:00', '01:00-02:00', '02:00-03:00', '03:00-04:00', '04:00-05:00', '05:00-06:00', '06:00-07:00',
        '07:00-08:00', '08:00-09:00', '09:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00',
        '15:00-16:00', '16:00-17:00', '18:00-19:00', '19:00-20:00', '20:00-21:00', '21:00-22:00', '22:00-23:00', '23:00-24:00'],
      showQuotas: false
    }
  },
  computed: {
    ...mapGetters(['getServices'])
  },
  async mounted () {
    await this.fetchServices()
  },
  methods: {
    save: function () {
      this.$store.dispatch('createQuotas', this.data).then((res) => {
        if (res.data.result === 'error') {
          this.$toast.error(res.data.message)
        } else {
          this.$root.$emit('linkFetchQuota')
          this.close()
          this.$toast.success(res.data.message)
        }
      })
    },
    // Получение списка услуг
    fetchServices: async function () {
      await this.$store.dispatch('getServices')
    },
    fetchService: async function () {
      await this.$store.dispatch('getService', this.data.service_id).then((res) => {
        this.data.schedule = JSON.parse(res.data.data.schedule).split(',')
        this.showQuotas = true
      })
    },
    close: function () {
      this.$root.$emit('triggerModal', {name: 'groupOperationModal'})
    }
  }
}
</script>
