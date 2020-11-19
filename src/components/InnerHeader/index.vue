<template>
  <div class="inner_header">
      <a href="javascript:;" @click="$router.back()">
          <i class="iconfont back">&#xe683;</i>
      </a>
    <span class="header_ti">{{title}}</span>
    <a href="/register" class="header_ti">注册</a>
  </div>
</template>

<script>
export default {
    name: 'InnerHeader',
    props: ['title']
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
            color: #fff;
            transform: rotateY(180deg);
        }
    }
    .header_ti {
        font-size: .3rem;
    }
}
</style>