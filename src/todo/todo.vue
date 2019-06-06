<template>
  <section class="real-app">
    <input
      class="add-inpug"
      autofocus="autofocus"
      placeholder="接下来要做什么？"
      @keyup.enter="addTodo"
    >
  <Item
    v-for="todo in filteredTodos"
    :key="todo.id"
    :todo="todo"
    @del="deleteTodo" />
  <Tabs
    :filter="filter"
    :todos="todos"
    @toggle="toggleFilter"
    @clearAllCompleted="clearAllCompleted" />
  </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'

let id = 0

export default {
  data() {
    return {
      todos: [],
      filter: 'all'
    }
  },
  components: {
    Item,
    Tabs,
  },
  methods: {
    addTodo(ev) {
      this.todos.unshift({
        id: id++,
        content: ev.target.value.trim(),
        completed: false,
      })
      ev.target.value = ''
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    toggleFilter(state) {
      console.log(this.filter = state)
    },
    clearAllCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      }

      return this.todos.filter(todo => todo.completed === (this.filter === 'completed'))
    }
  } 
}
</script>

<style lang="stylus" scoped>
.real-app
  box-sizing border-box
  padding 0 25px
  max-width 700px
  margin 0 auto
  // text-align center
  background rgba(250, 250, 250, .4)
  box-shadow 0 0 1px #ccc

  input
    margin-top 20px
    border none
    outline none
    width 100%
    padding 9px
    line-height 30px
    font-size 24px
</style>

