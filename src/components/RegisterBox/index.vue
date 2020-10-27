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
                <div class="title">企业登陆信息</div>
                <ul>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="登陆用户名"
                          class="reg_input"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="登陆密码"
                          class="reg_input"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="确认密码"
                          class="reg_input"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="验证码"
                          class="reg_input"
                        />
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
                        <input
                          type="text"
                          placeholder="公司名称"
                          class="reg_input"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="联系人"
                          class="reg_input"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="手机"
                          class="reg_input"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="电话"
                          class="reg_input"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="传真"
                          class="reg_input"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="邮箱"
                          class="reg_input"
                        />
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
                  <mt-radio
                    v-model="value"
                    :options="[
                      ' 申请普通会员(免费发布信息）',
                      ' 申请优秀供应商(付费推广）',
                    ]"
                  >
                  </mt-radio>
                </div>
              </div>
              <div class="controls">
                <mt-button type="default" size="large">立即注册</mt-button>
              </div>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <mt-cell>
              <div class="individual_reg">
                <div class="title">个人登陆信息</div>
                <ul>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="登陆用户名"
                          class="reg_input"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="登陆密码"
                          class="reg_input"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="确认密码"
                          class="reg_input"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="验证码"
                          class="reg_input"
                        />
                      </div>
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
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="姓名"
                          class="reg_input"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <mt-radio
                        class="sex-radiolist"
                        title="性别"
                        v-model="value"
                        :options="['男', '女']"
                      >
                      </mt-radio>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <mt-field
                          class="birthday"
                          label="生日"
                          placeholder="生日"
                          type="date"
                          v-model="birthday"
                        ></mt-field>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="现居住地"
                          class="reg_input"
                        />
                        <i class="iconfont arrow_down">&#xe683;</i>
                      </div>
                      <mt-popup
                        class="pop"
                        v-model="sexpopup"
                        position="bottom"
                      >
                        <mt-picker
                          :slots="slots"
                          valueKey="name"
                          @change="onValuesChange"
                        ></mt-picker>
                      </mt-popup>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="最高学历"
                          v-model="eduValue"
                          class="reg_input"
                        />
                        <i class="iconfont arrow_down" @click="handleClick"
                          >&#xe683;</i
                        >
                      </div>
                      <mt-popup
                        class="pop"
                        v-model="popupVisible"
                        modal="false"
                        position="bottom"
                      >
                        <mt-picker
                          :slots="slots"
                          valueKey="name"
                          :showToolbar="true"
                          ref="picker"
                        >
                          <mt-button @click.prevent="handleCancel" class="cancel"
                            >取消</mt-button
                          >
                          请选择最高学历
                          <mt-button @click.prevent="handleConfirm" class="confirm"
                            >确认</mt-button
                          >
                        </mt-picker>
                      </mt-popup>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <form-select />
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="欲求职位"
                          class="reg_input"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="期望月薪"
                          class="reg_input"
                        />
                        <i class="iconfont arrow_down">&#xe683;</i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="手机"
                          class="reg_input"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <input
                          type="text"
                          placeholder="邮箱"
                          class="reg_input"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <div class="controls_wrap">
                        <textarea
                          name=""
                          id=""
                          placeholder="工作简历"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <mt-button type="default" size="large"
                        >立即注册</mt-button
                      >
                    </div>
                  </li>
                </ul>
              </div>
            </mt-cell>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </form>
</template>

<script>
import FormSelect from '@/components/FormSelect';
export default {
  name: "LoginBox",
  components: {
    FormSelect
  },
  data() {
    return {
      selected: "1",
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
      eduValue: "",
      slots: [
        {
          flex: 1,
          values: ["高中以下", "中专/技校", "大专", "本科", "硕士", "博士"],
          className: "slot1",
          textAlign: "right",
        },
      ],
      closeOnClickModal: "true",
      popupVisible: false,
    };
  },
  methods: {
    handleClick() {
      this.popupVisible = true;
    },
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
    handleCancel() {
      this.popupVisible = false;
    },
    handleConfirm() {
      this.eduValue = this.$refs.picker.getValues()[0];
      this.popupVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
@import "@/assets/css/mixin.scss";
::v-deep .mint-tab-item-label {
  font-size: 0.26rem;
}
::v-deep .mint-cell-value {
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
::v-deep .mint-radio-label {
  font-size: 0.26rem;
}
::v-deep .mint-cell {
  min-height: 0.8rem;
  line-height: 0.8rem;
}
::v-deep .mint-radiolist-title {
  display: block;
  font-size: 0.26rem;
  margin: 0;
  margin-right: 0.4rem;
  color: inherit;
}
::v-deep .mint-radiolist-label {
  padding: 0;
  padding-right: 0.4rem;
}
::v-deep .mint-field {
  .mint-cell-title {
    width: 1rem;
    font-size: 0.26rem;
  }
}
::v-deep .mint-cell:last-child {
  background-image: none;
}
::v-deep .mint-button--default {
  color: #fff;
  background-color: $mainColor;
}

.mint-navbar {
  border-bottom: 1px solid #dbdbdb;
}
.controls {
  .mint-popup {
    width: 100%;
    ::v-deep .picker-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.3rem;
      .mint-button--default {
        background: none;
        font-size: 0.26rem;
        border: none;
        outline: none;
        box-shadow: none;
      }
      .confirm {
        color: $mainColor;
      }
      .cancel {
        color: #666;
      }
    }
    ::v-deep .picker-slot-right {
      text-align: center;
    }
  }
  .controls_wrap {
    input {
      width: 100%;
      margin-left: 0;
    }
    .arrow_down {
      transform: rotate(90deg);
      color: #333;
      font-size: 0.2rem;
    }
  }
}
.register_box {
  .mint-cell-value {
    .sex-radiolist {
      display: flex;
      align-items: center;
      ::v-deep .mint-cell {
        min-height: auto;
      }
    }
    .birthday {
      background-image: none;
      ::v-deep .mint-cell-wrapper {
        display: flex;
        justify-content: space-between;
      }
    }
    li {
      &:last-child {
        .controls {
          margin-bottom: 0;
        }
      }
    }
    .title {
      margin: 0.2rem 0;
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
}
</style>