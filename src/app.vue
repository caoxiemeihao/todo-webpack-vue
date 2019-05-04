<template>
    <div id="test">{{text}}</div>
</template>

<script>
  import './assets/styles/test.css'
  import './assets/styles/test-stylus.styl'
  import  './assets/images/bg.jpg'

  export default {
    data() {
      return {
        text: 'Hello world.'
      }
    }
  }
</script>

<style>
    #test {
        color: #ff6470;
    }
</style>