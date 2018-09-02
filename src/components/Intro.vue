<template>
  <div class="intro">
    <div class="intro-inner">
      <h1>Daily<br> Report</h1>
      <router-link 
        class="button"
        :to="todayUrl">
        Start
      </router-link>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'Intro',
  methods: {},
  computed: {
    todayUrl(){
      let todayUrlStr = moment(new Date()).format('YYYY-MM-DD');
      //return '/day/' + todayUrl;
      return `/day/${todayUrlStr}`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
