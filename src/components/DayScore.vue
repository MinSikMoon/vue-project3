<template>
  <div class="score">
	  <button
	  v-for="btn in buttons"
	  :key="btn.score"
	  :class="{'active':btn.score === item.score}"
	  @click="updateScore(btn.score)"
	  >
		{{btn.label}}
	  </button>
  </div>
</template>

<script>
export default {
  name: 'DayScore',
  methods: {
    updateScore(score) {
		console.log(score);
      this.$emit('onUpdateScore', this.item, score);
    },
  },
  computed: {},
  data() {
    return {
      buttons: [
        {label: 'GOOD', score: 3},
        {label: 'SOSO', score: 2},
        {label: 'BAD', score: 1},
      ],
    };
  },
  props: ['item'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
