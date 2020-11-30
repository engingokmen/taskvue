<template>
  <div>
    <h2>{{$t('FormTitle')}}</h2>
    <form action="/example" method="post" @submit="checkForm" class="content form contact">
      <div class="form-item">
        <label for="name">{{$t('İsim')}}:</label>
        <input type="text" name="name" id="name" v-model="name" required>
      </div>
      <div class="form-item">
        <label for="email">{{$t('Eposta')}}: </label>
        <input class="validated-field" type="email" name="email" id="email" v-model="email" required>
      </div>
      <div class="form-item">
        <label for="phone">{{$t('Telefon')}}: </label>
        <input class="validated-field" type="tel" name="phone" id="phone" v-model="phone" placeholder="5321231212" pattern="[0-9]{10}" required>
      </div>
      <div class="form-item">
        <label for="country">{{$t('Ülke')}}: </label>
        <vSelect v-model="country" :reduce="country => country.code" :options="countryList" />
      </div>
      <div class="form-item">
        <label for="text">{{$t('Açıklama')}}: </label>
        <textarea type="text" name="text" id="text" rows="5" v-model="text" required></textarea>
      </div>
      <div class="submit">
        <input type="submit" :value="$t('Gönder')">
      </div>
    </form>
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

const countryList = [
	{ id: "TR", name: "Turkey" },
	{ id: "US", name: "United States of America" },
	{ id: "GB", name: "United Kingdom" },
	{ id: "DE", name: "Germany" },
	{ id: "SE", name: "Sweden" },
	{ id: "KE", name: "Kenya" },
	{ id: "BR", name: "Brazil" },
	{ id: "ZW", name: "Zimbabwe" }
]
export default {
  components:{
    vSelect
  },
  data() {
    return {
      name:'',
      email:'',
      phone:null,
      country:'',
      text:'',
      countryList:countryList.map(x=>{return {code:x.id, label:x.name}})
    }
  },
  mounted() {
    EventBus.$on('userInfo', payload => {
      this.userInfoHandler(payload);
    });
  },
  beforeDestroy() {
    EventBus.$off('userInfo', this.userInfoHandler);
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();
      const payload = {
        name:this.name,
        email:this.email,
        phonenumber:this.phone,
        country_code:this.country,
        text:this.text
      }
      
      const request = new Request('/example.com', {method: 'POST', body: JSON.stringify(payload)});
      fetch(request)
        .then(response => console.log(response))
      console.log("payload", payload);
    },
    userInfoHandler(payload) {
      this.name = payload.name;
      this.email = payload.email;
    },
  }
}
</script>

<style scoped>
  .contact {
    padding-left: 6rem;
  }
  @media screen and (max-width: 600px) {
    .contact {
      padding-left: 0;
    }
  }
</style>