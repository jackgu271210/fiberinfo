<template>
  <div>
    <div class="controls_wrap">
      <input
        type="text"
        :placeholder="formData.placeholder"
        v-model="formValue"
        class="reg_input"
      />
      <i class="iconfont arrow_down" @click="handleClick">&#xe683;</i>
    </div>
    <mt-popup
      class="pop"
      v-model="popupVisible"
      modal="false"
      position="bottom"
    >
      <mt-picker
        :slots="formData.slots"
        valueKey="name"
        :showToolbar="true"
        @change="onValuesChange"
        ref="picker"
      >
        <mt-button @click.prevent="handleCancel" class="cancel">取消</mt-button>
        {{ pickerTitle }}
        <mt-button @click.prevent="handleCancel(1)" class="confirm"
          >确认</mt-button
        >
      </mt-picker>
    </mt-popup>
  </div>
</template>


<script>
import area from "@/assets/utils/area";
export default {
  name: "FormSelect",
  props: [
    "formData",
  ],
  data() {
    return {
      formValue: '',
      closeOnClickModal: "true",
      popupVisible: false,
      regionInit: false,
      pickerTitle: '',
      name: ''
    };
  },
  methods: {
    handleClick() {
      this.popupVisible = true;
    },
    handleCancel() {
      this.popupVisible = false;
    },
    handleConfirm(values) {
      this.formValue = this.getValues[0];
      this.popupVisible = false;
    },
     onValuesChange(picker, values) {
      if (this.regionInit) {
      // 取值并赋值
        this.formValue = values[0]["name"] + ' - ' + values[1]["name"] + ' - ' + values[2]["name"];
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
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
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
</style>