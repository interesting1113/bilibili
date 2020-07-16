<template>
  <div class="login-text">
       <div class="msg-top">
        <p>未注册或未绑定哔哩哔哩的手机号，将帮助你注册新账号</p>     
        <p>
            登陆即代表你同意<span>用户协议</span>和<span>隐私政策</span>
        </p>
      </div>
      <div class="msg-bottom">
          <p>遇到问题？<span>查看帮助</span></p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .login-text .msg-top {
        margin-top: 30px;
    }
    .login-text .msg-top p {
        font-size: 10px;
        color: #777;
        margin-left: 60px;
        
    }

    .login-text .msg-bottom p {
        font-size: 10px;
        color: #777;
        text-align: center;
        
    }
    .login-text span {
        color: #fb7299;
    }

    .login-text .msg-bottom {
        margin-top: 20px;
    }
</style>