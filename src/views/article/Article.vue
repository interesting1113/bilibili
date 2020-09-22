<template>
  <div class="detail" v-if="model">
      <nav-bar></nav-bar>
      <div class="detailInfo">
          <div class="video">
              <video :src="model.content" preload controls :poster="model.img"></video>
          </div>
          <div class="rouseApp">
            <van-button type="primary" color="#fb7299">App 内打开，流畅又高清</van-button>  
            <span class="place"><i class="iconfont icon-CN_bilibiliB"></i>{{ model.category.title }}</span>
          </div>
          <VideoInfo :details="model"></VideoInfo>
      </div>
      
      <div class="toolbar">
          <span class="toolbarItem">
              <i class="iconfont icon-dianzan"></i><span>点赞</span>
          </span>
          <span :class="{toolbarItem: true, activeColor:isCollect}">
              <i class="iconfont icon-Star"></i><span>收藏</span>
          </span>
          <span class="toolbarItem">
              <i class="iconfont icon-xiazai"></i><span>缓存</span>
          </span>
          <span :class="{toolbarItem: true, activeColor:isAttent}">
              <i class="iconfont icon-guanzhu1" style="font-size:4.444vw"></i><span>关注</span>
          </span>
          <span class="toolbarItem">
              <i class="iconfont icon-arrow-"></i><span>分享</span>
          </span>
      </div>
  </div>
</template>

<script>
import NavBar from '../../components/common/NavBar'
import VideoInfo from '../../components/article/VideoInfo'
export default {
    data() {
        return {
            model: null,
            isCollect: null,
            isAttent: null
        }
    },
    components: {
        NavBar,
        VideoInfo
    },
    methods: {
        async articleItemData() {
            const res = await this.$http.get('/article/' + this.$route.params.id)
            this.model = res.data[0]
        }
    },
    created() {
        this.articleItemData()
    }
}
</script>

<style lang="less" scoped>
.detail {
    background: #fff;
    .detailInfo {
        .video {
            width: 100%;
            video {
                width: 100%;
            }
        }
        .rouseApp {
            text-align: center;
            margin: 3.333vw auto 0;
            position: relative;
            button {
                width: 93.5vw;
                height: 9.444vw;
                border-radius: 4.8vw;
                font-size: 3.889vw;
            }
            .place {
                position: absolute;
                left: 2%;
                top: 158%;
                z-index: 11;
                padding: 0 1.6vw;
                height: 5.333vw;
                line-height: 5.333vw;
                color: #fb7299;
                font-size: 3.333vw;
                background: #f4f4f4;
                border-radius: 3.2vw;
                vertical-align: middle;
                margin-top: 0.533vw;
                i{
                    font-size: 3.889vw;
                }
            }
        }
    }
    .toolbar{
        padding: 7vw 3.2vw;
        font-size: 2.778vw;
        color: #999;
        .toolbarItem{
            margin-right: 4.444vw;
            i{
                margin-right: 1.333vw;
                font-size: 6.944vw;
                color: #757575;
                vertical-align: middle;
            }
            span{
                vertical-align: middle;
            }
        }
        .toolbarItem:first-child i{
            font-size: 5.333vw;
        }
        .toolbarItem:last-child{
            margin-left: 1.333vw;
            margin-right: 0;
        }
        .activeColor{
            color: #f87299;
            i{
                color: #f87299;
            }
        }
    }
    
}

</style>