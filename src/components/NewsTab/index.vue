<template>
  <div class="fib_sckx">
    <div class="cen_er">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">市场快讯</mt-tab-item>
        <mt-tab-item id="2">石化动态</mt-tab-item>
        <mt-tab-item id="3">油市综合</mt-tab-item>
        <mt-tab-item id="4">焦点关注</mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell>
            <ul class="newsList">
              <li>
                <a href="javascript:;">
                  <span class="title"
                    >PP粉料小结：市场窄幅上调，预计近期PP粉料市场会有窄幅波动</span
                  >
                  <span class="date">2019-09-04</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="title"
                    >PP粉料小结：市场窄幅上调，预计近期PP粉料市场会有窄幅波动</span
                  >
                  <span class="date">2019-09-04</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="title"
                    >PP粉料小结：市场窄幅上调，预计近期PP粉料市场会有窄幅波动</span
                  >
                  <span class="date">2019-09-04</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="title"
                    >PP粉料小结：市场窄幅上调，预计近期PP粉料市场会有窄幅波动</span
                  >
                  <span class="date">2019-09-04</span>
                </a>
              </li>
            </ul>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell>
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
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell>
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
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <mt-cell>
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
          </mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
      <small-ban>
        <ul>
          <li>
            <img src="@/assets/images/wrap_ban03.jpg" />
          </li>
          <li>
            <img src="@/assets/images/wrap_ban04.jpg" />
          </li>
        </ul>
      </small-ban>
    </div>
  </div>
</template>

<script>
import SmallBan from "@/components/SmallBan";

export default {
  name: "NewsTab",
  components: {
    SmallBan,
  },
  data() {
    return {
      selected: "1",
    };
  },
  methods: {
    tabSwitch: function (index, event) {
      console.log(index + "--" + event);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
@import "@/assets/css/mixin.scss";

.is-selected {
  margin-bottom: 0 !important;
}
.mint-cell-wrapper {
  padding: 0 !important;
}
.fib_sckx {
  .nav-bar {
    background: $mainColor;
  }
  .mint-navbar {
    ::v-deep .mint-tab-item-label {
      @include title;
    }
  }
  .newsList {
    .title {
      display: inline-block;
      width: 65%;
      @include ellipse;
    }
  }
  .is-selected {
    color: $mainColor;
    a {
      color: $mainColor;
    }
  }
  .mint-cell-wrapper {
    padding: 0;
  }
  li {
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.26rem;
    a {
      display: flex;
      justify-content: space-between;
      .date {
        width: 30%;
        font-size: 0.2rem;
      }
    }
  }
}
</style>