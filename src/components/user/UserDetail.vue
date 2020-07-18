<template>
  <div class="userdetail">
      <div>
        <div class="userimg"><img src="../../statics/images/icon3.png" alt=""></div>
        <div class="useredit">
          <div>
             <p>
                 <span>10</span>
                 <span class="usertext">粉丝</span>
             </p>
              <p>
                 <span>100</span>
                 <span class="usertext">关注</span>
             </p>
             <p>
                 <span>17</span>
                 <span class="usertext">获赞</span>
             </p>
          </div>
          <div>
              <div class="usereditBtn">
                编辑资料
              </div>
          </div>
        </div>
      </div>
      <div class="user">
        <h2>interesting1113</h2>
      </div>
      <div class="self">
          <span>这个人很神秘，什么都没有写</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .userdetail {
     background-color: #fff;
     padding: 0 12px;
 }
 .userimg {
     margin-right: 20px;
 }
 .userimg img{
     height: 85px;
     width: 85px;
     border-radius: 50%;
 }

 .useredit {
     flex: 1;
 }
 div:nth-child(1) {
     display: flex;
     
 }
 div:nth-child(1) p {
     flex: 1;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     font-size: 13px;
 }
 p:nth-child(1), p:nth-child(2) {
     border-right: 1px solid #ccc;
 }

 .usertext {
     color: #aaa;
 }
 div:nth-child(2) {
     padding: 10px 10px;
 }
 .usereditBtn {
     border: 1px solid #fb7a9f;
     padding: 3px;
     display: flex;
     align-items: center;
     justify-content: center;
     color: #fb7a9f;
     border-radius: 5px;
 }
 
 .self {
    border-bottom: 1px solid #ccc;
 }
 .self span {
     display: inline-block;
     margin: 0px 10px 10px 10px;
     color: #ccc;
     font-size: 14px;
     
 }

 

</style>