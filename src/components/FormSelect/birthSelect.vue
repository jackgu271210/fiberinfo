<template>
  <div id="pickerTime">
    <div v-show="showtime">
      <div class="shadow" @click="hide"></div>
      <div class="datatime">
        <div class="sure">
          <div @click="unsure">取消</div>
          <div @click="sure">确认</div>
        </div>
        <mt-picker
          class="onepick"
          @change="onValuesChange"
          :slots="slots"
          :visible-item-count="3"
        ></mt-picker>
      </div>
    </div>
  </div>
</template>

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
        class="onepick"
        :slots="formData.slots"
        valueKey="name"
        :showToolbar="true"
        ref="picker"
        @change=""
      >
        <mt-button @click.prevent="handleCancel" class="cancel">取消</mt-button>
        {{ pickerTitle }}
        <mt-button @click.prevent="handleConfirm" class="confirm"
          >确认</mt-button
        >
      </mt-picker>
    </mt-popup>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import birth from "@/utils/birth.js";
const slotsday = birth.slotsday;
const slotsmouth = birth.slotsmouth;
console.log(slotsday);
console.log(slotsmouth);

export default {
  name: "pickerTime",
  props: ["status", "mouthorday"],
  data() {
    return {
      slotsday: slotsday,
      showtime: true,
      changeDate: {
        startTime: ["2009年", "1月", "1日"],
        finishTime: ["2009年", "1月", "1日"],
      },
      slots: [],
    };
  },
  mounted() {
    if (this.mouthorday == "mouth") {
      this.slots = slotsmouth;
    } else {
      this.slots = slotsday;
    }
  },
  watch: {
    status() {
      this.showtime = !this.showtime;
    },
  },
  methods: {
    hide() {
      this.showtime = false;
    },
    unsure() {
      this.showtime = false;
    },
    sure() {
      if (this.mouthorday == "mouth") {
        //判断时间段选择是否正确
        let myyear1 = this.changeDate.startTime[0].slice(0, 4);
        let myyear2 = this.changeDate.finishTime[0].slice(0, 4);
        let mymouth1 = this.changeDate.startTime[1].slice(
          0,
          this.changeDate.startTime[1].length - 1
        );
        let mymouth2 = this.changeDate.finishTime[1].slice(
          0,
          this.changeDate.finishTime[1].length - 1
        );
        if (myyear1 > myyear2) {
          this.toast("请选择正确的时间段");
          return;
        }
        if (myyear1 == myyear2 && mymouth1 > mymouth2) {
          Toast("请选择正确的时间段");
          return;
        }
      } else {
        //判断时间段选择是否正确
        console.log(this.changeDate);
        let myyear1 = this.changeDate.startTime[0].slice(0, 4);
        let myyear2 = this.changeDate.finishTime[0].slice(0, 4);
        let mymouth1 = this.changeDate.startTime[1].slice(
          0,
          this.changeDate.startTime[1].length - 1
        );
        let mymouth2 = this.changeDate.finishTime[1].slice(
          0,
          this.changeDate.finishTime[1].length - 1
        );
        let myday1 = this.changeDate.startTime[2].slice(
          0,
          this.changeDate.startTime[2].length - 1
        );
        let myday2 = this.changeDate.finishTime[2].slice(
          0,
          this.changeDate.finishTime[2].length - 1
        );
        if (myyear1 > myyear2) {
          Toast("请选择正确的时间段");
          return;
        }
        if (myyear1 == myyear2 && mymouth1 > mymouth2) {
          Toast("请选择正确的时间段");
          return;
        }
        if (myyear1 == myyear2 && mymouth1 == mymouth2 && myday1 > myday2) {
          Toast("请选择正确的时间段");
          return;
        }
      }
      this.showtime = false;
      this.$emit("childArr", this.changeDate);
    },
    onValuesChange(picker, values) {
      if (values.length) {
        this.changeDate.startTime = values;
      }
    },
  },
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