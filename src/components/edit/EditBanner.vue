<template>
  <div @click="bannerClick">
      <div class="editBanner">
          <span>{{ left }}</span>
          <span><slot name="right"></slot></span>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            model: {

            }
        }
    },
    props: ['left', 'right'],
    methods: {
        bannerClick() {
            this.$emit('bannerClick')
        }
    }
    

}
</script>

<style lang="less" scoped>
.editBanner {
    display: flex;
    background-color: white;
    padding: 2.778vw 3.2vw;
    border-bottom: 0.278vw solid #eee;
    font-size: 3.689vw;
    justify-content: space-between;
    align-items: center;
    color: #505050;
}

</style>