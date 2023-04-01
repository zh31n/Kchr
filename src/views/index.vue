<template>
  <div class="content-wrapper">
    <div class="index">
      <div class="statistics-revert">
        <div class="col-md-3">
          <div class="item">
            <div class="icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.4764 2.97363C22.4255 2.97482 22.3747 2.97851 22.3241 2.98488C21.9555 3.02981 21.6167 3.20979 21.3732 3.49008C21.1297 3.77036 20.9988 4.13114 21.0057 4.50238V31.4993C21.0077 31.8043 21.1026 32.1014 21.2778 32.3511C21.453 32.6007 21.7001 32.7911 21.9862 32.8968C22.2723 33.0024 22.5838 33.0185 22.8792 32.9426C23.1746 32.8667 23.4398 32.7025 23.6395 32.472L32.6425 21.975C32.7704 21.8251 32.8676 21.6515 32.9284 21.4641C32.9893 21.2766 33.0126 21.0792 32.9971 20.8827C32.9816 20.6863 32.9276 20.4948 32.8381 20.3192C32.7486 20.1437 32.6254 19.9876 32.4755 19.8597C32.3257 19.7318 32.1521 19.6346 31.9647 19.5737C31.7773 19.5129 31.5797 19.4895 31.3833 19.505C31.1869 19.5205 30.9954 19.5747 30.8199 19.6642C30.6443 19.7537 30.4882 19.8768 30.3602 20.0267L23.994 27.4446V4.50238C23.9976 4.3017 23.9608 4.10224 23.8859 3.91603C23.811 3.72983 23.6995 3.56061 23.5579 3.41828C23.4164 3.27594 23.2478 3.16346 23.062 3.08748C22.8763 3.01149 22.6771 2.97352 22.4764 2.97588L22.4764 2.97363ZM13.453 3.00754C13.2441 3.01337 13.0388 3.06288 12.8501 3.1527C12.6614 3.24252 12.4935 3.37072 12.3573 3.52918L3.3661 14.0262C3.22021 14.1724 3.10608 14.3471 3.03084 14.5394C2.9556 14.7317 2.92088 14.9375 2.92885 15.1439C2.93682 15.3502 2.98731 15.5528 3.07716 15.7387C3.167 15.9246 3.29427 16.0899 3.45099 16.2244C3.60771 16.3588 3.79051 16.4596 3.98794 16.5202C4.18537 16.5808 4.39318 16.5999 4.59835 16.5764C4.80352 16.553 5.00163 16.4873 5.18029 16.3837C5.35895 16.2801 5.51429 16.1409 5.6366 15.9745L12.0028 8.55642V31.499C11.9984 31.6988 12.0339 31.8974 12.1073 32.0833C12.1807 32.2691 12.2905 32.4385 12.4302 32.5814C12.5699 32.7242 12.7368 32.8376 12.921 32.9151C13.1052 32.9926 13.303 33.0326 13.5028 33.0326C13.7026 33.0326 13.9005 32.9926 14.0847 32.9151C14.2689 32.8376 14.4357 32.7242 14.5754 32.5814C14.7152 32.4385 14.8249 32.2691 14.8983 32.0833C14.9717 31.8974 15.0072 31.6988 15.0028 31.499V4.50186C15.0021 4.30111 14.9611 4.10256 14.8823 3.91794C14.8035 3.73332 14.6884 3.56626 14.5439 3.42693C14.3993 3.2876 14.2283 3.17871 14.041 3.10668C13.8536 3.03465 13.6536 3.00107 13.453 3.00772V3.00754Z"
                  fill="#F66F4D" />
              </svg>
            </div>
            <div class="infos">
              <div class="value">{{ parseFloat(info.total).toFixed(0) }} %</div>
              <div class="type">Загруженность</div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="item">
            <div class="icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34.5 28.5C34.5 28.8978 34.342 29.2793 34.0607 29.5606C33.7794 29.8419 33.3978 30 33 30H15C14.6022 30 14.2206 29.8419 13.9393 29.5606C13.658 29.2793 13.5 28.8978 13.5 28.5C13.5 26.113 14.4482 23.8238 16.136 22.136C17.8239 20.4482 20.1131 19.5 22.5 19.5H25.5C27.8869 19.5 30.1761 20.4482 31.864 22.136C33.5518 23.8238 34.5 26.113 34.5 28.5ZM24 6C22.8133 6 21.6533 6.35189 20.6666 7.01118C19.6799 7.67047 18.9108 8.60754 18.4567 9.7039C18.0026 10.8003 17.8838 12.0066 18.1153 13.1705C18.3468 14.3344 18.9182 15.4035 19.7574 16.2426C20.5965 17.0817 21.6656 17.6532 22.8295 17.8847C23.9933 18.1162 25.1997 17.9974 26.2961 17.5433C27.3925 17.0891 28.3295 16.3201 28.9888 15.3334C29.6481 14.3467 30 13.1867 30 12C30 10.4087 29.3679 8.88257 28.2426 7.75736C27.1174 6.63214 25.5913 6 24 6ZM10.5 6C9.31331 6 8.15327 6.35189 7.16658 7.01118C6.17988 7.67047 5.41085 8.60754 4.95672 9.7039C4.5026 10.8003 4.38378 12.0066 4.61529 13.1705C4.8468 14.3344 5.41824 15.4035 6.25736 16.2426C7.09647 17.0817 8.16557 17.6532 9.32946 17.8847C10.4933 18.1162 11.6997 17.9974 12.7961 17.5433C13.8925 17.0891 14.8295 16.3201 15.4888 15.3334C16.1481 14.3467 16.5 13.1867 16.5 12C16.5 10.4087 15.8679 8.88257 14.7426 7.75736C13.6174 6.63214 12.0913 6 10.5 6ZM10.5 28.5C10.4978 26.9244 10.8082 25.364 11.4133 23.9093C12.0183 22.4545 12.9061 21.1342 14.025 20.025C13.1093 19.6793 12.1388 19.5014 11.16 19.5H9.84C7.62931 19.504 5.5103 20.3839 3.94711 21.9471C2.38391 23.5103 1.50397 25.6293 1.5 27.84V28.5C1.5 28.8978 1.65804 29.2793 1.93934 29.5606C2.22064 29.8419 2.60218 30 3 30H10.77C10.5954 29.519 10.5041 29.0117 10.5 28.5Z"
                  fill="#F66F4D" />
              </svg>
            </div>
            <div class="infos">
              <div class="value">{{ info.active }}22</div>
              <div class="type">Общее кол-во туристов</div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="item">
            <div class="icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24.0734 4C19.6988 4 16.1485 7.54844 16.1485 11.9244C16.1485 13.1447 16.4477 14.2895 16.9391 15.3213L4.51648 27.7488C3.82784 28.4374 3.82784 29.5504 4.51648 30.239L5.76163 31.4841C6.09101 31.8152 6.53822 32 7.00678 32C7.47341 32 7.92084 31.8152 8.25193 31.4841L11.0204 28.7158L13.551 31.2516C13.8821 31.581 14.3292 31.7658 14.7962 31.7658C15.2648 31.7658 15.7119 31.5827 16.0413 31.2516L16.6649 30.6284C17.3535 29.9398 17.3535 28.8269 16.6649 28.1382L14.1306 25.6024L20.6763 19.0566C21.7118 19.5497 22.853 19.8489 24.0751 19.8489C28.453 19.8489 32 16.3004 32 11.9244C32 7.54844 28.4533 4 24.0734 4ZM24.0734 16.3269C21.6448 16.3269 19.6706 14.3509 19.6706 11.9244C19.6706 9.49796 21.6448 7.52197 24.0734 7.52197C26.502 7.52197 28.4761 9.49796 28.4761 11.9244C28.4761 14.3509 26.502 16.3269 24.0734 16.3269Z"
                  fill="#F66F4D" />
              </svg>
            </div>
            <div class="infos">
              <div class="value">{{ parseFloat(info.average).toFixed(0) }}</div>
              <div class="type">Койко-место</div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <datepicker range v-model="data.dates" placeholder="Фильтрация" :format="'DD-MM-YYYY'"
            :value-type="'YYYY-MM-DD'" @change="fetchInfo"></datepicker>
        </div>
      </div>
      <div class="graphics_wrapper">
        <div class="graphics">
          <div class="">
            <div class="graphics-card">
              <div class="title">Турпоток</div>
              <div class="graphics-state">
                <div class="item">
                  <span class="name">ВТРК “Архыз”</span>
                  <span class="value">{{ info.active }}</span>
                </div>
                <div class="item red">
                  <span class="name">ВТРК “Домбай”</span>
                  <span class="value">{{ info.BookingCancelled }}</span>
                </div>
                <div class="item green">
                  <span class="name">Медовые водопады</span>
                  <span class="value">{{ info.BookingCancelled }}</span>
                </div>
              </div>
              <div class="graphics">
                <line-chart :chart-data="bookingChart" :height="200"></line-chart>
              </div>
            </div>
          </div>
        </div>
        <div class="statistic-lines">
          <div class="statistic-line">
            <div class="sl_i">
              <div class="sl_h">
                <div class="">I Квартал</div>
                <div class="">II Квартал</div>
                <div class="">III Квартал</div>
                <div class="">IV квартал</div>
              </div>
              <div class="sl_line">
                <div class="">2020</div>
                <div class="sl_line_i">
                  <div class="">
                    740
                    <span class="green">+73%</span>
                  </div>
                  <div class="">
                    0
                    <span class="red">-99%</span>
                  </div>
                  <div class="">
                    410
                    <span class="green">+18%</span>
                  </div>
                  <div class="">
                    360
                    <span class="green">+33%</span>
                  </div>
                </div>
              </div>
              <div class="sl_line">
                <div class="">2021</div>
                <div class="sl_line_i">
                  <div class="">
                    650
                    <span class="red">-19%</span>
                  </div>
                  <div class="">
                    411
                    <span class="green">411%</span>
                  </div>
                  <div class="">
                    510
                    <span class="green">+21%</span>
                  </div>
                  <div class="">
                    430
                    <span class="green">+42%</span>
                  </div>
                </div>
              </div>
              <div class="sl_line">
                <div class="">2022</div>
                <div class="sl_line_i">
                  <div class="">
                    740
                    <span class="green">+73%</span>
                  </div>
                  <div class="">
                    0
                    <span class="red">-99%</span>
                  </div>
                  <div class="">
                    410
                    <span class="green">+18%</span>
                  </div>
                  <div class="">
                    360
                    <span class="green">+33%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="statistic-line">
            <div class="sl_i">
              <div class="sl_h">
                <div class="">2013</div>
                <div class="">2014</div>
                <div class="">2015</div>
                <div class="">2016</div>
                <div class="">2017</div>
                <div class="">2018</div>
                <div class="">2019</div>
                <div class="">2020</div>
                <div class="">2023</div>
              </div>
              <div class="sl_line">
                <div class="">Медовые водопады</div>
                <div class="sl_line_i">
                  <div class="">
                    740
                    <sup class="green">+73%</sup>
                  </div>
                  <div class="">
                    0
                    <sup class="red">-99%</sup>
                  </div>
                  <div class="">
                    410
                    <sup class="green">+18%</sup>
                  </div>
                  <div class="">
                    360
                    <sup class="green">+33%</sup>
                  </div>
                  <div class="">
                    360
                    <sup class="green">+33%</sup>
                  </div>
                  <div class="">
                    360
                    <sup class="green">+33%</sup>
                  </div>
                  <div class="">
                    360
                    <sup class="green">+33%</sup>
                  </div>
                  <div class="">
                    360
                    <sup class="green">+33%</sup>
                  </div>
                  <div class="">
                    1140
                    <sup class="green">+176%</sup>
                  </div>
                </div>
              </div>
              <div class="sl_line">
                <div class="">ВТРК “Архыз”</div>
                <div class="sl_line_i">
                  <div class="">
                    740
                    <sup class="green">+73%</sup>
                  </div>
                  <div class="">
                    0
                    <sup class="red">-99%</sup>
                  </div>
                  <div class="">
                    410
                    <sup class="green">+18%</sup>
                  </div>
                  <div class="">
                    360
                    <sup class="green">+33%</sup>
                  </div>
                  <div class="">
                    360
                    <sup class="green">+33%</sup>
                  </div>
                  <div class="">
                    360
                    <sup class="green">+33%</sup>
                  </div>
                  <div class="">
                    360
                    <sup class="green">+33%</sup>
                  </div>
                  <div class="">
                    360
                    <sup class="green">+33%</sup>
                  </div>
                  <div class="">
                    1140
                    <sup class="green">+176%</sup>
                  </div>
                </div>
              </div>
              <div class="sl_line">
                <div class="">ВТРК “Домбай”</div>
                <div class="sl_line_i">
                  <div class="">
                    740
                    <sup class="green">+73%</sup>
                  </div>
                  <div class="">
                    0
                    <sup class="red">-99%</sup>
                  </div>
                  <div class="">
                    410
                    <sup class="green">+18%</sup>
                  </div>
                  <div class="">
                    360
                    <sup class="green">+33%</sup>
                  </div>
                  <div class="">
                    360
                    <sup class="green">+33%</sup>
                  </div>
                  <div class="">
                    360
                    <sup class="green">+33%</sup>
                  </div>
                  <div class="">
                    360
                    <sup class="green">+33%</sup>
                  </div>
                  <div class="">
                    360
                    <sup class="green">+33%</sup>
                  </div>
                  <div class="">
                    1140
                    <sup class="green">+176%</sup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="graphics_wrapper">
        <div class="graphics">
          <div class="">
            <div class="graphics-card">
              <div class="title">Турпоток</div>
              <div class="graphics-state">
                <div class="item">
                  <span class="name">ВТРК “Архыз”</span>
                  <span class="value">{{ info.active }}</span>
                </div>
                <div class="item red">
                  <span class="name">ВТРК “Домбай”</span>
                  <span class="value">{{ info.BookingCancelled }}</span>
                </div>
                <div class="item green">
                  <span class="name">Медовые водопады</span>
                  <span class="value">{{ info.BookingCancelled }}</span>
                </div>
              </div>
              <div class="graphics">
                <line-chart :chart-data="bookingChart" :height="200"></line-chart>
              </div>
            </div>
          </div>
        </div>
        <div class="graphics">
          <div class="">
            <div class="graphics-card">
              <div class="title">Койко-место</div>
              <div class="graphics-state">
                <div class="item">
                  <span class="name">ВТРК “Архыз”</span>
                  <span class="value">{{ info.active }}</span>
                </div>
                <div class="item red">
                  <span class="name">ВТРК “Домбай”</span>
                  <span class="value">{{ info.BookingCancelled }}</span>
                </div>
                <div class="item green">
                  <span class="name">Медовые водопады</span>
                  <span class="value">{{ info.BookingCancelled }}</span>
                </div>
              </div>
              <div class="graphics">
                <line-chart :chart-data="bookingChart" :height="200"></line-chart>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="small_graphics">
          <div class="gr_item">
            <div class="gr_title">Турпоток, %</div>
            <div class="graphic_i">
              <img src="../assets/images/piechart.svg" alt="">
            </div>
            <div class="gr_stat">
              <div class="gr_stat_line">
                <span class="green">Медовые водопады</span>
                <span>66 тыс., чел.</span>
              </div>
              <div class="gr_stat_line">
                <span class="blue">ВТРК “Архыз”</span>
                <span>129 тыс., чел</span>
              </div>
              <div class="gr_stat_line">
                <span class="red">ВТРК “Домбай”</span>
                <span>50 тыс., чел</span>
              </div>
            </div>
          </div>
          <div class="gr_item">
            <div class="gr_title">Койко-место, %</div>
            <div class="graphic_i">
              <img src="../assets/images/piechart.svg" alt="">
            </div>
            <div class="gr_stat">
              <div class="gr_stat_line">
                <span class="green">Медовые водопады</span>
                <span>315 мест</span>
              </div>
              <div class="gr_stat_line">
                <span class="blue">ВТРК “Архыз”</span>
                <span>12425 мест</span>
              </div>
              <div class="gr_stat_line">
                <span class="red">ВТРК “Домбай”</span>
                <span>1357 мест</span>
              </div>
            </div>
          </div>
          <div class="gr_item">
            <div class="gr_title">Загруженность, %</div>
            <div class="graphic_i">
              <img src="../assets/images/piechart.svg" alt="">
            </div>
            <div class="gr_stat">
              <div class="gr_stat_line">
                <span class="green">Медовые водопады</span>
                <span>73%</span>
              </div>
              <div class="gr_stat_line">
                <span class="blue">ВТРК “Архыз”</span>
                <span>87%</span>
              </div>
              <div class="gr_stat_line">
                <span class="red">ВТРК “Домбай”</span>
                <span>63%</span>
              </div>
            </div>
          </div>
          <div class="gr_item">
            <div class="gr_title">Скай-пасы, %</div>
            <div class="graphic_i">
              <img src="../assets/images/piechart.svg" alt="">
            </div>
            <div class="gr_stat">
              <div class="gr_stat_line">
                <span class="blue">ВТРК “Архыз”</span>
                <span>67%</span>
              </div>
              <div class="gr_stat_line">
                <span class="red">ВТРК “Домбай”</span>
                <span>33%</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

import LineChart from '../components/Chart/line-chart'
import Doughnut from '../components/Chart/doughnut'

export default {
  name: 'index',
  components: { Doughnut, LineChart },
  data: function () {
    return {
      data: {
        dateFrom: '',
        dateTo: '',
        dates: []
      },
      info: [],
      bookingData: [],
      revenueData: [],
      serviceData: [],
      sourceData: [],
      bookingChart: [],
      revenueChart: [],
      serviceChart: [],
      sourceChart: []
    }
  },
  mounted: async function () {
    this.data.dates.push(this.$moment().format('Y-MM-DD'))
    this.data.dates.push(this.$moment().add(1, 'd').format('Y-MM-DD'))
    await this.fetchInfo()
  },
  computed: {},
  methods: {
    chartBooking: function () {
      this.bookingChart = {
        labels: this.bookingData.map(c => c.date),
        datasets: [
          {
            label: 'Бронь',
            data: this.bookingData.map(c => c.active),
            backgroundColor: [
              'rgba(0,124,186, 0.2)',
              'rgba(0,124,186, 0.2)',
              'rgba(0,124,186, 0.2)',
              'rgba(0,124,186, 0.2)',
              'rgba(0,124,186, 0.2)',
              'rgba(0,124,186, 0.2)'
            ],
            borderColor: [
              'rgba(0,124,186, 1)',
              'rgba(0,124,186, 1)',
              'rgba(0,124,186, 1)',
              'rgba(0,124,186, 1)',
              'rgba(0,124,186, 1)',
              'rgba(0,124,186, 1)'
            ],
            borderWidth: 1
          },
          {
            label: 'Отмены',
            data: this.bookingData.map(c => c.cancelled),
            backgroundColor: [
              'rgba(255,0,0, 0.2)',
              'rgba(255,0,0, 0.2)',
              'rgba(255,0,0, 0.2)',
              'rgba(255,0,0, 0.2)',
              'rgba(255,0,0, 0.2)',
              'rgba(255,0,0, 0.2)'
            ],
            borderColor: [
              'rgba(255,0,0, 1)',
              'rgba(255,0,0, 1)',
              'rgba(255,0,0, 1)',
              'rgba(255,0,0, 1)',
              'rgba(255,0,0, 1)',
              'rgba(255,0,0, 1)'
            ],
            borderWidth: 1
          }
        ]
      }
    },
    chartRevenue: function () {
      this.revenueChart = {
        labels: this.revenueData.map(c => c.date),
        datasets: [
          {
            label: 'Бронь',
            data: this.revenueData.map(c => c.total),
            backgroundColor: [
              'rgba(0,124,186, 0.2)',
              'rgba(0,124,186, 0.2)',
              'rgba(0,124,186, 0.2)',
              'rgba(0,124,186, 0.2)',
              'rgba(0,124,186, 0.2)',
              'rgba(0,124,186, 0.2)'
            ],
            borderColor: [
              'rgba(0,124,186, 1)',
              'rgba(0,124,186, 1)',
              'rgba(0,124,186, 1)',
              'rgba(0,124,186, 1)',
              'rgba(0,124,186, 1)',
              'rgba(0,124,186, 1)'
            ],
            borderWidth: 1
          },
          {
            label: 'Отмена',
            data: this.revenueData.map(c => c.cancelled),
            backgroundColor: [
              'rgba(255,0,0, 0.2)',
              'rgba(255,0,0, 0.2)',
              'rgba(255,0,0, 0.2)',
              'rgba(255,0,0, 0.2)',
              'rgba(255,0,0, 0.2)',
              'rgba(255,0,0, 0.2)'
            ],
            borderColor: [
              'rgba(255,0,0, 1)',
              'rgba(255,0,0, 1)',
              'rgba(255,0,0, 1)',
              'rgba(255,0,0, 1)',
              'rgba(255,0,0, 1)',
              'rgba(255,0,0, 1)'
            ],
            borderWidth: 1
          }
        ]
      }
    },
    chartService: function () {
      this.serviceChart = {
        labels: this.serviceData.labels,
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: this.serviceData.data
          }
        ]
      }
    },
    chartSource: function () {
      this.sourceChart = {
        labels: this.sourceData.labels,
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: this.sourceData.data
          }
        ]
      }
    },
    fetchInfo: function () {
      this.$store.dispatch('getInfo', this.data).then((res) => {
        this.info = res.data.data.info
        this.bookingData = res.data.data.booking_chart
        this.revenueData = res.data.data.revenue_chart
        this.serviceData = res.data.data.service_chart
        this.sourceData = res.data.data.source_chart
        this.chartBooking()
        this.chartRevenue()
        this.chartService()
        this.chartSource()
      })
    }
  }
}
</script>
