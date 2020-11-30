<template>
  <div id="translation-select" class="centered locale">
    <select v-model="locale" @change="selectChange">
      <option value="tr">Türkçe</option>
      <option value="en">English</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'translation-select',
  data () {
    return {
      locale: 'tr'
    }
  },
  methods: {
    selectChange(e) {
      this.$i18n.locale = e.target.value;
    }
  }
}
</script>

<style scoped>
  .locale {
    min-width:120px;
    padding:20px;
  }
</style>