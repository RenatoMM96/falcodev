<template>
  <div id="app">
        <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
h1{
  text-shadow: 5px red  ;
  text-align: center;
  font-size:40px;
  font-weight: bold;
  
}
#app {

  font-family: 'Open Sans', sans-serif;
  color: #2c3e50;
}
</style>
