<template>
  <div class="bd2">
    <div class="mod4"></div>
    <span class="info1" v-if="backUrl">返回</span> <span class="word3">{{ title }}</span>
    <div class="mod5"></div>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  props: {
    backUrl: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '通话记录'
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      active: this.defaultActive
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bd2 {
  z-index: auto;
  width: 346px;
  height: 33px;
  margin-top: 5px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}

.mod4 {
  z-index: 27;
  width: 10px;
  height: 17px;
  background-image: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9759f118f29c9afea4d27f9176e9b20a2059ab8918266fea9d0b045025611a29);
  background-repeat: no-repeat;
  background-position: -0.5px -0.15384615384618883px;
  margin-top: 9px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.info1 {
  z-index: 26;
  width: 28px;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 13px;
  letter-spacing: 0.5416666865348816px;
  font-family: PingFangSC-Regular;
  line-height: 18px;
  margin-top: 7px;
  margin-left: 8px;
}
.word3 {
  z-index: 24;
  width: 63px;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  letter-spacing: -0.38588234782218933px;
  font-family: PingFangSC-Regular;
  line-height: 22px;
  margin-top: 7px;
  margin-left: 96px;
}

.mod5 {
  z-index: 28;
  width: 33px;
  height: 33px;
  background-image: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc790a52d45c730d8dd5c8cbf6051dded66ea895c29ad25cd349cc20b47e7de42);
  background-repeat: no-repeat;
  background-position: -1px 0px;
  margin-left: 108px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
</style>
