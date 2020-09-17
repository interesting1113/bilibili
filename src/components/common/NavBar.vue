<template>
  <div class="navbar">
      <div class="logo">
          <img src="../../statics/images/logo.png" alt="">
      </div>
      <div class="search"> 
          <p>   
            <van-icon class="ipt-icon" name="search" />
          </p>
      </div>
      <div>
          <img :src="imgUrl" alt="" v-if="imgUrl" @click="$router.push('/edit')">
          <img src="../../statics/images/icon3.png" alt="" v-else @click="router.push('/edit')">
          <p>下载App</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            imgUrl: ''
        }
    },
    // props: ['userInfo']
    async mounted() {
        const res = await this.$http.get('/user/' + localStorage.getItem('id'))
        //console.log(res.data[0].user_img)
        this.imgUrl = res.data[0].user_img
    }
}
</script>

<style lang="less" scoped>
.navbar {
    height: 11.733vw;
    background-color: white;
    display: flex; 
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -2.333vw;
        width: 30.833vw;
        img {
            width: 80%;
        }
    }    
    div:nth-child(2){
        flex: 1;
        display: flex;
        align-items: center;
     p{
        font-size: 3.333vw;
        position: relative;
        margin-left: -1.728vw;
        background-color: #f4f4f4;
        width: 35.556vw;
        height: 6.4vw;
        border-radius: 3.2vw;
        color: #999;
        .ipt-icon{
            position: absolute;
            left: 5%;
            top: 27%;
            }

     }
    
    } 
    div:nth-child(3){
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 6.667vw;
            height: 6.667vw;
            border-radius: 50%;
        }
        p{
            box-sizing: border-box;
            padding: 0.933vw 3.2vw;
            margin:  0 3.222vw;
            color: #fff;
            background-color: #FB7299;
            font-size: 3.499vw;
            border-radius: 0.833vw;
            height: 6.4vw;
            width: 21.222vw;
            .ipt-icon{
                position: absolute;
                left: 10%;
                top: 50%;
                transform: translate(0, 40%);
                color: #ccc;
            }
            
        }
    }
   
}







    
</style>