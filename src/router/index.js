import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Quem_somos from '@/components/Quem_somos'
import Tabela from '@/components/Tabela'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero_image'
import Contato from '@/components/Contato'
import Servico from '@/components/Servico'
import Demostracao from '@/components/aulas/Demostracao'
import Footer2 from '@/components/aulas/Footer2'
import AdicionarVideo from '@/components/aulas/AdicionarVideo'
import AdicionarVideo2 from '@/components/aulas/AdicionarVideo2'
import Logar from '@/components/autenticacao/Logar'
import CriarUsuario from '@/components/autenticacao/CriarUsuario'
import Vizualizacao from '@/components/aulas/Vizualizacao'



import firebase from 'firebase'




Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home

    },
    {
      path: '/quem_somos',
      name: 'Quem_somos',
      component: Quem_somos
    },
    {
      path: '/tabela',
      name: 'Tabela',
      component: Tabela
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/hero',
      name: 'Hero',
      component: Hero
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    },
    {
      path: '/servico',
      name: 'Servico',
      component: Servico
    },
    {
      path: '/demostracao',
      name: 'Demostracao',
      component: Demostracao,
      meta:{
        requiresAuth: true

      }
    },
    {
      path: '/footer2',
      name: 'Footer2',
      component: Footer2
    },
    {
      path: '/adicionar-video',
      name: 'AdicionarVideo',
      component: AdicionarVideo
    },
    {
      path: '/adicionar-video-2/:curso_slug',
      name: 'AdicionarVideo2',
      component: AdicionarVideo2
    },
    {
      path: '/logar',
      name: 'Logar',
      component: Logar
    },
    {
      path: '/criar-usuario',
      name: 'CriarUsuario',
      component: CriarUsuario
    },
    {
      path: '/vizualizacao',
      name: 'Vizualizacao',
      component: Vizualizacao
    },

  ]
})
router.beforeEach((to,from,next)=>{
//checar se o router requer o routerAuth
if(to.matched.some(rec => rec.meta.requiresAuth)){
let user = firebase.auth().currentUser
if (user) {
  // o processo de login foi feito
  next()

}  else {
  // não feito login
  next({ name: 'Logar' })
}

// checar estado de usuario
} else {
  next()
}
})

export default router
