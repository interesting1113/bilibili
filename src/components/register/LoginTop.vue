<template>
   <div>
        <div class="login-top">
        <div></div>
        <div>{{middleTop}}</div>
        <div>
            <slot name="right"></slot>  
        </div>         
    </div>
   </div>
</template>

<script>
export default {
    props:['middleTop']
}
</script>

<style lang="less" scoped>
.login-top {
    height: 12.889vw;
    background-color: white;
    display: flex;
   
    div{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4.444vw; 
    }
}
   
  

   
    
    



</style>