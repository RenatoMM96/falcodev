<template lang="html">
  <div class="component-wrapper">
    <div class="hero-image">
      <div class="hero-text">
        <h1 style="">Sua ideia merece um <span>site</span>.</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Hero',
    data(){
      return{
      }
    },
  }
</script>

<style scoped>
body {
  margin: 0;
}
span{
  color: #29c0b5;
  text-shadow: 1px 1px 3px #292929;
}
h1{
  font-size:55px;

}

.hero-image {
  background: url(https://macedomonteiro.com.br/wp-content/uploads/2020/03/1-editado-1.png);
  /* background: url(https://macedomonteiro.com.br/wp-content/uploads/2020/03/1-editado.png) no-repeat center; */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-attachment:fixed;
  background-position: center; /* Center the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  height: 650px;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
