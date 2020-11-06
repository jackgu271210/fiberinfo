<template>
  <div class="header">
      <div class="logo">
          <router-link to="/" class="logo_img">
              <img src="@/assets/images/logo.png">
          </router-link>
      </div>
      <div class="top_box">
            <router-link to="login" class="login">
                <i class="iconfont icondenglu"></i>
            </router-link>
            <div class="search_wrap">
                <router-link to="search" class="search">
                    <input type="text" class="ipt" name="kw" id="kw" placeholder="请输入您想搜索的内容">
                    <i class="iconfont iconsousuo"></i>
                </router-link>
            </div>
      </div>
      <div class="burger" @click="showSidebar">
          <div class="x"></div>
          <div class="y"></div>
          <div class="z"></div>
      </div>
      <div class="nav_menu" v-if="navIsShow">

      </div>
  </div>
</template>

<script>
export default {
    name: 'CommonHeader'
}
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
                padding: .2rem .4rem;
            }
        }
    }  
}
</style>