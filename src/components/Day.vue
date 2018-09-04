<template>
  <div class="day">
    <h1 class="day-title">
      {{$route.params.date}}
    </h1>

  <ul class="day-list">
    <li
      v-for="item in items"
      :key="item.id"
      class="day-list-item">
      <div class="time">
        <h2>
          {{item.id}}
        </h2>
      </div>

      <div class="action">
        <input type="text" v-model="item.action"
        placeholder="한 일을 작성해주세요.">
      </div>
      <day-score
      @onUpdateScore="onUpdateScore"
      :item="item">
      </day-score>
      <div class="note">
        <textarea v-model="item.note"
        placeholder="노트를 작성해 주세요.">
        </textarea>
      </div>
    </li>
  </ul>
  </div>
</template>

<script>
import DayScore from './DayScore'
export default {
  name: 'Day',
  props: {
   
  },
  components: {
    DayScore
  },
  methods: {
    onUpdateScore(item, score){
      item.score = score;
    }
  },
  data() {
    return {
      items: [
        {
          action: '',
          id: '2018-01-01-08-10',
          note: '',
          open: false,
          score: undefined,
        },
        {
          action: '',
          id: '2018-01-01-09-11',
          note: '',
          open: false,
          score: undefined,
        },
        {
          action: '',
          id: '2018-01-01-12-11',
          note: '',
          open: false,
          score: undefined,
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
