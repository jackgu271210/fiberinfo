<template>
  <div class="fib_ban">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'SmallBan'
}
</script>

<style lang="scss" scoped>
.fib_ban {
  margin: 0.28rem 0;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      width: 48%;
      height: auto;
      img {
        width: 100%;
      }
    }
  }
}
</style>