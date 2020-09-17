<template>
  <div>
      <nav-bar></nav-bar>
      <img src="../../statics/images/bgcImg.png" alt="" class="bgcImg">
      <user-detail :userInfo="model"></user-detail>
  </div>
</template>

<script>
import NavBar from '../../components/common/NavBar'
import UserDetail from '../../components/user/UserDetail'
export default {
    data() {
        return {
            model: {}
        }
    },
    components: {
        NavBar,
        UserDetail
    },
    methods: {
        async userInfoData() {
            const res = await this.$http.get('/user/' + localStorage.getItem('id'))
            this.model = res.data[0]
  
        }
    },
    created() {
        this.userInfoData();
    }
}
</script>

<style scoped>
    .bgcImg {
        height:101px;
        width: 100%;
    }
</style>