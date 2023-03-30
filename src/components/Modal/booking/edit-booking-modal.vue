<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header-v2">
          <h1 class="title">Редактирование заказа</h1>
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
                <label>Часовые интервалы</label>
                <multiselect v-model="data.interval" :options="parseInterval" :searchable="false" :multiple="false"
                             placeholder="График работы" @input="updatePrice"></multiselect>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Статус оплаты</label>
                <select class="custom-select" v-model="data.status_payment">
                  <option value="0">Не оплачен</option>
                  <option value="1">Частично оплачен</option>
                  <option value="2">Полностью оплачен</option>
                </select>
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
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Статус заказа</label>
                <select class="custom-select" v-model="data.status">
                  <option value="1">Создан</option>
                  <option value="2">В процессе</option>
                  <option value="3">Завершен</option>
                  <option value="4">Отменен</option>
                </select>
              </div>
            </div>
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
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Выберите клиента</label>
                <multiselect v-model="data.client" :options="clients" :searchable="true" :multiple="false"
                             :internal-search="false" :options-limit="300" :loading="isLoading"
                             label="surname" track-by="id"
                             open-direction="bottom"
                             placeholder="Введите для поиска" @search-change="fetchClient"></multiselect>
              </div>
            </div>
          </div>
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
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Скидка</label>
                <input placeholder="Укажите скидку" v-model="data.amount_bonuses" @keypress="$core.isNumber($event)"/>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <label>Итого: {{ amountAfterBonuses }} руб.</label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-select" @click="close">Отменить</button>
          <button class="btn btn-success" @click="update">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import maskedInput from 'vue-masked-input'
import {mapGetters} from 'vuex'

export default {
  name: 'edit-booking-modal',
  components: {maskedInput},
  data: function () {
    return {
      data: {
        booking_id: 0,
        service_id: 0,
        booking_date: '',
        interval: '',
        client: [],
        source: 1,
        adults: 1,
        children: 0,
        comment: '',
        type_payment: 1,
        status_payment: 0,
        status: 1,
        amount_bonuses: 0,
        _amount: 0
      },
      clients: [],
      dates: [],
      intervals: [],
      isLoading: false
    }
  },
  computed: {
    ...mapGetters(['getServices', 'dataModal']),
    parseInterval: function () {
      let intervals = []
      this.intervals.forEach((val) => {
        intervals.push(val.slot)
      })
      return intervals
    },
    amountAfterBonuses: function () {
      let vm = this
      let count = parseInt(this.data.adults) + parseInt(this.data.children)
      let amount = parseFloat(this.data._amount) * count
      let bonus = parseFloat(this.data.amount_bonuses)
      if (bonus >= amount) {
        vm.data.amount_bonuses = 0
        return amount
      } else {
        return amount - bonus
      }
    }
  },
  async mounted () {
    this.data.booking_id = this.dataModal.id
    this.data.service_id = this.dataModal.service_id
    this.data.booking_date = this.dataModal.booking_date
    this.data.type_payment = this.dataModal.type_payment
    this.data.status_payment = this.dataModal.status_payment
    this.data.source = this.dataModal.source
    this.data.client = this.dataModal.client
    this.data.adults = this.dataModal.adults
    this.data.children = this.dataModal.children
    this.data.comment = this.dataModal.comment
    await this.fetchIntervals()
    await this.fetchQuota()
    await this.fetchServices()
  },
  methods: {
    updatePrice: function (value) {
      let interval = this.changeInterval(value)[0]
      console.log(interval)
      this.data._amount = interval.price
    },
    changeInterval: function (value) {
      return this.intervals.filter(item => {
        return item.slot.includes(value)
      })
    },
    updateCounter: function (variable, type) {
      if (type === 0) {
        if ((variable === 'adults' && this.data[variable] > 1) || (variable === 'children' && this.data[variable] >= 1)) {
          this.data[variable]--
        }
      } else if ((variable === 'children' && this.data[variable] < 4) || variable !== 'children') {
        this.data[variable]++
      }
    },
    update: function () {
      this.$store.dispatch('updateBooking', this.data).then((res) => {
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
    // Получение интервалов
    fetchIntervals: async function () {
      await this.$store.dispatch('getServiceFreeIntervals', {
        id: this.data.service_id,
        date: this.data.booking_date
      }).then((res) => {
        this.intervals = res.data.data
        this.data.interval = this.dataModal.interval
        this.updatePrice(this.data.interval)
      })
    },
    // Получение квот
    fetchQuota: async function () {
      await this.$store.dispatch('getQuota', this.data.service_id).then((res) => {
        if (res.data.result === 'ok') {
          this.dates = JSON.parse(res.data.data.dates)
        } else {
          this.$toast.error(res.data.message)
        }
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
    // Закрытие модального окна
    close: function () {
      this.$root.$emit('triggerModal', {name: 'editBookingModal'})
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
