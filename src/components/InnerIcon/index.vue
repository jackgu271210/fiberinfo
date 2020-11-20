<template>
  <div id="inner_icon">
    <div class="cen_er">
      <ul class="icon_list clearfix">
        <li>
          <a href="javascript:;">
            <i class="iconfont">&#xe617;</i>
            <span>常见问题</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont">&#xe655;</i>
            <span>联系客服</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont">&#xe88d;</i>
            <span>短信行情</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont">&#xe794;</i>
            <span>软件</span>
          </a>
        </li>
        <li>
          <a class="active" href="javascript:;">
            <i class="iconfont">&#xe60b;</i>
            <span>优秀供应商</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont">&#xe639;</i>
            <span>网站建设</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont">&#xe623;</i>
            <span>广告</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont">&#xe641;</i>
            <span>导航</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "InnerIcon",
};
</script>

<style lang="scss" scoped>
.icon_list {
  padding-top: 0.2rem;
  li {
    float: left;
    width: 25%;
    margin-bottom: 0.4rem;
    text-align: center;
    a {
      display: block;
      i {
        display: block;
        font-size: 0.6rem;
        margin-bottom: 0.2rem;
        color: #5e5e5e;
      }
    }
  }
}
</style>