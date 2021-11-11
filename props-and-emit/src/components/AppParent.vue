<template>
  <div>
    <h2>Parent</h2>
    <input type="text" @input="onParentInputChange" />
    <p>appData : {{ appData }}</p>
    <p>parentData : {{ parentData }}</p>
    <p>childData : {{ childData }}</p>
    <app-child
      :app-data="appData"
      :parent-data="parentData"
      :child-data="childData"
      @child-input-change="onChildInputChnage"
    ></app-child>
  </div>
</template>

<script>
import AppChild from "@/components/AppChild";

export default {
  name: "AppParent",
  components: { AppChild },
  props: {
    appData: String,
    parentData: String,
    childData: String,
  },
  methods: {
    onParentInputChange: function (event) {
      // console.log(event.target.value)
      this.$emit("parent-input-change", event.target.value);
    },
    onChildInputChnage: function (childInputData) {
      // console.log(childInputData)
      this.$emit("child-input-change", childInputData);
    },
  },
};
</script>

<style></style>
