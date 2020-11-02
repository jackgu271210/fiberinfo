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
                  <!-- <li>
                    <div class="controls">
                      <birth-select :formData="birthData" />
                    </div>
                  </li> -->
                  <li>
                    <div class="controls">
                      <area-select :formData="areaData" />
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <single-select :formData="eduData" />
                    </div>
                  </li>
                  <li>
                    <div class="controls">
                      <single-select :formData="workData" />
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
                      <single-select :formData="salaryData" />
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
import area from "@/assets/utils/area";
import SingleSelect from "@/components/FormSelect/singleSelect";
import AreaSelect from "@/components/FormSelect/areaSelect";
// import BirthSelect from "@/components/FormSelect/birthSelect";
export default {
  name: "LoginBox",
  components: {
    SingleSelect,
    AreaSelect ,
    // BirthSelect
  },
  data() {
    return {
      selected: "1",
      isVisible: false,
      date: null,
      value: '',
      show: false,
      eduData: {
        placeholder: "请选择最高学历",
        formValue: "",
        slots: [
          {
            flex: 1,
            values: ["高中以下", "中专/技校", "大专", "本科", "硕士", "博士"],
            className: "slot1",
            textAlign: "center",
          },
        ],
      },
      workData: {
        placeholder: "请选择工作年限",
        formValue: "",
        slots: [
          {
            flex: 1,
            values: ["无经验", "1-3年", "3-5年", "5-10年", "10年以上"],
            className: "slot1",
            textAlign: "center",
          },
        ],
      },
      salaryData: {
        placeholder: "请选择期望薪资",
        formValue: "",
        slots: [
          {
            flex: 1,
            values: ["3000以下", "3000-5000", "5000-8000", "8000以上"],
            className: "slot1",
            textAlign: "center",
          },
        ],
      },
      // birthData: {
      //   placeholder: "请选择出生年份",
      //   formValue: "",
      //   slotsday: slotsday,
      //   showtime: true,
      //   changeDate: {
      //     startTime: ["2009年", "1月", "1日"],
      //     finishTime: ["2009年", "1月", "1日"],
      //   },
      //   slots: [],
      // },
      areaData: {
        placeholder: "请选择现居住地",
        province: "", //省
        city: "", //市
        county: "", //县
        formValue: "",
        slots: [
          {
            flex: 1,
            values: this.getProvinceArr(),
            className: "slot1",
            textAlign: "center",
          },
          {
            divider: true,
            content: "-",
            className: "slot2",
          },
          {
            flex: 1,
            values: this.getCityArr("北京市"),
            className: "slot3",
            textAlign: "center",
          },
          {
            divider: true,
            content: "-",
            className: "slot4",
          },
          {
            flex: 1,
            values: this.getCountyArr("北京市", "北京市"),
            className: "slot5",
            textAlign: "center",
          },
        ],
      },
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
      if (this.regionInit) {
      // 取值并赋值
        this.formValue = values[0]["name"] + ' ' + values[1]["name"] + ' ' + values[2]["name"];
        this.province = values[0]["name"];
        this.city = values[1]["name"];
        this.county = values[2]["name"];
      //给市、县赋值
        picker.setSlotValues(1, this.getCityArr(values[0]["name"]));
        picker.setSlotValues(2, this.getCountyArr(values[0]["name"], values[1]["name"]));
      } else {
        this.regionInit = true;
      }
    },
    getProvinceArr() {
      let provinceArr = [];
      area.forEach(function (item) {
      let obj = {};
          obj.name = item.label;
          obj.code = item.value;
          provinceArr.push(obj);
      });
      return provinceArr;
    },
    getCityArr(province) {
      let cityArr = [];
      area.forEach(function (item) {
      if (item.label === province) {
          item.children.forEach(function (args) {
          let obj = {};
              obj.name = args.label;
              obj.code = args.value;
          cityArr.push(obj);
          });
      }
      });
      return cityArr;
    },
    getCountyArr(province,city){
      let countyArr = [];
      area.forEach(function(item){
      if (item.label === province){
          item.children.forEach(function (args) {
              if (args.label === city){
                  args.children.forEach(function (param) {
                      let obj = {};
                      obj.name=param.label;
                      obj.code=param.value;
                      countyArr.push(obj);
                      })
                  }
              });
          }
      });
      return countyArr;
    }
  },
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