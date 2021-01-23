<template>
  <div id="root">
    <div class="logobox">
      <img src="../assets/family/world_view.jpg" class="logoimg" />
    </div>
    <el-form
      label-width="0px"
      class="login-form"
      :model="loginForm"
      :rules="loginrules"
      ref="loginref"
    >
      <el-form-item prop="username">
        <el-input prefix-icon="el-icon-s-custom" v-model="loginForm.username">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          prefix-icon="el-icon-lock"
          v-model="loginForm.password"
          type="password"
        >
        </el-input>
      </el-form-item>
      <el-form-item class="longinbtn">
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="info" @click="reset">重置</el-button>
        <el-button type="danger" @click="register" autofocus
                   style="margin-left:250px;">注册</el-button>
        <el-button type="success" @click="user">用户中心</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getData } from "@/api/pengyou.js";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginrules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" },],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  created() {
    console.log(this.$store.state.num,438)
  },
  methods: {
    reset() {
      this.$refs.loginref.resetFields();
    },
    user(){
      this.$router.push('/user')
    },
    register(){
        this.$router.push('/register')
    },
    login() {
      let obj = {
        UserName: this.loginForm.username,
        UserPwd: this.loginForm.password,
      };
      getData(obj).then((e) => {
        //console.log("e.data", e.data);
        if (e.data.ResultCode == 200) {
          this.$message.success(e.data.Message);
          this.$router.push("/Home");
        } else if(!this.loginForm.username || !this.loginForm.password){
          this.$message.error("账号名或密码不能为空！");
        } else {
          this.$message.error("账号名或密码错误");
        }
      });
    },
  },
};
</script>   
<style lang="less" scoped>
#root {
  width: 800px;
  height: 500px;
  background: pink;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -250px 0 0 -400px;
  .logobox {
    width: 280px;
    height: 280px;
    border: blue 1px solid;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -40%);
    padding: 10px;
    box-shadow: 0 0 10% gold;
    background-color: white;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: royalblue;
    }
  }
}
.login-form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  .longinbtn {
    display: flex;
    justify-content: flex-end;
  }
}
</style>