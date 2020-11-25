<template lang="html">
  <div class="component-wrapper">
    <h1>Quem somos</h1>
    <div class="container">
    <p>Somos uma Start up, cujo o foco está no desenvolvimento de websites, com qualidade e preço justo, pois a sua ideia necessita virar realidade.</p>
    <p>Missão: Levar a solução tecnológica a empresas e pessoas que venham desde pequenos projetos e ideias bobas à planos elaborados e complexos.</p>
    <p>Valores: Honestidade Compromisso Pontualidade Dedicação</p>
</div>
  </div>
</template>

<script>
  export default {
    name:'Quem_somos',
    data(){
      return{

      }
    },

  }
</script>

<style scoped>
.component-wrapper{
  background-image: url(https://macedomonteiro.com.br/wp-content/uploads/2020/03/2-editado-fundo.png);
  background-repeat: no-repeat; /* Do not repeat the image */
  background-attachment:fixed;
  background-position: center; /* Center the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-color:#292929;
}
h1{
  text-align: center;
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: 40px;
  color: #fcfcfc
}
.container{
  text-align: center;
  padding-bottom: 20px;

}
p{
  font-size: 20px;
  font-family:cursive;
  color: #fcfcfc;
  padding-top: 3%;


}

</style>
