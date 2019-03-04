<template>
  <div class="default-wrapper registerPage">
      <header>注册</header>
      <van-cell-group>
          <van-field v-model="newTel" placeholder="请填写您的新手机号" required />
      </van-cell-group>
      <van-cell-group>
          <van-field v-model="tel" placeholder="请输入你的手机号" />
      </van-cell-group>
      <van-cell-group>
          <van-row>
            <van-col span="18" style="border-right:1px solid #666">
              <van-field v-model="code" placeholder="请输入验证码" />
            </van-col>
            <van-col span="6" style="font-size:14px;height:100%;">
              <van-button style="border:none;width:100%;padding:0 2px;" @click="doLogin()">获取验证码</van-button>
            </van-col>
          </van-row>
      </van-cell-group>
      <van-cell-group>
          <van-row>
            <van-col span="18">
              <van-field v-model="id" placeholder="请输入推荐人ID" required/>
            </van-col>
            <van-col span="6">
              <van-button style="border:none;width:100%;padding:0 2px;color:red" @click="doLogin()">*必须填写哦</van-button>
            </van-col>
          </van-row>
      </van-cell-group>

      <div class="bottom-btns">
        <van-button size="large" type="primary" @click="doRegister()">确认</van-button>
        <van-button size="large" type="default" @click="goBack()">取消</van-button>
      </div>

  </div>
</template>

<script>
import {
    Field,
    Cell,
    CellGroup,
    Button,
    Row,
    Col
  } from 'vant';

export default {
  components: {
      [Field.name]: Field,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Button.name]: Button,
      [Row.name]: Row,
      [Col.name]: Col
    },
  name: "register",
  data() {
    return {
      newTel: "",
      tel: "",
      code: "",
      id: ""
    };
  },
  methods: {
    doRegister() {
      this.$openWin('index.html','../me/index.html');
    },
    goBack() {

    }
  },
  created() {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../assets/common.less";
.registerPage{
  box-sizing: border-box;
  height: 100%;
  padding: 100px 10px 10px;
  header{
    font-size: 0.75rem;
    text-align: center;
    margin-bottom: 40px;
  }
  .bottom-btns{
    position: relative;
    margin-top: 60px;
    p{
      text-align: center;
    }

    button{
      border-radius: 4px;
      margin-bottom:10px;
    }
  }
}
</style>
