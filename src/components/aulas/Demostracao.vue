<template lang="html">
  <div>
<div class="index">

  <div class="container" v-for="curso in cursos" :key="cursos.id">
  <div class="card"  style="width: 100%">
  <img src="@/assets/livro.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{curso.title}}</h5>
    <p class="card-text">{{curso.descricao_curso}}</p>
    <router-link :to="{ name: 'Vizualizacao', params: {curso_youtube_id:curso.curso_youtube_id } }">
      <a href="#" class="btn btn-primary ">Aulas</a>
    </router-link>

    <i class="material-icons delete" @click="deletecursos(curso.id)">delete</i>
    <router-link :to="{ name: 'AdicionarVideo2', params: {curso_slug: curso.slug} }">
    <i class="material-icons edit">edit</i>
    </router-link>
  </div>
</div>
</div>

</div>

  <Footer2></Footer2>
</div>
</template>

<script>
import Footer2 from './Footer2'
import db from '@/components/firebase/init'
import firebase from 'firebase'
  export default {
    components:{
      Footer2,
    },
    data() {

console.log(firebase.auth().currentUser);
      return{

        cursos:[
          {title: 'Html',imagem: '@/assets/Vue.png', slug: 'html', descricao_curso : 'Aprenda conceitos básicos do html'},
          {title: 'Css',imagem: '@/assets/logo.png', slug: 'css', descricao_curso : 'Aprenda conceitos básicos do css'}
          ]


      }
    },
    created(){
     // pegar data do firestore

     db.collection('Cursos').get()
     .then(snapshot => {
       snapshot.forEach(doc => {
         console.log(doc.data())
         let curso = doc.data()
         curso.id = doc.id
         this.cursos.push(curso)
       })
     })
   },
   methods:{
     // deletar documento do firestore

   deletecursos(id){
     db.collection('Cursos').doc(id).delete().then(()=>
     {this.cursos = this.cursos.filter(curso=>{
       return curso.id != id
     })

     })
   }
   }
  }

</script>

<style lang="css">
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: 60px;
  margin-bottom: 60px;
}
.index .delete{
  position: absolute;
  bottom: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 22px;
}
.index .edit{
  position: absolute;
  bottom: 4px;
  left: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 22px;

}
.index .a{
  align: center;
}
.index .btn-primary{
;
}
</style>
