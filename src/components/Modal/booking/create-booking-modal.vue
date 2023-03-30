<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header-v2">
          <h1 class="title">Создание брони</h1>
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
                <label>Услуга</label>
                <select class="custom-select" v-model="data.service_id" @change="fetchQuota">
                  <option value="0" :disabled="true">Выберите услугу</option>
                  <option v-for="(service, index) in getServices" :key="index" :value="service.id">{{
                      service.title
                    }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="row" v-if="state === 1 || state === 2">
            <div class="col-md-6">
              <div class="form-group">
                <label>Дата</label>
                <datepicker v-model="data.booking_date" placeholder="Дата бронирования" :format="'DD-MM-YYYY'"
                            :value-type="'YYYY-MM-DD'" :disabled-date="disabledExcept"
                            @change="fetchIntervals"></datepicker>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Способ оплаты</label>
                <select class="custom-select" v-model="data.type_payment">
                  <option value="1">Наличные</option>
                  <option value="2">Безналичные</option>
                </select>
              </div>
            </div>
          </div>
          <template v-if="state === 2">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Источник брони</label>
                  <select class="custom-select" v-model="data.source">
                    <option value="1">Звонок</option>
                    <option value="2">Alamat.ru</option>
                    <option value="3">Сайт</option>
                    <option value="4">Email</option>
                    <option value="5">Социальные сети</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Часовые интервалы</label>
                  <multiselect v-model="data.interval" :options="parseInterval" :searchable="false" :multiple="false"
                               placeholder="График работы"></multiselect>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-9" v-if="!data.newClient">
                <div class="form-group">
                  <label>Выберите клиента</label>
                  <multiselect v-model="data.client" :options="clients" :searchable="true" :multiple="false"
                               :internal-search="false" :options-limit="300" :loading="isLoading"
                               label="surname" track-by="id"
                               open-direction="bottom"
                               placeholder="Введите для поиска" @search-change="fetchClient"></multiselect>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label>Новый клиент</label>
                  <a class="btn btn-success center"
                     @click="data.newClient = !data.newClient">{{ data.newClient ? 'К поиску' : 'Создать' }}</a>
                </div>
              </div>
            </div>
            <template v-if="data.newClient">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Фамилия</label>
                    <input type="text" v-model="data.surname" placeholder="Фамилия">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Имя</label>
                    <input type="text" v-model="data.name" placeholder="Имя">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Отчество</label>
                    <input type="text" v-model="data.middle_name" placeholder="Отчество">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Гражданство</label>
                    <select class="custom-arrow" v-model="data.citizenship">
                      <option value="1">Российская Федерация</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Номер телефона</label>
                    <masked-input v-model="data.phone" mask="\+\7-(111)-111-11-11" placeholder="Номер телефона"/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Email" v-model="data.email"/>
                  </div>
                </div>
              </div>
            </template>
            <div class="row">
              <div class="col-md-12">
                <div class="select-placement">
                  <div class="placement-item">
                    <div class="placement-item-titles">
                      <div class="placement-item-title">Взрослые</div>
                      <div class="placement-item-sub-title">старше 17 лет</div>
                    </div>
                    <div class="placement-item-counter">
                      <button type="button" class="btn" @click="updateCounter('adults', 0)" :disabled="data.adults <= 1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="a2ka">
                          <path fill="currentColor" d="M3 7a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2H3Z"></path>
                        </svg>
                      </button>
                      <input class="counter" v-model="data.adults" :disabled="true">
                      <button type="button" class="btn" @click="updateCounter('adults', 1)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="a2ka">
                          <path fill="currentColor"
                                d="M9 3a1 1 0 0 0-2 0v4H3a1 1 0 0 0 0 2h4v4a1 1 0 1 0 2 0V9h4a1 1 0 1 0 0-2H9V3Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="placement-item">
                    <div class="placement-item-titles">
                      <div class="placement-item-title">Дети</div>
                      <div class="placement-item-sub-title">от 0 до 17 лет</div>
                    </div>
                    <div class="placement-item-counter">
                      <button type="button" class="btn" @click="updateCounter('children', 0)"
                              :disabled="data.children < 1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="a2ka">
                          <path fill="currentColor" d="M3 7a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2H3Z"></path>
                        </svg>
                      </button>
                      <input class="counter" v-model="data.children" :disabled="true">
                      <button type="button" class="btn" @click="updateCounter('children', 1)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="a2ka">
                          <path fill="currentColor"
                                d="M9 3a1 1 0 0 0-2 0v4H3a1 1 0 0 0 0 2h4v4a1 1 0 1 0 2 0V9h4a1 1 0 1 0 0-2H9V3Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <div class="form-group">
                  <label>Комментарий</label>
                  <textarea rows="5" placeholder="Комментарий клиента" v-model="data.comment"/>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="modal-footer">
          <button class="btn btn-select" @click="close">Отменить</button>
          <button class="btn btn-success" @click="create">Создать</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import maskedInput from 'vue-masked-input'
import {mapGetters} from 'vuex'

export default {
  name: 'create-booking-modal',
  components: {maskedInput},
  data: function () {
    return {
      data: {
        service_id: 0,
        booking_date: '',
        interval: [],
        client: [],
        source: 1,
        surname: '',
        name: '',
        middle_name: '',
        citizenship: 1,
        phone: '',
        email: '',
        adults: 1,
        children: 0,
        comment: '',
        type_payment: 1,
        newClient: false
      },
      clients: [],
      dates: [],
      intervals: [],
      isLoading: false,
      state: 0
    }
  },
  async mounted () {
    await this.fetchServices()
  },
  computed: {
    ...mapGetters(['getServices']),
    parseInterval: function () {
      let intervals = []
      this.intervals.forEach((val) => {
        intervals.push(val.slot)
      })
      return intervals
    }
  },
  methods: {
    updateCounter: function (variable, type) {
      if (type === 0) {
        if ((variable === 'adults' && this.data[variable] > 1) || (variable === 'children' && this.data[variable] >= 1)) {
          this.data[variable]--
        }
      } else if ((variable === 'children' && this.data[variable] < 4) || variable !== 'children') {
        this.data[variable]++
      }
    },
    create: function () {
      this.$store.dispatch('createBooking', this.data).then((res) => {
        if (res.data.result === 'error') {
          this.$toast.error(res.data.message)
        } else {
          this.$root.$emit('linkFetchBookingsTable')
          this.$root.$emit('linkFetchQuotasTable')
          this.close()
          this.$toast.success(res.data.message)
        }
      })
    },
    disabledExcept (date) {
      const pad = (v) => v < 10 ? `0${v}` : v
      const day = date.getDate()
      const year = date.getFullYear()
      const month = date.getMonth()
      const text = `${year}-${pad(month + 1)}-${pad(day)}`
      return this.dates.indexOf(text) === -1
    },
    // Получение квот
    fetchQuota: async function () {
      this.state = 1
      this.data.booking_date = ''
      this.data.intervals = []
      await this.$store.dispatch('getQuota', this.data.service_id).then((res) => {
        if (res.data.result === 'ok') {
          this.dates = JSON.parse(res.data.data.dates)
          this.state = 1
        } else {
          this.$toast.error(res.data.message)
        }
      })
    },
    // Получение интервалов
    fetchIntervals: async function () {
      await this.$store.dispatch('getServiceFreeIntervals', {
        id: this.data.service_id,
        date: this.data.booking_date
      }).then((res) => {
        this.intervals = res.data.data
        this.state = 2
      })
    },
    // Поиск клиентов
    fetchClient: function (data) {
      this.isLoading = true
      this.$store.dispatch('getClients', {search: data}).then((res) => {
        this.clients = res.data.data
        this.isLoading = false
      })
    },
    // Получение списка услуг
    fetchServices: async function () {
      await this.$store.dispatch('getServices')
    },
    close: function () {
      this.$root.$emit('triggerModal', {name: 'createBookingModal'})
    }
  }
}
</script>

<style lang="scss" scoped>
.mx-datepicker {
  width: 100%;
}

.select-placement {
  display: flex;
  flex-direction: column;
  background: var(--white);
  width: 100%;
  padding: 20px 20px;
  box-shadow: 0 4px 16px 1px rgb(0 26 52 / 5%);

  .placement-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'DIN Pro', serif;

    .placement-item-title {
      font-weight: 700;
    }

    .placement-item-sub-title {
      font-size: 14px;
      font-weight: 700;
      color: #707f8d;
      margin-top: 5px;
    }

    .placement-item-counter {
      .btn {
        width: 32px;
        height: 32px;
      }

      input {
        border: none;
        width: 30px;
        height: 30px;
        font-weight: 700;
      }
    }

    &:last-child {
      margin-top: 20px;
    }
  }
}
</style>
