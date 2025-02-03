<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Homepage from "@/pages/Homepage.vue";
import Head from "@/pages/Head.vue";
import footer from "@/pages/footer.vue";
</script>

<template>
  <el-container name="app">

    <el-container>
      <el-header><Head/></el-header>
      <el-main><Homepage/></el-main>
      <el-footer><footer/></el-footer>
    </el-container>
  </el-container>
</template>

<style>


</style>
