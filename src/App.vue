<template>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
</template>
<script>
  import MainTabBar from 'content/maintabbar/maintabbar'

  export default {
    name: 'app',
    components: {
      MainTabBar,
    }
  }
</script>

<style> 
@import "assets/css/base.css";
</style>
