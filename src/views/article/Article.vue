<template>
  <div>
      <nav-bar></nav-bar>
      <div class="detailInfo">
          <div class="video">
              <video controls="controls" :src="model.content"></video>
              <div class="detailInfoText">
                  <div>{{ model.name }}</div>
                  <div>
                      <span>{{ model.date }}</span>
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
            console.log(res)
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
    padding: 2vw;
}

</style>