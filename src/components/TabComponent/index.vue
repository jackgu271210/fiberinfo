<template>
  <div class="fib_sckx">
    <div class="cen_er">
      <mt-navbar v-model="selected">
        <mt-tab-item :id="item.id" v-for="item in newsData" :key="item.index">{{item.title}}</mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item :id="item.id" v-for="item in newsData" :key="item.index">
          <mt-cell>
            <ul class="newsList">
              <li v-for="subitem in item.list" :key="subitem.index">
                <a href="javascript:;">
                  <span class="title">{{subitem.desc}}</span>
                  <span class="date">{{subitem.time}}</span>
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
  props: [
    'newsData'
  ],
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


.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 1px solid $mainColor;
    color:$mainColor;
    margin-bottom: -1px;
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
    border-bottom: 1px solid #ccc;
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