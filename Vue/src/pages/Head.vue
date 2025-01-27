<script>
export default {
name: "Head"
}
</script>

<template>
  <header>
    <h1>Welcome to the Library</h1>
    <nav>
      <ul>
        <li><router-link to="/">Homepage</router-link></li>
        <li><router-link to="/books">Books</router-link></li>
        <li><router-link to="/about">About us</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <router-link to="/login">Log in</router-link>
    <router-link to="/register">Sign up</router-link>
  </header>
</template>

<style scoped>

header{
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
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

</style>