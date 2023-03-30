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
      <button class="btn btn-success" type="submit" @click.prevent="login">Войти</button>
      <div class="d-flex justify-content-between">
        <router-link class="link" to="/register">Регистрация</router-link>
        <a class="link" @click="recoveryPassword">Забыли пароль?</a>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'login',
  data: function () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  async mounted () {
  },
  computed: {},
  methods: {
    login: function () {
      this.$store.dispatch('login', this.data)
    },
    recoveryPassword: function () {
      this.$store.dispatch('recoveryPassword', this.data)
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
