<template>
  <form>
    <div class="register_box">
      <div class="cen_er">
        <nut-tab @tab-switch="tabSwitch" line-width="20">
          <nut-tab-panel tab-title="免费注册企业会员">
            <div class="individual_reg">
              <div class="title">个人登陆信息</div>
              <ul>
                <li>
                  <div class="controls">
                    <label for="user" class="reg_label"> 登陆用户名: </label>
                    <input type="text" class="reg_input" />
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <label for="user" class="reg_label"> 登陆密码: </label>
                    <input type="text" class="reg_input" />
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <label for="user" class="reg_label"> 确认密码: </label>
                    <input type="text" class="reg_input" />
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <label for="user" class="reg_label"> 验证码: </label>
                    <input type="text" class="reg_input" />
                  </div>
                </li>
              </ul>
            </div>
            <div class="individual_reg">
              <div class="title">
                企业基本资料
                <span class="red">*为必填项</span>
              </div>
              <ul>
                <li>
                  <div class="controls">
                    <label for="user" class="reg_label"> 公司名称: </label>
                    <input type="text" class="reg_input" />
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <label for="user" class="reg_label"> 联系人: </label>
                    <input type="text" class="reg_input" />
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <label for="user" class="reg_label"> 手机: </label>
                    <input type="text" class="reg_input" />
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <label for="user" class="reg_label"> 电话: </label>
                    <input type="text" class="reg_input" />
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <label for="user" class="reg_label"> 传真: </label>
                    <input type="text" class="reg_input" />
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <label for="user" class="reg_label"> 邮箱: </label>
                    <input type="text" class="reg_input" />
                  </div>
                </li>
              </ul>
            </div>
            <div class="reg_type radio_wrap">
              <div class="title">注册类型</div>
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
          </nut-tab-panel>
          <nut-tab-panel tab-title="免费注册个人会员">页签2</nut-tab-panel>
        </nut-tab>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginBox",
  data() {
    return {
      radio: 1,
      radios: [
        {
          id: 1,
          label: "先生",
          value: "1",
          isChecked: true,
        },
        {
          id: 2,
          label: "女士",
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
@import "@/assets/css/mixin.scss";

.register_box {
  ::v-deep .nut-tab {
    border: none;
    padding: 0;
    .nut-tab-item {
      padding: 10px 0 0 0;
      height: auto;
    }
    .nav-bar {
      background: $mainColor;
    }
    .nut-title-nav {
      a {
        @include title;
      }
    }
    .nut-tab-active {
      color: $mainColor;
      a {
        color: $mainColor;
      }
    }
  }
  .individual_reg {
    .title {
      font-size: 0.3rem;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      .red {
        font-size: 0.24rem;
        color: red;
      }
    }
    .controls {
      display: flex;
      align-items: center;
      margin-bottom: 0.28rem;
    }
    .reg_label {
      width: 33%;
      font-size: 0.26rem;
    }
    .reg_input {
      padding: 0.3rem 0.1rem 0.3rem 0.8rem;
      box-sizing: border-box;
      border: 1px solid #ccc;
    }
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
}
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
      padding: 0.3rem 0.1rem 0.3rem 0.8rem;
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
      font-size: 0.24rem;
      color: #999;
    }
  }
}
</style>