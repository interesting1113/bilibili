<template>
  <div class="userdetail">
      <div>
        <div class="userimg">
            <img :src="userInfo.user_img" alt="" v-if="userInfo.user_img">
            <img src="../../statics/images/icon3.png" v-else>
        </div>
        <div class="useredit">
          <div>
             <p>
                 <span>10</span>
                 <span class="userText">粉丝</span>
             </p>
              <p>
                 <span>100</span>
                 <span class="userText">关注</span>
             </p>
             <p>
                 <span>17</span>
                 <span class="userText">获赞</span>
             </p>
          </div>
          <div>
              <div class="userEditBtn" @click="$router.push('/edit')">
                编辑资料
              </div>
          </div>
        </div>
      </div>
      <div class="user">
        <h2 v-if="userInfo.name">{{ userInfo.name }}</h2>
        <h2 v-else>Interesting1113</h2>
        <p v-if="userInfo.user_desc">{{ userInfo.user_desc}}</p>
        <p v-else>这个人很神秘，什么都没有写</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['userInfo']

}
</script>

<style lang="less" scoped>
 .userdetail {
    background-color: #fff;
    padding: 2vw 3.333vw;
    > div:nth-child(1) {
        display: flex;
     .userimg {
        margin-right: 5.556vw;
        img{
            height: 23.611vw;
            width: 23.611vw;
            border-radius: 50%;
        }
    }
     .useredit {
        flex: 1;
        div:nth-child(1) {
             display: flex; 
             padding: 2.361vw 0 0 0.833vw;
             p {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                color: #212121;
                 .userText{
                    font-size: 2.933vw;
                    color: #999;
                }
            }
            p:nth-child(1),
            p:nth-child(2) {
                border-right: 0.278vw solid #ccc;
            }
        }
        div:nth-child(2) {
            padding: 0.556vw 3.056vw;
            .userEditBtn {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1.389vw;
                margin-left: 0.556vw;
                margin-top: 2.778vw;
                border: 1px solid #F87299;
                color: #F87299;
                border-radius: 1.111vw;
            }
        }
    }

 }
 >div:nth-child(2){
      h2{
          margin: 2.778vw 0 0.833vw 0;
          font-weight: 400;   
      }
     p{
        font-size: 3.333vw;
        padding: 0;
        margin: 2.778vw 0 0 0;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
     }
  }
}
 

 

</style>