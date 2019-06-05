<template>
  <div class="helper">
    <span class="left">2 item left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state, filter === state ? 'actived' : '']"
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
    }
  },
  data: _ => ({
    states: ['all', 'active', 'completed']
  }),
  methods: {
    toggleFilter(state) {
      
    },
    clearAllCompleted() {
      
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
</style>

