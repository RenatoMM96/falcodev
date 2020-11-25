<template lang="html">
  <div class="container-fluid">
    <h1>Contato</h1>
<div class="row">
  <div class="col-sm">


<div class="card">
  <div class="box">
    <i class="material-icons">mail_outline</i>
    <svg width="100%" height="100%">
    <circle class="ring" cx="150" cy="100" r="50"></circle>
    <circle class="ring-interno" cx="150" cy="100" r="35"></circle>
  </svg>
  </div>

<div class="container">
  <h4 class="fadeIn">Email</h4>
  <h6>contato@falcodev.com.br</h6>
</div>
</div>
  </div>
    <div class="col-sm">
<div class="card">
  <div class="box">
    <i class="material-icons">place</i>
    <svg width="100%" height="100%">
    <circle class="ring" cx="150" cy="100" r="50"></circle>
    <circle class="ring-interno" cx="150" cy="100" r="35"></circle>
  </svg>
  </div>

<div class="container">
  <h4 class="fadeIn">Endereço</h4>
  <h6>Rua Marcondes Pereira, 1271</h6>
</div>
</div>
  </div>
    <div class="col-sm">
<div class="card">
  <div class="box">
    <i class="material-icons">local_phone</i>
    <svg width="100%" height="100%">
    <circle class="ring" cx="150" cy="100" r="50"></circle>
    <circle class="ring-interno" cx="150" cy="100" r="35"></circle>
  </svg>
  </div>

<div class="container">
  <h4 class="fadeIn">Telefone</h4>
  <h6>(85) 9.9969-7003</h6>
</div>
</div>
  </div>
    </div>
        </div>
</template>

<script>
export default {
  name: 'Contato',
data(){
  return{

  }
}
}
</script>

<style scoped>
.card{
  display: block;
  align-items: center;
  width: 300px;
  height: 250px;
  margin-bottom: 50px;
  background-color: #292929;
  opacity: 0.75;
  border: 0.1px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  color: #ececec;

}
.box{
  height: 70%;
  width: 100%;
border-radius: 5px 5px 0px 0px;
}
.container{
  height: 30%;
  width: 100%;
  text-align: center;
  padding-top: 1px;
  border-radius: 0px 0px 5px 5px; /* 5px rounded corners */

}
.container-fluid{

  max-height: 3500px;
  background-color: #ececec;
  }
  .col-sm{
display: flex;
    justify-content: center;
  }
  h4{

  }
  .fadeIn {
opacity:0;
animation: fadeIn 1.5s ease-in-out;
animation-fill-mode:forwards;
animation-delay:0.5s;
}
h6{

opacity:0;
animation: fadeIn 1.5s ease-in-out;
animation-fill-mode:forwards;
animation-delay:1.5s;
}
h1{
  text-align: center;
}

.ring{
   stroke: #29c0b5; /*cor */
   stroke-width: 3px; /*espessura */
    fill: none; /*preenchimento */
}
.ring-interno{
   stroke: none; /*cor */
    fill: #29c0b5; /*preenchimento */
}
i{
  font-size: 35px;
  position: absolute;
  margin-top: 85px;
  margin-left: 134px;
 z-index: 2;
 animation: fadeIn 0.5s ease-in-out;
}


@keyframes fadeIn {
0% { opacity: 0; }
100% { opacity: 1; }

}

</style>
