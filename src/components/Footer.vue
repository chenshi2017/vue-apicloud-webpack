<template>
  <div class="footer">
    <van-tabbar v-model="active" fixed="fixed">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot>附近</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">会员中心</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="1">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="1">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import {
    Tabbar,
    TabbarItem
  } from 'vant';
  export default {
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem .name]: TabbarItem ,
    },
    name:"vfooter",
    // props: ["end","theme"],
    data: function() {
      return {
        active: 0,
        fixed: true
      }
    },
    mounted: function () {

    },
    methods: {

    }
  }
</script>
<style lang="less">
  @import "../assets/common";

</style>
