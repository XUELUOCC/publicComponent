import Vue from 'vue'
import Confirm from './confirm.vue'

//Vue.extend返回的是一个扩展实例构造器，也就是预设了部分选项的Vue实例构造器。
//其主要用来服务于Vue.component，用来生成组件
//可以简单的理解为当在模板中遇到该组件名称作为标签的自定义元素时，会自动调用扩展实例构造器来生产组件实例，并挂载到自定义元素上。
let confirmStructor=Vue.extend(Confirm)   //返回一个实例创建的构造器，但实例构造器需要进行挂载到页面中

let theConfirm=function(text){
    return new Promise((res,rej)=>{       //返回一个promise，进行异步操作，成功时返回，失败时返回
        let confirmDom=new confirmStructor({
            el:document.createElement('div')
        })
        //在body中动态创建一个div元素，之后此div将会替换成整个vue文件的内容
        //可以通过$el属性来访问创建的组件实例
        document.body.appendChild(confirmDom.$el)

        //此时进行创建组件的逻辑处理
        confirmDom.text=text       //将需要传入的文本内容传给组件实例
        confirmDom.ok=()=>{     //箭头函数，在（）和{}之间增加=>,且去掉function
            res()   //正确时返回的操作
            confirmDom.flag=false;
        }
        confirmDom.no=()=>{
            rej()   //失败时返回的操作
            confirmDom.flag=false;
        }    
    })
}

//将逻辑函数进行导出和暴露
export default theConfirm

//最后将此组件的逻辑函数添加到vue的原型中去，使之能进行全局调用和直接调用，当调用时，就是执行逻辑函数中的内容
//在main.js中进行挂载，挂载到vue的原型上
//import confirm from './confirm.js'
//Vue.prototype.$confirm=confirm
//使用
// this.$confirm({
//     title:'标题',
//     msg:'内容',
//     btn:{
//         ok:'确定',
//         no:'取消'
//     }
// }).then(()=>{
//     console.log('ok')
// }).catch(()=>{
//     console.log('no')
// })
