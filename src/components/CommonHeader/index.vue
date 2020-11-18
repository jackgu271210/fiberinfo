<template>
  <div class="header">
    <div class="logo">
      <router-link to="/" class="logo_img">
        <img src="@/assets/images/logo.png" />
      </router-link>
    </div>
    <div class="top_box">
      <router-link to="login" class="login">
        <i class="iconfont icondenglu"></i>
      </router-link>
      <div class="search_wrap">
        <router-link to="search" class="search">
          <input
            type="text"
            class="ipt"
            name="kw"
            id="kw"
            placeholder="请输入您想搜索的内容"
          />
          <i class="iconfont iconsousuo"></i>
        </router-link>
      </div>
    </div>
    <div class="burger" @click="drawer = true">
      <div class="x"></div>
      <div class="y"></div>
      <div class="z"></div>
    </div>
    <div class="nav_menu">
      <el-drawer
        class="menu-drawer hidden-md-and-up"
        append-to-body
        :with-header="false"
        direction="ltr"
        :visible.sync="drawer"
        size="50%"
      >
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <template slot="title">
              <span>首页</span>
            </template>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <span>丙纶成品</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">丙纶细旦丝</el-menu-item>
              <el-menu-item index="2-2">无纺布</el-menu-item>
              <el-menu-item index="2-3">丙纶单丝</el-menu-item>
              <el-menu-item index="2-4">丙纶空变丝</el-menu-item>
              <el-menu-item index="2-5">丙纶无纺布</el-menu-item>
              <el-menu-item index="2-6">丙纶短纤</el-menu-item>
              <el-menu-item index="2-7">废丙纶丝丝</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span>首页</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">丙纶细旦丝</el-menu-item>
              <el-menu-item index="2-2">无纺布</el-menu-item>
              <el-menu-item index="2-3">丙纶单丝</el-menu-item>
              <el-menu-item index="2-4">丙纶空变丝</el-menu-item>
              <el-menu-item index="2-5">丙纶无纺布</el-menu-item>
              <el-menu-item index="2-6">丙纶短纤</el-menu-item>
              <el-menu-item index="2-7">废丙纶丝丝</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <span>首页</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">丙纶细旦丝</el-menu-item>
              <el-menu-item index="2-2">无纺布</el-menu-item>
              <el-menu-item index="2-3">丙纶单丝</el-menu-item>
              <el-menu-item index="2-4">丙纶空变丝</el-menu-item>
              <el-menu-item index="2-5">丙纶无纺布</el-menu-item>
              <el-menu-item index="2-6">丙纶短纤</el-menu-item>
              <el-menu-item index="2-7">废丙纶丝丝</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <span>首页</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">丙纶细旦丝</el-menu-item>
              <el-menu-item index="2-2">无纺布</el-menu-item>
              <el-menu-item index="2-3">丙纶单丝</el-menu-item>
              <el-menu-item index="2-4">丙纶空变丝</el-menu-item>
              <el-menu-item index="2-5">丙纶无纺布</el-menu-item>
              <el-menu-item index="2-6">丙纶短纤</el-menu-item>
              <el-menu-item index="2-7">废丙纶丝丝</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: "LyHead",
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    headClass() {
      let clazz = "";
      if (this.$route.path === "/editor") {
        clazz = "hide-head";
      } else if (this.$route.path !== "/index") {
        clazz = "bg-head";
      }
      return clazz;
    },
    activeMenu() {
      return this.$route.path.replace("/", "");
    },
  },
  methods: {
    menuSelectHandler(index) {
      this.$router.push(index).catch((err) => {
        err;
      });
      this.drawer = false;
    },
    gotoGitHub() {},
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  background-color: #0bf;
  .top_box {
    .search {
      display: flex;
      align-items: center;
      .iconsousuo {
        padding: 0.2rem 0.4rem;
      }
    }
  }
}
</style>