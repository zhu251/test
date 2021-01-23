<template>
    <div class="goods-list">
        <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input type="number" id="test" class="mui-input-numbox"
            :value="msgs" @change="count" ref="numbox" readonly>
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
        <!-- <div class="right">
                <el-button type="info" @click="cub">-</el-button>
                <input type="text" :value="msgs" ref="numbox" @change="count">
                <el-button type="info" @click="add">+</el-button>
        </div> -->
        <div class="top">
            <h3>家电</h3>
            <nav>
                <a href="javascript:;" @mouseover.stop="navFlag = 0" :class="{aActive: navFlag==0}" >热门</a>
                <a href="javascript:;" @mouseover.stop="navFlag = 1" :class="{aActive: navFlag==1}">电视影音</a>
            </nav>
        </div>
        <ul class="g-list">
            <li v-for="(item, i) in list.imgs" :key='i'><img :src="item" alt=""></li>
            <li v-for='(item, i) in list.list' :key='i+100'>
                <img :src="item.src" alt="">
                <h4>{{item.title}}</h4>
                <p class="desc">{{item.desc}}</p>
                <p class="price">
                    <span>{{item.price.new}}元</span>
                    <span v-if="item.price.old">{{item.price.old}}元</span>
                </p>
            </li>
           
            <li>
                <div> 
                    <img :src="list.last.src" alt="">
                     <h4>{{list.last.title}}</h4>
                      <p>{{list.last.price}}元</p>
                 </div>
                <div>
                    <div class="g-info">  
                        <h3>浏览更多</h3>
                        <p>更多</p>
                    </div>
                    <span class="iconfont icon-youjiantou"></span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    mounted() {
     //   mui(".mui-numbox").numbox()
    },
    props:['list','msgs'],
    data() {
        return {
            navFlag:0,
        }
    },
    methods: {
        // add(){this.$refs.numbox.value++},
        // cub(){this.$refs.numbox.value--},
        count(){
            let val = this.$refs.numbox.value
            console.log(this.$refs.numbox.value);
             this.$emit('valupdata',val)
        },
    },
}
</script>

<style lang="scss" scoped>
$fontColor:#b0b0b0;
$activeColor:#ff6700;
$bgGray:#f5f5f5;

.top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #333;
    h3{
        font-size: 22px;
    }
    a{
        font-size: 16px;
        color: #333;
        margin-left:30px; padding-bottom: 3px;
        border-bottom: 2px solid rgba(255, 255, 255, 0);
    }
    .aActive{
        color: $activeColor;
        border-color: $activeColor;
    }
}
.g-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li{
        cursor: pointer;
        box-sizing: border-box;
        width: 234px;
        height: 300px;
        padding: 20px 0;
        background: #fff;
        margin-bottom: 14px;
        text-align: center;
        img{
            width: 160px;
            height: 160px;
        }
        
        h4{
            font-size: 14px; color: #333;
            margin-top: 18px;
        }
        .desc{
            font-size: 12px; color: $fontColor;
        }
        .price{
            font-size: 14px; 
            color: $activeColor;
            span:nth-child(2){
                color: $fontColor;
                text-decoration: line-through;
                margin-left: 8px;
            }
        }
        transition: .2s;
        &:nth-child(1){
             order: 1;
             padding: 0;
             img{
                 width: auto; height: auto;
             }
        }
        &:nth-child(2){
             order: 6;
              padding: 0;
              img{
                 width: auto; height: auto;
              }
        }
         &:nth-child(6){
             order: 2;

        }
        &:nth-child(3),&:nth-child(4),&:nth-child(5){
             order: 3;
        }
        
       
        &:nth-child(7),&:nth-child(8),&:nth-child(9),&:nth-child(10){
             order: 6;
        }
        &:nth-child(10){
            padding: 0;
            background: none;
            text-align: left;
            position: relative;
            cursor: default ;
            >div{
                box-sizing: border-box;
                border: 1px solid #fff;
                background: #fff;
                height: 143px;
                 transition: .2s;
               cursor: pointer;
            }
            >div:first-child{
                padding-left: 20px;
                img{
                    width: 80px; height: 80px;
                    position: absolute;
                    right: 5px; top: 31px;
                }
                h4{
                    font-size: 14px; color: #333;
                    margin-top: 40px;
                }
                p{
                    color: $activeColor;
                }
            }
            >div:last-child{
                margin-top: 14px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                .g-info{
                    h3{
                        font-size: 18px;
                        color: #333;
                    }
                    p{
                        font-size: 12px; 
                        color: $fontColor;
                    }
                }
                .iconfont{
                    color: $activeColor;
                    font-size: 46px;
                    margin-left: 10px;
                }
            }
        }
       
        &:not(:nth-child(10)):hover, &:nth-child(10)>div:hover {
            -webkit-box-shadow: 0 15px 30px rgba(0,0,0,.1);
            box-shadow: 0 15px 30px rgba(0,0,0,.1); 
            -webkit-transform: translate3d(0,-2px,0);
            transform: translate3d(0,-2px,0); 
        }
    }
}
</style>