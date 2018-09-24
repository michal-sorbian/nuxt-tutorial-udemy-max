<template>
   <div>
      <h2>Users view</h2>
      <input type="text" v-model="id">
      <button @click="loadUser">Go to user</button>
      <nuxt-child></nuxt-child>
   </div>
</template>

<script>
export default {
   data(){
      return {
         id: ''
      }
   },
   methods: {
      loadUser(){
         this.$router.push('/users/'+this.id);
      }
   },
   layout: 'users'
}
</script>

<style scoped>

</style>
