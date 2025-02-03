<template>
  <div>
    <el-card class="box-card">
      <h2>登录</h2>
      <el-form
          :model="loginForm"
          ref="loginForm"
          status-icon
          :rules="rules"
          label-position="left"
          label-width="70px"
          class="login-from"
      >

        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="loginForm.username" placeholder="请输入账户名" required/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码" type="password" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div class="btnGroup">
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
        <router-link to="/register">
          <el-button style="margin-left:10px">注册</el-button>
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
import {ref} from "vue";
import {hashSHA256} from "@/utils/CryptoHelper.js";

const hashedPassword = ref("");

import {auth} from "@/utils/auth.js";

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {required: true, message: "用户名不能为空！", trigger: "blur"},
        ],
        password: [
          {required: true, message: "密码不能为空！", trigger: "blur"},
        ],
      },
    }
  },
  methods: {
    submitForm(loginForm) {
      this.$refs[loginForm].validate(async (valid) => {
        if (valid) {
          hashedPassword.value = await hashSHA256(this.loginForm.password);
          this.axios({
            url: 'http://localhost:8080/login',
            method: 'POST',
            headers: {                            // 请求头
              "Content-Type": "application/json",
            },
            data: {
              username: this.loginForm.username,
              password: hashedPassword.value
            }
          }).then(res => {
            if (res.data.code === "0") {
              this.$message.success(res.data.msg);
              this.$router.push("/");
              sessionStorage.setItem("userInfo", JSON.stringify(res.data.data));
              auth.loginstate()
              window.location.reload()
            } else {
              this.$message.error(res.data.msg);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });


    },
    resetForm(loginForm) {
      this.$refs[loginForm].resetFields();
    }
  }
}
</script>

<script setup>
import {auth} from "@/utils/auth.js";

const login = () => {
  auth.loginstate()
}
</script>
<style scoped>
.box-card {
  margin: auto auto;
  width: 400px;
}

.login-from {
  margin: auto auto;
}
</style>