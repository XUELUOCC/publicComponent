<template>
  <div>
      <div class="footer">底部组件</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.footer{
    width:1000px;
    height:200px;
    border:1px solid black;
    position:absolute;
    bottom:0;
    left:50%;
    margin-left:-500px;
    text-align: center;
    line-height:200px;
    font-size:24px;
}
</style>
