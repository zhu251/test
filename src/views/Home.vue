
<template>
<!-- 小米商城 -->
  <div class="home">
   <navbar></navbar>
   <header>
      <div class="container">
        <div class="logo">
          <span class="iconfont icon-xiaomi"></span>
          <span class="iconfont icon-home"></span>
        </div>
        <ul class="s-menu" 
          @mouseover.stop="smenuOverClick" >
          <li v-for='(item, i) in sMenuList' :key='i' @mouseout.stop="smenuOutClick" >
            <router-link :to="item.path"  :data-flag='item.flag'>{{item.name}}</router-link>
          </li>
        </ul>
        <div class="search-group" :class="{inputActive: searchMenuShow}">
          <div class="input-grout">
            <input type="text"  @focus="searchMenuShow = true" @blur="searchMenuShow = false"/>
            <ul class="select-menu" v-show="searchMenuShow">
              <li>小米</li>
              <li>小米</li>
              <li><router-link to="/login">登录</router-link></li>
              <li>
                <a href="../components/Login.vue">55</a>
              </li>
              <li>小米</li>
              <li>小米</li>
            </ul>
            <div class="hot-search" v-show='!searchMenuShow'>
              <span>小米9</span>
              <span>小米9 se</span>
            </div>
          </div>
          <!-- 搜索按钮 -->
          <span class="iconfont icon-fangdajing"></span>
        </div>
      </div>
      <!-- 快捷菜单弹窗 -->
      <div class="smenm-window" 
         @mouseover="spopOverClick"
         @mouseout="spopOutClick"
         :class="{'smenm-window-show':smenmWindowShow}">
         <div class="container">
           <ul>
             <li v-for='(item, i) in smenuWindowList' :key="i" > 
               <img :src="item.src" alt="">
                <h3>{{item.name}}</h3>
               <p>{{item.price}}元起</p>
              </li>
           </ul>
          </div>
      </div>
     
   </header>

   <div class="sbanner">
     <div class="container">
        <!-- 轮播图 -->
        <div class="swiper-container" id="sbanner-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../assets/swiper/swiper-1.webp" alt=""></div>
                <div class="swiper-slide"><img src="../assets/swiper/swiper-2.webp" alt=""></div>
                <div class="swiper-slide"><img src="../assets/swiper/swiper-3.webp" alt=""></div>
                <div class="swiper-slide"><img src="../assets/swiper/swiper-4.webp" alt=""></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"> <span class="iconfont icon-selectleft"></span> </div>
            <div class="swiper-button-next"><span class="iconfont icon-selectright"></span></div>
        </div>
        <!-- 侧栏菜单 -->
        <div class="sbanner-menu-group">
          <ul class="side-menu" 
            @mouseover.stop="sbannerShowClick($event, true)" @mouseout.stop="sbannerShowClick($event,false)"  >
            <li class="clear" v-for="(item, i) in bannerData" :key="i" :data-index='i'>{{item.name}}<span class="iconfont icon-rightJT"></span> </li>
          </ul>
          <!-- 菜单内容 -->
          <div class="menu-content" v-show="sbannerMenuShow"
            @mouseover.stop="sbannerContentShowClick($event, true)" @mouseout.stop="sbannerContentShowClick($event,false)">
            <ul >
              <li v-for="(item, i) in sbannerMenuData[0]" :key='i'>
                <img :src="item.src" alt=""> <span>{{item.name}}</span>
               </li>
            </ul>
            <ul v-if=' sbannerMenuData[1].length !== 0'>
              <li v-for="(item, i) in sbannerMenuData[1]" :key='i'>
                <img :src="item.src" alt=""> <span>{{item.name}}</span>
               </li>
            </ul>
            <ul v-if=' sbannerMenuData[2].length !== 0'>
              <li v-for="(item, i) in sbannerMenuData[2]" :key='i'>
                <img :src="item.src" alt=""> <span>{{item.name}}</span>
               </li>
            </ul>
            <ul v-if=' sbannerMenuData[3].length !== 0'>
              <li v-for="(item, i) in sbannerMenuData[3]" :key='i'>
                <img :src="item.src" alt=""> <span>{{item.name}}</span>
               </li>
            </ul>
            
          </div>   


        </div>
     </div>
   </div>

  <div class="sbanner-sub">
    <div class="container">
      <ul>
        <li>
          <span class="iconfont icon-zhong"></span>
          <span>小米秒杀</span>
        </li>
        <li>
          <span class="iconfont icon-dashaxiaoqudizhi01"></span>
          <span>小米秒杀</span>
        </li>
        <li>
          <span class="iconfont icon-zhong"></span>
          <span>小米秒杀</span>
        </li>
        <li>
          <span class="iconfont icon-SIMka"></span>
          <span>小米秒杀</span>
        </li>
        <li>
          <span class="iconfont icon-qian"></span>
          <span>小米秒杀</span>
        </li>
        <li>
          <span class="iconfont icon-qian1"></span>
          <span>小米秒杀</span>
        </li>
      </ul>
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96674dc77ff0a34eb07e817cc9f6011a.jpg?w=632&h=340" alt="">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7b51b721c3319e9c2916cc41cd9c695.jpg?w=632&h=340" alt="">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340" alt="">
    </div>

  </div>
  <div class="home-main">
    <!-- 闪购 -->
    <div class="container shan-gou clear">
      <h3>小米闪购  
        <div class="swiper-button-group">
          <span class="shan-gou-prev iconfont icon-selectleft"></span>
          <span class="shan-gou-next iconfont icon-selectright"></span>
        </div> 
      </h3>
     
      <div class="shan-gou-time">
        <h2>14:00 场</h2>
        <div class="iconfont icon-shandian"></div>
        <p>距离结束还有</p>
        <div class="dao-ji-shi">
          <span>{{djs.h}}</span>:<span>{{djs.m}}</span>:<span>{{djs.s}}</span>
        </div>
      </div>
      <div class="shan-gou-swiper">
        <div class="swiper-container shan-gou-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="https://i8.mifile.cn/a1/pms_1537512366.95185316!200x200.jpg" alt="">
                  <h4 class="title">云米不锈钢真空保温壶 黑色</h4>
                  <p class="desc">持续保温</p>
                  <p class="price"> <span>199元</span><span>200元</span></p>
                </div>
                <div class="swiper-slide">
                  <img src="https://i8.mifile.cn/a1/pms_1537512366.95185316!200x200.jpg" alt="">
                  <h4 class="title">云米不锈钢真空保温壶 黑色</h4>
                  <p class="desc">持续保温</p>
                  <p class="price"> <span>199元</span><span>200元</span></p>
                </div>
                <div class="swiper-slide">
                  <img src="https://i8.mifile.cn/a1/pms_1537512366.95185316!200x200.jpg" alt="">
                  <h4 class="title">云米不锈钢真空保温壶 黑色</h4>
                  <p class="desc">持续保温</p>
                  <p class="price"> <span>199元</span><span>200元</span></p>
                </div>
                <div class="swiper-slide">
                  <img src="https://i8.mifile.cn/a1/pms_1537512366.95185316!200x200.jpg" alt="">
                  <h4 class="title">云米不锈钢真空保温壶 黑色</h4>
                  <p class="desc">持续保温</p>
                  <p class="price"> <span>199元</span><span>200元</span></p>
                </div>
                <div class="swiper-slide">
                  <img src="https://i8.mifile.cn/a1/pms_1537512366.95185316!200x200.jpg" alt="">
                  <h4 class="title">云米不锈钢真空保温壶 黑色</h4>
                  <p class="desc">持续保温</p>
                  <p class="price"> <span>199元</span><span>200元</span></p>
                </div>
                <div class="swiper-slide">
                  <img src="https://i8.mifile.cn/a1/pms_1537512366.95185316!200x200.jpg" alt="">
                  <h4 class="title">云米不锈钢真空保温壶 黑色</h4>
                  <p class="desc">持续保温</p>
                  <p class="price"> <span>199元</span><span>200元</span></p>
                </div>
                <div class="swiper-slide">
                  <img src="https://i8.mifile.cn/a1/pms_1537512366.95185316!200x200.jpg" alt="">
                  <h4 class="title">云米不锈钢真空保温壶 黑色</h4>
                  <p class="desc">持续保温</p>
                  <p class="price"> <span>199元</span><span>200元</span></p>
                </div>
                <div class="swiper-slide">
                  <img src="https://i8.mifile.cn/a1/pms_1537512366.95185316!200x200.jpg" alt="">
                  <h4 class="title">云米不锈钢真空保温壶 黑色</h4>
                  <p class="desc">持续保温</p>
                  <p class="price"> <span>199元</span><span>200元</span></p>
                </div>
                <div class="swiper-slide">
                  <img src="https://i8.mifile.cn/a1/pms_1537512366.95185316!200x200.jpg" alt="">
                  <h4 class="title">云米不锈钢真空保温壶 黑色</h4>
                  <p class="desc">持续保温</p>
                  <p class="price"> <span>199元</span><span>200元</span></p>
                </div>
                
            </div>
        </div>
      </div>

    </div>
    <div class="gg container">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/10fb0086cb21120c53248a3d8cc56dc5.jpg?thumb=1&w=1226&h=120&f=webp&q=90" alt="">
    </div>

    <p id="p1">当前的数量为{{msg}}</p>
    <GoodsList class="container" :list='glList' :msgs='msg' @valupdata='updata'>
    </GoodsList>
   
    <!-- <GoodsList class="container" :list='glList'></GoodsList>
    <GoodsList class="container" :list='glList'></GoodsList>
    <GoodsList class="container" :list='glList'></GoodsList>
    <GoodsList class="container" :list='glList'></GoodsList>
    <GoodsList class="container" :list='glList'></GoodsList>
    <GoodsList class="container" :list='glList'></GoodsList>
    <GoodsList class="container" :list='glList'></GoodsList> -->

  </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import GoodsList from '@/components/GoodsList.vue'
export default {
  name: 'home',
  components:{GoodsList},
  data() {
    return {
      msg:1, 
      sMenuList:[
        { name:'小米手机',flag:'xm',path:'' },
        { name:'Redmi 红米',flag:'rm',path:'' },
        { name:'电视',flag:'tv',path:'' },
        { name:'笔记本',flag:'pc',path:'' },
        { name:'家电',flag:'jd',path:'' },
        { name:'路由器',flag:'ly',path:'' },
        { name:'智能硬件',flag:'zn',path:'' },
        { name:'服务',path:'' },
        { name:'社区',path:'' }
      ],
      smTime:null, //快捷菜单的定时器
      smenmWindowShow: false, //显示快捷菜单
      searchMenuShow:false, //显示探索菜单
      smenuWindowListAll:[], 
      smenuWindowList:[],
      // banner中菜单数据
      bannerData:{},
      sbannerMenuData:[[],[],[],[],],
      sbannerMenuShow:false, //显示或隐藏banner中菜单
      sbannerTime:null, 
      // 闪购倒计时
      djs:{
       h:'--' ,m:'--',s:'--'
      },

    // 商品列表模拟数据
      glList:{
                "imgs":["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b95465d9ae05adaa2bcff10863bc2f12.jpg?thumb=1&w=234&h=300&f=webp&q=90",
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a660ce095e8f553a9ed1515265f4e9fc.jpg?thumb=1&w=234&h=300&f=webp&q=90"],
                "last":{"src":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/550177d2e54387521bce9e78cb2949dd.jpg?thumb=1&w=100&h=100&f=webp&q=90",
                    "title":'xxxxx',"price":99},
                    "list":[
                        {"src":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/011dd8493ad62f3793dbb63d9fbd3bc0.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                         "title":"xxxx","desc":"ssss", "price":{ new:888}},
                         {"src":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/011dd8493ad62f3793dbb63d9fbd3bc0.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                         "title":"xxxx","desc":"ssss", "price":{ old:999 ,new:888}},
                         {"src":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/011dd8493ad62f3793dbb63d9fbd3bc0.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                         "title":"xxxx","desc":"ssss", "price":{ old:999 ,new:888}},
                         {"src":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/011dd8493ad62f3793dbb63d9fbd3bc0.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                         "title":"xxxx","desc":"ssss", "price":{ old:999 ,new:888}},
                         {"src":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/011dd8493ad62f3793dbb63d9fbd3bc0.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                         "title":"xxxx","desc":"ssss", "price":{ old:999 ,new:888}},
                         {"src":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/011dd8493ad62f3793dbb63d9fbd3bc0.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                         "title":"xxxx","desc":"ssss", "price":{ old:999 ,new:888}},
                         {"src":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/011dd8493ad62f3793dbb63d9fbd3bc0.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                         "title":"xxxx","desc":"ssss", "price":{ old:999 ,new:888}},
                    ]
            }
    }
  },
  created() {
    let cousts = localStorage.getItem('coust')
    if(!cousts){
         cousts=10
         localStorage.setItem('coust',10)
    }
    this.msg = cousts
 
    // 初始化数据
    this.initData()
    setInterval(() => {
      let time={h:19,m:50,s:0,}
      // 未来时间 
      let d1 = new Date()
      d1.setHours(time.h)
      d1.setMinutes(time.m)
      d1.setSeconds(time.s)
      let d1MS = d1.getTime()
      // 当前时间
      let d2 = new Date()
      let d2MS =  d2.getTime()

      let djsMs = d1MS - d2MS
      let h =  Math.floor(djsMs/1000/60/60)
      let m = Math.floor(djsMs/1000/60%60)
      let s = Math.floor(djsMs/1000%60)
      if(10 > h){
        h = '0'+h
      }
      if(10 > m){
        m = '0'+m
      }
      if(10 > s){
        s = '0'+s
      }
      this.djs={h,m,s}
    }, 1000);


  },
  mounted(){
    new Swiper ('#sbanner-container', {
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }) 
      
     new Swiper ('.shan-gou-container', {
        loop: true, // 循环模式选项
        slidesPerView:4,
        slidesOffsetBefore:-14,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.shan-gou-next',
          prevEl: '.shan-gou-prev',
        },
      })   
  },
  methods:{
    updata(val){
      this.msg=val
      
    },
    // 初始化数据
    initData(){
       // 获取导航菜单
      // const url = 'http://192.168.1.3/xm-sever/test.php?flag=mainMenu'
      // ajax(url).then( res=>{
      //     this.smenuWindowListAll =  res
      //     this.smenuWindowList = this.smenuWindowListAll['jd']
      // }).catch(err=>console.log(err))

      // 获取banner菜单
      // const url2 = 'http://192.168.1.3/xm-server/test.php?flag=bannerMenu'
      // ajax(url2).then(res=>{
      // for (let i = 0; i < res.menu.length; i++) {
      //   let arr = []
      //   arr[0] = res.menu[i].items.slice(0,6)
      //   arr[1] = res.menu[i].items.slice(6,12)
      //   arr[2] = res.menu[i].items.slice(12,18)
      //   arr[3] = res.menu[i].items.slice(18)
      //   res.menu[i].newitems = arr
      // }
      // this.bannerData = res.menu;

      // }).catch(err=>console.log(err))
    },

    // banner中菜单显示或隐藏
    sbannerShowClick(ev, flag){
      if(this.sbannerTime){
        clearTimeout(this.sbannerTime)
      }
      if('LI' == ev.target.nodeName){
        if(!flag){
          this.sbannerTime = setTimeout(() => {
            this.sbannerMenuShow = false;
          }, 500);
        }
        if(flag){
          let index = ev.target.dataset.index

          this.sbannerMenuData = this.bannerData[index].newitems
        }
        this.sbannerMenuShow = flag
      }
    },

    sbannerContentShowClick(ev,flag){
       if(this.sbannerTime){
        clearTimeout(this.sbannerTime)
      }
        if(!flag){
          this.sbannerTime = setTimeout(() => {
            this.sbannerMenuShow = false;
          }, 500);
        }

        this.sbannerMenuShow = flag
    },



    // 鼠标进入快捷菜单时显示菜单弹窗
    smenuOverClick(ev){
       if(this.smTime){
         clearTimeout(this.smTime)
       }
      const target = ev.target
      if('A' == target.nodeName){
        if(target.dataset.flag){
          this.smenmWindowShow = true
           this.smenuWindowList = this.smenuWindowListAll[target.dataset.flag]
        }
      }
    },
    // 鼠标进入快捷菜单时隐藏菜单弹窗
    smenuOutClick(ev){
        this.smTime = setTimeout(() => {
          this.smenmWindowShow = false
        }, 100);
    },
    // 进入弹窗
    spopOverClick(ev){
       if(this.smTime){
         clearTimeout(this.smTime)
       }

     
    },
    // 移出弹窗
    spopOutClick(ev){
       this.smTime = setTimeout((ev) => {
          this.smenmWindowShow = false
        }, 100);
    }
  }
}
</script>

<style lang="scss" scoped>
@import url(../../node_modules/swiper/dist/css/swiper.css);
#p1{
  margin-left: 115px; font-size: 25px;
}
// 字休颜色
$fontColor:#b0b0b0;
$activeColor:#ff6700;
$bgGray:#f5f5f5;
.home{
  background: #fff;
  position: relative;
  z-index: 900;
  height: 2000px;
}
.container{
  width: 1226px;
  margin: 0 auto;
}

header{
  background: #fff;
  position: relative;
  z-index: 900;
  .container{
    padding: 22px 0;
    position: relative;
  }

  .logo{
    width:55px;height: 55px;
    position: relative;
    overflow: hidden;
    background: $activeColor;
    display: inline-block;
    vertical-align: middle;
    .icon-xiaomi,.icon-home{
      width:55px; height: 55px;
      line-height: 55px;
      text-align: center;
      font-size: 36px; color:#fff;
      background: $activeColor;
      transition: .15s;
    }
    .icon-home{
      position: absolute;
      top: 0;right: -55px;
    }
    &:hover .icon-xiaomi,&:hover .icon-home{
      transform:translatex(-55px);
    }
  }
  .s-menu{
    display: inline-flex;
    vertical-align: middle;
    margin-left: 150px;
    a{
       font-size: 16px; color: #333;
       height: 55px; line-height: 55px;
       padding:0 10px;
      &:hover{
        color:$activeColor;
      }
    }
  }
  .smenm-window{
    position: absolute;
    top:99px; 
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: .5s;
    text-align: center;
    li{
      display: inline-block;
      img{
        padding:  0 20px;
        border-right: 1px solid  $fontColor;
      }
      &:last-child>img{
        border-right: none;
      }
      // 商品名称
      h3{
        font-size: 12px; 
        color: $fontColor;
        margin-top: 10px;
      }
      // 价格
      p{
        color: $activeColor;
        font-size: 12px;
      }
     }
  
  }
  .smenm-window-show{
    height:220px;
    border:1px solid $fontColor;
    box-shadow: 0 5px 5px $fontColor;
    border-left: none;
    border-right:none;
    background: #fff;
  }

  .search-group{
    position: absolute;
    top: 0; right: 0;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    height: 50px;
    border: solid 1px $fontColor;
    .input-grout{
      position: relative;
      // 搜索弹窗
      .select-menu{
        position: absolute;
        left: -1px;
        width: 245px;
        margin-top: 1px;
        border: 1px solid $fontColor;
        border-top: none;
        li{
          padding: 5px 10px;
          background: #fff;
          &:hover{
            background: rgba(221, 221, 221, 0.396);
          }
        }
      }
      //热搜
      .hot-search{
        position: absolute;
        right: 10px; top:16px;
        display: inline-flex;
        span{
          margin-left: 10px;
          background: #eee; 
          padding: 0 5px;
          font-size: 12px;
          color: $fontColor;
          cursor: pointer;
          &:hover{
            background: $activeColor;
            color: #fff;
          }
        }

      }
    }
    // 输入框
    input{
      height: 50px; width: 225px;
      padding: 0 10px;
    }
   
    // 搜索按钮
    .iconfont{
      height: 50px;width:50px;
      font-size: 20px;
      text-align: center;
      line-height: 50px;
      border-left: 1px solid $fontColor;
      cursor: pointer;
      &:hover{
        background:$activeColor;
        color: #fff;
      }
    }

    // 输入框获取焦点时
    &.inputActive,&.inputActive>.iconfont ,&.inputActive .select-menu{
      border-color: $activeColor;
    }
    
  }
}
// 轮播图
.sbanner{
  position: relative;
  z-index: 800;
  .container{
    height: 460px;
    position: relative;
  }
  .swiper-container {
    width: 100%;
    height: 460px;
    position: relative;
    z-index: 100;
  } 
  // 侧边菜单组
  .sbanner-menu-group{
    position: absolute;
    top: 0; left: 0;  bottom: 0;
    // width: 100%;
    background: rgba(105,101,101,.6);
    z-index: 200;
    display: flex;
    flex-direction: row;
    align-items: center;
    // 侧边菜单栏
    .side-menu{
      width: 234px;
      li{
        height: 42px; line-height: 42px;
        padding-left: 30px;
        color: #fff;
        cursor: pointer;
        .iconfont{
          float: right;
          font-size: .85em; color: #fff;
          margin-right: 10px; 
        }
        &:hover{
          background: $activeColor;
        }
      }
      
    }
    // 菜单内容
    .menu-content{
      height: 458px;
      background: #fff;
      // flex-grow: 1;
      display: flex;
      flex-direction:row;
      border: 1px solid rgba(211, 210, 210, 0.548);
      border-left: 0;
      box-shadow: 5px 0 5px rgba(212, 212, 212, 0.322);
      ul{
        width:248px;
        box-sizing: border-box;
        overflow: hidden;
        li{
         height: 76px; line-height: 76px;
         padding-left: 10px;
         cursor: pointer;
         img,span{
           vertical-align: middle;
         }
         span{
           margin-left: 10px;
           font-size: 14px; color: #666;
           &:hover{
             color: $activeColor;
           }
         }
        }
      }

    }
  }
  // 修改轮播图的左按钮
  .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    left: 234px;
    background-image: none;
  }
  .swiper-button-prev, .swiper-button-next {
      width: 41px;
      height: 69px;
      margin-top: -22px;
      
      line-height: 69px;
      text-align:center;
      .iconfont{
        font-size: 40px;
        color: $fontColor;
      }

      &:hover{
        background: rgba(0, 0, 0, 0.432);
        .iconfont{
          color: #fff;
        }
        
      }
  }
  .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    background-image: none;
    right: 0px;
  }

  // 修改分页器位置
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
    bottom: 10px;
    left:auto; //清除原定位
    right: 20px;
    width: auto;
  }

}

//
.sbanner-sub{
  margin-top: 14px;

  .container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
     img{
      width:316px;
      height: 170px;
    }
    ul{
      width: 234px;
      height: 170px;
      background: #5f5750;
      li{
        box-sizing: border-box;
        width: 78px; height: 85px;
        display: inline-block;
        text-align: center;
        border-right: 1px solid rgba(168, 168, 168, 0.822);
        cursor: pointer;
        span{
          display: block;
          color: $fontColor;
          font-size: 12px;
          transition: color .3s;
        }
        .iconfont{
          font-size: 28px;
          margin-top: 8px;
        }
        &:nth-child(3),&:nth-child(6){
          border-right:none;
        }
        &:nth-child(1),&:nth-child(2),&:nth-child(3){
          border-bottom: 1px solid rgba(168, 168, 168, 0.822);
        }
        &:hover>span{
          color: #fff;
        }
      }

    }
  }
 

 
}


.home-main{
  background: $bgGray;
  // 闪购
  .shan-gou{
    margin-bottom: 20px;
    h3{
      height: 38px;
      padding-top: 20px;
    }
    .swiper-button-group{
      float: right;
      .iconfont{
        width: 36px; height: 24px;
        font-size: 18px;  color: $fontColor;
        cursor: pointer;
        border: 1px solid $fontColor;
        text-align: center;
        &:first-child{
          border-right: none;
        }
        &:hover{
          color: $activeColor;
        }
        &:focus {
            outline: none;
        }
      }
    }
    .shan-gou-time{
      width: 234px;
      height: 340px;
      margin-right: 14px;
      display: inline-block;
      vertical-align: middle;
      background: #f1eded;
      border-top: 1px solid #e53935;
      text-align: center;
      h2{
        font-size: 21px; 
        color: #ef3a3b;
        margin-top: 15px;
      }
      .iconfont{
        display: block;
        padding-left: 46px;
        font-size: 78px;
        color: #e53935;
      }
      p{
        font-size: 14px; color: #333;
      }
      .dao-ji-shi{
        margin-top: 15px;
        font-size: 24px;
          line-height: 46px;
        span{
          display: inline-block;
          width: 46px; 
          height: 46px;
          background: #605751;
          color: #fff;
          
        }
      }
    }
    .shan-gou-swiper{
      display: inline-block;
      width: 978px;
      height: 340px;
      position: relative;
      vertical-align: middle;

      .swiper-slide{
        text-align: center;
        background: #fff;
        width: 234px !important;
        margin-right: 14px;
        height: 340px;
        border-top: 1px solid rgb(247, 167, 76);
        .title{
          font-size: 14px;
          font-weight: normal;
          color: #333;
          margin-top: 20px;
        }
        .desc{
          font-size: 12px;  
          color: $fontColor;
        }
        .price{
          font-size: 14px;
          color: $fontColor;
          margin-top: 15px;
          
          span:first-child{
            margin-right: 8px;
            color: $activeColor;
          }
          span:last-child{
            text-decoration: line-through;
          }
        }
      }
    }

  }
  // 广告栏
  .gg{
    margin-bottom: 16px;
  }
}

</style>