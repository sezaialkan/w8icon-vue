<template>
  <div class="main">

    <!-- Line Icon -->
    <div class="card" v-for="value in doneLineIcon">
      <w8icon color="#ffffff" secondColor="#22b573" size="75" strokeWidth="1.2" :name="value.name" />
      <p>{{value.name}}</p>
    </div>

    <!-- Dash Icon -->
    <div class="card" v-for="value in doneDashIcon">
      <w8icon color="#ffffff" secondColor="#22b573" size="75" strokeWidth="1.2" :name="value.name" />
      <p>{{value.name}}</p>
    </div>

    <!-- Duo Icon -->
    <div class="card" v-for="value in doneDuoIcon">
      <w8icon color="#ffffff" secondColor="#22b573" size="75" strokeWidth="1.2" :name="value.name" />
      <p>{{value.name}}</p>
    </div>

    <!-- Fill Icon -->
    <div class="card" v-for="value in doneFillIcon">
      <w8icon color="#ffffff" secondColor="#22b573" size="75" strokeWidth="1.2" :name="value.name" />
      <p>{{value.name}}</p>
    </div>

  </div>
</template>

<script>
import w8icon from 'w8icon-vue'
import { mapGetters } from 'vuex';

export default{
  components: {w8icon},
  computed: {
    ...mapGetters([
      'doneLineIcon',
      'doneDashIcon',
      'doneDuoIcon',
      'doneFillIcon'
    ])
  }
}  
</script>

<style scoped lang="sass">
.main
  max-width: 1400px
  width: 100%
  margin: 0 auto
  display: flex
  justify-content: center
  flex-wrap: wrap
  align-items: center
  gap: 20px
  .card
    border: 1px solid #2d2d2d
    border-radius: 5px
    width: 200px
    height: 200px
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    gap: 20px
</style>
