<template>
  <div>
    <div class="controls_wrap">
      <input
        type="text"
        placeholder="最高学历"
        v-model="eduValue"
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
        :slots="slots"
        valueKey="name"
        :showToolbar="true"
        ref="picker"
      >
        <mt-button @click.prevent="handleCancel" class="cancel">取消</mt-button>
        请选择最高学历
        <mt-button @click.prevent="handleConfirm" class="confirm">确认</mt-button>
      </mt-picker>
    </mt-popup>
  </div>
</template>


<script>
export default {
  name: "FormSelect",
  data() {
    return {
      eduValue: "",
      slots: [
        {
          flex: 1,
          values: ["高中以下", "中专/技校", "大专", "本科", "硕士", "博士"],
          className: "slot1",
          textAlign: "center",
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
    handleCancel() {
      this.popupVisible = false;
    },
    handleConfirm() {
      this.eduValue = this.$refs.picker.getValues()[0];
      this.popupVisible = false;
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