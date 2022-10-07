<template>
  <div class="bG"></div>
  <nav class="nav_bar">
    <div class="inner_nav">
      <img
        style="height: 50px; padding: 5px"
        src="./assets/logo.png"
        alt="logo"
      />
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/shop">Shop</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
html {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.bG {
  z-index: 0;
  background-color: #161616;
  position: absolute;
  height: 60px;
  width: 100%;
}
body {
  margin: 0px;
  height: 100%;
}
.nav_bar {
  padding: 0px 20px;
  position: sticky;
  z-index: 100;
}
.inner_nav {
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}

nav a {
  font-weight: bold;
  color: #fff;
  padding: 10px;
  text-decoration: initial;
}

nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}
</style>
