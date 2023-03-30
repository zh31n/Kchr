<template>
  <div class="content-wrapper">
    <div class="reports">
      <div class="filter">
        <div class="col-md-2 padding">
          <div class="form-group">
            <label>Период с - по</label>
            <datepicker range v-model="data.dates" placeholder="Выберите даты" :format="'DD-MM-YYYY'"
                        :value-type="'YYYY-MM-DD'" :disabled-date="this.$core.disabledDate"></datepicker>
          </div>
        </div>
        <div class="btn-group">
          <a class="btn btn-success center w-200" @click="upload">Выгрузить в excel</a>
        </div>
      </div>
      <div class="booking-table">
        <table>
          <thead>
          <tr>
            <th scope="col">Номер</th>
            <th scope="col">Клиент</th>
            <th scope="col">Дата заказа</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Комиссия</th>
            <th scope="col">Способ оплаты</th>
            <th scope="col">Источник</th>
            <th scope="col">Статус</th>
            <th scope="col">Комментарий</th>
            <th scope="col">Количество<br>
              участников
            </th>
            <th scope="col">Услуга</th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in getBookingsTable.bookings" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ fullName[index] }}<br>
              {{ item.client.phone }}
            </td>
            <td>
              {{ $moment(item.booking_date).format('DD.MM.Y') }}
              <br>
              <div class="table-intervals">
                {{ item.interval }}
              </div>

            </td>
            <td>{{ item.amount }}</td>
            <td>0</td>
            <td>{{ typePayment[index] }}</td>
            <td>{{ source[index] }}</td>
            <td>{{ status[index] }}</td>
            <td>{{ item.comment }}
            </td>
            <td>Взрослые - {{ item.adults }}<br>
              Дети - {{ item.children }}
            </td>
            <td>{{ item.service.title }}</td>
            <td class="action" @click="action = action === index ? '' : index">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
                  stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                  d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z"
                  stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                  d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z"
                  stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="actions" v-if="action === index">
                <div class="item">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.6598 4.05229L16.0018 0.375521C15.76 0.135013 15.4329 0 15.0919 0C14.7509 0 14.4238 0.135013 14.1821 0.375521L1.21367 13.3252L0.0296304 18.4353C-0.0112152 18.6221 -0.00981494 18.8157 0.0337286 19.0019C0.0772721 19.188 0.161859 19.3622 0.28131 19.5115C0.400761 19.6608 0.552059 19.7815 0.724151 19.8649C0.896242 19.9482 1.08478 19.9921 1.27599 19.9933C1.36509 20.0022 1.45486 20.0022 1.54396 19.9933L6.71013 18.8092L19.6598 5.87197C19.9003 5.63025 20.0353 5.30312 20.0353 4.96213C20.0353 4.62114 19.9003 4.29402 19.6598 4.05229ZM6.08695 17.6875L1.24483 18.7033L2.34786 13.9546L12.0508 4.2891L15.7899 8.02818L6.08695 17.6875ZM16.6249 7.12457L12.8858 3.38548L15.0545 1.22928L18.7313 4.96836L16.6249 7.12457Z"
                      fill="#F66F4D"/>
                  </svg>
                  <span>Редактировать</span>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="pagination" v-if="getBookingsTable.count > 0">
        <div class="d-flex justify-content-between">
          <div class="view">
            Отображено 12 из {{ getBookingsTable.count }} записей
          </div>
          <sliding-pagination
            :current="this.data.page"
            :total="Math.ceil(getBookingsTable.count / 12)"
            @page-change="pageChangeHandler"
          ></sliding-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import SlidingPagination from 'vue-sliding-pagination'

export default {
  name: 'report',
  components: {SlidingPagination},
  data: function () {
    return {
      data: {
        page: 1,
        dates: []
      },
      action: ''
    }
  },
  async mounted () {
    this.fetchBookingsTable()
  },
  computed: {
    ...mapGetters(['getBookings', 'getBookingsTable']),
    fullName: function () {
      return this.getBookingsTable.bookings.map(function (item) {
        return item.client.surname + ' ' + item.client.name + ' ' + item.client.middle_name
      })
    },
    /* eslint-disable */
    status: function () {
      return this.getBookingsTable.bookings.map(function (item) {
        if (item.status == 1) {
          return 'Создан'
        } else if (item.status == 2) {
          return 'В процессе'
        } else if (item.status == 3) {
          return 'Завершен'
        } else if (item.status == 4) {
          return 'Отменён'
        }
      })
    },
    typePayment: function () {
      return this.getBookingsTable.bookings.map(function (item) {
        if (item.type_payment == 1) {
          return 'Наличные'
        } else {
          return 'Безналичные'
        }
      })
    },
    source: function () {
      return this.getBookingsTable.bookings.map(function (item) {
        if (item.source == 1) {
          return 'Звонок'
        } else if (item.source == 2) {
          return 'Alamat.ru'
        } else if (item.source == 3) {
          return 'Сайт'
        } else if (item.source == 4) {
          return 'Email'
        } else if (item.source == 5) {
          return 'Социальные сети'
        }
      })
    }
    /* eslint-enable */
  },
  methods: {
    pageChangeHandler (selectedPage) {
      this.data.page = selectedPage
      this.fetchBookingsTable()
    },
    upload: function () {
      this.$store.dispatch('uploadReport', this.data)
    },
    // Получить список заказов в таблицу с клиентами
    fetchBookingsTable: function () {
      this.$store.dispatch('getBookingsTable', this.data)
    }
  }
}
</script>
