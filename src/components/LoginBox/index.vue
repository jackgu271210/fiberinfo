<template>
  <form>
    <div class="login_box">
      <div class="cen_er">
        <ul>
          <li>
            <div class="controls">
              <div class="controls_wrap">
                <i class="iconfont username">&#xe607;</i>
                <input
                  type="text"
                  placeholder="请输入用户名"
                  class="form_control"
                />
              </div>
            </div>
          </li>
          <li>
            <div class="controls">
              <div class="controls_wrap">
                <i class="iconfont username">&#xe79c;</i>
                <input
                  type="password"
                  placeholder="请输入密码"
                  class="form_control"
                />
              </div>
            </div>
          </li>
          <li>
            <div class="controls verControls">
              <div class="controls_wrap">
                <i class="iconfont username">&#xe660;</i>
                <input
                  type="text"
                  placeholder="请输入验证码"
                  class="form_control"
                />
                <div class="sidentify_box">
                  <sidentify></sidentify>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="controls">
              <!-- <div
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
              </div> -->
              <mt-radio v-model="value" :options="['企业用户', '个人用户']">
              </mt-radio>
            </div>
          </li>
          <li>
            <div class="controls">
              <mt-button type="default" size="large">登陆</mt-button>
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
    return {};
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
::v-deep .mint-cell-wrapper {
  padding: 0px;
}
::v-deep .mint-radiolist-label {
  padding: 0;
  padding-right: 0.4rem;
}
::v-deep .mint-radiolist-title {
  margin: 0;
}
::v-deep .mint-button--default {
  color: #fff;
  background-color: $mainColor;
}

.login_box {
  padding-top: 0.4rem;
  .controls {
    input {
      width: 100%;
    }
    .iconfont {
      margin-right: .3rem;
    }
    .mint-radiolist {
      display: flex;
      ::v-deep .mint-radiolist-title {
        margin: 0px;
      }
    }
  }
  
  .mint-radiolist {
    display: flex;
  }

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

  .forget_register {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 0.24rem;
      color: #999;
    }
  }
}
</style>