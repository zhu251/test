<template>
  <div id="root">
    <!-- 用户列表搜索 -->
    <el-row :gutter="0" class="ipt">
      <el-col :span="12" class="ipt">
        <el-input placeholder="请输入搜索内容" v-model="result">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="findBtn" class="btn"
          >查询用户</el-button
        >
      </el-col>
    </el-row>
    <!-- 用户列表展示 -->
    <el-table :data="tableData" style="width: 800px" height="600">
      <el-table-column prop="ID" label="ID" width="120" fixed></el-table-column>
      <el-table-column
        prop="UserName"
        label="账号"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="UserPwd"
        label="密码"
        width="120"
      ></el-table-column>
      <el-table-column prop="Sex" label="性别" width="120"></el-table-column>
      <el-table-column prop="tel" label="电话" width="120"></el-table-column>
      <el-table-column label="编辑" width="150">
        <template slot-scope="scope">
          <el-button size="small" @click="change1(scope.row)">修改</el-button>
          <el-button size="small" @click="shanchu(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 用户列表修改弹窗 -->
    <el-dialog
      title="编辑用户"
      :visible.sync="openU"
      close-on-click-modal
      width="800px"
    >
      <el-form
        :model="mine"
        ref="mine1"
        label-width="100px"
        class="demo-dynamic"
        :rules="rules"
      >
        <el-form-item label="账号" prop="UserName" class="order-number">
          <el-input v-model="mine.UserName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="UserPwd">
          <el-input v-model="mine.UserPwd"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="Sex">
          <el-input v-model="mine.Sex"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input v-model="mine.tel"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button type="info" @click="close">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { getList, shanchuapi, change, query } from "@/api/pengyou.js";
export default {
  name: 'User',
  data() {
    return {
      result: "",
      tableData: [],
      openU: false,
      mine: {},
      oldData: {},
      rules: {},
    };
  },
  created() {
    this.getlist();
   // console.log(this.$route);
  },
  watch: {
    $route() {
      if (this.$route.query.result) {
          this.result = this.$route.query.result;
      } else {
        this.result = '';
      }
      this.find();
    },
  },
  methods: {
    findBtn() {
      if (!this.result) {
        this.$message.error("不能为空");
        return;
      }
      if (this.result === this.$route.query.result) {
      // return;
      // 搜索框与路由上面的字相同,不搜索直接return,搜索就调用find方法
        this.find();
      } else {
          this.$router.push({
          path: "/user",
          query: {
            result: this.result,
          },
        });
      }
    },
    find() {
      let user = {
        UserName: "",
        Sex: "",
        tel: "",
      };
      if (/^1[3456789]\d{9}$/.test(this.result)) {
        user = {
          UserName: "",
          Sex: "",
          tel: this.result,
        };
      } else if (/男|女/g.test(this.result)) {
        user = {
          UserName: "",
          Sex: this.result,
          tel: "",
        };
      } else {
        user = {
          UserName: this.result,
          Sex: "",
          tel: "",
        };
      }
      query(user).then((res) => {
        //console.log(res,438)
        this.tableData = res.data.Rows;
      });
    },
    getlist() {
      getList().then((res) => {
        // console.log(res)
        this.tableData = res.data.Rows;
      });
    },
    submit() {
      this.openU = false;
      let { oldData, mine } = this;
      if (
        oldData.UserName == mine.UserName.trim() &&
        oldData.UserPwd == mine.UserPwd.trim() &&
        oldData.Sex == mine.Sex.trim() &&
        oldData.tel == mine.tel.trim()
      ) {
        this.$message.error("你没做任何修改！");
      } else {
        change(this.mine).then((res) => {
          // console.log(res,112233)
          if (res.data.ResultCode == 200) {
            this.$message({
              type: "success",
              message: "修改成功!",
            });
            this.getlist();
          } else {
            alert("服务器异常！");
          }
        });
      }
    },
    close() {
      this.openU = false;
      this.$message({
        type: "info",
        message: "已取消修改!",
      });
    },
    change1(item) {
      // console.log(item,'item7888')
      this.oldData = item;
      this.mine = JSON.parse(JSON.stringify(item));
      this.openU = true;
    },
    shanchu(item) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          shanchuapi({ ID: item.ID }).then((res) => {
            // console.log(res,11111111111111)
            if (res.data.ResultCode == 200) {
              this.getlist();
            }
          });
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>
<style lang="less" scoped>
.el-table {
  margin: 30px auto;
}
.el-row {
  .btn {
    margin-top: 10px;
  }
  .ipt {
    background-color: pink;
    height: 60px;
    width: 520px;
    padding: 10px;
  }
  margin-top: 15px;
  margin-left: 420px;
  .el-input {
    width: 500px;
  }
}
.demo-dynamic {
  background-color: aqua;
  padding-top: 20px;
  .el-input {
    width: 500px;
  }
}
</style>