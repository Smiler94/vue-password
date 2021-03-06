// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
import routes from './route.js'

const router = new VueRouter({
  routes
})

const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
