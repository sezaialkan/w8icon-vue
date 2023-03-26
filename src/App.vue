<script setup>
import Card from './components/card.vue'

</script>

<template>
  <header>
    <img alt="w8Icon logo" class="logo" src="/w8logo.svg" width="125" height="125" />
    <h1>Customize Free Icon Pack</h1>
  </header>
  <main>
    <Card />
  </main>
</template>

<style lang="sass">

body
  background-color: #0b1015
  color: #dddddd
  font-family: sans-serif

header
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  gap: 50px
  margin: 50px 0

</style>
