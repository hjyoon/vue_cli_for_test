<template>
  <div id="app">
    <h2>App</h2>
    <input type="text" v-model="appData" />
    <p>appData : {{ appData }}</p>
    <p>parentData : {{ parentData }}</p>
    <p>childData : {{ childData }}</p>
    <app-parent
      :app-data="appData"
      :parent-data="parentData"
      :child-data="childData"
      @parent-input-change="onParentInputChange"
      @child-input-change="onChildInputChange"
    ></app-parent>
  </div>
</template>

<script>
import AppParent from "@/components/AppParent.vue";

export default {
  name: "App",
  components: { AppParent },
  data: function () {
    return {
      appData: null,
      parentData: null,
      childData: null,
    };
  },
  methods: {
    onParentInputChange: function (parentInputData) {
      this.parentData = parentInputData;
    },
    onChildInputChange: function (childInputData) {
      this.childData = childInputData;
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
