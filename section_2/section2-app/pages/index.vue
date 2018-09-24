<template>
  <section class="container">
    <nuxt-link to="/users">Users</nuxt-link>
    <button @click="loadProducts">Products</button>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  },
  methods: {
    loadProducts(){
      this.$router.push('/products');
    }
  }
}
</script>
