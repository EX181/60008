<template>
  <div class="Homepage">
      <div>
        <router-view> </router-view>
      </div>


  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      currentSection: "home",
    };
  },
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.Homepage {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

header {
  background-color: #004d40;
  color: white;
  padding: 15px 0;
}

header h1 {
  margin: 0;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}

nav ul li {
  display: inline;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

footer {
  background-color: #f1f1f1;
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>