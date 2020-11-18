<template>
  <div class="nav_menu">
    <el-drawer
        class="menu-drawer hidden-md-and-up"
        append-to-body
        :with-header="false"
        direction="ltr"
        :visible.sync="drawer"
        size="50%"
      >
        <p class="logo"></p>
        <p class="title">
          Vue
        </p>
        <el-menu
          :default-active="activeMenu"
          class="menu-list"
          @select="menuSelectHandler"
        >
          <el-menu-item index="index">
           首页
          </el-menu-item>
          <el-menu-item index="examples">
            示例
          </el-menu-item>
        </el-menu>
      </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'LyHead',
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    headClass() {
      let clazz = ''
      if (this.$route.path === '/editor') {
        clazz = 'hide-head'
      } else if (this.$route.path !== '/index') {
        clazz = 'bg-head'
      }
      return clazz
    },
    activeMenu() {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
    menuSelectHandler(index) {
      this.$router.push(index).catch(err => {
        err
      })
      this.drawer = false
    },
    gotoGitHub() {}
  }
}
</script>

<style lang='scss' scoped>
.nav_menu {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
  .side_menu {
    position: absolute;
    left: 0%;
    top: 0;
    bottom: 0;
    width: 70%;
    background-color: #fff;
    -webkit-transition: left 200ms cubic-bezier(0, 0.655, 0, 1);
    -webkit-transition: left 200ms cubic-bezier(0.025, 0.685, 0, 0.99);
    -moz-transition: left 200ms cubic-bezier(0.025, 0.685, 0, 0.99);
    -o-transition: left 200ms cubic-bezier(0.025, 0.685, 0, 0.99);
    transition: left 200ms cubic-bezier(0.025, 0.685, 0, 0.99);
  }
  .opened {
      left: 0;
  }
}
</style>
