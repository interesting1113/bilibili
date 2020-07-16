<template>
  <div class="login-text">
      
      <div class="user-info" >
          <div class="right">
              <label>{{label}}</label>
          </div>       
                
            <div class="left">
                <input v-model="content"          
                    :type="type" 
                    :placeholder="placeholder"
                    :regex="regex"
                    />
            </div>
                 
      </div>             
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
    .login-text .user-info {
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid lightgray;
         
    }
    label {
        display: block;
        margin-left: 20px;
    }
    input {
        width: 100%;
        margin-left: 50px;
        outline-style: none;
        border: none;
        font-size: 14px;
        
    }
</style>