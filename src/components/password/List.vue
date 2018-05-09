<template>
  <div class="block">
    <el-table
      :data="list"
      >
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
              <span>{{ props.row.url }}</span>
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
        prop="url">
      </el-table-column>
      <el-table-column
        label="类型"
        prop="type">
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="record_count"
      @prev-click="getList"
      @next-click="getList"
      @current-change="getList"
    >
    </el-pagination>
  </div>
</template>

<script>
  import passApi from '../../api/password.js'
  export default {
    data() {
      return {
        list: [],
        record_count: 0,
        page: 2
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.getList(1)
      })
    },
    methods: {
      getList (page) {
        console.log(page)
        passApi.list(page, (data) => {
          this.list = data.info.list
          this.record_count = data.info.record_count
        })
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

  .el-table {
    width: 100%;
    min-height:528px;
  }
</style>
