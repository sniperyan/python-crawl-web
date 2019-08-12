import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// animate动画库
import 'animate.css'
import './style/reset.css'
import router from './router'

Vue.use(ElementUI, {
  size: 'medium'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
