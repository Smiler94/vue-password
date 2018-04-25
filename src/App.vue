<template>
  <div id="app">
    <el-container>
      <el-aside wdith="200px">
        <Menu></Menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import PassAdd from './components/password/Add.vue'
export default {
    name: 'App',
    components: {
      Menu, PassAdd
    }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
