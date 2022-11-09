<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
console.log(111,process.env.VUE_APP_SECRET)
console.log("VUE_APP_BASE",process.env.VUE_APP_BASE)

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
