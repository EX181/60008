<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
    <el-menu-item index="/">
      <router-link to="/">Homepage</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/books">Books</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/about">About us</router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/contact">Contact</router-link>
    </el-menu-item>
    <el-menu-item index="5" style='margin-left: auto;'>
      <router-link to="/login" v-if="!auth.isLoggedIn">Log in</router-link>
      <router-link to="/User" v-else>User</router-link>

    </el-menu-item>
    <el-menu-item index="6" style='margin-right: 0 ;width: fit-content'>
      <router-link to="/register" v-if="!auth.isLoggedIn">Sign up</router-link>
      <el-button plain @click="logout" v-else>Log out</el-button>
    </el-menu-item>

  </el-menu>
</template>


<script>
import {ElMessage, ElMessageBox} from 'element-plus'
import {auth} from "@/utils/auth.js";

export default {
  computed: {
    auth() {
      return auth
    }
  },
  methods: {
    async logout() {
      try {
        await ElMessageBox.confirm(
            'Are you sure you want to logout?',
            'Warning',
            {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              type: 'warning',
            }
        )
        ElMessage.success('Log out completed')
        sessionStorage.removeItem('userInfo');
        auth.logoutstate()
        this.$router.push('/Homepage')
        window.location.reload();
      } catch {
        ElMessage.info('Log out canceled')
      }
    }
  }
}

</script>
<style>
a {
  text-decoration: none;
}
</style>