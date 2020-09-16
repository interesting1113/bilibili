<template>
  <div class="login-text">
      <van-field v-model="content" 
                :label="label" 
                :type="type" 
                :placeholder="placeholder" 
                :regex="regex"/>
     
          
  </div>
</template>

<script>
export default {
    data() {
        return {
            content: ''
        }
    },
    props: ['label', 'type', 'placeholder', 'regex'],
    methods: {
        handlerRegex() {
            const rule = new RegExp(this.regex)   
            if(rule.test(this.content)){
                this.$emit('inputChange', this.content)                          
            }
            
            
        }
    },
    watch: {
        content() {
            this.handlerRegex()
            
        }
    },
}
</script>

<style>
    
</style>