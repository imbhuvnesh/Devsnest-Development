new Vue({
  el: "#app",
  data: {
    title: "ToDo's",
    todos: [],
  },
  methods: {
    addTodo(event) {
      const text = event.target.value;
      this.todos.push({ text, done: false, id: Date.now() });
      event.target.value = "";
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
});
