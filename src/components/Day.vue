<template>
  <div class="day">
    <h1 class="day-title">
      {{$route.params.date}}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Day',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
