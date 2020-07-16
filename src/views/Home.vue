<template>
   
    <div class="home">
        <top-bar></top-bar>
        <tab-bar></tab-bar>

    </div>
</template>

<script>
import TopBar from '../components/common/TopBar'
import TabBar from '../components/common/TabBar'
export default {
    name: 'Home',
    data() {
        return {

        }
    },
    components: {
        TabBar,
        TopBar
    }
}
</script>

<style>

</style>