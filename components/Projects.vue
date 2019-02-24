<template lang="pug">
  div
    h3 Current projects
    .row
      Project(
        v-for="project in activeProjects"
        :key="project.name"
        :link="project.link"
        :title="project.title"
        :tags="project.tags"
        :image="project.image"
        :description="project.description"
      )
    h3 Past projects
    .row
      Project(
        v-for="project in pastProjects"
        :key="project.name"
        :link="project.link"
        :title="project.title"
        :tags="project.tags"
        :image="project.image"
        :description="project.description"
      )
</template>

<script>
import Project from '~/components/Project.vue'
import projects from '~/assets/projects.json'

export default {
  components: {
    Project
  },
  computed: {
    activeProjects: () => projects.filter(p => p.active),
    pastProjects: () => projects.filter(p => !p.active)
  }
}
</script>

<style lang="scss">
h3 {
  margin: 20px 0 20px 0;
  color: white
}
</style>
