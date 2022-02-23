<template>
  <course-goals></course-goals>
</template>

<script>
import CourseGoals from './components/CourseGoals.vue'

export default {
  name: 'App',
  components: {
    CourseGoals
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
