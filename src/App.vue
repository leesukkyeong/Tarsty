<template>
<div id="app">
  <TitleComponent></TitleComponent>
  <nav>
    <router-link to="/">홈</router-link> |
    <router-link to="/wine">와인</router-link> |
    <router-link to="/dining">다이닝</router-link> |
    <router-link to="/about">탈스티소개</router-link> |
    <router-link to="/location">매장안내</router-link>
  </nav>
  <router-view/>
</div>
</template>

<script>
import TitleComponent from './components//Title'

  export default {
    components: {
     TitleComponent
    },
  }

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 18px;
  background-color: black;
  width: 100%;
  height: 10px;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
