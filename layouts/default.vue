<template>
  <div class="wrapper">
    <div class="container">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>

<style>
html {
  font-family: 'Avenir', 'Lato';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: 'Avenir', 'Lato';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(-225deg, #3494E6, #EC6EAD);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin: 0;
}

h1 {
  margin-top: 5px;
  text-align: center;
  font-size: 120px;
  margin-bottom: 20px;
}
h2 {
  text-align: center;
  font-size: 20px;
  margin-bottom: 40px;
}

.wrapper {
  min-height: 100vh;
}

.container {
  padding: 30px;
  padding-top: 70px;
  max-width: 1000px;
  height: 100%;
}

@media screen and (max-width:1000px){
  .hide-mobile{
      display:none;
  }
}

a {
  text-decoration: none;
  color: inherit;
}

@media screen and (max-width: 1000px){
  h1 {
    font-size: 50px;
  }
}
</style>
