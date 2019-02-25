<template lang="pug">
.col-lg-4
  .card
    img.card-img-top(:src="imageUrl" :alt="title")
    .card-body
      h5.card-title {{ title }}
      p.card-text {{ description }}
      a(:href="`${link}?utm_source=cryptizens`" target="_blank")
        button.btn.btn-primary Discover
    .card-footer
      small.text-muted
        span.tag(v-for="tag in tags") {{ tag }}
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: 'https://cryptizens.io'
    },
    image: {
      type: String,
      default: 'social.jpg'
    },
    title: {
      type: String,
      default: 'Cryptizens'
    },
    description: {
      type: String,
      default: 'A high-energy launchpad for psychedelic tech ventures.'
    },
    tags: {
      type: Array,
      default: () => ['MotherShip', 'Psychedelic']
    }
  },
  computed: {
    imageUrl() {
      // This trick enables us to load images from assets where they are
      // timestamped (better for hashing), instead of reading from static:
      // https://github.com/nuxt/nuxt.js/issues/448
      return require(`~/assets/images/${this.image}.jpg`)
    }
  }
}
</script>

<style lang="scss">
.card {
  margin-bottom: 25px;
}
.tag {
  font-size: 11px;
  border-radius: 6px;
  padding: 3px 7px 3px 7px;
  background-color: black;
  color: white;
  margin-right: 3px;
  background-color: lighten(#67737a, 45%);
  color: #67737a;
}

h2 {
  margin-top: 0px;
  margin-bottom: 15px;
}
</style>
