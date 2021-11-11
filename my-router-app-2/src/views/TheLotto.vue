<template>
  <div>
    <h2>로또 번호 추첨</h2>
    <button @click="getLottoNums">로또 추첨</button>
    <!-- <p>{{ selectedLottoNums }}</p> -->
    <p>{{ sortedLottoNums }}</p>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "TheLotto",
  data: function () {
    return {
      selectedLottoNums: [],
      sortedLottoNums: [],
    };
  },
  methods: {
    getLottoNums: function () {
      const numbers = _.range(1, 46);
      this.selectedLottoNums = _.sampleSize(numbers, 6);
      this.sortedLottoNums = _.sortBy(this.selectedLottoNums);
    },
  },
};
</script>

<style></style>
