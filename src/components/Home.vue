<template>
  <div >
    <Hero/>
    <Quem></Quem>
    <Servico></Servico>
    <Tabela class="teste"></Tabela>
    <Contato></Contato>
    <div><Footer></Footer></div>
<div class="teste2"></div>
  </div>
</template>

<script>
import Footer from './Footer'
import Tabela from './Tabela'
import Quem_somos from './Quem_somos'
import Hero from './Hero_image'
import Contato from './Contato'
import Servico from './Servico'


export default {
  name: 'Home',
  components:{
    Hero,
    Footer, // como importo Footer : Footer e os nomes são iguais essa parte do codigo pode ser suprimida
    Tabela,
    Quem:Quem_somos,
    Contato,
    Servico,



 },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.teste{
  margin-bottom: 10px;

}
.teste2{
  width: 100%;
  height: 100px;
  background-color:red;

}

/* scrollbar */
/* tamanho */
::-webkit-scrollbar {
  width: 8px;
  border-radius: 7px;
}

/* caixa */
::-webkit-scrollbar-track {
  background-color: none;
  box-shadow: inset 0 0 10px grey;
  opacity: 0.1;
  border-radius: 7px;
}

/* selecionador */
::-webkit-scrollbar-thumb {
  background: #29c0b5;
  border-radius: 7px;
}

/* selecionador on hover */
::-webkit-scrollbar-thumb:hover {
  background: #292929;
}

</style>
