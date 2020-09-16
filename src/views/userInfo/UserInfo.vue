<template>
  <div>
      <nav-bar></nav-bar>
      <img src="../../statics/images/bgcImg.png" alt="" class="bgcImg">
      <user-info></user-info>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar'
import UserInfo from '../../components/user/UserDetail'
export default {
    components: {
        NavBar,
        UserInfo
    }
}
</script>

<style scoped>
    .bgcImg {
        height:101px;
        width: 100%;
    }
</style>