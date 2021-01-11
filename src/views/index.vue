<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<script>
import navbar from "../components/navbar";
import Navbar from '../components/navbar.vue';
import tabbar from '../components/tabbar'

export default {
  name: 'app',
  components:{
    tabbar,
    navbar
  }
}
</script>

<style lang="scss">
 </style>
