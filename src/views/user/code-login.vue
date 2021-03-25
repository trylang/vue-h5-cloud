<template>
  <div class="code-layout-container">
    <h1>可信云H5</h1>
    <div class="form-container">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="验证码"
          label="验证码"
          placeholder="验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        />
        <span>发送</span>
        <van-checkbox v-model="checked"></van-checkbox>我已阅读并同意<span class="red">“用户协议和隐私条款”</span>

        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">登录</van-button>
        </div>

      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      checked: false
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="scss"></style>
