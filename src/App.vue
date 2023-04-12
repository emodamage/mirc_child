<template>
  <div id="container">
    <div @click="$router.push('/child')">跳转到child页面</div>
    <div @click="$router.back()">返回</div>
    <router-view></router-view>
    <!-- 1.路由中的base -->
    <!-- 2.mian -->
    <!-- 3.vue.config.js -->
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style scoped>
#container {
  background-color: teal;
}
</style>
