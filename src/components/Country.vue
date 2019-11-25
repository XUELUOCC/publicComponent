<template>
  <div class="hello">
    <!-- <navBar></navBar> -->
    <h1>书城页面</h1>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    
    <h2>Ecosystem</h2>
    
  </div>
</template>

<script>
import navBar from '../common/NavBar/NavBar'
export default {
   components:{
        navBar
    },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
