<template>
  <div id="supplier">
    <inner-header :title="title" />
    <inner-icon />
    <common-footer />
  </div>
</template>

<script>
import InnerHeader from "@/components/InnerHeader";
import InnerIcon from "@/components/InnerIcon";
import CommonFooter from "@/components/CommonFooter";
export default {
  components: {
    InnerHeader,
    InnerIcon,
    CommonFooter,
  },
  data() {
    return {
      title: "优秀供应商",
    };
  },
};
</script>

<style>
</style>