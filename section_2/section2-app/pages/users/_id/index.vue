<template>
   <h3>A single user, with id: {{ $route.params.id }}</h3>
</template>

<script>
export default {
   validate(data){
      return data.params.id == 1;
   },
   layout: 'users'
}
</script>
