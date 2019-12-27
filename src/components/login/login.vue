<template>
    <div class="form">
      <transition name="form-fade">
        <div class="login_form" v-show="showLogin">
          <h2>后 台 管 理 系 统</h2>
          <Divider class="divider">欢迎登录后台管理系统</Divider>
          <Form ref="formInline" :model="loginForm" :rules="ruleInline">
            <FormItem prop="username">
                <Input type="text"
                     v-model="loginForm.username"
                     prefix="ios-contact"
                     placeholder="请输入用户名"
                     size="large"/>
            </FormItem>
            <FormItem prop="password">
                <Input v-model="loginForm.password"
                     prefix="ios-lock"
                     :type="inputType"
                     password
                     placeholder="请输入密码"
                     :minlength="6"
                     :maxlength="20"
                     size="large"
                     @keyup.enter.native="login('formInline')"
                     @on-focus="inputType = 'password'"/>
            </FormItem>
            <Button type="primary" size="large" long @click="login('formInline')">
              <span v-if="loginLoading">登录</span>
              <span v-else>登录中......</span>
            </Button>
        </Form>
        </div>
      </transition>
    </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      ruleInline: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, max: 16, message: '请输入6-16位数的密码', trigger: 'blur' }
        ]
      },
      showLogin: false,
      loginLoading: true,
      inputType: 'text'
    }
  },
  methods: {
    login (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          if (this.loginForm.username === 'admin' && this.loginForm.password === 'admin123456') {
            this.loginLoading = false
            this.$router.push('layout')
          } else {
            this.$Message.error('用户名或者密码错误！')
          }
        }
      })
    }
  },
  mounted () {
    this.showLogin = true
  }
}
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.form{
  .wh(100%, 100%);
  position: absolute;
  background: #2c3e50;
}
.login_form {
  .wh(480px, 380px);
  .ctp(480px, 380px);
  background: white;
  border-radius: 10px;
  padding: 10px 25px;
  position: absolute;
  h2 {
    color: black;
    margin: 30px 0px;
  }
  .divider {
    color: black;
    margin-bottom: 30px;
  }
}
.form-fade-enter-active, .form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter, .form-fade-leave-active {
  transform: translate3d(0, -150px, 0);
  opacity: 0;
}
</style>
