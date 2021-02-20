<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import Home from './components/Home'
import Header from './components/Header'
// import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Home,
    Header
    // Footer
  }
}
</script>

<style lang="scss">
    @import "./assets/css/res.scss";
    @import "./assets/css/grid.css";
</style>
