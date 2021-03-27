<template>
  <div class="page">
    <van-form @submit="onSubmit" class="main1">
      <van-field
        class="bd1"
        v-model="tel"
        type="tel"
        name="手机号"
        label="请输入手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
      />
      <van-field
        v-model="digit"
        type="digit"
        name="验证码"
        label="请输入验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请输入验证码' }]"
      />
      <div class="v-code">
        <span class="txt1">获取验证码</span>
      </div>
      <div style="margin: 16px;">
        <div class="bd4">
          <div class="mod1"></div>
          <span class="txt2">我已阅读《用户使用条款》和《隐私保护政策》</span>
        </div>
        <button class="bd5" @click="onClick_1">
          <span class="info1">
            登录
            <van-button style="display: none;" native-type="submit">登录</van-button>
          </span>
        </button>
      </div>
    </van-form>

    <div class="main2">
      <div class="layer1">
        <div class="layer2"><span class="txt3">9:4</span> <span class="word3">1</span></div>
        <img
          class="label1"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfa3e9c17559b05304a7055007fe69446ab72b55218ea989668008946555da0b9"
        />
        <img
          class="label2"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng632149ef9b0227d75ed73db67e0edefb41d004bfb1867b2c89201eec72ffaa7b"
        />
        <img
          class="icon1"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng55e8fbaca210d286d3283b0f8730caa69b5aa950606b11f4536c615ae0f70b6b"
        />
      </div>
      <div class="layer3">
        <div class="outer1">
          <span class="info2">Hi!~</span>
          <span class="paragraph1"><br /></span>
          <span class="word4">欢迎来到可信云，请立即</span>
          <span class="word5">登录</span>
        </div>
      </div>
    </div>
    <div class="main3"><span class="word6">返回一键登录</span></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      constants: {}
    }
  },
  methods: {
    onClick_1(e) {
      alert(1)
    }
  }
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
