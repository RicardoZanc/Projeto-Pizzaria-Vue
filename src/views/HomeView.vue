<template>
  <div>
    <Banner />
    <PizzaForm />
  </div>
</template>

<script>
  import Banner from '../components/Banner.vue'
  import PizzaForm from '../components/PizzaForm.vue'
  export default {
    name: "HomeView",
    components: {
      Banner,
      PizzaForm,
    }
  }
</script>

<style scoped>
 div {
  display: flex;
  flex-direction: column;
  align-items: center;
 }
</style>
