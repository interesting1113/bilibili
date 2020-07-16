<template>
    <div>
        <login-top></login-top>
        <login-img></login-img>
        <login-text label="姓名" placeholder="请输入姓名" regex="^.{6,16}$" @inputChange="res=>name=res"></login-text>
        <login-text label="账号" placeholder="请输入账号" regex="^.{6,16}$" @inputChange="res=>username=res"></login-text>
        <login-text label="密码" type="password" placeholder="请输入密码" regex="^.{6,16}$" @inputChange="res=>password=res"></login-text>
        <login-btn btn="验证登录" @registerSubmit="registerSubmit"></login-btn>
        <login-msg></login-msg>
    </div>
</template>

<script>
import LoginTop from '../components/register/LoginTop'
import LoginImg from '../components/register/LoginImg'
import LoginText from '../components/register/LoginText'
import LoginBtn from '../components/register/LoginBtn'
import LoginMsg from '../components/register/LoginMsg'
export default {
    data() {
        return {
            name: '',
            username: '',
            password: ''
        }
    },
    components :{
        LoginTop,
        LoginImg,
        LoginText,
        LoginBtn,
        LoginMsg
    },
    methods: {
        registerSubmit() {
            if(this.name && this.username && this.password){
                this.$http.post('/register', {
                    name: this.name,
                    username: this.name,
                    password: this.password
                }).then()
            }
        }
    
    }
}
</script>

<style>

</style>