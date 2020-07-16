<template>
    <div class="top-bar">
       <div class="user-info">      
            <img src="../../statics/images/icon3.png" alt="">
            <div class="top-bar-middle">
                <i class="iconfont icon-sousuosearch82"></i>
                <input type="text">
            </div>
            <div class="top-bar-right">
                <i class="iconfont icon-zhenhuichongtubiaozhizuo-kuozhan-"></i>
                <i class="iconfont icon-letter"></i>
            </div>
       </div>

       <div class="nav">
           <div class="menu">
               <div class="item">
                   直播
               </div>
                <div class="item">
                   推荐
               </div>
                <div class="item">
                    热门
               </div>
                <div class="item">
                   追番
               </div>
                <div class="item">
                    影视
               </div>
                <div class="item">
                   说唱区
               </div>
                <div class="item">
                   知识区
               </div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    .top-bar {
        height: 15vh;
        width: 100%;
        position: fixed;
        background-color:#fb7299;
        padding-top: 5vh;
       
    }
    .top-bar .user-info {
        /* border: 1px solid #000; */
        height: 5vh;
        display: flex;
        padding: 0 10vw;
        align-items: center;
    }
    .top-bar .user-info img {
        width: 40px;
        border-radius: 50%;
       
    }
    .top-bar .user-info .top-bar-middle {
        margin-left: 3vh;
    } 

    .top-bar .user-info .top-bar-middle i {
        position: absolute;
        margin-top: 0.5vh;
        margin-left: 1vw;
        font-size: 20px;
        color: #777;
    }

    .top-bar .user-info .top-bar-middle input {
        width: 50vw;
        height: 4vh;
        border-radius: 2vh;
        border: 0;
    }
    .top-bar .user-info .top-bar-right {
        width: 100%;
        display: flex;
        text-align: center;
        margin-left: 2vw;
    }

    .top-bar .user-info .top-bar-right i{
       font-size: 25px;
        margin-left: 3vw;
        color: #fff;
    }

   .top-bar .nav {
       height: 5vh;
       overflow-x: scroll;
   }

   ::-webkit-scrollbar {
       display: none;
   }
   .top-bar .nav .menu {
       display: flex;
       line-height: 5vh;
   }

   .top-bar .nav .menu  .item{
       margin-left: 10vw;
       white-space: nowrap;
       color: #fff;
   }

   

</style>