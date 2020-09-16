 <template>
  <div>
      <div class="btn">
          <div class="loginBtn" @click="registerClick">{{btnText}}</div>
      </div>

  </div>
</template>

<script>
export default {
    props: ['btnText'],
    methods: {
        registerClick() {
            this.$emit('registerSubmit')
        }
    }
}
</script>

<style>
.btn {
    padding: 4.167vw 2.778vw;
}
.loginBtn {
    height: 12.5vw;
    background-color: #ff9db5;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6.25vw;
    font-size: 4.444vw;

}
</style>