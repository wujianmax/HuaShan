import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router/index'


//完整引入，文件大
// import ElememtUi from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElememtUi)


// 按需引入，需要配置，无需引入样式，在引入组件时自动给你匹配了属性
import { Row, Button } from 'element-ui'

// Row.name组件标签默认为el-row，可以自己定义名称（wujian-row）
Vue.component(Row.name, Row)
Vue.component(Button.name, Button)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
