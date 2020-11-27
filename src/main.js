import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Experience from './experience.vue'
import Home from './home.vue'
import Education from './education.vue'
import Skills from './skills.vue'
import Achievements from './achievements.vue'
import Contact from './contact.vue'
Vue.use(VueRouter);
const routes=[
  { path: '/',
    component:Home
  },
  { path: '/skills',
    component:Skills
  },
  { path: '/education',
    component:Education
  },
  { path: '/experience',
    component:Experience
  },
  { path: '/achievements',
    component:Achievements
  },
  {
    path: '/contact',
    //for dynamic use
    // path: '/users/:teamid',
    component:Contact
  },
];
const router= new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // renders is a hook to  to various vue files, running the js code present within it
})
