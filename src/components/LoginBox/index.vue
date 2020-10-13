<template>
  <form>
    <div class="login_box">
      <div class="cen_er">
        <ul>
          <li>
            <div class="controls">
              <i class="iconfont username">&#xe607;</i>
              <input
                type="text"
                placeholder="请输入用户名"
                class="form_control"
              />
            </div>
          </li>
          <li>
            <div class="controls">
              <i class="iconfont username">&#xe79c;</i>
              <input
                type="password"
                placeholder="请输入密码"
                class="form_control"
              />
            </div>
          </li>
          <li>
            <div class="controls verControls">
              <div class="input_box">
                <i class="iconfont username">&#xe660;</i>
                <input
                  type="text"
                  placeholder="请输入验证码"
                  class="form_control"
                />
              </div>
              <div class="sidentify_box">
                <sidentify></sidentify>
              </div>
            </div>
          </li>
          <li>
            <div class="controls radio_wrap">
              <div
                class="radio_item"
                v-for="(item, index) in radios"
                :key="item.id"
              >
                <span class="radio" :class="{ on: item.isChecked }"></span>
                <input
                  v-model="radio"
                  type="radio"
                  class="input_radio"
                  :value="item.value"
                  :checked="item.isChecked"
                  @click="check(index)"
                />
                {{ item.label }}
              </div>
            </div>
          </li>
          <li>
            <div class="controls">
              <button class="btn">登陆</button>
            </div>
          </li>
        </ul>
        <div class="forget_register">
          <span class="left">忘记密码?</span>
          <span class="right">免费注册</span>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import Sidentify from "@/components/Sidentify";

export default {
  name: "LoginBox",
  components: {
    Sidentify,
  },
  data() {
    return {
      radio: 1,
      radios: [
        {
          id: 1,
          label: "企业用户",
          value: "1",
          isChecked: true,
        },
        {
          id: 2,
          label: "个人用户",
          value: "2",
          isChecked: false,
        },
      ],
    };
  },
  methods: {
    check(index) {
      console.log(this);
      // 先取消所有选中项目
      this.radios.forEach((item) => {
        item.isChecked = false;
      });
      // 再设置当前点击项选中
      this.radio = this.radios[index].value;
      // 设置值，以供传递
      this.radios[index].isChecked = true;
      console.log(this.radio);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.login_box {
  padding-top: 0.4rem;
  .controls {
    position: relative;
    margin-bottom: 0.28rem;
    i {
      position: absolute;
      left: 0.3rem;
      top: 0.3rem;
      font-size: 0.3rem;
      z-index: 2;
    }
    .form_control {
      border: 1px solid #ccc;
    }
    input {
      padding: 0.1rem;
      height: .7rem;
      line-height: .7rem;
      font-size: .26rem;
      box-sizing: border-box;
    }
    .btn {
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.3rem;
      border-radius: 0.6rem;
      color: #fff;
      background-color: $mainColor;
    }
    .input_box {
      width: 60%;
    }
    .sidentify_box {
      width: 32%;
    }
  }
  .verControls {
    display: flex;
    justify-content: space-between;
  }
  .radio_wrap {
    display: flex;
    justify-content: space-between;
    .radio_item {
      position: relative;
      width: 4rem;
      input {
        width: 0.4rem;
        margin-right: 0.1rem;
      }
      .radio {
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        vertical-align: middle;
        cursor: pointer;
        background-image: url(../../assets/images/radio.png);
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 200%;
      }
      .input_radio {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
      }
      .on {
        background-position: -0.4rem 0;
      }
    }
  }
  .forget_register {
    display: flex;
    justify-content: space-between;
    span {
      font-size: .24rem;
      color: #999;
    }
  }
}
</style>