<template>
  <div class="content-wrapper">
    <div class="settings">
      <div class="settings-card">
        <h3 class="settings-card-title">
          Информация об администраторе
        </h3>
        <div class="settings-inputs-raw">
          <div class="settings-input-wrapper">
            <input
              class="settings-input"
              placeholder="Фамилия"
              v-model="data.surname"
            />
          </div>
          <div class="settings-input-wrapper">
            <input
              class="settings-input"
              placeholder="Имя"
              v-model="data.name"
            />
          </div>
          <div class="settings-input-wrapper">
            <input
              class="settings-input"
              placeholder="Отчество"
              v-model="data.middle_name"
            />
          </div>
        </div>
        <div class="settings-inputs-raw">
          <div class="settings-input-wrapper">
            <input
              class="settings-input"
              placeholder="Email"
              v-model="data.email"
            />
          </div>
          <div class="settings-input-wrapper">
            <masked-input
              class="settings-input"
              mask="\+\7-(111)-111-11-11"
              placeholder="Номер телефона"
              placeholder-char="*"
              v-model="data.phone"
            />
          </div>
        </div>
        <label class="checkbox-action">
          <input type="checkbox" v-model="data.notifications" true-value="1" false-value="0"/>
          <span class="custom-input"/>
          <span class="label-text">
            Получать уведомление о заказах
          </span>
        </label>
      </div>
      <div class="settings-card">
        <h3 class="settings-card-title">
          Информация о компании
        </h3>
        <div class="settings-inputs-raw">
          <div class="settings-input-wrapper">
            <select class="custom-select"
                    v-model="data.type"
                    placeholder="Выберите тип"
            >
              <option value="1">Самозанятый</option>
              <option value="2">ИП</option>
            </select>
          </div>
          <div class="settings-input-wrapper">
            <masked-input
              class="settings-input"
              mask="1111 1111 1111"
              placeholder="ИНН"
              v-model="data.inn"
            />
          </div>
          <div class="settings-input-wrapper">
            <input
              class="settings-input"
              placeholder="ФИО генерального директора"
              v-model="data.ceo"
            />
          </div>
          <div class="settings-input-wrapper">
            <input
              class="settings-input"
              placeholder="Email бухгалтерии"
              v-model="data.bookkeeper_email"
            />
          </div>
        </div>
        <div class="settings-inputs-raw">
          <div class="settings-input-wrapper settings-input-wrapper--long">
            <label>Фактический адрес</label>
            <multiselect id="ajax" v-model="data.act_address" :options="towns"
                         placeholder="Фактический адрес"
                         label="description" track-by="description" :searchable="true"
                         :internal-search="false" @search-change="yandexGeo" :options-limit="300"
                         :limit="12"></multiselect>
          </div>
        </div>
        <div class="settings-inputs-raw">
          <div class="settings-input-wrapper settings-input-wrapper--long">
            <label>Юридический адрес</label>
            <multiselect id="ajax" v-model="data.leg_address" :options="towns"
                         placeholder="Юридический адрес"
                         label="description" track-by="description" :searchable="true"
                         :internal-search="false" @search-change="yandexGeo" :options-limit="300"
                         :limit="12"></multiselect>
          </div>
        </div>
      </div>
      <div class="settings-card">
        <h3 class="settings-card-title">
          Банковские данные
        </h3>
        <div class="settings-inputs-raw">
          <div class="settings-input-wrapper">
            <masked-input
              class="settings-input"
              placeholder="БИК"
              mask="111111111"
              v-model="data.bik"
            />
          </div>
          <div class="settings-input-wrapper">
            <masked-input
              class="settings-input"
              placeholder="Расчётный счёт"
              mask="11111111111111111111"
              v-model="data.payment_account"
            />
          </div>
        </div>
        <div class="settings-inputs-raw">
          <div class="settings-input-wrapper">
            <masked-input
              class="settings-input"
              placeholder="Корреспондентский счет"
              mask="11111111111111111111"
              v-model="data.correspondent_account"
            />
          </div>
          <div class="settings-input-wrapper">
            <input
              class="settings-input"
              placeholder="Банк"
              v-model="data.bank"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-success w-200 mt-3" @click="update">Сохранить</button>
    </div>
  </div>
</template>

<script>
import MaskedInput from 'vue-masked-input'

export default {
  name: 'settings',
  components: {MaskedInput},
  data: function () {
    return {
      data: {
        surname: '',
        name: '',
        middle_name: '',
        email: '',
        phone: '',
        notifications: 0,
        type: 1,
        inn: '',
        ceo: '',
        bookkeeper_email: '',
        act_address: {
          description: '',
          lat: '',
          lon: ''
        },
        leg_address: {
          description: '',
          lat: '',
          lon: ''
        },
        bik: '',
        payment_account: '',
        correspondent_account: '',
        bank: ''
      },
      towns: []
    }
  },
  async mounted () {
    this.fetchSettings()
  },
  methods: {
    yandexGeo: function (value) {
      if (value.length > 0) {
        this.$store.dispatch('searchAddress', value).then((res) => {
          this.towns = []
          res.data.response.GeoObjectCollection.featureMember.forEach((value) => {
            this.towns.push({
              lat: value.GeoObject.Point.pos.split(' ')[1],
              lon: value.GeoObject.Point.pos.split(' ')[0],
              description: value.GeoObject.description + ' ' + value.GeoObject.name
            })
          })
        })
      }
    },
    fetchSettings: function () {
      this.$store.dispatch('getSettings').then((res) => {
        this.data.surname = res.data.data.surname
        this.data.name = res.data.data.name
        this.data.middle_name = res.data.data.middle_name
        this.data.email = res.data.data.email
        this.data.phone = res.data.data.phone
        this.data.notifications = res.data.data.notifications
        this.data.type = res.data.data.type
        this.data.inn = res.data.data.inn
        this.data.ceo = res.data.data.ceo
        this.data.bookkeeper_email = res.data.data.bookkeeper_email
        this.data.act_address.description = res.data.data.actual_address
        this.data.act_address.lat = res.data.data.actual_address_lat
        this.data.act_address.lon = res.data.data.actual_address_lon
        this.data.leg_address.description = res.data.data.legal_address
        this.data.leg_address.lat = res.data.data.legal_address_lat
        this.data.leg_address.lon = res.data.data.legal_address_lon
        this.data.bik = res.data.data.bik
        this.data.payment_account = res.data.data.payment_account
        this.data.correspondent_account = res.data.data.correspondent_account
        this.data.bank = res.data.data.bank
      })
    },
    update: function () {
      this.$store.dispatch('update', this.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.settings-card {
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  border-radius: 24px;
  padding: 30px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
}

.settings-card-title {
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 30px;
  font-family: 'DIN Pro', serif;
}

.settings-input-wrapper {
  margin-bottom: 20px;
  width: 100%;
}

.settings-inputs-raw {
  &:last-child {
    margin-bottom: -20px;
  }
}

.settings-input,
.custom-select {
  width: 100%;
}

.checkbox-action {
  display: flex;
  align-items: center;

  .custom-input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    border: 2px solid #C1C1C1;
    border-radius: 3px;
  }

  input {
    display: none;

    &:checked + .custom-input::before {
      content: "✓";
      font-size: 20px;
    }
  }

  .label-text {
    display: block;
    font-size: 16px;
    line-height: 24px;
    margin-left: 7px;
    user-select: none;
  }
}

@media (min-width: 1280px) {
  .settings-inputs-raw {
    display: flex;
    margin-left: -10px;
    margin-right: -10px;
  }
  .settings-input-wrapper {
    width: 20%;
    padding-left: 10px;
    padding-right: 10px;

    &--long {
      width: 60%;
    }
  }
}
</style>
