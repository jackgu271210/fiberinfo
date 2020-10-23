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
            <div class="reg_type">
              <div class="title">注册类型</div>
              <div class="radio_wrap">
                <div
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
                </div>
              </div>
            </div>
            <div class="reg_btn">
              <button class="btn">注册</button>
            </div>
          </nut-tab-panel>
          <nut-tab-panel tab-title="免费注册个人会员">
            <div class="individual_reg">
              <div class="title">个人登陆信息</div>
              <div class="sub_ti">
                个人注册仅限于求职，如需推广产品请注册企业用户
              </div>
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
                个人基本资料
                <span class="red">*为必填项</span>
              </div>
              <ul>
                <li>
                  <div class="controls">
                    <label for="user" class="reg_label"> 姓名: </label>
                    <input type="text" class="reg_input" />
                  </div>
                </li>
                <li>
                  <div class="controls radio_wrap">
                    <div class="reg_label">性别：</div>
                    <div class="radio_wrap">
                      <div
                        class="radio_item"
                        v-for="(item, index) in sex_radios"
                        :key="item.id"
                      >
                        <span
                          class="radio"
                          :class="{ on: item.isChecked }"
                        ></span>
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
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <label for="user" class="reg_label"> 出生日期: </label>
                    <input 
                      type="text" 
                      class="reg_input"
                      v-model="date"
                      placeholder="1991-02-07"
                      @click="switchPicker('isVisible')"
                    >
                    <nut-datepicker
                      :is-visible="isVisible"
                      title="请选择日期"
                      type="date"
                      startDate="1919-11-10"
                      endDate="2019-10-05"
                      @close="switchPicker('isVisible')"
                      @choose="setChooseValue"
                    >
                    </nut-datepicker>
                  </div>
                </li>
                <li>
                  <div class="controls">
                    <label for="user" class="reg_label"> 现居住地: </label>
                    <input type="text" class="reg_input" />
                  </div>
                </li>
                <li>
                    <div class="input" @click="openValue">
                      <label for="user" class="reg_label"> 最高学历: </label>
                      <!-- <input type="text" class="reg_input /" v-model="value" placeholder="请选择"> -->
                      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
                      <i class="iconfont arrow">&#xe683;</i>
                    </div>
                    <select class="list" v-show="show">
                      <option @click="getvalue(index,item)" v-for="(item,index) in eduData" :key="item.index">{{item}}</option>
                    </select>
                </li>
                <li>
                  <div class="controls">
                    <label for="user" class="reg_label"> 邮箱: </label>
                    <input type="text" class="reg_input" />
                  </div>
                </li>
              </ul>
            </div>
            <div class="reg_type">
              <div class="title">注册类型</div>
              <div class="radio_wrap">
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
            </div>
            <div class="reg_btn">
              <button class="btn">注册</button>
            </div>
          </nut-tab-panel>
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
      eduData: [
         '高中以下', '中专/技校', '大专', '本科', '硕士', '博士'
      ],
      show: false,
      value: '',
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
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
    }
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
    .controls {
      display: flex;
      align-items: center;
      margin-bottom: 0.28rem;
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
          right: .1rem;
          top: .2rem;
        }
      }
      .list {
        width: 75%;
        position: absolute;
        right: 0;
        top: .7rem;
        border: 1px solid #ccc;
        select{
          option {
            width: 100%;
            height: .7rem;
            line-height: .7rem;
            cursor: pointer;
            padding-left: .2rem;
          }
        }
      }
    .reg_label {
      width: 33%;
      font-size: 0.26rem;
    }
    .reg_input {
      padding: 0.1rem;
      height: .7rem;
      line-height: .7rem;
      font-size: .26rem;
      box-sizing: border-box;
      border: 1px solid #ccc;
    }
  }
  .reg_type {
    .title {
      font-size: 0.3rem;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
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