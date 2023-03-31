<template>
  <div class="content-wrapper">
    <div class="reports">
      <div class="inputs_data">
        <div class="inputs_data_i">
          <div class="input_data">
            <label for="types">Тип данных</label>
            <select name="types">
              <option default value="">Турпоток</option>
            </select>
          </div>
          <div class="input_data">
            <label for="date">Год</label>
            <input class="inp_year" type="text" name="date" placeholder="01.01.2022 - 01.01.2023">
          </div>
          <div class="button_data_check">Отобразить</div>
        </div>
        <div class="button_data_add">Выгрузить в excel</div>
      </div>
      <div class="table_r">
        <div class="tr_h">
          <div style="width: 130px;">Номер</div>
          <div style="width: 155px;">
            Клиент
            <img src="../assets/images/ic_sort.svg" alt="">
          </div>
          <div style="width: 125px;">
            Дата заказа
            <img src="../assets/images/ic_sort.svg" alt="">
          </div>
          <div style="width: 115px;">
            Стоимость
            <img src="../assets/images/ic_sort.svg" alt="">
          </div>
          <div style="width: 86px;">Комиссия</div>
          <div style="width: 135px;">Способ оплаты</div>
          <div style="width: 108px;">
            Источник
            <img src="../assets/images/ic_sort.svg" alt="">
          </div>
          <div style="width: 115px;">
            Услуга
            <img src="../assets/images/ic_sort.svg" alt="">
          </div>
          <div style="width: 60px;">Гостей</div>
        </div>
        <div class="tr_i">
          <div class="tr_line">
            <div style="width: 130px;">
              20220202-19181-119270491
            </div>
            <div style="width: 155px;">
              Семён Семёныч +7(996)-418-37-76
            </div>
            <div style="width: 125px;">
              24.09.2022<br>
              12:00-13:00
            </div>
            <div style="width: 115px;">
              12000
            </div>
            <div style="width: 86px;">3564</div>
            <div style="width: 135px;">Безналичные</div>
            <div style="width: 108px;">
              Источник
            </div>
            <div style="width: 115px;">
              Конный прокат
            </div>
            <div style="width: 60px;">2</div>
            <img src="../assets/images/more-vertical.svg" alt="">
          </div>
          <div class="tr_line">
            <div style="width: 130px;">
              20220202-19181-119270491
            </div>
            <div style="width: 155px;">
              Семён Семёныч +7(996)-418-37-76
            </div>
            <div style="width: 125px;">
              24.09.2022<br>
              12:00-13:00
            </div>
            <div style="width: 115px;">
              12000
            </div>
            <div style="width: 86px;">3564</div>
            <div style="width: 135px;">Безналичные</div>
            <div style="width: 108px;">
              Источник
            </div>
            <div style="width: 115px;">
              Конный прокат
            </div>
            <div style="width: 60px;">2</div>
            <img src="../assets/images/more-vertical.svg" alt="">
          </div>
          <div class="tr_line">
            <div style="width: 130px;">
              20220202-19181-119270491
            </div>
            <div style="width: 155px;">
              Семён Семёныч +7(996)-418-37-76
            </div>
            <div style="width: 125px;">
              24.09.2022<br>
              12:00-13:00
            </div>
            <div style="width: 115px;">
              12000
            </div>
            <div style="width: 86px;">3564</div>
            <div style="width: 135px;">Безналичные</div>
            <div style="width: 108px;">
              Источник
            </div>
            <div style="width: 115px;">
              Конный прокат
            </div>
            <div style="width: 60px;">2</div>
            <img src="../assets/images/more-vertical.svg" alt="">
          </div>
          <div class="tr_line">
            <div style="width: 130px;">
              20220202-19181-119270491
            </div>
            <div style="width: 155px;">
              Семён Семёныч +7(996)-418-37-76
            </div>
            <div style="width: 125px;">
              24.09.2022<br>
              12:00-13:00
            </div>
            <div style="width: 115px;">
              12000
            </div>
            <div style="width: 86px;">3564</div>
            <div style="width: 135px;">Безналичные</div>
            <div style="width: 108px;">
              Источник
            </div>
            <div style="width: 115px;">
              Конный прокат
            </div>
            <div style="width: 60px;">2</div>
            <img src="../assets/images/more-vertical.svg" alt="">
          </div>
          <div class="tr_line">
            <div style="width: 130px;">
              20220202-19181-119270491
            </div>
            <div style="width: 155px;">
              Семён Семёныч +7(996)-418-37-76
            </div>
            <div style="width: 125px;">
              24.09.2022<br>
              12:00-13:00
            </div>
            <div style="width: 115px;">
              12000
            </div>
            <div style="width: 86px;">3564</div>
            <div style="width: 135px;">Безналичные</div>
            <div style="width: 108px;">
              Источник
            </div>
            <div style="width: 115px;">
              Конный прокат
            </div>
            <div style="width: 60px;">2</div>
            <img src="../assets/images/more-vertical.svg" alt="">
          </div>
          <div class="tr_line">
            <div style="width: 130px;">
              20220202-19181-119270491
            </div>
            <div style="width: 155px;">
              Семён Семёныч +7(996)-418-37-76
            </div>
            <div style="width: 125px;">
              24.09.2022<br>
              12:00-13:00
            </div>
            <div style="width: 115px;">
              12000
            </div>
            <div style="width: 86px;">3564</div>
            <div style="width: 135px;">Безналичные</div>
            <div style="width: 108px;">
              Источник
            </div>
            <div style="width: 115px;">
              Конный прокат
            </div>
            <div style="width: 60px;">2</div>
            <img src="../assets/images/more-vertical.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SlidingPagination from 'vue-sliding-pagination'

export default {
  name: 'report',
  components: { SlidingPagination },
  data: function () {
    return {
      data: {
        page: 1,
        dates: []
      },
      action: ''
    }
  },
  async mounted() {
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
    pageChangeHandler(selectedPage) {
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
