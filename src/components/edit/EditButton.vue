<template>
  <div class="editBtn">
      <van-button plain block type="primary" @click="$router.back()">{{ btnText }}</van-button>
  </div>
</template>

<script>
export default {
    props: ['btnText']
}
</script>

<style lang="less" scoped>

.editBtn {
    .van-button {
        color: #f87299;
        border-color: transparent !important ;
    }
}

</style>