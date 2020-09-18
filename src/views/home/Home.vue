<template>
  <div class="home">
    <nav-bar></nav-bar>
    <van-tabs v-model="active" swipeable>
        <van-tab v-for="(item, index) in category" :key="index" :title="item.title">    
            <div class="detailParent">
                <cover class="detailItem" :detailItem="categoryItem" 
                    v-for="(categoryItem, categoryIndex) in item.list" 
                    :key="categoryIndex"/>
            </div>
            <van-list
                v-model="item.loading"
                :immediate-check="false"
                :finished="item.finished"
                finished-text="没有更多了"
                offset="1"
                @load="onLoad"/>
        </van-tab>
    </van-tabs>
    
  </div>
</template>

<script>
import NavBar from '../../components/common/NavBar'
import Cover from '../../views/cover/Cover'
export default {
    data() {
        return {
            category: [],
            active: 0
        }
    },
    methods: {
        async selectCategory() {
            const res = await this.$http.get('/category')
            this.changeCategory(res.data)
        },
        //改变category里的数据
        //先改造res.data里的数据再赋值给category
        changeCategory(data) {
            const category1 = data.map((item) => {
                item.list = []
                item.page = 0
                item.pagesize = 10
                item.finished = false
                item.loading = false
                return item
            })
            this.category = category1
            this.selectArticle()         
        },
        async selectArticle() {
            const categoryItem = this.categoryItem()
            const res = await this.$http.get('/detail/' + categoryItem._id, {
                params: {
                    page: categoryItem.page, 
                    pagesize: categoryItem.pagesize
                }
            })
            categoryItem.list.push(...res.data)
            categoryItem.loading = false
            if(res.data.length < categoryItem.pagesize){
                categoryItem.finished = true
            }
        
        },
        onLoad() {
            const categoryItem = this.categoryItem()
            setTimeout(() => {
                categoryItem.page += 1
                this.selectArticle()
            }, 500)
        },
        //获取被点击的分类项数据 
        categoryItem() {
            const categoryItem = this.category[this.active]
            return categoryItem
        }
    },
    watch: {
        active() {
            this.selectArticle()
        }
    },
    created() {
        this.selectCategory()
    },
    components: {
        NavBar,
        Cover
    }

}
</script>
    

<style lang="less" scoped>
.home {
    background-color: #fff;
}
.detailParent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .detailItem {
        width: 45%
    }
}

</style>