<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!--  3. 보여주기 -->
    <About
      my-message="This is props data"
      :parent-data="parentData"
      @child-input-change="parentGetChange"
    >
    </About>
  </div>
</template>

<script>
// 1.불러오기
import About from "./components/About.vue";

export default {
  name: "App",
  // 2. 등록하기
  data: function () {
    return {
      parentData: "This is parent Data by v-bind",
    };
  },
  components: {
    About,
  },
  methods: {
    parentGetChange: function (inputData) {
      console.log(`About으로 부터 ${inputData}를 받음 `);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
