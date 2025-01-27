<template>
  <div>
    <h3>登录</h3>
    <form ref="loginForm">
      用户名： <input type="text" v-model="loginForm.username" placeholder="请输入账户名" required/>
      <br><br>
      密码： <input v-model="loginForm.password" placeholder="请输入密码" required type="password"/>
      <br><br>
      <button type="submit" @click.prevent="submitForm('loginForm')">登录</button>

    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm(loginForm) {
      this.axios({
        url: 'http://localhost:8080/login',
        method: 'POST',
        headers: {                            // 请求头
          "Content-Type": "application/json",
        },
        params: {
          username: this.loginForm.username,
          password: this.loginForm.password
        }
      }).then(res => {
        if (res.data.code === "0") {
          alert("登录成功！");
          // 跳转到首页或其他页面
          this.$router.push("/");
        } else {
          alert("登录失败！");
        }

      })


    }
  }
  ,
}
</script>
