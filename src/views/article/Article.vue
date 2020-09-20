<template>
  <div>
      <nav-bar></nav-bar>
      <div class="detailInfo">
          <div class="video">
              <video controls="controls" :src="model.content"></video>
              <div class="detailInfoText">
                  <div>
                      <i class="iconfont icon-CN_bilibiliB"></i>
                      <span>{{ model.category.title }}</span>
                      <span>{{ model.name }}</span>
                  </div>
                  <div>
                      <span>{{ model.userinfo.name }}</span>
                      <span>16.4万次观看</span>
                      <span>5345弹幕</span>
                      <span>{{ model.date }}</span>
                  </div>
                  <div>
                      <div>
                          <span class="iconfont icon-Star"></span>
                          <span></span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import NavBar from '../../components/common/NavBar'
export default {
    data() {
        return {
            model: []
        }
    },
    components: {
        NavBar
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
.detailInfo {
    background-color: #fff;
    .video {
        width: 100%;
        video {
            width: 100%;
        }
    }
}
.detailInfoText {
    padding: 4.167vw;
    div:nth-child(1) {
        span:nth-child(1) {
            padding-right: 1.333vw;
            color: #fb7299;
            background-color: #fff;
            border-radius: 1.333vw;
        }
    }
    div:nth-child(2) {
        padding: 1.333vw 1.333vw;
        span {
            color:#aaa;
            font-size: 1.6vw;
            span:nth-child(2) {
                color: black;
                font-size: 2.133vw;
                padding-right: 1.333vw;
            }
        }
    }
}

</style>