<template>
  <div @click="$router.push('/detail/' + detailItem.id + '')">
    <div class="detailItem">
      <div class="imgParent">
        <img :src="detailItem.img" alt="" style="width: 100%; height:27.778vw;">
        <div class="bottom">
          <span class="video iconfont icon-bofang">6666</span>
          <span class="comment iconfont icon-file-text">{{ detailItem.commentlen ? 66 : detailItem.commentlen }}</span>
        </div>
      </div>
      <p>{{ detailItem.name }}</p>
  </div>
  </div>
</template>

<script>
export default {
    props: ['detailItem']
}
</script>

<style lang="less" scoped>
.detailItem {
  p {
    font-size: 3.333vw;
    padding: 0.833vw 0;
  }
}
.imgParent {
  position: relative;
  .bottom{
        padding: 0 2.778vw;
          margin-bottom: 1.389vw;
          position: absolute;
          bottom: 0.556vw;
          background: linear-gradient(0deg,rgba(0,0,0,.85),transparent);
          justify-content: space-between;
          color: white;
          display: flex;
          left: 0;
          right: 0;
        }
}

</style>