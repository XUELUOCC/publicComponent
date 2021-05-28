// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//使用全局组件的方法
import theConfirm from './common/confirm/confirm.js'
Vue.prototype.$Myconfirm=theConfirm

//使用mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

//使用mui
// import './assets/lib/mui/dist/css/mui.css'
// import mui from './assets/lib/mui/dist/js/mui'
// Vue.prototype.mui=mui;

//ant design vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

Vue.config.productionTip = false

// import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
