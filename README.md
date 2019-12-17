自定义的通过Vue.extend（）创建的全局弹窗组件，即通过this.$confirm().then(()=>{}).catch(()=>{})进行调用
//
弹窗组件在common下的confirm中，设置其弹窗的组件vue文件，再设置弹窗的逻辑处理创建相应的js文件，进行逻辑处理，通过main.js中进行挂载到vue的原型上，进行全局调用
