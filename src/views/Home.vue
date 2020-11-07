<template>
  <div id="home">
    <nav-menu :open="navOpen"/>
    <common-header @click="navOpen = false" @toggleNav="navOpen = !navOpen" />
    <div class="wrapper" ref="wrapper">
      <div>
        <swiper :bannerData="bannerList" />
        <icon />
        <divide />
        <morning-report />
        <divide />
        <tab-component :newsData="newsList" />
        <divide />
        <tab-component :newsData="serviceList" />
        <divide />
        <pro-nav />
        <space />
      </div>
      <common-footer />
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

import NavMenu from '@/components/NavMenu'
import CommonHeader from "@/components/CommonHeader";
import Swiper from "@/components/Swiper";
import Icon from "@/components/Icon";
import Divide from "@/components/Divide";
import MorningReport from "@/components/MorningReport";
import TabComponent from "@/components/TabComponent";
import ProNav from "@/components/ProNav";
import Space from '@/components/Space'
import CommonFooter from "@/components/CommonFooter";

export default {
  name: "Home",
  components: {
    NavMenu,
    CommonHeader,
    Swiper,
    Icon,
    Divide,
    MorningReport,
    TabComponent,
    ProNav,
    Space,
    CommonFooter,
  },
  data() {
    return {
      navOpen: false,
      bannerList: [],
      newsList: [],
      serviceList: [],
    };
  },
  mounted() {
    this.$axios.get("/banner.json", {}).then((res) => {
      this.bannerList = res.data.data.bannerList;
      console.log(this.bannerList);
    });
    this.$axios.get("/news.json", {}).then((res) => {
      this.newsList = res.data.data.newsList;
      console.log(this.newsList);
    });
    this.$axios.get("/service.json", {}).then((res) => {
      this.serviceList = res.data.data.serviceList;
      console.log(this.serviceList);
    });
    this.$nextTick(() => {
      setTimeout(() => {
        this.scroll = new BScroll(this.$refs.wrapper, { click: true });
      }, 1000);
    });
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 2.8rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>