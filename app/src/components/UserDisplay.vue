<script setup lang="js">
defineProps({
  user: {
    name: String,
    age: Number
  }
})
</script>

<template>
  <div>Name: {{user.name}}</div>
  <div>Age: {{user.age}}</div>
</template>
