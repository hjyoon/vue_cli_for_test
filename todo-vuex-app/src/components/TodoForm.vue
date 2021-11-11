<template>
  <div>
    <input type="text" @key.enter="createTodo" v-model="todoTitle" />
    <button @click="createTodo">add</button>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data: function () {
    return {
      todoTitle: "",
    };
  },
  methods: {
    createTodo: function () {
      const todoItem = {
        title: this.todoTitle,
        isCompleted: false,
        date: new Date().getTime(),
      };
      if (todoItem.title.trim()) {
        this.$store.dispatch("createTodo", todoItem);
      }
      this.todoTitle = "";
    },
  },
};
</script>

<style></style>
