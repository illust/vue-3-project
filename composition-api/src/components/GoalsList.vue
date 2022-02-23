<template>
  <section class="container">
      <h2>
          My Goals
      </h2>
      <ul>
          <li v-for="goal in goals" :key="goal.id">{{ goal.text }}</li>
      </ul>
  </section>
</template>

<script>
export default {
   props:["goals"]
}
</script >

<style scoped>
ul {
    list-style: none;
}

li {
    
}
</style>