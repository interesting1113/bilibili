<template>
  <div v-if="model" class="editView">
        <div style="margin-bottom: 2.778vw;">
            <nav-bar></nav-bar>
        </div>
        <div class="uploadFile">
        <van-uploader class="uploadImg" preview-size="100vw" :after-read="afterRead" />
        <edit-banner left="头像">
        <img :src="model.user_img" alt="" slot="right" v-if="model.user_img">
        <img src="../../statics/images/icon3.png" alt="" slot="right" v-else>
        </edit-banner>
        </div>
        <edit-banner left="昵称" @bannerClick="show=true">
            <a href="javascript:;" slot="right">{{ model.name }}</a>
        </edit-banner>
        <edit-banner left="账号">
            <a href="javascript:;" slot="right">{{ model.username }}</a>
        </edit-banner>
        <edit-banner left="性别" @bannerClick="genderShow=true">
            <a href="javascript:;" slot="right" v-if="model.gender">{{ model.gender == 1?'男':'女'}}</a>
            <a href="javascript:;" slot="right" v-else>保密</a>
        </edit-banner>
        <edit-banner left="个性签名" @bannerClick="textShow=true">
            <a href="javascript:;" slot="right">{{ model.user_desc }}</a>
        </edit-banner>
        <edit-button btnText="返回个人中心" style="margin-top: 5.556vw;"></edit-button>
        <edit-button btnText="退出登陆"></edit-button>
        <van-dialog v-model="show" 
                    title="昵称" 
                    show-cancel-button 
                    @confirm="confirmClick"
                    @cancel="content=''">
            <van-field v-model="content" placeholder="1~10个字符哦" ref="autofocus" autofocus/>
        </van-dialog>
        <van-dialog v-model="textShow" 
                    title="个性签名" 
                    show-cancel-button 
                    @confirm="textareaClick"
                    @cancel="content=''">
            <van-field v-model="content" placeholder="( •̀ .̫ •́ )✧介绍一下自己吧" type="textarea" ref="autofocus" autofocus/>
        </van-dialog>
        <van-action-sheet v-model="genderShow" 
                        :actions="actions" 
                        cancel-text="取消"
                        @select="onSelect" />
  </div>
</template>

<script>
import NavBar from '../../components/common/NavBar'
import EditBanner from '../../components/edit/EditBanner'
import EditButton from '../../components/edit/EditButton'
export default {
    data() {
        return {
            model: {},
            show: false,
            content: '',
            textShow: false,
            genderShow: false,
            actions: [
                {name: '女', value: 0},
                {name: '男', value: 1},
            ]

        }
    },
    methods: {
        //获取用户数据渲染页面
        async selectUser() {
            const res = await this.$http.get('/user/' + localStorage.getItem('id'))
            this.model = res.data[0]
        },
        //头像上传
        async afterRead(file) {
            const formData = new FormData()
            formData.append('file', file.file)
            const res = await this.$http.post('upload', formData)
            this.model.user_img = res.data.url
            this.userUpdate()
        },
        async userUpdate() {
            const res = await this.$http.post('/update/' + localStorage.getItem('id'), this.model)
            if(res.data.code === 200) {
                this.$toast.fail("修改成功")
            }
            
        },
        //修改昵称
        confirmClick() {
            this.$refs.autofoucs.focus()
            //正则
            let rulg = /^.{1,10}$/
            if(!rulg.test(this.content)) {
                this.$toast.fail('输入范围限制1~10个字符')
                this.content = ''
                return
            }
            this.model.name = this.content   
            this.userUpdate()
            this.content = ''     
        },
        //修改个性签名
        textareaClick() {
             this.model.user_desc = this.content   
            this.userUpdate()
            this.content = '' 
        },
        onSelect(data) {
            this.model.gender = data.value
            this.userUpdate()
            this.genderShow = false
        }
        
    },
    created() {
        this.selectUser()
    },
    components: {
        NavBar,
        EditBanner,
        EditButton
    }
}
</script>

<style lang="less" scoped>
.editView {
    a {
        color: #999;

    }
    img {
         width: 12.778vw;
        height: 12.778vw;
        border-radius: 50%;
    }
    .uploadFile {
        position: relative;
        overflow: hidden;
        .uploadImg{
            position: absolute;
            opacity: 0;
        }
    }

}


</style>