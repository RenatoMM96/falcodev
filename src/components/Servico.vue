<template lang="html">

  <!--==========================
        Services Section
      ============================-->
      <section id="services">
          <div class="container">
              <header class="section-header wow fadeInUp">
                  <h1>Serviços</h1>
                  <p class="text-center">
                      Prezamos pela melhoria contínua e compromisso com prazo.Nosso serviços não terminam
                      com a entrega do projeto, pelo contrário é só o início de uma longa jornada de atualizações
                      melhorias e aperfeiçoamentos para levar a você sempre um site sempre moderno.
                  </p>
              </header>

              <div class="row">
                  <div class="col-lg-6 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                      <div class="icon"><i class="material-icons">laptop_mac</i></div>
                      <h4 class="title"><a>Websites e Sistemas Web</a></h4>
                      <p class="description">
                          O site é uma regra para as empresas que querem sobreviver no mercado globalizado progressivo e competitivo,
                           é o endereço e sua marca no meio crescente digital.
                      </p>
                  </div>
                  <div class="col-lg-6 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                      <div class="icon">
                      <i class="material-icons">shopping_cart</i>
                        <h4 class="title">  <router-link :to="{ name: 'Demostracao', params: {} }">E-Commerce</router-link></h4>
                      </div>
                      <p class="description">
                          O comércio eletrônico está modificando e influenciando, completamente, o comportamento e modo de funcionamento do mercado,
                          é uma excelente forma de expansão do negócio físico.
                      </p>
                  </div>
              </div>

          </div>
      </section><!-- #services -->

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
/* Featured Services Section
--------------------------------*/
.box {
  padding: 30px 20px;
}

.box-bg {
  background-image: linear-gradient(0deg, #000000 0%, #242323 50%, #000000 100%);
}

.icon{
  text-align: center;
  line-height: 5.5;
}
.title{
  align-items: center;
  vertical-align: middle;
  color: #292929;
}

 i {
  color: #29c0b5;
  font-size: 48px;
  line-height: 1;
  vertical-align: middle;
}

 h4 {
   text-align: center;
  font-weight: 400;
  font-size: 18px;
  color: #292929;

}

a {
  text-align: center;
 font-weight: 500;
 font-size: 20px;
  color: #292929;
  vertical-align: middle;
  text-decoration: none;
}
a:visited{
  color: #292929;

}

a:hover {
  color: rgb(41, 192, 181);
}

 p {
   text-align: justify;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 0;
}

</style>
