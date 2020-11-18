<template>
  <div id="search">
    <inner-header />
    <div class="search_box">
        <form action="" class="search_box_wrap">
            <div class="drop_down ">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="input_box">
                <input type="text" placeholder="请输入关键字进行搜索">
            </div>
            <div class="btn">
                <button type="submit">
                    <i class="iconfont">&#xe651;</i>
                </button>
            </div>
        </form>
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
        CommonFooter
    },
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
}
</script>

<style lang="scss" scoped>
.search_box {
    margin: 20px;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ebebeb;
    .search_box_wrap {
        display: flex;
        justify-content: space-between;
        .drop_down {
            padding-right: 10px;
            position: relative;
            &:after {
                content: '';
                position: absolute;
                right: 0;
                top: 20%;
                width: 1px;
                height: 60%;
                background: #ebebeb ;
            }
            ::v-deep .el-input__inner {
                border: none;
                background: none;
                padding: 0;
            }
        }
    }
}
</style>