<template>
  <div>
    <van-tabbar route placeholder='true'> 
      <van-tabbar-item replace to="/index/main" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/index/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/index/order" icon="points">订单</van-tabbar-item>
      <van-tabbar-item replace to="/index/profile" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
    name: 'tabbar'
};
</script>