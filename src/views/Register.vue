<template>
  <div id="register">
    <inner-header :title="title"/>
    <register-box />
    <space />
    <common-footer />
  </div>
</template>

<script>
import InnerHeader from "@/components/InnerHeader";
import RegisterBox from "@/components/RegisterBox";
import Space from "@/components/Space"
import CommonFooter from "@/components/CommonFooter";

export default {
  name: "Register",
  components: {
    InnerHeader,
    RegisterBox,
    Space,
    CommonFooter,
  },
  data() {
    return {
      "title": "注册"
    }
  }
};
</script>

<style lang="scss" scoped>
</style>