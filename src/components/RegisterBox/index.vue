<template>
  <form>
    <div class="register_box">
      <div class="cen_er">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">免费注册企业会员</mt-tab-item>
          <mt-tab-item id="2">免费注册个人会员</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <mt-cell>
              <div class="individual_reg">
              <div class="title">个人登陆信息</div>
              <ul>
                <li>
                  <div class="controls">
                    <div class="controls_wrap">
                      <label for="user" class="reg_label"> 登陆用户名</label>
                      <input type="text" class="reg_input" />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <div class="controls_wrap">
                      <label for="user" class="reg_label"> 登陆密码</label>
                      <input type="text" class="reg_input" />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <div class="controls_wrap">
                      <label for="user" class="reg_label"> 确认密码</label>
                      <input type="text" class="reg_input" />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <div class="controls_wrap">
                      <label for="user" class="reg_label"> 验证码</label>
                      <input type="text" class="reg_input" />
                    </div>
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
                    <div class="controls_wrap">
                      <label for="user" class="reg_label"> 公司名称</label>
                      <input type="text" class="reg_input" />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <div class="controls_wrap">
                      <label for="user" class="reg_label"> 联系人</label>
                      <input type="text" class="reg_input" />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <div class="controls_wrap">
                      <label for="user" class="reg_label"> 手机</label>
                      <input type="text" class="reg_input" />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <div class="controls_wrap">
                      <label for="user" class="reg_label"> 电话</label>
                      <input type="text" class="reg_input" />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <div class="controls_wrap">
                      <label for="user" class="reg_label"> 传真</label>
                      <input type="text" class="reg_input" />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <div class="controls_wrap">
                      <label for="user" class="reg_label"> 邮箱</label>
                      <input type="text" class="reg_input" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="reg_type">
              <div class="title">注册类型</div>
              <div class="radio_wrap">
                <!-- <div
                  class="radio_item"
                  v-for="(item, index) in user_radios"
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
                <mt-radio v-model="value" :options="[' 申请普通会员(免费发布信息）', ' 申请优秀供应商(付费推广）']">
                </mt-radio>
              </div>
            </div>
            <div class="reg_btn">
              <button class="btn">注册</button>
            </div>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
             <mt-cell>
              222
            </mt-cell>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginBox",
  data() {
    return {
      selected: '1',
      sex_radio: 1,
      sex_radios: [
        {
          id: 1,
          label: "男",
          value: "1",
          isChecked: true,
        },
        {
          id: 2,
          label: "女",
          value: "2",
          isChecked: false,
        },
      ],
      user_radio: 1,
      user_radios: [
        {
          id: 1,
          label: "申请普通会员(免费发布信息）",
          value: "1",
          isChecked: true,
        },
        {
          id: 2,
          label: "申请优秀供应商(付费推广）",
          value: "2",
          isChecked: false,
        },
      ],
      isVisible: false,
      date: null,
      eduData: ["高中以下", "中专/技校", "大专", "本科", "硕士", "博士"],
      show: false,
      value: "",
      slots: [
        {
          flex: 1,
          values: [
            "2015-01",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06",
          ],
          className: "slot1",
          textAlign: "right",
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
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`];
    },
    setChooseValue(param) {
      this.date = param[3];
    },
    openValue() {
      this.show = !this.show;
    },
    getValue(index, item) {
      this.value = item;
      this.show = false;
    },
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
@import "@/assets/css/mixin.scss";
::v-deep .mint-tab-item-label {
    font-size: .26rem;
  }
::v-deep  .mint-cell-value {
    width: 100%;
    display: block;
    color: inherit;
}
::v-deep .mint-cell-wrapper {
  display: block;
  padding: 0;
  background-image: none;
}
::v-deep .mint-radiolist-label {
  padding: 0;
}
::v-deep  .mint-radio-label {
  font-size: .26rem;
}
.mint-navbar {
  border-bottom: 1px solid #dbdbdb;
  
}

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
  .mint-cell-value {
    li {
      &:last-child {
        .controls {
          margin-bottom: 0;
        }
      }
    }
    .title {
      margin: .2rem 0;
      font-size: 0.3rem;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      color: #333;
      .red {
        font-size: 0.24rem;
        color: red;
      }
    }
    ul {
      li {
        position: relative;
      }
    }
    .sub_ti {
      margin-bottom: 0.4rem;
      font-size: 0.24rem;
      color: #666;
      text-align: center;
    }
    .input {
      display: flex;
      align-items: center;
      width: 100%;
      position: relative;
      .arrow {
        display: block;
        transform: rotate(90deg);
        position: absolute;
        right: 0.1rem;
        top: 0.2rem;
      }
    }
    .list {
      width: 75%;
      position: absolute;
      right: 0;
      top: 0.7rem;
      border: 1px solid #ccc;
      select {
        option {
          width: 100%;
          height: 0.7rem;
          line-height: 0.7rem;
          cursor: pointer;
          padding-left: 0.2rem;
        }
      }
    }
    .reg_label {
      font-size: 0.26rem;
    }
  }
  .reg_btn {
    .btn {
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.3rem;
      border-radius: 0.6rem;
      color: #fff;
      background-color: $mainColor;
    }
  }
  .radio_wrap {
    display: flex;
    justify-content: flex-start;
    font-size: 0.28rem;
    .radio_item {
      position: relative;
      margin-right: 0.4rem;
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