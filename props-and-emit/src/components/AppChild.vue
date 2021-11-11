<template>
  <div>
    <h2>Child</h2>
    <input type="text" @input="onChildInputChange" />
    <p>appData : {{ appData }}</p>
    <p>parentData : {{ parentData }}</p>
    <p>childData : {{ childData }}</p>
  </div>
</template>

<script>
export default {
  name: "AppChild",
  components: {},
  props: {
    appData: String,
    parentData: String,
    childData: String,
  },
  methods: {
    onChildInputChange: function (event) {
      // console.log(event.target.value)
      this.$emit("child-input-change", event.target.value);
    },
  },
};
</script>

<style></style>
