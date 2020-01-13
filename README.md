
弹窗组件在common下的confirm中，设置其弹窗的组件vue文件，再设置弹窗的逻辑处理创建相应的js文件，进行逻辑处理，通过main.js中进行挂载到vue的原型上，进行全局调用

----1.自定义的通过Vue.extend（）创建的全局弹窗组件，即通过this.$confirm().then(()=>{}).catch(()=>{})进行调用

随机验证码组件，在其他common/identify/identify.vue中，即创建一个子组件，然后再父组件中进行调用

鼠标滚动无限加载指令，在src\common\infiniteScroll中，即自定义指令，监听scroll事件，实现无限滚动

日历组件，在src\common\DatePicker中，实现基本的日历切换和查看功能

文字提示组件,在src\common/toolTip中，toolPage.vue是其中的父组件(默认显示的页面),toolTip.vue是子组件(toolTip标签的内容)，除了实现基本的文字提示，同样可以在其中的内容添加任何内容。

---1.使用插槽，在子组件的标签中插入dom元素，在子组件中显示，

---2.插槽内容的样式和定位，则在slot外嵌套另一个div，设置样式相对定位绝对定位，确定其位置

---3.动态高度和定位的实现，在updated中获取到slot中的内容的高度clientHeight，动态绑定style属性设置top值

