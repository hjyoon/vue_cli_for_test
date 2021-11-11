<template>
  <div>
    <h2>점심메뉴 추천</h2>
    <button @click="pickOneLunchMenu">메뉴추천</button>
    <p>오늘의 점심 메뉴 : {{ selectedLuchMenu }}</p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'TheLunch',
  data: function () {
    return{
      lunch: ['감자탕', '카레', '마라탕', '찜닭', '소고기'],
      selectedLuchMenu: '',
    }
  },
  methods:{
    pickOneLunchMenu: function () {
      this.selectedLuchMenu = _.sample(this.lunch)
    }
  }
}
</script>

<style>

</style>