自定义的通过Vue.extend（）创建的全局弹窗组件，即通过this.$confirm().then(()=>{}).catch(()=>{})进行调用
//
弹窗组件在common下的confirm中，设置其弹窗的组件vue文件，再设置弹窗的逻辑处理创建相应的js文件，进行逻辑处理，通过main.js中进行挂载到vue的原型上，进行全局调用

随机验证码组件，在其他common/identify/identify.vue中，即创建一个子组件，然后再父组件中进行调用

鼠标滚动无限加载指令，在src\common\infiniteScroll中，即自定义指令，监听scroll事件，实现无限滚动

日历组件，在src\common\DatePicker中，实现基本的日历切换和查看功能
