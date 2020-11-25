<template lang="html">
  <div class="container-fluid">
    <div>
    <i class="material-icons">keyboard_arrow_up</i>
    <h3>FALCO</h3>
    <p>Todos direitos reservados a Falco Desenvolvimento de websites </p>
   </div>

 </div>
</template>

<script>
  export default {
    name:'Footer',

    data() {
return{
}
    }
  }
</script>

<style scoped>
.container-fluid{
  position: absolute;
  border-width: 20px;
  border-color: red;
  height: 240px;
  color: #fcfcfc;
  text-align: center;
  background-color: #292929;
}

h3:hover{
  color: #29c0b5;
  transition: color 0.5s;

}
i{
  height: 100%;
  width: 100%;
  font-size: 60px;
  margin-top: 50px;
  text-shadow: -0.5px 0.5px 1px grey;
  animation:mymove 5s infinite;


}
i:hover{
  color: #29c0b5;
  transition: color 0.5s;
  animation-direction: normal;
  animation-duration: 2s;
  transform: scale(3,3);
  transform: translateY(-4px);

}


</style>
