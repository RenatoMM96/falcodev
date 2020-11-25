<template lang="html">
  <div class="footer2">
  <b-img right :src="require('@/assets/logo.png')" alt="Falco"></b-img>
    <h2 class="footer">Links</h2>
    <router-link to="/">Home</router-link><br />
    <router-link to="/demostracao">Demostração</router-link><br />
    <router-link to="/logar">Entrar</router-link><br />
    <router-link to="/adicionar-video">Adicionar Curso</router-link><br />
    <a @click='logout'>Sair</a><br />
  </div>

</template>
<style >

.footer2{
  position:relative;
  margin-top: 5px;
  background-color: #343a40;
}
h2.footer{
  color: #fff;
  text-align:left;
  margin-left: 5%;
  font-size: 18pt;
}
a{
  color: white;
  margin-left: 4%;
  text-decoration: none;

}
/* unvisited link */
a:link {
  color: white;
}
/* visited link */
a:visited {
  color: white;
}
/* mouse over link */
a:hover {
  color: white;
  text-decoration: none;

}
/* selected link */
a:active {
  color: #BDBDBD;
}
img{
  display: flex;
  margin-right: 5%;
  margin-top: 18px;
  margin-bottom: 18px;
  width: auto;
  height: 90px;
}
</style>

<script>
import firebase from 'firebase'
export default {
  data(){
  return{

  }
},methods:{
logout(){
  firebase.auth().signOut().then(() => {this.$router.push({name:'Home'})})
}
}
}
</script>
