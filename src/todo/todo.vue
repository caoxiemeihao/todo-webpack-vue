<template>
  <section class="real-app">
    <input
      class="add-inpug"
      autofocus="autofocus"
      placeholder="接下来要做什么？"
      @keyup.enter="addTodo"
    >
  <Item :todo="todo"/>
  <Tabs :filter="filter"/>
  </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'

export default {
  data() {
    return {
      todo: {
        id: 0,
        content: 'This is todo.',
        completed: false,
      },
      filter: 'all'
    }
  },
  components: {
    Item,
    Tabs,
  },
  methods: {
    addTodo() {
      
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

