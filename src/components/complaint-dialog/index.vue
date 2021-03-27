<template>
  <div>
    <van-dialog
    v-model="show"
    title="投诉须知"
    confirm-button-text="同意并继续"
    cancel-button-text="返回"
    show-cancel-button
    @confirm="handleConfirm"
    @cancel="handleCancel"
  >

    <div class="container" v-if="pageOne">
      <p>
      用户在可信云平台完成对企业的投诉，可信云将控制该企业的行为，并根据实际骚扰情况对企业进行相应处罚措施，可信云向用户承诺对企业的管控职能。
    </p>
    <p>
      在可信云完成投诉后，如果用户承诺不到工信部投诉，经核实后（一般为XX天），用户可向可信云平台申请相应补偿，该补偿用于弥补用户受到的损失。
    </p>
    <p>
      如投诉为捏造等情况，可信云有权向产生投诉的用户进行进一步处理。
    </p>
    </div>
  </van-dialog>
  <van-dialog
    v-model="show"
    title="投诉详情"
    confirm-button-text="提交"
    cancel-button-text="返回"
    show-cancel-button
    @confirm="handleConfirm"
    @cancel="handleCancel"
  >

    <div class="container">
      
    </div>
  </van-dialog>
  </div>
</template>

<script>
export default {
  name: 'ComplaintDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      pageOne: true,
      pageTwo:
    }
  },
  methods: {
    handleConfirm() {
      console.log(333)
    },
    handleCancel() {
      this.show = true
    }
  }
}
</script>

<style>
.container {
  padding: 15px;
}
</style>
