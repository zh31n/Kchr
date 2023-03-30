<template>
  <div class="auth-wrapper">
    <div class="logo">
      <img src="../../assets/images/logo.png">
    </div>
    <div class="logo_text">
      Министерство туризма и <br> курортов КЧР
    </div>
    <form class="auth">
      <div class="form-group">
        <label>Фамилия</label>
        <input
          type="text"
          placeholder="Фамилия"
          v-model="data.surname"
          autocomplete="off">
      </div>
      <div class="form-group">
        <label>Имя</label>
        <input
          type="text"
          placeholder="Имя"
          v-model="data.name"
          autocomplete="off">
      </div>
      <div class="form-group">
        <label>Отчество</label>
        <input
          type="text"
          placeholder="Отчество"
          v-model="data.middle_name"
          autocomplete="off">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          v-model="data.email"
          autocomplete="off">
      </div>
      <div class="form-group">
        <label>Пароль</label>
        <input
          type="password"
          placeholder="Пароль"
          v-model="data.password"
          autocomplete="off">
      </div>
      <button class="btn btn-success" type="submit" @click.prevent="register">Зарегистрироваться</button>
      <div class="d-flex justify-content-between">
        <router-link class="link" to="/login">Авторизация</router-link>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'register',
  data: function () {
    return {
      data: {
        email: '',
        password: '',
        name: '',
        surname: '',
        middle_name: ''
      }
    }
  },
  async mounted () {
  },
  computed: {},
  methods: {
    register: function () {
      this.$store.dispatch('register', this.data)
    }
  }
}
</script>
<style>
.logo{
  margin: 15px auto;
  width: 60px;
  position: relative;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.logo_text{
  margin: 0 auto;
  width: 315px;
  height: 100px;
  font-size: 23px;
  position: relative;
  text-align: center;
  font-weight: bold;
}
img{
  margin: auto;
  position: relative;
  width: 60px;
  height: 60px;
}

</style>
