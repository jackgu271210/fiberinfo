<template>
  <div id="register">
      <inner-header />
      <register-box />
      <common-footer />
  </div>
</template>

<script>
import InnerHeader from '@/components/InnerHeader'
import RegisterBox from '@/components/RegisterBox'
import CommonFooter from "@/components/CommonFooter";

export default {
    name: 'Register',
    components: {
        InnerHeader,
        RegisterBox,
        CommonFooter
    }
}
</script>

<style>

</style>