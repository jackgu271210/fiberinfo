<template>
  <div id="register">
      <inner-header />
      <login-box />
      <space />
      <common-footer />
  </div>
</template>

<script>
import InnerHeader from '@/components/InnerHeader'
import LoginBox from '@/components/LoginBox'
import CommonFooter from "@/components/CommonFooter";
import Space from '@/components/Space'

export default {
    name: 'Login',
    components: {
        InnerHeader,
        LoginBox,
        CommonFooter,
        Space
    }
}
</script>

<style>

</style>