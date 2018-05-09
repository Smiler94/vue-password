<template>
  <el-form ref="form" :model="form" label-width="40px">
    <el-form-item label="名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="网址">
      <el-input v-model="form.url"></el-input>
    </el-form-item>
    <el-form-item label="账号">
      <el-input v-model="form.account"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="form.password" auto-complete="false"></el-input>
    </el-form-item>
    <el-form-item label="确认" prop="checkPass">
      <el-input type="password" v-model="form.repassword" auto-complete="false"></el-input>
    </el-form-item>
    <el-form-item label="分类">
      <el-select v-model="form.type" placeholder="请选择分类">
        <el-option label="工作" value="1"></el-option>
        <el-option label="生活" value="2"></el-option>
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
  import passwordApi from '../../api/password'
  export default {
    data() {
      return {
        form: {
          name:'',
          url:'',
          account:'',
          password:'',
          repassword:'',
          type:'',
          remark:''
        }
      }
    },
    methods: {
      onSubmit() {
        passwordApi.add(this.form, (res) => {
          if (res.code != '0') {
            this.$message.error(res.msg)
          } else {
            this.$message.success('添加成功')
          }
        })
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
