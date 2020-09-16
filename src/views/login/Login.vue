<template>
    <div>
        <login-top middleTop="登陆bilibili">
            <div slot="right" @click="$router.push('/register')">切换到注册</div>
        </login-top>
        <login-text style="margin:4.167vw 0;"
                    label="账号" 
                    placeholder="请输入账号" 
                    regex="^.{6,16}$" 
                    @inputChange="res=>userInfo.username=res">
        </login-text>
        <login-text label="密码" 
                    type="password" 
                    placeholder="请输入密码" 
                    regex="^.{6,16}$" 
                    @inputChange="res=>userInfo.password=res">
        </login-text>
        <login-btn btnText="登陆" @registerSubmit="registerSubmit"></login-btn>
    </div>
</template>

<script>
import LoginTop from '../../components/register/LoginTop'
import LoginText from '../../components/register/LoginText'
import LoginBtn from '../../components/register/LoginBtn'
export default {
    data() {
        return {
            userInfo: {
                username: '',
                password: ''
            }
        }
    },
    components :{
        LoginTop,
        LoginText,
        LoginBtn
       
    },
    methods: {
        async registerSubmit() {
            let rulg = /^.{6,16}$/
            if(rulg.test(this.userInfo.username) && rulg.test(this.userInfo.password)){
                const res = await this.$http.post('/login', this.userInfo)
                    this.$toast.fail(res.data.msg)
                    //如果账号已存在
                    if(res.data.code == 302){
                        return
                    }
                
            }else {
                this.$toast.fail("格式不正确，请重新输入！")
            }
           
        }
    
    }
}
</script>

<style>

</style>