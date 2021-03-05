const app = Vue.createApp({
  data() {
    return {
      todos: [
        {id: 1, value: 'Da fare', done: false},
        {id: 2, value: 'Fatto', done: true},
      ],
      todo: '',
      counter: 2
    };
  },
  methods: {
    addTodo(evt) {
      evt.preventDefault();
      if (this.todo) {
        this.counter++;
        const newTodo = {id: this.counter, value: this.todo, done: false};
        this.todo = '';
        this.todos.push(newTodo);
      }
    }, 
    removeItem(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    itemId: (id) => {
      return id ? `item-${id}` : '';
    },
  },
  computed: {
    undoneTodos() {
      const count = this.todos.filter(t => !t.done).length;
      return count === 1 ? '1 todo undone' : `${count} todos undone`
    }
  }
});

app.mount('#app');
