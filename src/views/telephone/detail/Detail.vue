<template>
  <div class="page">
    <div class="section1">
      <div class="outer1">
        <nav-bar title="通话详情"></nav-bar>
        <div class="bd3">
          <div class="mod6">
            <div class="box1"></div>
            <div class="box2"></div>
            <div class="box3"></div>
          </div>
          <div class="mod7">
            <span class="word4">免打扰设置</span>
            <span class="txt1">拒接该企业</span>
            <span class="word5">投诉该企业</span>
          </div>
        </div>
        <div class="bd4">
          <div class="bd5">
            <div v-for="(record, index) in callrecordList" :key="index">
              <div class="outer2">
              <div class="box4">
                <div class="layer layer1" v-if="record.calltype=='呼出'"></div>
                <div class="layer layer2" v-else-if="!record.callduration"></div>
                <div class="layer layer3" v-else-if="record.calltype='呼入'"></div>
                <span class="word6">{{record.callduration}}</span>
              </div>
              <div class="box5">
                <div class="section2">
                  <img :src="record.companylogo" alt="">
                </div>
              </div>
              <div class="box7">
                <span class="word7">{{record.companyname}}</span>
                <span class="info2">{{record.businessname}}</span>
              </div>
              <span class="word8">{{record.createtime}}</span>
              <span class="word9" v-if="record.complain_flag" @click="handleComplain(record)">投诉</span>
            </div>
            <div class="outer3"></div>
            </div>
            <div class="outer11">
              <div class="group1"></div>
              <span class="word13">查看更多</span>
              <div class="group2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section8">
      <div class="box8">
        <div class="group5">
          <div class="section9"></div>
          <span class="txt6">企业服务列表</span>
          <span class="word15">取消勾选以拒接</span>
        </div>
        <div class="group6">
          <span class="txt7">售前支持</span>
          <div class="main1"></div>
        </div>
        <div class="group7"></div>
      </div>
    </div>
    <div class="section3">
      <div class="bd9">
        <div class="group3">
          <div class="section4">
            <div class="group4"></div>
            <span class="word14">企业最近活动</span>
          </div>
          <div class="section5">
            <img
              class="pic1"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc4990ac41ba7b5a81d3906e27490b13c5c08379c0aa329a5bc63cfa30311b940"
            />
          </div>

        </div>
      </div>
    </div>

    <complaint-dialog ref="complaintDialog"></complaint-dialog>
  </div>
</template>
<script>
import { Notify } from 'vant'

import NavBar from '@/components/NavBar'
import ComplaintDialog from '@/components/complaint-dialog'
import { callrecords } from '@/api/telephone'
import { postComplaints } from '@/api/company'

export default {
  components: {
    NavBar,
    ComplaintDialog
  },
  data() {
    return {
      constants: {},
      callrecordList: []
    }
  },
  methods: {
    async handleComplain(record) {
      console.log(33, record)
      this.$refs.complaintDialog.show = true
      const { phone, crdid, companyid, reason, businessid } = record

      const { returncode, message } = await postComplaints(record)
      if (returncode === 0) {
        Notify({ type: 'success', message: '投诉成功' })
      } else {
        Notify({ type: 'danger', message })
      }
    },
    async callrecords() {
      const { returncode, data } = await callrecords()
      if (returncode === 0) {
        this.callrecordList = data
      }
    }
  },
  mounted() {
    this.callrecords()
  }
}
</script>
<style src="./index.css" />
