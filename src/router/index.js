import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomeContainer from '../components/HomeContainer.vue'
import NotesContainer from '../components/NotesContainer.vue'
import DownloadContainer from '../components/DownloadContainer.vue'
import MessageContainer from '../components/MessageContainer.vue'

export default new Router({
  routes: [
    { path:'/',redirect:'/home'},
    { path: '/home', component: HomeContainer },
    { path: '/notes', component: NotesContainer },
    { path: '/download', component: DownloadContainer },
    { path: '/message', component: MessageContainer }
  ]
})
