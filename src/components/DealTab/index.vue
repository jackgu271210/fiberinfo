<template>
  <div class="fib_sckx">
    <div class="cen_er">
      <nut-tab @tab-switch="tabSwitch" line-width="60">
        <nut-tab-panel tab-title="供应">
          <ul class="newsList">
            <li>
              <a href="javascript:;">
                <span class="title">[供] E0005C黑色母粒</span>
                <span class="date">2019-09-28</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">[供] E0005C黑色母粒</span>
                <span class="date">2019-09-28</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">[供] E0005C黑色母粒</span>
                <span class="date">2019-09-28</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">[供] E0005C黑色母粒</span>
                <span class="date">2019-09-28</span>
              </a>
            </li>
          </ul>
        </nut-tab-panel>
        <nut-tab-panel tab-title="采购">
          <ul class="newsList">
            <li>
              <a href="javascript:;">
                <span class="title"> 100D-72F的丙纶P0Y..</span>
                <span class="date">2019-10-26</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title"> 100D-72F的丙纶P0Y..</span>
                <span class="date">2019-10-26</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title"> 100D-72F的丙纶P0Y..</span>
                <span class="date">2019-10-26</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title"> 100D-72F的丙纶P0Y..</span>
                <span class="date">2019-10-26</span>
              </a>
            </li>
          </ul>
        </nut-tab-panel>
        <nut-tab-panel tab-title="招聘">
          <ul class="newsList">
            <li>
              <a href="javascript:;">
                <span class="title">[聘] 纺丝操作工一名，纺30..</span>
                <span class="date">2020-08-19</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">[聘] 纺丝操作工一名，纺30..</span>
                <span class="date">2020-08-19</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">[聘] 纺丝操作工一名，纺30..</span>
                <span class="date">2020-08-19</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">[聘] 纺丝操作工一名，纺30..</span>
                <span class="date">2020-08-19</span>
              </a>
            </li>
          </ul>
        </nut-tab-panel>
        <nut-tab-panel tab-title="求职">
          <ul class="newsList">
            <li>
              <a href="javascript:;">
                <span class="title">[聘] 纺丝操作工一名，纺30..</span>
                <span class="date">2020-12-08</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">[聘] 纺丝操作工一名，纺30..</span>
                <span class="date">2020-12-08</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">[聘] 纺丝操作工一名，纺30..</span>
                <span class="date">2020-12-08</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="title">[聘] 纺丝操作工一名，纺30..</span>
                <span class="date">2020-12-08</span>
              </a>
            </li>
          </ul>
        </nut-tab-panel>
      </nut-tab>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsTab",
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