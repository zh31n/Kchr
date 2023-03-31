<template>
  <div class="content-wrapper">
    <div class="filters_cl">
      <div class="filters_i">
        <div class="btn_add">Показать фильтр</div>
        <div class="filter_input">
          <input type="text" placeholder="Наименование отеля или id">
          <div class="search_btn">
            <img src="../assets/images/search.svg" alt="">
          </div>
        </div>
        <div class="btn_add">Применить</div>
      </div>
      <div class="btn_add">
        <img src="../assets/images/plus.svg" alt="">
        Добавить
      </div>
    </div>
    <div class="hotel_cards">
      <div class="hc_item">
        <div class="hc_date">
          <div class="pos">#1</div>
          <div class="status">создан</div>
          <div class="date">12.10.2022</div>
        </div>
        <div class="hc_inform">
          <img class="h_img" src="../assets/images/hotel_img.svg" alt="">
          <div class="hc_inform_i">
            <div class="h_name">
              Royal Отель
              <div class="stars">
                <img src="../assets/images/star.svg" alt="">
                <img src="../assets/images/star.svg" alt="">
                <img src="../assets/images/star.svg" alt="">
                <img src="../assets/images/star.svg" alt="">
              </div>
            </div>
            <div class="h_loc">Карачаево-Черкесская республика, Архыз</div>
            <div class="h_characters">
              <div class="f_bl">
                <div class="">
                  <input type="checkbox">
                  Действующий
                </div>
                <div class="">Тип: отель</div>
                <div class="">Стилистика: Вагон-домик</div>
              </div>
              <div class="s_bl">
                <div class="">Номер телефона: 8-993-338-37-76</div>
                <div class="">Количество категорий: 12</div>
                <div class="">Количество койко-мест: 321</div>
              </div>
            </div>
          </div>
        </div>
        <div class="change_btn">
          <img src="../assets/images/pencil.svg" alt="">
          Редактировать
        </div>
      </div>
      <div class="hc_item">
        <div class="hc_date">
          <div class="pos">#1</div>
          <div class="status">создан</div>
          <div class="date">12.10.2022</div>
        </div>
        <div class="hc_inform">
          <img class="h_img" src="../assets/images/hotel_img.svg" alt="">
          <div class="hc_inform_i">
            <div class="h_name">
              Royal Отель
              <div class="stars">
                <img src="../assets/images/star.svg" alt="">
                <img src="../assets/images/star.svg" alt="">
                <img src="../assets/images/star.svg" alt="">
                <img src="../assets/images/star.svg" alt="">
              </div>
            </div>
            <div class="h_loc">Карачаево-Черкесская республика, Архыз</div>
            <div class="h_characters">
              <div class="f_bl">
                <div class="">
                  <input type="checkbox">
                  Действующий
                </div>
                <div class="" style="opacity: 0;">Тип: отель</div>
                <div class="">Рейтинг: 4.7 (36 отзывов)</div>
              </div>
              <div class="s_bl">
                <div class="">Номер телефона: 8-993-338-37-76</div>
                <div class="">Количество категорий: 12</div>
                <div class="" style="opacity: 0;">Количество койко-мест: 321</div>
              </div>
            </div>
          </div>
        </div>
        <div class="change_btn">
          <img src="../assets/images/pencil.svg" alt="">
          Редактировать
        </div>
      </div>
      <div class="hc_item">
        <div class="hc_date">
          <div class="pos">#1</div>
          <div class="status">создан</div>
          <div class="date">12.10.2022</div>
        </div>
        <div class="hc_inform">
          <img class="h_img" src="../assets/images/hotel_img.svg" alt="">
          <div class="hc_inform_i">
            <div class="h_name">
              Royal Отель
              <div class="stars">
                <img src="../assets/images/star.svg" alt="">
                <img src="../assets/images/star.svg" alt="">
                <img src="../assets/images/star.svg" alt="">
                <img src="../assets/images/star.svg" alt="">
              </div>
            </div>
            <div class="h_loc">Карачаево-Черкесская республика, Архыз</div>
            <div class="h_characters">
              <div class="f_bl">
                <div class="">
                  <input type="checkbox">
                  Действующий
                </div>
                <div class="" style="opacity: 0;">Тип: отель</div>
                <div class="">Рейтинг: 4.7 (36 отзывов)</div>
              </div>
              <div class="s_bl">
                <div class="">Номер телефона: 8-993-338-37-76</div>
                <div class="">Количество категорий: 12</div>
                <div class="" style="opacity: 0;">Количество койко-мест: 321</div>
              </div>
            </div>
          </div>
        </div>
        <div class="change_btn">
          <img src="../assets/images/pencil.svg" alt="">
          Редактировать
        </div>
      </div>
      <div class="pagenation_bar">
        <span>&#60;</span>
        <span>1</span>
        ..
        <span>6</span>
        <span>7</span>
        <span>8</span>
        ..
        <span>135</span>
        <span>&#62;</span>
      </div>
    </div>
    <!-- <table>
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ФИО</th>
        <th scope="col">Дата заказа</th>
        <th scope="col">Средний чек</th>
        <th scope="col">Контакты</th>
        <th scope="col">Комментарий</th>
        <th scope="col">Количество заказов</th>
        <th scope="col">Почта</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in getClients" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ fullName[index] }}</td>
        <td>
          <template v-if="item.clientsAdditionals.length > 0">
            <span class="date" v-if="item.clientsAdditionals.length > 0">
              {{ $moment(item.clientsAdditionals[0].last_order_date).format('DD.MM.Y')}}
            </span>
          </template>
        </td>
        <td>
          <template v-if="item.clientsAdditionals.length > 0">
            {{ item.clientsAdditionals[0].total_order_average_check }}
          </template>
        </td>
        <td>{{ item.phone }}</td>
        <td>{{ item.comment }}</td>
        <td>
          <template
            v-if="item.clientsAdditionals.length > 0"
          >
            {{ item.clientsAdditionals[0].total_order_count }}
          </template>
        </td>
        <td>{{ item.email }}</td>
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
            <div class="item" @click="openEditModal(item)">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.6598 4.05229L16.0018 0.375521C15.76 0.135013 15.4329 0 15.0919 0C14.7509 0 14.4238 0.135013 14.1821 0.375521L1.21367 13.3252L0.0296304 18.4353C-0.0112152 18.6221 -0.00981494 18.8157 0.0337286 19.0019C0.0772721 19.188 0.161859 19.3622 0.28131 19.5115C0.400761 19.6608 0.552059 19.7815 0.724151 19.8649C0.896242 19.9482 1.08478 19.9921 1.27599 19.9933C1.36509 20.0022 1.45486 20.0022 1.54396 19.9933L6.71013 18.8092L19.6598 5.87197C19.9003 5.63025 20.0353 5.30312 20.0353 4.96213C20.0353 4.62114 19.9003 4.29402 19.6598 4.05229ZM6.08695 17.6875L1.24483 18.7033L2.34786 13.9546L12.0508 4.2891L15.7899 8.02818L6.08695 17.6875ZM16.6249 7.12457L12.8858 3.38548L15.0545 1.22928L18.7313 4.96836L16.6249 7.12457Z"
                  fill="#F66F4D"/>
              </svg>
              <span>Редактировать</span>
            </div>
            <div class="item">
              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.5 3.21429V3.57143H11.0714V3.21429C11.0714 2.74068 10.8833 2.28648 10.5484 1.9516C10.2135 1.61671 9.75932 1.42857 9.28571 1.42857C8.81211 1.42857 8.35791 1.61671 8.02302 1.9516C7.68814 2.28648 7.5 2.74068 7.5 3.21429ZM6.07143 3.57143V3.21429C6.07143 2.3618 6.41008 1.54424 7.01287 0.941442C7.61567 0.338647 8.43323 0 9.28571 0C10.1382 0 10.9558 0.338647 11.5586 0.941442C12.1614 1.54424 12.5 2.3618 12.5 3.21429V3.57143H17.8571C18.0466 3.57143 18.2283 3.64668 18.3622 3.78064C18.4962 3.91459 18.5714 4.09627 18.5714 4.28571C18.5714 4.47515 18.4962 4.65684 18.3622 4.79079C18.2283 4.92475 18.0466 5 17.8571 5H16.78L15.4286 16.8343C15.3289 17.7058 14.912 18.5102 14.2572 19.0941C13.6025 19.678 12.7558 20.0004 11.8786 20H6.69286C5.81562 20.0004 4.96891 19.678 4.31418 19.0941C3.65945 18.5102 3.24251 17.7058 3.14286 16.8343L1.79143 5H0.714286C0.524845 5 0.343164 4.92475 0.209209 4.79079C0.0752549 4.65684 0 4.47515 0 4.28571C0 4.09627 0.0752549 3.91459 0.209209 3.78064C0.343164 3.64668 0.524845 3.57143 0.714286 3.57143H6.07143ZM4.56286 16.6714C4.62249 17.1942 4.8724 17.6768 5.26494 18.0272C5.65749 18.3776 6.16524 18.5713 6.69143 18.5714H11.8793C12.4055 18.5713 12.9132 18.3776 13.3058 18.0272C13.6983 17.6768 13.9482 17.1942 14.0079 16.6714L15.3429 5H3.22929L4.56286 16.6714ZM7.14286 7.5C7.3323 7.5 7.51398 7.57526 7.64793 7.70921C7.78189 7.84316 7.85714 8.02485 7.85714 8.21429V15.3571C7.85714 15.5466 7.78189 15.7283 7.64793 15.8622C7.51398 15.9962 7.3323 16.0714 7.14286 16.0714C6.95342 16.0714 6.77174 15.9962 6.63778 15.8622C6.50383 15.7283 6.42857 15.5466 6.42857 15.3571V8.21429C6.42857 8.02485 6.50383 7.84316 6.63778 7.70921C6.77174 7.57526 6.95342 7.5 7.14286 7.5ZM12.1429 8.21429C12.1429 8.02485 12.0676 7.84316 11.9336 7.70921C11.7997 7.57526 11.618 7.5 11.4286 7.5C11.2391 7.5 11.0574 7.57526 10.9235 7.70921C10.7895 7.84316 10.7143 8.02485 10.7143 8.21429V15.3571C10.7143 15.5466 10.7895 15.7283 10.9235 15.8622C11.0574 15.9962 11.2391 16.0714 11.4286 16.0714C11.618 16.0714 11.7997 15.9962 11.9336 15.8622C12.0676 15.7283 12.1429 15.5466 12.1429 15.3571V8.21429Z"
                  fill="#F66F4D"/>
              </svg>
              <span>Удалить</span>
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'services',
  data: function () {
    return {
      data: {
        limit: 12,
        search: ''
      },
      action: ''
    }
  },
  async mounted() {
    await this.fetchClients()
    this.$root.$on('linkFetchClients', () => {
      this.fetchClients()
    })
  },
  computed: {
    ...mapGetters(['getClients']),
    fullName: function () {
      return this.getClients.map(function (item) {
        return item.surname + ' ' + item.name + ' ' + item.middle_name
      })
    }
  },
  methods: {
    openEditModal: function (item) {
      this.$root.$emit('triggerModal', { name: 'editClientModal', data: item })
    },
    // Получение списка клиентов
    fetchClients: async function () {
      await this.$store.dispatch('getClients', this.data)
    }
  }
}
</script>
