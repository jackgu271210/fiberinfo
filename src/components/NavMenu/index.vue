<template>
  <div class="nav_menu" v-if="open">
    <div class="side_menu">
      <div class="nav_container">
        <ul>
          <li>
            <div class="link">
              <a href="javascript:;">首页</a>
            </div>
          </li>
          <li>
            <div class="link">
              <a href="javascript:;">丙纶成品</a>
              <i class="iconfont"></i>
            </div>
            <ul class="sub_menu">
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
            </ul>
          </li>
          <li>
            <div class="link">
              <a href="javascript:;">丙纶成品</a>
              <i class="iconfont"></i>
            </div>
            <ul class="sub_menu">
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
            </ul>
          </li>
          <li>
            <div class="link">
              <a href="javascript:;">丙纶成品</a>
              <i class="iconfont"></i>
            </div>
            <ul class="sub_menu">
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
            </ul>
          </li>
          <li>
            <div class="link">
              <a href="javascript:;">丙纶成品</a>
              <i class="iconfont"></i>
            </div>
            <ul class="sub_menu">
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
              <li>
                <a href="javascript:;">丙纶细旦丝</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: ['open']
};
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
