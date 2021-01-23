<template>
    <div class="navbar">
        <div class="container">
           <ul class="nb-left">
               <li v-for='(item, i) in list' :key='i'>
                   <router-link :to="item.path">{{item.name}}</router-link>
               </li>
           </ul>
           <div class="nb-right">
               <router-link to="/login">登录</router-link>
               <a href="javascript:;">注册</a>
               <a href="javascript:;">消息通知</a>
               <div class="buttonGroup">
                   <button
                     @mouseover.stop="buyMenuShow = true"
                     @mouseout="buyMenuShow = false"
                     :class="{butActive:buyMenuShow}"> 
                      <span class='iconfont icon-fangdajing'></span> 购物车(0)</button>
                      <div class="buyMenu" v-show='buyMenuShow'
                      @mouseover.stop="buyMenuShow = true"
                      @mouseout="buyMenuShow = false">
                   </div>
               </div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[
                {name:'小米商城', path:'/'},
                {name:'MIUI', path:'/miui'},
                {name:'IoT', path:'/lot'},
                {name:'云服务', path:'/imi'},
                {name:'金融', path:'/jr'},
                {name:'有品', path:'/'},
                {name:'小爱开放平台', path:'/'},
                {name:'企业团购', path:'/'},
                {name:'资质证照', path:'/'},
                {name:'协议规则', path:'/'},
                {name:'下载app', path:'/'},
                {name:'Select Location', path:'/'},
                {name:'退出', path:'/logins'},
            ],
            buyMenuShow:false,
        }
    },
    methods:{
        btnlogn(){
         
        }
    }
}
</script>
<style lang="scss" scoped>
// 字休颜色
$fontColor:#b0b0b0;
$activeColor:#ff6700;
@mixin aAttr {
    font-size: 12px;
    line-height: 40px;
    color: $fontColor
}
.navbar{
    background: #333;
    position: relative;
    z-index: 999;
    .container{
        width: 1226px;height: 40px; margin: 0 auto;
        position: relative;
    }
   .nb-left{
       display:inline-flex;
    }
    li>a,.nb-right a{
        @include aAttr;
        padding: 0 5px;
        border-right: 1px solid #635b5b;
    }
    .nb-left li:nth-child(1)>a, .nb-right a:nth-child(1){
                padding-left:0;
    }
    li:last-child>a,.nb-right a:last-child{
        border-right: none;
    }
    a:hover{
        color:#fff;
    }
    .nb-right{
        position: absolute;
        right: 0;  top: 0;
        a{
            @include aAttr;
        }
        a:hover{
            color:#fff;
        }
        .buttonGroup{
            display: inline-block;
            position: relative;
            button{
                height: 40px;
                line-height: 40px;
                color: $fontColor;
                background: #424242;
                padding: 0 20px;
                margin-left: 20px;
                cursor: pointer;
                &:hover,&.butActive{
                    background: #fff;
                    color:$activeColor;
                }
            }
            .buyMenu{
                width: 300px;height: 100px;
                position: absolute;
                right: 0;
                background: #fff;
                box-shadow: 0 5px 5px rgb(216, 216, 216);
            }  
        }
    }
}
 
</style>