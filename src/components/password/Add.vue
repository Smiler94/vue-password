<template>
  <el-form ref="form" :model="form" label-width="40px">
    <el-form-item label="名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="网址">
      <el-input v-model="form.site_url"></el-input>
    </el-form-item>
    <el-form-item label="账号">
      <el-input v-model="form.account"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="分类">
      <el-select v-model="form.type" placeholder="请选择分类">
        <el-option label="工作" value="work"></el-option>
        <el-option label="生活" value="life"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="备注">
      <el-input type="textarea" v-model="form.remark"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name:'',
          site_url:'',
          account:'',
          password:'',
          type:'',
          remark:''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
  .el-form {
    width: 60%;
    margin:0 auto
  }
</style>
