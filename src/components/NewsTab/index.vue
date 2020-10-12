<template>
  <div class="fib_sckx">
    <div class="cen_er">
      <nut-tab @tab-switch="tabSwitch" line-width="60">
        <nut-tab-panel tab-title="市场快讯">
          <ul class="newsList">
            <li>
              <a href="javascript:;">
                <span class="title">煤制聚丙烯对pp粉料市场的替代性分析</span>
                <span class="date">2019-09-04</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">煤制聚丙烯对pp粉料市场的替代性分析</span>
                <span class="date">2019-09-04</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">煤制聚丙烯对pp粉料市场的替代性分析</span>
                <span class="date">2019-09-04</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">煤制聚丙烯对pp粉料市场的替代性分析</span>
                <span class="date">2019-09-04</span>
              </a>
            </li>
          </ul>
        </nut-tab-panel>
        <nut-tab-panel tab-title="石化动态">
          <ul class="newsList">
            <li>
              <a href="javascript:;">
                <span class="title">聚焦工业化逆袭之变 中国石化的中国能量</span>
                <span class="date">2019-10-26</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">聚焦工业化逆袭之变 中国石化的中国能量</span>
                <span class="date">2019-10-26</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">聚焦工业化逆袭之变 中国石化的中国能量</span>
                <span class="date">2019-10-26</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">聚焦工业化逆袭之变 中国石化的中国能量</span>
                <span class="date">2019-10-26</span>
              </a>
            </li>
          </ul>
        </nut-tab-panel>
        <nut-tab-panel tab-title="油市综合">
          <ul class="newsList">
            <li>
              <a href="javascript:;">
                <span class="title">17日盘中惊现52亿美元巨额卖单 国际油市疯狂背后暗流涌动</span>
                <span class="date">2020-08-19</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">17日盘中惊现52亿美元巨额卖单 国际油市疯狂背后暗流涌动</span>
                <span class="date">2020-08-19</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">17日盘中惊现52亿美元巨额卖单 国际油市疯狂背后暗流涌动</span>
                <span class="date">2020-08-19</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">17日盘中惊现52亿美元巨额卖单 国际油市疯狂背后暗流涌动</span>
                <span class="date">2020-08-19</span>
              </a>
            </li>
          </ul>
        </nut-tab-panel>
        <nut-tab-panel tab-title="焦点关注">
          <ul class="newsList">
            <li>
              <a href="javascript:;">
                <span class="title">卫生间防水用丙纶布好吗,怎样辨别丙纶防水卷材的好坏</span>
                <span class="date">2020-12-08</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">卫生间防水用丙纶布好吗,怎样辨别丙纶防水卷材的好坏</span>
                <span class="date">2020-12-08</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">卫生间防水用丙纶布好吗,怎样辨别丙纶防水卷材的好坏</span>
                <span class="date">2020-12-08</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">卫生间防水用丙纶布好吗,怎样辨别丙纶防水卷材的好坏</span>
                <span class="date">2020-12-08</span>
              </a>
            </li>
          </ul>
        </nut-tab-panel>
      </nut-tab>
      <!-- 二列广告 -->
      <small-ban>
        <ul>
          <li>
            <img src="@/assets/images/wrap_ban03.jpg"/>
          </li>
          <li>
            <img src="@/assets/images/wrap_ban04.jpg"/>
          </li>
        </ul>
      </small-ban>
    </div>
  </div>
</template>

<script>
import SmallBan from '@/components/SmallBan'

export default {
  name: "NewsTab",
  components: {
    SmallBan
  },
  methods: {
    tabSwitch: function (index, event) {
      console.log(index + "--" + event);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/variable.scss';
@import '@/assets/css/mixin.scss';

.fib_sckx {
  ::v-deep .nut-tab {
    border: none;
    padding: 0;
    .nut-tab-item {
      padding: 10px 0 0 0;
      height: auto;
    }
    .nav-bar {
      background: $mainColor;
    }
    .nut-title-nav {
      a {
        @include title;
      }
    }
    .newsList {
        .title {
          display: inline-block;
          width: 76%;
          @include ellipse;
        }
    }
    .nut-tab-active {
      color: $mainColor;
        a {
          color: $mainColor;
        }
    }
    li {
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.26rem;
      a {
        display: flex;
        justify-content: space-between;
        .date {
          font-size: .2rem;
        }
      }
    }
  }
}
</style>