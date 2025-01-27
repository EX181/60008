<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Homepage from "@/pages/Homepage.vue";
import Head from "@/pages/Head.vue";
</script>

<template>
  <div name="app">
  <header>
    <Head/>
  </header>
  <main>
    <Homepage/>
  </main>
  </div>>
</template>

<style>

header {
  background-color: #004d40;
  color: white;
  padding: 15px 0;
  margin-left: 10px;
  margin-top: 10px;
}

html, body, main{
  height: 100%;
  width: 100%;
}

</style>
