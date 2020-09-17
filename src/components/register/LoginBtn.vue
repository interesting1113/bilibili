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
    padding: 4.167vw 3.778vw;
}
.loginBtn {
    height: 11.5vw;
    background-color: #ff9db5;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.25vw;
    font-size: 3.444vw;

}
</style>