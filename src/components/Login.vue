<template>
  <div class="centered locale">
   <button id="show-modal" @click="showModal = true">{{$t('Giriş')}}</button>
    <Modal v-if="showModal" @close="login">
      <h3 slot="header">{{$t('Giriş')}}</h3>
      <form slot="body" action="/login" method="post" @submit="login" class="content form">
        <div class="form-item">
          <label for="name">{{$t('İsim')}}:</label>
          <input type="text" name="name" id="name" v-model="name" required>
        </div>
        <div class="form-item">
          <label for="email">{{$t('Eposta')}}: </label>
          <input class="validated-field" type="email" name="email" id="email" v-model="email" required>
        </div>
        <div class="form-item">
          <label for="password">{{$t('Şifre')}}: </label>
          <input class="validated-field" type="password" name="password" id="password" v-model="password" required>
        </div>
      </form>
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal.vue';
import { EventBus } from '../event-bus.js';
export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal:false,
      name:'',
      email:'',
      password:''
    }
  },
  methods: {
    login: function () {
      this.showModal = false;
      const userInfo = {
        name:this.name,
        email:this.email,
        password:this.password,
      }
      EventBus.$emit('userInfo', userInfo);
    }
  }
}
</script>

