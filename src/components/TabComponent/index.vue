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
                  <span class="title">中天合创PP装置报道</span>
                  <span class="date">2020-11-03</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="title">中天合创PP装置报道</span>
                  <span class="date">2020-11-03</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="title">中天合创PP装置报道</span>
                  <span class="date">2020-11-03</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="title">中天合创PP装置报道</span>
                  <span class="date">2020-11-03</span>
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
                  <span class="title">WTI原油期货8点报盘</span>
                  <span class="date">2020-11-04</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="title">WTI原油期货8点报盘</span>
                  <span class="date">2020-11-04</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="title">WTI原油期货8点报盘</span>
                  <span class="date">2020-11-04</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="title">WTI原油期货8点报盘</span>
                  <span class="date">2020-11-04</span>
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
                  <span class="title"
                    >美国大选结果即将揭晓！特朗普还是拜登？对纺织产业影响几何？</span
                  >
                  <span class="date">2020-11-03</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="title"
                    >美国大选结果即将揭晓！特朗普还是拜登？对纺织产业影响几何？</span
                  >
                  <span class="date">2020-11-03</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="title"
                    >美国大选结果即将揭晓！特朗普还是拜登？对纺织产业影响几何？</span
                  >
                  <span class="date">2020-11-03</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="title"
                    >美国大选结果即将揭晓！特朗普还是拜登？对纺织产业影响几何？</span
                  >
                  <span class="date">2020-11-03</span>
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
::v-deep .mint-cell-value {
  width: 100%;
  .newsList {
    width: 100%;
  }
}
::v-deep .mint-cell-wrapper {
  padding: 0;
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
      width: 70%;
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
    position: relative;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.26rem;
    a {
      display: flex;
      justify-content: space-between;
      .date {
        width: 30%;
        font-size: 0.2rem;
        text-align: right;
      }
    }
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: #ccc;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
    }
  }
}
</style>