<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header-v2">
          <h1 class="title">Редактирование пользователя</h1>
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
          <div class="d-flex justify-content-between">
            <div class="client-card">
              <div class="image">
                <img src="@/assets/images/user/logo.png">
              </div>
              <div class="info">
                <div class="name">{{ fullName }}</div>
                <div class="id">#{{ this.data.id }}</div>
              </div>
            </div>
            <div class="client-action">
              <a :href="'https://wa.me/' + data.phone.replace(/[^\d;]/g, '')" target="_blank" class="btn btn-success center">Отправить сообщение</a>
              <a class="btn btn-select center" @click="close">Отменить</a>
              <a class="btn btn-success center" @click="edit">Сохранить</a>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <form class="data">
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Фамилия</label>
                        <input placeholder="Фамилия" v-model="data.surname"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Имя</label>
                        <input placeholder="Имя" v-model="data.name"/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Отчество</label>
                        <input placeholder="Отчество" v-model="data.middle_name"/>
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
                        <input placeholder="Email" v-model="data.email"/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Ранг</label>
                        <select class="custom-arrow" v-model="data.rank">
                          <option value="1">Обычный</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Тип клиента</label>
                        <select class="custom-arrow" v-model="data.type">
                          <option value="0">Физическое лицо</option>
                          <option value="1">Юридическое лицо</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Комментарий к клиенту</label>
                        <textarea placeholder="Комментарий к пользователю" v-model="data.comment" rows="5"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="statistics">
                    <div class="title">Статистика</div>
                    <div class="statistics-item">
                      <div class="name">Зарегистрирован</div>
                      <div class="value">{{ $moment(data.date).format('HH:MM DD.MM.Y') }}</div>
                    </div>
                    <div class="statistics-item">
                      <div class="name">Заказы</div>
                      <div class="value link" v-if="data.clientsAdditionals.length > 0">
                        {{ data.clientsAdditionals[0].total_order_count }} шт
                      </div>
                    </div>
                    <div class="statistics-item">
                      <div class="name">Общая сумма заказов:</div>
                      <div class="value" v-if="data.clientsAdditionals.length > 0">
                        {{ parseFloat(data.clientsAdditionals[0].total_order_amount).toFixed(2) }} рублей
                      </div>
                    </div>
                    <div class="statistics-item">
                      <div class="name">Средний чек:</div>
                      <div class="value" v-if="data.clientsAdditionals.length > 0">
                        {{ parseFloat(data.clientsAdditionals[0].total_order_average_check).toFixed(2) }} рублей
                      </div>
                    </div>
                    <div class="statistics-item">
                      <div class="name">Дата последнего заказа:</div>
                      <div class="value" v-if="data.clientsAdditionals.length > 0">
                        {{ $moment(data.clientsAdditionals[0].last_order_date).format('HH:MM DD.MM.Y') }}
                      </div>
                    </div>
                    <div class="statistics-item">
                      <div class="name">Популярая услуга:</div>
                      <div class="value">Конный прокат</div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="table">
            <div class="title-group">
              <div class="title">История покупок</div>
              <select class="custom-arrow w-200" v-model="sorting">
                <option value="1">Сортировать по дате</option>
              </select>
            </div>
            <table>
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Услуга</th>
                <th scope="col">Участники</th>
                <th scope="col">Стоимость</th>
                <th scope="col">Комментарий</th>
                <th scope="col">Дата</th>
                <th scope="col"></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(booking, index) in data.bookings" :key="index">
                <td>{{ booking.id }}</td>
                <td>{{ booking.service.title }}</td>
                <td>Взрослые - {{ booking.adults }} <br> Дети - {{ booking.children }}</td>
                <td>{{ booking.amount }}</td>
                <td>{{ booking.comment }}</td>
                <td>{{ booking.date }} <br>
                  <time v-for="(interval, index2) in intervals[index]" :key="index2">{{ interval }}</time>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import maskedInput from 'vue-masked-input'
import {mapGetters} from 'vuex'

export default {
  name: 'edit-client-modal',
  components: {maskedInput},
  data: function () {
    return {
      data: {
        id: 0,
        surname: '',
        name: '',
        middle_name: '',
        citizenship: 1,
        phone: '',
        email: '',
        rank: 1,
        type: 0,
        comment: '',
        date: '',
        clientsAdditionals: [],
        bookings: []
      },
      sorting: 1
    }
  },
  async mounted () {
    this.data.id = this.dataModal.id
    this.data.surname = this.dataModal.surname
    this.data.name = this.dataModal.name
    this.data.middle_name = this.dataModal.middle_name
    this.data.citizenship = this.dataModal.citizenship
    this.data.phone = this.dataModal.phone
    this.data.email = this.dataModal.email
    this.data.rank = this.dataModal.rank
    this.data.type = this.dataModal.type
    this.data.comment = this.dataModal.comment
    this.data.date = this.dataModal.date
    this.data.clientsAdditionals = this.dataModal.clientsAdditionals
    this.data.bookings = this.dataModal.bookings
  },
  computed: {
    ...mapGetters(['dataModal']),
    fullName: function () {
      return this.data.surname + ' ' + this.data.name + ' ' + this.data.middle_name
    },
    intervals: function () {
      return this.dataModal.bookings.map(function (item) {
        return JSON.parse(item.intervals)
      })
    }
  },
  methods: {
    edit: function () {
      this.$store.dispatch('editClient', this.data).then((res) => {
        if (res.data.result === 'error') {
          this.$toast.error(res.data.message)
        } else {
          this.$root.$emit('linkFetchClients')
          this.close()
          this.$toast.success(res.data.message)
        }
      })
    },
    close: function () {
      this.$root.$emit('triggerModal', {name: 'editClientModal'})
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  .modal-dialog {
    max-width: 1300px !important;
  }

  .client-card {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    max-width: 465px;
    background: #FFFFFF;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
    border-radius: 24px;
    padding: 30px 30px;

    .image img {
      width: 90px;
      height: 90px;
    }

    .info {
      margin: 10px 0 0 30px;
      font-family: 'DIN Pro', serif;

      .name {
        font-weight: 500;
        font-size: 21px;
        color: #2D3134;
      }

      .id {
        margin-top: 10px;
        font-weight: 400;
        font-size: 16px;
        color: #717579;
      }
    }
  }

  .client-action {
    display: flex;
    justify-content: flex-start;

    .btn {
      width: 220px;
      height: 40px;
      padding: 15px 25px;

      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }

  .data {
    width: 100%;
    margin-top: 20px;

    .statistics {
      background: #FFFFFF;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
      border-radius: 5px;
      padding: 20px 20px;
      font-family: 'DIN Pro', serif;

      .title {
        font-weight: 700;
        font-size: 24px;
        color: #2D3134;
      }

      .statistics-item {
        display: flex;
        justify-content: flex-start;
        margin-top: 15px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #000000;

        .name {
          width: 250px;
        }
      }
    }
  }

  .table {
    width: 100%;

    .title-group {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        font-family: 'DIN Pro', serif;
        font-weight: 500;
        font-size: 24px;
        color: #2D3134;
      }
    }
  }
}
</style>
