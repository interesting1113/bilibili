<template>
  <div class="navbar">
      <div class="logo">
          <img src="../statics/images/logo.png" alt="">
      </div>
      <div class="search"> 
          <p>
             请输入您想搜索的内容
            <i class="iconfont icon-sousuosearch82"></i>
          </p>
      </div>
      <div>
          <img src="../statics/images/icon3.png" alt="">
          <p>下载App</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .navbar {
        height: 12.5vw;
        background-color: white;
        display: flex;
               
    }
    .navbar .logo {
        display: flex;
        width: 110px;
        justify-content: center;
        align-items: center;
    }

    .navbar .logo img {
        width: 80%;
    }

    .search {
        flex: 1;
        display: flex;
        align-items: center;
        margin: 0 5px;

    }

    .search p{
        background-color: #f4f4f4;
        height: 26px;
        line-height: 26px;;
        padding-left: 30px;
        position: relative;
        width: 90%;
        border-radius: 13px;
        color: #aaa;
        font-size: 12px;;
    }

    .search p i{
        position:absolute;
        left: 10px;
        top:50%;
        transform: translate(0, -50%);
        color:#aaa;
       
    }



    div:nth-child(3){
       display: flex;
       justify-content: center;
       align-items: center;
    }

    div:nth-child(3) img{
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
    div:nth-child(3) p{
        padding: 5px 10px;
        margin: 0 5px;
        background-color: #fb7299;
        color: #fff;
        font-size: 13px;
        border-radius: 3px;
    }


    
</style>