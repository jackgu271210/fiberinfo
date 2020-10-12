<template>
  <div class="icon">
    <div class="cen_er">
      <ul class="icon_list clearfix">
        <li>
          <a href="javascript:;">
            <i class="iconfont icon_cp"></i>
            <span>产品类目</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon_fb"></i>
            <span>发布采购</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon_cg"></i>
            <span>查看采购</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon_pp"></i>
            <span>PP行情</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon_zx"></i>
            <span>资讯中心</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon_rm"></i>
            <span>热门企业</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon_rc"></i>
            <span>人才招聘 </span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon_hy"></i>
            <span>行业展会</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icons",
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
      i {
        display: block;
        font-size: 1.2rem;
        margin-bottom: 0.2rem;
      }
      .icon_cp {
        color: #8adfc3;
      }
      .icon_fb {
        color: #ff9fbf;
      }
      .icon_cg {
        color: #98d0ed;
      }
      .icon_pp {
        color: #aea9ff;
      }
      .icon_zx {
        color: #9ed2ee;
      }
      .icon_rm {
        color: #ff8d65;
      }
      .icon_rc {
        color: #ffaf5e;
      }
      .icon_hy {
        color: #9fdc84;
      }
    }
  }
}
</style>