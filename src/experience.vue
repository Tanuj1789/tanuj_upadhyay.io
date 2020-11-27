<template>
  <div id="myapp">
    <Slider />
  </div>
</template>

<script>
import Slider from './slidemetoo'
export default {
  name: 'myapp',
  components: {
    Slider
  }
}
</script>

<style>
#myapp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin:0px;
}
</style>
