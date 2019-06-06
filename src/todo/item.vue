<template>
  <div :class="['todo-item', todo.completed ? 'completed'  : '']">
    <input
      type="checkbox"
      class="toggle"
      v-model="todo.completed">
    <label>{{todo.content}}</label>
    <button class="destory" @click="deleteTodo">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    }
  },
  methods: {
    deleteTodo() {
      this.$emit('del', this.todo.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.todo-item
  // text-align left 
  padding 14px 0
  border-bottom 1px solid #ccc

  &:after
    content ""
    display block
    clear both

  .toggle
    float left 
  label 
    float left
    margin-left 9px
  .destory
    float right
</style>

