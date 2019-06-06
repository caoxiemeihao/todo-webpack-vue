<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}} item left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="['state', filter === state ? 'actived' : '']"
        @click="toggleFilter(state)">
        {{state}}
      </span>
    </span>
    <span class="clear" @click="clearAllCompleted">Clear Completed</span>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true, 
    },
    todos: {
      type: Array,
      required: true,
    }
  },
  data: _ => ({
    states: ['all', 'active', 'completed']
  }),
  methods: {
    toggleFilter(state) {
      this.$emit('toggle', state)
    },
    clearAllCompleted() {
      this.$emit('clearAllCompleted')
    }
  },
  computed: {
    unFinishedTodoLength() {
      return this.todos.filter(todo => !todo.completed).length
    }
  }
}
</script>

<style lang="stylus" scoped>
.helper
  display flex
  padding 9px 0

  > span
    flex 1
  span.tabs
    text-align center
  span.clear
    text-align right

.state
  padding 4px 9px
  border-radius 4px
  border 1px solid transparent
  cursor pointer
  &.actived
    border-color #ededed
</style>

