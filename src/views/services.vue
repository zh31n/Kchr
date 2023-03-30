<template>
  <div class="content-wrapper">
    <div class="search-wrapper">
      <div class="filter-items">
        <div class="item" :class="[data.active === '' ? 'active': '']" @click="fetchActive('')">
          Все
        </div>
        <div class="item" :class="[data.active === 1 ? 'active': '']" @click="fetchActive(1)">
          Активные
        </div>
        <div class="item" :class="[data.active === 0 ? 'active': '']" @click="fetchActive(0)">
          Выключены
        </div>
      </div>
      <div class="search-items">
        <div class="input-group" @keyup.enter="fetchServices">
          <input type="text" placeholder="Поиск..." v-model="data.search">
        </div>
        <div class="sorting">
          <multiselect v-model="data.sorting" :options="options" :searchable="false"
                       placeholder="Выберите сортировку"></multiselect>
        </div>
        <div class="create-service">
          <a class="btn btn-select center" @click="$root.$emit('triggerModal', {name: 'createServiceModal'})">Добавить новую
            услугу</a>
        </div>
      </div>
    </div>
    <div class="row" v-if="getServices.length > 0">
      <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3" v-for="(item, index) in getServices" :key="index">
        <div class="service-card">
          <div class="header">
            <div class="image">
              <img :src="item.serviceImages[0].path" v-if="item.serviceImages.length > 0">
              <img src="@/assets/images/services/plug.jpg" v-else>
            </div>
            <div class="title">{{ item.title }}</div>
            <div class="code">#{{ item.id }}</div>
            <div class="row">
              <div class="col-md-4 pointer">
                <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="29.0301" cy="29.0301" r="29.0301" fill="#F4F4F4"/>
                  <path
                    d="M35.5848 22.4749H34.6483V20.602C34.6483 20.3536 34.5496 20.1154 34.374 19.9398C34.1984 19.7642 33.9602 19.6655 33.7119 19.6655C33.4635 19.6655 33.2253 19.7642 33.0497 19.9398C32.8741 20.1154 32.7754 20.3536 32.7754 20.602V22.4749H25.2838V20.602C25.2838 20.3536 25.1851 20.1154 25.0095 19.9398C24.8339 19.7642 24.5957 19.6655 24.3473 19.6655C24.0989 19.6655 23.8608 19.7642 23.6851 19.9398C23.5095 20.1154 23.4109 20.3536 23.4109 20.602V22.4749H22.4744C21.7293 22.4749 21.0147 22.7709 20.4879 23.2977C19.961 23.8246 19.665 24.5392 19.665 25.2843V26.2207H38.3941V25.2843C38.3941 24.5392 38.0981 23.8246 37.5713 23.2977C37.0444 22.7709 36.3298 22.4749 35.5848 22.4749Z"
                    fill="#707579"/>
                  <path
                    d="M19.665 35.5854C19.665 36.3305 19.961 37.045 20.4879 37.5719C21.0147 38.0987 21.7293 38.3947 22.4744 38.3947H35.5848C36.3298 38.3947 37.0444 38.0987 37.5713 37.5719C38.0981 37.045 38.3941 36.3305 38.3941 35.5854V28.0938H19.665V35.5854Z"
                    fill="#707579"/>
                </svg>
              </div>
              <div class="col-md-4 pointer" @click="editService(item)">
                <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="29.0301" cy="29.0301" r="29.0301" fill="#F4F4F4"/>
                  <path
                    d="M38.6251 23.0523L34.9735 19.3755C34.7322 19.135 34.4057 19 34.0653 19C33.7249 19 33.3983 19.135 33.157 19.3755L20.2115 32.3252L19.0296 37.4353C18.9888 37.6221 18.9902 37.8157 19.0337 38.0019C19.0771 38.188 19.1616 38.3622 19.2808 38.5115C19.4001 38.6608 19.5511 38.7815 19.7229 38.8649C19.8947 38.9482 20.0829 38.9921 20.2737 38.9933C20.3627 39.0022 20.4523 39.0022 20.5412 38.9933L25.6983 37.8092L38.6251 24.872C38.8652 24.6302 39 24.3031 39 23.9621C39 23.6211 38.8652 23.294 38.6251 23.0523ZM25.0762 36.6875L20.2426 37.7033L21.3437 32.9546L31.0295 23.2891L34.762 27.0282L25.0762 36.6875ZM35.5956 26.1246L31.8631 22.3855L34.028 20.2293L37.6982 23.9684L35.5956 26.1246Z"
                    fill="#707579"/>
                </svg>
              </div>
              <div class="col-md-4 pointer action" @click="action = action === index ? '' : index">
                <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="29.9695" cy="29.0301" r="29.0301" fill="#F4F4F4"/>
                  <path
                    d="M29 29C29 29.5523 29.4477 30 30 30C30.5523 30 31 29.5523 31 29C31 28.4477 30.5523 28 30 28C29.4477 28 29 28.4477 29 29Z"
                    stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                    d="M36 29C36 29.5523 36.4477 30 37 30C37.5523 30 38 29.5523 38 29C38 28.4477 37.5523 28 37 28C36.4477 28 36 28.4477 36 29Z"
                    stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                    d="M22 29C22 29.5523 22.4477 30 23 30C23.5523 30 24 29.5523 24 29C24 28.4477 23.5523 28 23 28C22.4477 28 22 28.4477 22 29Z"
                    stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="actions" v-if="action === index">
                  <div class="item" @click="fetchStatus(item.id)">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.47633 1.04735C10.614 1.04605 11.7426 1.25008 12.8078 1.64962L11.5622 2.90471C9.88559 2.44591 8.10448 2.5531 6.49503 3.20965C4.88557 3.86619 3.5377 5.03542 2.66042 6.53601C1.78314 8.03661 1.42548 9.78472 1.64288 11.5093C1.86028 13.2339 2.64061 14.8385 3.86287 16.0744C5.08512 17.3104 6.681 18.1085 8.40305 18.3451C10.1251 18.5816 11.8771 18.2434 13.3873 17.3829C14.8976 16.5223 16.0817 15.1876 16.7561 13.5855C17.4305 11.9834 17.5575 10.2036 17.1174 8.52206L18.3746 7.25539C18.758 8.30233 18.9537 9.40872 18.9527 10.5237C18.9527 12.3979 18.3969 14.2301 17.3556 15.7884C16.3143 17.3468 14.8343 18.5614 13.1028 19.2787C11.3712 19.9959 9.46582 20.1836 7.62759 19.8179C5.78936 19.4523 4.10084 18.5497 2.77555 17.2244C1.45027 15.8992 0.547735 14.2106 0.182089 12.3724C-0.183557 10.5342 0.0041059 8.62881 0.721346 6.89724C1.43859 5.16567 2.65319 3.68567 4.21156 2.6444C5.76994 1.60313 7.60209 1.04735 9.47633 1.04735ZM19.0158 0.70199L19.1696 0.845187C19.7139 1.38934 20.0204 2.127 20.0219 2.89665C20.0235 3.6663 19.72 4.40522 19.178 4.95159L12.5403 11.6419C12.3499 11.8335 12.1136 11.9731 11.8538 12.0473L7.41891 13.3202C7.32855 13.3461 7.23292 13.3473 7.14194 13.3237C7.05097 13.3001 6.96797 13.2526 6.90157 13.186C6.83516 13.1195 6.78778 13.0365 6.76432 12.9454C6.74087 12.8544 6.74221 12.7588 6.76821 12.6685L8.04224 8.22514C8.11565 7.97003 8.25217 7.73755 8.4392 7.54916L15.0821 0.852558C15.5968 0.333997 16.2892 0.0300594 17.0193 0.00211293C17.7494 -0.0258335 18.4629 0.224293 19.0158 0.70199ZM16.2035 1.9655L9.55951 8.6621L8.80982 11.2776L11.419 10.53L18.0566 3.83865C18.2866 3.60666 18.4232 3.29812 18.4403 2.97187C18.4574 2.64562 18.3538 2.32449 18.1493 2.06974L18.0492 1.95708C17.8034 1.7134 17.4709 1.57729 17.1248 1.57868C16.7787 1.58006 16.4473 1.71881 16.2035 1.96445V1.9655Z"
                        fill="#F66F4D"/>
                    </svg>
                    <span v-if="item.active == 1">Отключить</span>
                    <span v-else>Включить</span>
                  </div>
                  <div class="item" @click="remove(item.id)">
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.5 3.21429V3.57143H11.0714V3.21429C11.0714 2.74068 10.8833 2.28648 10.5484 1.9516C10.2135 1.61671 9.75932 1.42857 9.28571 1.42857C8.81211 1.42857 8.35791 1.61671 8.02302 1.9516C7.68814 2.28648 7.5 2.74068 7.5 3.21429ZM6.07143 3.57143V3.21429C6.07143 2.3618 6.41008 1.54424 7.01287 0.941442C7.61567 0.338647 8.43323 0 9.28571 0C10.1382 0 10.9558 0.338647 11.5586 0.941442C12.1614 1.54424 12.5 2.3618 12.5 3.21429V3.57143H17.8571C18.0466 3.57143 18.2283 3.64668 18.3622 3.78064C18.4962 3.91459 18.5714 4.09627 18.5714 4.28571C18.5714 4.47515 18.4962 4.65684 18.3622 4.79079C18.2283 4.92475 18.0466 5 17.8571 5H16.78L15.4286 16.8343C15.3289 17.7058 14.912 18.5102 14.2572 19.0941C13.6025 19.678 12.7558 20.0004 11.8786 20H6.69286C5.81562 20.0004 4.96891 19.678 4.31418 19.0941C3.65945 18.5102 3.24251 17.7058 3.14286 16.8343L1.79143 5H0.714286C0.524845 5 0.343164 4.92475 0.209209 4.79079C0.0752549 4.65684 0 4.47515 0 4.28571C0 4.09627 0.0752549 3.91459 0.209209 3.78064C0.343164 3.64668 0.524845 3.57143 0.714286 3.57143H6.07143ZM4.56286 16.6714C4.62249 17.1942 4.8724 17.6768 5.26494 18.0272C5.65749 18.3776 6.16524 18.5713 6.69143 18.5714H11.8793C12.4055 18.5713 12.9132 18.3776 13.3058 18.0272C13.6983 17.6768 13.9482 17.1942 14.0079 16.6714L15.3429 5H3.22929L4.56286 16.6714ZM7.14286 7.5C7.3323 7.5 7.51398 7.57526 7.64793 7.70921C7.78189 7.84316 7.85714 8.02485 7.85714 8.21429V15.3571C7.85714 15.5466 7.78189 15.7283 7.64793 15.8622C7.51398 15.9962 7.3323 16.0714 7.14286 16.0714C6.95342 16.0714 6.77174 15.9962 6.63778 15.8622C6.50383 15.7283 6.42857 15.5466 6.42857 15.3571V8.21429C6.42857 8.02485 6.50383 7.84316 6.63778 7.70921C6.77174 7.57526 6.95342 7.5 7.14286 7.5ZM12.1429 8.21429C12.1429 8.02485 12.0676 7.84316 11.9336 7.70921C11.7997 7.57526 11.618 7.5 11.4286 7.5C11.2391 7.5 11.0574 7.57526 10.9235 7.70921C10.7895 7.84316 10.7143 8.02485 10.7143 8.21429V15.3571C10.7143 15.5466 10.7895 15.7283 10.9235 15.8622C11.0574 15.9962 11.2391 16.0714 11.4286 16.0714C11.618 16.0714 11.7997 15.9962 11.9336 15.8622C12.0676 15.7283 12.1429 15.5466 12.1429 15.3571V8.21429Z"
                        fill="#F66F4D"/>
                    </svg>
                    <span>Удалить</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            <div class="status-date">
              <div class="date">{{ $moment(item.date).format('DD.MM.Y') }}</div>
              <div class="status active" v-if="item.active == 1">Активный</div>
              <div class="status" v-else>Выключен</div>
            </div>
            <div class="description">
              <span class="title">Описание</span>
              <p>{{ item.short_desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'services',
  data: function () {
    return {
      data: {
        limit: 12,
        active: '',
        search: '',
        sorting: ''
      },
      action: '',
      options: ['list', 'of', 'options']
    }
  },
  async mounted () {
    this.$root.$on('linkFetchService', async () => {
      await this.fetchServices()
    })
    await this.fetchServices()
  },
  computed: {
    ...mapGetters(['getServices'])
  },
  methods: {
    // Получение списка услуг
    fetchServices: async function () {
      await this.$store.dispatch('getServices', this.data)
    },
    // Изменение активности услуги
    fetchStatus: async function (id) {
      await this.$store.dispatch('statusService', id).then((res) => {
        if (res.data.result === 'error') {
          this.$toast.error(res.data.message)
        } else {
          this.fetchServices()
          this.$toast.success(res.data.message)
        }
      })
    },
    editService: function (data) {
      this.$root.$emit('triggerModal', {name: 'editServiceModal', data: data})
    },
    // Фильтр по активности
    fetchActive: async function (val) {
      this.data.active = val
      await this.fetchServices()
    },
    // Удаление услуги
    remove: function (id) {
      this.$store.dispatch('removeService', id).then((res) => {
        if (res.data.result === 'error') {
          this.$toast.error(res.data.message)
        } else {
          this.fetchServices()
          this.$toast.success(res.data.message)
        }
      })
    }
  }
}
</script>
