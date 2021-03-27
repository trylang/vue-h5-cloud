<template>
  <div class="login-layout">
    <h1>可信云</h1>
    <div>
      <h3>当前手机号一键登录</h3>
      <van-checkbox v-model="checked"></van-checkbox>我已阅读并同意<span class="red">“用户协议和隐私条款”</span>

      <p>使用验证码登录</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true
    }
  }
}
</script>

<style lang="scss">
.login-layout {
  margin: auto;
  .red {
    color: red;
  }
}
</style>
