<template>
  <div id="search">
    <inner-header :title="title" />
    <div class="search_box">
      <form action="" class="search_box_wrap">
        <div class="select">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="input_box">
          <input type="text" placeholder="请输入关键字进行搜索" />
        </div>
        <div class="btn">
          <button type="submit">
            <i class="iconfont">&#xe651;</i>
          </button>
        </div>
      </form>
    </div>
    <div class="hot_search">
      <div class="cen_er">
        <h3>您可能感兴趣的热词</h3>
        <div class="hot_search_list">
          <el-tag
            type="info"
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >
            {{ tag }}
          </el-tag>
        </div>
      </div>
    </div>
    <common-footer />
  </div>
</template>

<script>
import InnerHeader from "@/components/InnerHeader";
import CommonFooter from "@/components/CommonFooter";
export default {
  components: {
    InnerHeader,
    CommonFooter,
  },
  data() {
    return {
      title: "搜索",
      options: [
        {
          value: "选项1",
          label: "产品",
        },
        {
          value: "选项2",
          label: "企业",
        },
        {
          value: "选项3",
          label: "采购",
        },
      ],
      dynamicTags: [
        "丙纶长丝",
        "无纺布",
        "丙纶细旦丝",
        "无纺布",
        "丙纶细旦丝",
        "无纺布",
      ],
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.search_box {
  padding: 20px;
  height: 40px;
  line-height: 40px;
  background: #fbfbfb;
  .search_box_wrap {
    display: flex;
    justify-content: space-between;
    border: 1px solid #ebebeb;
    background: #fff;
    .select {
      width: 24%;
      padding-left: 20px;
      padding-right: 10px;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 20%;
        width: 1px;
        height: 60%;
        background: #ebebeb;
      }
      .el-input--suffix {
        width: 70px;
      }
      ::v-deep .el-input__inner {
        border: none;
        background: none;
        padding: 0;
      }
    }
    .btn {
      width: 14%;
      button {
        width: 100%;
        height: 100%;
        background: $mainColor;
        .iconfont {
          color: #fff;
        }
      }
    }
  }
}
.hot_search {
  .hot_search_list {
    margin-top: 20px;
    .el-tag {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>