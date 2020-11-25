<template lang="html">
  <div class="container">
  <iframe width="900" height="600"
  src="https://www.youtube.com/embed/8iZpH7O6zXo?playlist=K7zZEsYLkV1DCmC8Vj9Wl9hjVI2AJm&loop=1">
  </iframe>
  </div>
</template>

<script>
import db from '@/components/firebase/init'
import firebase from 'firebase'
import VueYouTubeEmbed from 'vue-youtube-embed'


  export default {
    //name:'AdicionarVideo2',
    data(){
      console.log(firebase.auth().currentUser);
      return{
}}
  }
</script>

<style lang="css">

</style>
