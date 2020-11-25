<template lang="html">
  <div class="main-div">
<form @submit.prevent="adicionarcurso"  method="post">
  <input type="text" name="title" v-model="title" placeholder="Título"><br>
  <input type="text" name="descricao" v-model="descricao_curso" placeholder="Descrição"><br>
  <input type="file" name="file">
  <button class="botao" type="button" name="button" @click="adicionarcurso()">Botao </button>
  <button class="botao" type="button" name="button" @click="adicionarcurso()">Criar curso </button>
</form>
</div>

</template>

<script>
import db from '@/components/firebase/init'
// instalado o modo usando npm install slugify
// slugify serve para criar slug
import slugify from 'slugify'
  export default {
    data() {
      return{
        title:null,
        descricao_curso:null,
        slug: null
      }
    },
    methods:{
      adicionarcurso() {
        if (this.title) {
          this.feedback = null
          // criar slug (antes de inserir ao banco de dados)
          this.slug = slugify(this.title, {
            replacement: '-',
            remove: /[$*_+^~.()'"!\-:@]/g,
            lower:true,
          })
          db.collection('Cursos').add({
            title: this.title,
            descricao_curso: this.descricao_curso,
            slug: this.slug
          }).then(() =>{
           this.$router.push( {name: 'AdicionarVideo2', params: {curso_slug: this.slug} })
              console.log(this.slug)
            //this.$router.push( {name: 'Home'})
          }).catch(err=>{
            console.log(err)
          })
          this.slug

        }else {
          this.feedback = 'Você deve colocar um título'
        }
      }
    }
  }
</script>

<style lang="css">
body{
background: #fff;
padding: 0px;
margin: 0px;
font-family: 'Orbitron',sans-serif;
}
input,button{
  font-family: 'Orbitron',sans-serif;
}
.main-div{
  width: 20%;
  margin: 0px auto;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 20px;
  font-size: 10px;
}
.main-div h3{
  text-align: center;
  font-size: 15pt;
}
.main-div input{

  display: block;
  border: 1px solid #ccc;
  border-radius: 5px;
  background:#fff;
  margin-bottom: 20px;
  padding: 10px;
  outline: none;
  width: 100%
}
.main-div input:focus{
  border: 1px solid #5d8ffc;
  transition: 0.3s;
  -webkit-transition:0.3s;
  -moz-transition:0.3s;
}
.main-div button{
  background: #5d8ffc;
  color: #fff;
  border: 1px solid #5d8ffc;
  border-radius: 5px;
  padding: 10px;
  display: inline-block;
  width: 49%;
  transition: 0.3s;
  -webkit-transition:0.3s;
  -moz-transition:0.3s;

}
.main-div button:hover{
  background: #fff;
  color: #5d8ffc;
  border: 1px solid #5d8ffc;
}
</style>
