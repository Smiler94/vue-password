<template>
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="账号">
            <span>{{ props.row.account }}</span>
          </el-form-item>
          <el-form-item label="网址">
            <span>{{ props.row.site_url }}</span>
          </el-form-item>
          <el-form-item label="类型">
            <span>{{ props.row.type }}</span>
          </el-form-item>
          <el-form-item label="密码">
            <span>**********<i class="el-icon-view"></i></span>
          </el-form-item>
          <el-form-item label="备注">
            <span>{{ props.row.remark}}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="网址"
      prop="site_url">
    </el-table-column>
    <el-table-column
      label="类型"
      prop="type">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData5: [{
          id: '12987122',
          name: 'github',
          account: '273487984@qq.com',
          site_url: 'https://github.com',
          type: '工作',
          password: 'sdfasdfasdf',
          remark: '这是 github 账号,需要强制解析阿斯顿发送到发送到发送打算地方阿斯蒂芬 水电费阿斯蒂芬稍等发'
        }, {
          id: '12987123',
          name: 'github',
          account: '273487984@qq.com',
          site_url: 'https://github.com',
          type: '工作',
          password: 'sdfasdfasdf',
          remark: '这是 github 账号'
        }, {
          id: '12987125',
          name: 'github',
          account: '273487984@qq.com',
          site_url: 'https://github.com',
          type: '工作',
          password: 'sdfasdfasdf',
          remark: '这是 github 账号'
        }, {
          id: '12987126',
          name: 'github',
          account: '273487984@qq.com',
          site_url: 'https://github.com',
          type: '工作',
          password: 'sdfasdfasdf',
          remark: '这是 github 账号'
        }]
      }
    }
  }
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    /*width: 90px;*/
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
