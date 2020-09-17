<template>
    <div>
        <login-top middleTop="注册bilibili">
            <div slot="right" 
                @click="$router.push('/login')"
                style="color:#b0b6c1;
                        font-size:2.611vw;
                        margin-left: 5.245vw;"
            >切换到登陆</div>
        </login-top>
        <login-text label="姓名" 
                    style= "margin: 4.167vw 0;"
                    placeholder="请输入姓名" 
                    regex="^.{6,16}$" 
                    @inputChange="res=>userInfo.name=res">
        </login-text>
        <login-text label="账号" 
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
        <login-btn btnText="注册" @registerSubmit="registerSubmit"></login-btn>
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
                name: '',
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
            if(rulg.test(this.userInfo.name) && rulg.test(this.userInfo.username) && rulg.test(this.userInfo.password)){
                const res = await this.$http.post('/register', this.userInfo)
                    this.$toast.fail(res.data.msg)
                    localStorage.setItem('id', res.data.id)
                    localStorage.setItem('token', res.data.objtoken)
                    setTimeout(() => {
                        this.$router.push('/userInfo')
                    }, 1000)
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