<template>
  <div class="tab-bar">
      <div class="item">
          <router-line tag="span" class="iconfont icon-shouye"></router-line>
          <div>首页</div>
      </div>
      <div class="item">
          <router-line tag="span" class="iconfont icon-pindao"></router-line>
      </div>
      <div class="item">
          <router-line tag="span" class="iconfont icon-iconfontdongtai"></router-line>
      </div>
      <div class="item">
          <router-line tag="span" class="iconfont icon-wo"></router-line>
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
    .tab-bar {
        height: 10vh;
        width: 100%;
        display: flex;
        background-color: #fb7299;
        position: fixed;
        left: 0;
        bottom: 0;
    }

    .tab-bar .item {
        flex: 1;
        text-align: center;
        justify-content: space-between;       
    }

    .tab-bar .item .iconfont {
        line-height: 10vh; 
        font-size: 30px;
        color: #fff;
    }

</style>