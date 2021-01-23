<template>
    <div id="vuexs">
        <el-button type="primary" @click="conpany">主要按钮</el-button>
        <h1>（购物车）练习vuex</h1>
        <div class="shopbox">
            <div class="left">
                <ul v-for="(item, index) in list" :key="index" class="list">
                    <li><img :src=item.url width="300px"></li>
                    <h2>
                      <li>{{item.name}}</li>
                      <li>{{item.price}}</li>
                    </h2>
                </ul>
            </div>
            <div class="right">
                <el-button type="info" v-html="msg1"></el-button>
                <span>{{1}}</span>
                <el-button type="info" v-html="msg2"></el-button>
            </div>
        </div>
        <p>当前购物车总数量为 {{msg}}</p> 
        
    </div>
</template>

<script>
import {getProductList} from '../api/api'

export default {
    data() {
        return {
            msg1:'<h1>---</h1>', msg2:'<h1>++</h1>',
            msg:1,
            list:[
               {name:'毛衣'},
               {price:'￥13000'} ,
               {url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2951435735,4131829104&fm=26&gp=0.jpg'}
            ]
        }
    },
    methods: {
        conpany(){
            let that = this;
            let arg = {}
            getProductList(arg)
            .then(res=>{
                console.log(res)
            })
        }
    },
}
</script>

<style lang="less" scoped>
   #vuexs{
       p{
           position: fixed;
           left: 30px; top: 550px;
           font-size: 30px;
       }
        .shopbox{
             .right{
                 margin: -80px 480px;
                 span{
                     font-size: 30px;
                     margin: 10px;
                 }
             }
            .left{
                .list{
                    position: relative;
                    li{
                        margin: 20px;
                    }
                    h2{
                        position: absolute;
                        left: 330px; top: 290px;
                    }
                }
            }
        }
   }
</style>