<template>
  <div class="pro_nav">
    <ul class="cen_er clearfix">
      <li>
        <div class="pro_nav_item item_01">
          <div class="txt">
            <i class="iconfont">&#xe60e;</i>
            <h3>丙纶成品</h3>
          </div>
          <div class="pic">
            <img src="@/assets/images/cate_01.png" />
          </div>
        </div>
      </li>
      <li>
        <div class="pro_nav_item item_01">
          <div class="txt">
            <i class="iconfont">&#xe60f;</i>
            <h3>丙纶原料</h3>
          </div>
          <div class="pic">
            <img src="@/assets/images/cate_02.png" />
          </div>
        </div>
      </li>
      <li>
        <div class="pro_nav_item item_01">
          <div class="txt">
            <i class="iconfont">&#xe611;</i>
            <h3>丙纶设备</h3>
          </div>
          <div class="pic">
            <img src="@/assets/images/cate_03.png" />
          </div>
        </div>
      </li>
      <li>
        <div class="pro_nav_item item_01">
          <div class="txt">
            <i class="iconfont">&#xe610;</i>
            <h3>丙纶下游</h3>
          </div>
          <div class="pic">
            <img src="@/assets/images/cate_04.png" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProNav",
};
</script>

<style lang="scss" scoped>
.pro_nav {
  ul {
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      float: left;
      width: 48%;
      height: 3rem;
      border-radius: 0.5rem;
      background: #ccc;
      margin-bottom: 4%;
      &:nth-child(1) {
        margin-right: 4%;
        background: #369ff7;
      }
      &:nth-child(2) {
        margin-right: 0;
        background: #30aae9;
      }
      &:nth-child(3) {
        margin-right: 4%;
        background: #306de9;
      }
      &:nth-child(4) {
        margin-right: 0;
        background: #3594ff;
      }
      .pro_nav_item {
        width: 52%;
        .txt {
          margin-bottom: 0.2rem;
          display: flex;
          h3 {
            font-size: 0.3rem;
            color: #fff;
          }
          i {
            display: inline-block;
            width: 0.4rem;
            height: 0.4rem;
            font-size: 0.4rem;
            color: #fff;
            margin-right: .1rem;
          }
        }
        .pic {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>