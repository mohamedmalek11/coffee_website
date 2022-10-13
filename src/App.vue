<template>
  <div class="bG"></div>
  <nav class="nav_bar">
    <div class="inner_nav">
      <router-link to="/" custom v-slot="{ navigate }">
        <a @click="navigate" role="link" style="padding: 0px">
          <img
            style="height: 50px; padding: 5px"
            src="./assets/logo.png"
            alt="logo"
          />
        </a>
      </router-link>
      <font-awesome-icon
        @click="active = !active"
        class="mobile_menu"
        icon="fa-solid fa-2xl fa-bars"
      />
      <div v-show="active" class="mobile_menu_el">
        <span class="close" @click="active = false">&times;</span>
        <router-link @click="active = false" to="/">Home</router-link>
        <router-link @click="active = false" to="/shop">Shop</router-link>
        <router-link @click="active = false" to="/about">About</router-link>
        <router-link @click="active = false" to="/contact">Contact</router-link>
      </div>
      <div class="desktop_menu">
        <router-link to="/">Home</router-link>
        <router-link to="/shop">Shop</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style>
@keyframes slide {
  0% {
    transform: translateX(500px);
  }
  100% {
    transform: translateX(0px);
  }
}
@media (max-width: 750px) {
  .desktop_menu {
    display: none;
  }
  .mobile_menu {
    width: 30px;
    height: 30px;
    color: var(--primary);
    display: block !important;
  }
  .mobile_menu_el {
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    top: 0;
    right: 0;
    bottom: 0;
    width: 85%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    animation: slide 0.5s forwards;
  }
  nav a {
    color: var(--mainTextColor) !important;
  }
  nav a.router-link-exact-active {
    color: var(--primary) !important;
    text-decoration: underline;
  }
  .close {
    color: #aaaaaa;
    position: absolute;
    right: 15px;
    top: 9px;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
}
.mobile_menu {
  display: none;
}
html {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--mainTextColor);
  width: 100%;
  height: 100%;
}
.bG {
  z-index: 0;
  background-color: var(--bkColor);
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
  color: var(--primary);
  text-decoration: underline;
}
</style>
