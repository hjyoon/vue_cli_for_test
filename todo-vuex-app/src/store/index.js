import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    todos: [],
  },
  mutations: {
    CREATE_TODO: function (state, todoItem) {
      state.todos.push(todoItem);
    },
    DELETE_TODO: function (state, todoItem) {
      // 1. todoItem이 첫번째로 만나는 요소의 index값을 리턴
      const index = state.todos.indexOf(todoItem);
      // 2. 해당 index 1개만 삭제하고 나머지 요소를 토대로 새로운 배열 생성
      state.todos.splice(index, 1);
    },
    UPDATE_TODO_STATUS: function (state, todoItem) {
      state.todos = state.todos.map((todo) => {
        // 1. 넘어온 todoItem과 현재 있는 state의 todos의 요소와 일치하면
        if (todo === todoItem) {
          return {
            ...todo,
            isCompleted: !todoItem.isCompleted,
          };
        } else {
          return todo;
        }
      });
    },
  },
  actions: {
    createTodo: function ({ commit }, todoItem) {
      commit("CREATE_TODO", todoItem);
    },
    deleteTodo: function ({ commit }, todoItem) {
      commit("DELETE_TODO", todoItem);
    },
    updateTodoStatus: function ({ commit }, todoItem) {
      commit("UPDATE_TODO_STATUS", todoItem);
    },
  },
  getters: {
    completedTodosCount: function (state) {
      return state.todos.filter((todo) => {
        return todo.isCompleted === true;
      }).length;
    },
    uncompletedTodosCount: function (state) {
      return state.todos.filter((todo) => {
        return todo.isCompleted === false;
      }).length;
    },
    allTodosCount: function (state) {
      return state.todos.length;
    },
  },
  modules: {},
});
