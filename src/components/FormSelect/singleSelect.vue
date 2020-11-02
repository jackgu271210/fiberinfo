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
        ref="picker"
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
export default {
  name: "SingleSelect",
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
    handleConfirm() {
      this.formValue = this.$refs.picker.getValues();
      this.popupVisible = false;
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