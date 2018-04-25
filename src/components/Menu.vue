<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-info"></i>
        <span>密码管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">
          <router-link to="/password/add" tag="li">新增</router-link>
        </el-menu-item>
        <el-menu-item index="1-2">
          <router-link to="/password/list" tag="li">查看</router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
    export default {
        name: "menu"
    }
</script>

<style scoped>
  .el-menu {
    text-align: center
  }
</style>
