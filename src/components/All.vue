<template>
     
    <div id="app1">
        <div class="all">
            <router-link to="/vuexs">VUEXS</router-link>
            <home/>
        </div>
    </div>
</template>

<script>
import home from '../views/Home'

export default {
  components:{
    home
  },
    data() {
        return {
            
        }
    },
    methods: {
        btn(){

        }
    },
}
</script>

<style lang="less" scoped>
    .all{
      padding: 10px;


        a{
          font-size: 30px; color: red;
        }
    }
</style> 