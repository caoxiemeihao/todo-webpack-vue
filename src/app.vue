<template>
  <div id="app">
    <div id="cover"></div>
    <Header/>
    <Todo/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./todo/header.vue";
import Footer from "./todo/footer.jsx";
import Todo from "./todo/todo.vue"

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    Todo,
  }
};
</script>

<style lang="stylus" scoped>
#app {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  #cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url('./assets/images/jump.jpg');
    // filter: blur(4px);
    z-index: -1;
  }
}
</style>
