<template>
    <div class="login-top">
        <div class="backBtn">
            <div class=login-top-left>
                <span class="iconfont icon-back"></span>
            </div>
            <div class=login-top-middle>登陆注册</div>
            <div class=login-top-right>密码登录</div>
        </div> 
                 
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .login-top {
        height: 60px;
        width: 100%;    
        position: fixed;
        color: #000;
    }
    .login-top .backBtn {
        line-height: 60px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        
    }
  

    .login-top .backBtn span {
        font-size: 30px;
        
    }

    .login-top .backBtn .login-top-middle {
        
        font-size: 17px;
        

    }
    .login-top .backBtn .login-top-right {
       
        font-size: 10px;
        color: #777;
        
    }
    
    



</style>