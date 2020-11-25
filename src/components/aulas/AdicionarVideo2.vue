<template lang="html">
    <div  class="secao">
<h1>Editar {{this.$route.params.curso_slug}}</h1>
      <!-- Single button triggers two "<b-collapse>" components -->
      <button v-b-toggle.collapse>Seções</button>

      <!-- Elements to collapse -->

      <b-collapse id="collapse" class="mt-2" v-for="secoe in secoes "key="a">
        <b-card> {{secoe.title}} {{secoe.sub_title}}</b-card>

      </b-collapse>
      <br />
      <i class="material-icons" v-on:click="adicionar_secao">add_circle</i>

</div>

</template>

<script>
import db from '@/components/firebase/init'
import firebase from 'firebase'
  export default {
    //name:'AdicionarVideo2',
    data(){
      console.log(firebase.auth().currentUser);
      return{
curso:1,
        secoes:[
          {title: 'Html', sub_title : 'Aprenda conceitos básicos do html'},
          {title: 'Css',  sub_title : 'Aprenda conceitos básicos do css'},
          ]
      }
    },
    created(){
     // pegar data do firestore
     let ref = db.collection('Cursos').where('slug', '==', this.$route.params.curso_slug)
     ref.get().then(snapshot => {
     //db.collection('Cursos').get()
     //.then(snapshot => {
       snapshot.forEach(doc => {
         console.log(doc.data())
         let secoe = doc.data()
         secoe.id = doc.id
         this.secoes.push(secoe)
       })
     })
   },
    methods:{
adicionar_secao(){
    this.$router.push({name:'Home'})
       }
     },

      }
</script>

<style lang="css">
.secao{
  width: 20%;
  margin: 0px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 20px;
  font-size: 10px;
}
.secao button{
  background: #5d8ffc;
  color: #fff;
  border: 1px solid #5d8ffc;
  border-radius: 5px;
  padding: 10px;
  display: inline-block;
  width: 100%;
  transition: 0.3s;
  -webkit-transition:0.3s;
  -moz-transition:0.3s;

}
.secao i{
  padding-top: 5%;
  padding-left: 45%
}


</style>
