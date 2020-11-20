<template>
  <div id="web_build">
    <inner-header :title="title" />
    <inner-icon />
    <divide />
    <div class="build_box">
        <div class="cen_er">
            <h3 class="inner_title">网络营销全面解决方案</h3>
            <div class="build_con">
                <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                    <el-tab-pane label="营销型网站建设" name="first">用户管理</el-tab-pane>
                    <el-tab-pane label="网站标准配置" name="second">配置管理</el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
    <space />
    <common-footer />
  </div>
</template>

<script>
import InnerHeader from "@/components/InnerHeader";
import InnerIcon from "@/components/InnerIcon";
import Divide from "@/components/Divide";
import Space from "@/components/Space";
import CommonFooter from "@/components/CommonFooter";
export default {
  components: {
    InnerHeader,
    InnerIcon,
    Divide,
    Space,
    CommonFooter,
  },
  data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

</style>