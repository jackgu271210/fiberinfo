<template>
  <div id="register">
      <inner-header :title="title"/>
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
    },
    data() {
        return {
            "title": "登录"
        }
    }
}
</script>

<style>

</style>