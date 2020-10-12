<template>
  <div class="inner_header">
      <a href="javascript:;" @click="$router.back()">
          <i class="iconfont back">&#xe683;</i>
      </a>
    <span class="header_ti">登陆</span>
    <span class="header_r">注册</span>
  </div>
</template>

<script>
export default {
    name: 'InnerHeader'
}
</script>

<style lang="scss" scoped>
.inner_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .5rem;
    height: 1rem;
    background: #0493dc;
    color: #fff;
    a {
        color: #fff;
        .back {
            display: block;
            transform: rotateY(180deg);
        }
    }
    span {
        font-size: .4rem;
    }
}
</style>