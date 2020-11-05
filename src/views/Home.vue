<template>
  <div id="home">
    <common-header />
    <div class="wrapper" ref="wrapper">
      <div>
        <swiper />
        <icon />
        <divide />
        <morning-report />
        <divide />
        <tab-component :newsData='newsList'/>
        <divide />
        <divide />
        <pro-nav />
        <common-footer />
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

import CommonHeader from "@/components/CommonHeader";
import Swiper from "@/components/Swiper";
import Icon from "@/components/Icon";
import Divide from "@/components/Divide";
import MorningReport from "@/components/MorningReport";
import TabComponent from "@/components/TabComponent";
import ProNav from "@/components/ProNav";
import CommonFooter from "@/components/CommonFooter";

export default {
  name: "Home",
  components: {
    CommonHeader,
    Swiper,
    Icon,
    Divide,
    MorningReport,
    TabComponent,
    ProNav,
    CommonFooter
  },
  data() {
    return {
      newsList: [],
    };
  },
  mounted() {
    this.$axios.get('http://localhost:8081/news.json',{}).then(res => {
      this.newsList = res.data.data.newsData[0].newsList;
      console.log(this.newsList);
    });
    this.$nextTick(()=>{
      setTimeout(()=> {
        this.scroll = new BScroll(this.$refs.wrapper, {click: true});
      },1000)
    })
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