<template>
  <div>
    <nav-bar></nav-bar>
    <van-tabs v-model="active" scrollspy sticky>
        <van-tab v-for="(item, index) in category" :key="index" :title="item.title">    
            <detail :detailItem="categoryItem" 
                    v-for="(categoryItem, categoryIndex) in item.list" 
                    :key="categoryIndex"/>

        </van-tab>
    </van-tabs>
    
  </div>
</template>

<script>
import NavBar from '../../components/common/NavBar'
import Detail from '../../views/detail/Detail'
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
        changeCategory(data) {
            const category1 = data.map((item) => {
                item.list = []
                item.page = 0
                item.pagesize = 10
                return item
            })
            this.category = category1         
        },
        async selectArticle() {
            const categoryItem = this.categoryItem()
            const res = await this.$http.get('/data/' + categoryItem._id, {
                params: {
                    page: categoryItem.page, 
                    pagesize: categoryItem.pagesize
                }
            })
            categoryItem.list = res.data
        
        },
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
        Detail
    }

}
</script>
    

<style>

</style>