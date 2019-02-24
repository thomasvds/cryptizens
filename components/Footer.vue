<template lang="pug">
.footer-container
  | © 2019 Cryptizens.io / <a href="https://medium.com/@vanderstraeten.thomas" target="_blank"><u>Blog</u></a> / <a href="https://github.com/Cryptizens" target="_blank"><u>GitHub</u></a> / <a href="mailto:hello@cryptizens.io" target="_blank"><u>Contact</u></a>
</div>
</template>

<style lang="scss">
.footer-container {
  color: white;
  height: 50px;
  border-top: 1px solid white;
  width: 1000px;
  margin: 0 auto;
  padding: 10px 20px 40px 20px;
  font-size: 14px;
  align-items: center;
}

@media screen and (max-width: 1000px){
  .footer-container {
    width: 100% !important;
  }
}
</style>
