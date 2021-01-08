<template>
  <div>
    <van-notice-bar
      left-icon="volume-o"
      text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { NoticeBar } from "vant";

Vue.use(NoticeBar);
export default {};
</script>