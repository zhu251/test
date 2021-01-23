<template>
  <div class="root">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="UserName">
        <el-input v-model="ruleForm.UserName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="UserPwd">
        <el-input
          type="password"
          v-model="ruleForm.UserPwd"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="Sex">
        <el-input v-model="ruleForm.Sex"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="tel">
        <el-input v-model.number="ruleForm.tel"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { register } from "@/api/pengyou.js";
export default {
  data() {
    return {
      ruleForm: {
        UserName: "",
        UserPwd: "",
        Sex: "",
        tel: "",
      },
      rules: {
        UserName: [
          { required: true, message: "请输入注册账号", trigger: "blur" },
        ],
        UserPwd: [
          { required: true, message: "请输入注册密码", trigger: "blur" },
        ],
        Sex: [{ required: true, message: "请输入性别", trigger: "blur" }],
        tel: [{ required: true, message: "请输入电话号码", trigger: "blur" }],
      },
    };
  },
  methods: {
    register() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let params = {
            UserName: this.ruleForm.UserName,
            UserPwd: this.ruleForm.UserPwd,
            Sex: this.ruleForm.Sex,
            tel: this.ruleForm.tel,
          };
          await register(params)
            //   console.log(params)
            .then((res) => {
              //  console.log(res)
              if (res.data.ResultCode === "200") {
                this.$message.success("恭喜您！注册成功");
                this.$router.push("/logins");
              }
            });
        } else {
          this.$message.error("请完善目录");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.root {
  background-color: aqua;
  width: 1000px;
  height: 100%;
  margin: 80px auto;
  .demo-ruleForm {
    padding-top: 25px;
    .el-input {
      width: 700px;
    }
  }
}
</style>