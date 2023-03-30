<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header-v2">
          <h1 class="title">Редактирование услуги</h1>
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
            <div class="col-md-4">
              <div class="form-group">
                <label>Название услуги</label>
                <input placeholder="Конный прокат" v-model="data.title"/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>Ограничение по возрасту от</label>
                <select v-model="data.age_limit">
                  <option v-for="index in 13" :key="index" :value="index-1">
                    {{ index - 1 }}+
                  </option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>Количество участников мин-мах</label>
                <div class="custom-select">
                  <input class="pointer" placeholder="Выберите количество" :readonly="true" :value="players"
                         @click.passive="triggerDropDown('players')"/>
                  <div class="dropdown" v-if="dropDown.players">
                    <div class="input-between">
                      <input type="number" v-model="data.player_from" :min="1"/>
                      <input type="number" v-model="data.player_to" :min="1" :max="1000"/>
                    </div>
                    <div class="action">
                      <input type="checkbox" @change="withOutChildren"/>
                      <label>Без детей</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-4">
              <div class="form-group">
                <label>Сезонность</label>
                <select class="custom-arrow" v-model="data.season">
                  <option value="0">Всесезонный</option>
                  <option value="1">Зимний</option>
                  <option value="2">Весенний</option>
                  <option value="3">Летний</option>
                  <option value="4">Осенний</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>Продолжительность в часах</label>
                <input placeholder="Продолжительность в часах" v-model="data.duration"/>
              </div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-12">
              <div class="form-group">
                <label>Город (Населённый пункт)</label>
                <multiselect id="ajax" v-model="selectedAddress" :options="towns"
                             placeholder="Поиск..."
                             label="description" track-by="description" :searchable="true"
                             :internal-search="false" @search-change="yandexGeo" :options-limit="300"
                             :limit="12" @input="formatAddress"></multiselect>
              </div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-4">
              <div class="form-group">
                <label>График работы</label>
                <multiselect v-model="data.schedule" :options="schedules" :searchable="false" :multiple="true"
                             placeholder="График работы"></multiselect>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>Часы работы</label>
                <div class="custom-select">
                  <input class="pointer" placeholder="Выберите часы" :readonly="true" :value="hours"
                         @click="triggerDropDown('hours')"/>
                  <div class="dropdown" v-if="dropDown.hours">
                    <div class="input-between">
                      <masked-input v-model="data.hour_from" mask="11:11"/>
                      <masked-input v-model="data.hour_to" mask="11:11"/>
                    </div>
                    <div class="action">
                      <input type="checkbox" @change="workAround"/>
                      <label>Работаем круглосуточно</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>Оснащение услуги</label>
                <multiselect v-model="data.additional_services" :options="services" :searchable="false" :multiple="true"
                             placeholder="Оснащение услуги"></multiselect>
              </div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-4">
              <div class="form-group">
                <label>Краткое описание - 200 символов</label>
                <textarea v-model="data.short_desc" rows="6" placeholder="Краткое описание"/>
              </div>
            </div>
            <div class="col-md-8">
              <div class="form-group">
                <label>Полное описание - 3000 символов</label>
                <textarea v-model="data.long_desc" rows="6" placeholder="Полное описание"/>
              </div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-4">
              <a class="btn btn-success center" @click="$refs.file.click()">Добавить фотографию</a>
              <input class="d-none" type="file" ref="file" accept=".jpeg, .jpg, .png" @change="uploadImage"/>
            </div>
          </div>
          <div class="preview-images mt-2">
            <div class="preview" v-for="(image, index) in showImages" :key="index">
              <div class="remove-image" @click="removeImage(image.id, index)">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_b_2284_14435)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z"
                          fill="#F5F5F5"/>
                  </g>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10.3125 4.81154C10.0763 4.5753 9.6958 4.57276 9.4627 4.80586L7.46118 6.80737L5.50417 4.85036C5.26793 4.61412 4.88487 4.61415 4.6486 4.85043C4.41232 5.08671 4.41228 5.46976 4.64852 5.706L6.60554 7.66301L4.68126 9.5873C4.44815 9.8204 4.4507 10.2009 4.68694 10.4371C4.92318 10.6734 5.30365 10.6759 5.53676 10.4428L7.46104 8.51851L9.4186 10.4761C9.65484 10.7123 10.0379 10.7123 10.2742 10.476C10.5105 10.2397 10.5105 9.85668 10.2742 9.62044L8.31668 7.66287L10.3182 5.66136C10.5513 5.42826 10.5488 5.04778 10.3125 4.81154Z"
                        fill="black"/>
                  <defs>
                    <filter id="filter0_b_2284_14435" x="-45.7896" y="-45.7896" width="106.579" height="106.579"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="22.8948"/>
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2284_14435"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2284_14435" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </div>
              <img :src="$store.getters.url + image.path">
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-select" @click="close">Отменить</button>
          <button class="btn btn-success" @click="edit">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import maskedInput from 'vue-masked-input'
import {mapGetters} from 'vuex'

export default {
  name: 'edit-services-modal',
  components: {maskedInput},
  data: function () {
    return {
      data: {
        id: 0,
        title: '',
        age_limit: 0,
        player_from: 1,
        player_to: 10,
        season: 0,
        duration: 2,
        address: '',
        lat: '',
        lon: '',
        schedule: [],
        hour_from: '09:00',
        hour_to: '22:00',
        additional_services: [],
        short_desc: '',
        long_desc: '',
        images: []
      },
      showImages: [],
      dropDown: {
        players: false,
        hours: false
      },
      schedules: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
      services: ['Wi-Fi'],
      towns: [],
      selectedAddress: []
    }
  },
  async mounted () {
    this.data.id = this.dataModal.id
    this.data.title = this.dataModal.title
    this.data.age_limit = this.dataModal.age_limit
    this.data.player_from = this.dataModal.player_from
    this.data.player_to = this.dataModal.player_to
    this.data.season = this.dataModal.season
    this.data.duration = this.dataModal.duration
    this.selectedAddress = {Point: {pos: this.dataModal.lon + ' ' + this.dataModal.lat}, description: this.dataModal.address}
    this.data.address = this.dataModal.address
    this.data.lat = this.dataModal.lat
    this.data.lon = this.dataModal.lon
    this.data.schedule = JSON.parse(this.dataModal.schedule).split(',')
    this.data.hour_from = this.dataModal.hour_from
    this.data.hour_to = this.dataModal.hour_to
    this.data.additional_services = JSON.parse(this.dataModal.additional_services).split(',')
    this.data.short_desc = this.dataModal.short_desc
    this.data.long_desc = this.dataModal.long_desc
    this.data.hour_to = this.dataModal.hour_to
    this.showImages = this.dataModal.serviceImages
  },
  computed: {
    ...mapGetters(['dataModal']),
    players () {
      return this.data.player_from + ' - ' + this.data.player_to
    },
    hours () {
      return this.data.hour_from + ' - ' + this.data.hour_to
    }
  },
  methods: {
    triggerDropDown: function (name) {
      this.dropDown[name] = !this.dropDown[name]
    },
    withOutChildren: function () {
      this.data.age_limit = 12
    },
    workAround: function () {
      this.data.hour_from = '00:00'
      this.data.hour_to = '23:59'
    },
    clearData: function () {
      this.data.title = ''
      this.data.age_limit = 0
      this.data.player_from = 1
      this.data.player_to = 10
      this.data.season = 0
      this.data.duration = 2
      this.data.address = ''
      this.data.lat = ''
      this.data.lon = ''
      this.data.schedule = []
      this.data.hour_from = '09:00'
      this.data.hour_to = '22:00'
      this.data.additional_services = []
      this.data.short_desc = ''
      this.data.long_desc = ''
    },
    yandexGeo: function (value) {
      if (value.length > 0) {
        this.$store.dispatch('searchAddress', value).then((res) => {
          this.towns = []
          res.data.response.GeoObjectCollection.featureMember.forEach((value) => {
            this.towns.push({
              Point: value.GeoObject.Point,
              description: value.GeoObject.description + ' ' + value.GeoObject.name
            })
          })
        })
      }
    },
    formatAddress: function () {
      if (this.selectedAddress) {
        let object = this.selectedAddress
        let coordinate = this.selectedAddress.Point.pos.split(' ')
        this.data.address = object.description
        this.data.lat = coordinate[1]
        this.data.lon = coordinate[0]
      }
    },
    uploadImage: function (e) {
      const file = e.target.files[0]
      this.image = file
      this.data.images.push(file)
      this.showImages.push(URL.createObjectURL(file))
    },
    // Отправка запросов на сервер
    edit: function () {
      this.$store.dispatch('editService', this.data).then((res) => {
        if (res.data.result === 'error') {
          this.$toast.error(res.data.message)
        } else {
          this.$root.$emit('linkFetchService')
          this.clearData()
          this.close()
          this.$toast.success(res.data.message)
        }
      })
    },
    removeImage: function (id, index) {
      this.$confirm('Вы уверены что хотите удалить фотографию?').then(() => {
        this.$store.dispatch('removeImage', {serviceId: this.data.id, imageId: id}).then((res) => {
          if (res.data.result === 'error') {
            this.$toast.error(res.data.message)
          } else {
            this.showImages.splice(index, 1)
            this.$toast.success(res.data.message)
          }
        })
      })
    },
    close: function () {
      this.$root.$emit('triggerModal', {name: 'editServiceModal'})
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  .modal-dialog {
    max-width: 910px !important;
  }

  .preview-images {
    display: flex;
    justify-content: flex-start;

    .preview {
      position: relative;

      img {
        width: 70px;
        height: 70px;
        border-radius: 5px;
      }

      &:not(:first-child) {
        margin-left: 10px;
      }

      .remove-image {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
      }
    }
  }
}

</style>
