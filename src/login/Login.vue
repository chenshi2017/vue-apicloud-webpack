<template>
  <div class="default-wrapper loginPage">
      <header>登录</header>
      <van-cell-group>
          <van-field style="padding-left: 0;" v-model="account" placeholder="请输入手机号"/>
      </van-cell-group>
      <van-cell-group>
          <van-field style="padding-left: 0;" type="password" v-model="password" placeholder="请输入密码" />
      </van-cell-group>

      <van-button size="large" type="primary" @click="doLogin()">登录</van-button>

      <div class="bottom">
        <p class="tc"><span @click="forgetPassword()">忘记密码？</span></p>
        <p class="tc"><span @click="doRegister()">还没有账号？注册</span></p>
      </div>

  </div>
</template>

<script>
import {
    Field,
    Cell,
    CellGroup,
    Button
  } from 'vant';

export default {
  components: {
      [Field.name]: Field,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Button.name]: Button,
    },
  name: "login",
  data() {
    return {
      account: "admin",
      password: "123456"
    };
  },
  methods: {
    doLogin() {
      this.$openWin('index.html','../index/index.html');
    },

    forgetPassword() {
      alert("进入忘记密码页面")
    }
    ,
    doRegister() {
      this.$openWin('index.html','./register.html');
    }
  },
  created() {
    // api.ajax(
    //   {
    //     url: "http://39.98.50.55:8080/login",
    //     method: "post",
    //     data: {
    //       values: {
    //         name: "haha"
    //       },
    //       files: {
    //         file: "fs://a.gif"
    //       }
    //     }
    //   },
    //   function(ret, err) {
    //     if (ret) {
    //       alert(JSON.stringify(ret));
    //     } else {
    //       alert(JSON.stringify(err));
    //     }
    //   }
    // );
    // this.$http
    //   .post("login", { account: "zhaodong", password: "123456" })
    //   .then(res => {});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../assets/common.less";
.loginPage{
  height: 100%;
  padding: 100px 10px 10px;

  header{
    font-size: 0.75rem;
    text-align: center;
    margin-bottom: 40px;
  }
  button{
    margin-top: 40px;
  }
}
</style>
