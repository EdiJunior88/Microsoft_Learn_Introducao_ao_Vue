<script setup lang="js">
import { computed, ref } from 'vue'

const firstName = ref('Cheryl')
const lastName = ref('Smith')

const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  }
})
</script>

<template>
  <div>{{ fullName }}</div>
</template>

<style lang="css" scoped></style>
