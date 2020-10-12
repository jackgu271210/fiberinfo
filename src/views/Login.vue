<template>
  <div id="register">
      <inner-header />
      <login-box />
      <common-footer />
  </div>
</template>

<script>
import InnerHeader from '@/components/InnerHeader'
import LoginBox from '@/components/LoginBox'
import CommonFooter from "@/components/CommonFooter";

export default {
    name: 'Login',
    components: {
        InnerHeader,
        LoginBox,
        CommonFooter
    }
}
</script>

<style>

</style>