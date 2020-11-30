<template>
  <header>
    <div class="logo centered">
      <i class="far fa-snowflake"></i>
    </div>
    <Link />
    <div class="companyName centered">
      <router-link class="link" to="/">{{$route.name}}</router-link>
    </div>
    <nav class="nav centered">
      <router-link class="link" to="/about">{{$t('Nasıl yapıyoruz?')}}</router-link>
      <router-link class="link" to="/contact">{{$t('İletişime Geç')}}</router-link>
    </nav>
      <Login v-if="userName === null" />
      <div class="centered locale" v-else>{{userName}}</div>
      <div v-if="userName !== null" class="centered">
        <select class="select" name="pets" id="pet-select" @change="logout">
          <option value="email">{{email}}</option>
          <option value="logout">{{$t('Çıkış')}}</option>
        </select>
      </div>
    <LocalePicker />
  </header>
</template>

<script>
import LocalePicker from './LocalePicker.vue';
import Login from './Login.vue';
import { EventBus } from '../event-bus.js';

export default {
  components:{
    LocalePicker,
    Login
  },
  data() {
    return {
      pageName:'',
      userName:null,
      email:null
    }
  },
  mounted() {
    EventBus.$on('userInfo', payload => {
      this.userInfoHandler(payload);
    });
  },
  methods: {
    userInfoHandler(payload) {
      this.userName = payload.name;
      this.email = payload.email;
    },
    logout(e) {
      if(e.target.value === "logout") {
        const userInfo = {
          name:null,
          email:null,
          password:null,
        }
        EventBus.$emit('userInfo', userInfo);
      }
    },
  }
}
</script>

<style scoped>
  .logo {
    width:70px;
    font-size: 2.6em;
  }

  .companyName {
    width:100px;
  }

  .nav {
    flex-grow: 1;
  }

  .select {
    height: 20px;
    width:80px;
  }

</style>