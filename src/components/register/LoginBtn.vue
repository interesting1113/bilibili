<template>
  <div>
      <div class="btn">
          <div class="loginbtn" @click="registerClick">{{btn}}</div>
      </div>

  </div>
</template>

<script>
export default {
    props: ['btn'],
    methods: {
        registerClick() {
            this.$emit('registerSubmit')
        }
    }
}
</script>

<style>
    .btn {
        padding: 15px 10px;
    }

    .loginbtn {
        height: 45px;
        background-color: pink; 
        display: flex;
        border-radius: 5px;
        color: white;
        padding: 15px 32px;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        font-size: 16px;
    }
</style>