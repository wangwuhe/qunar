<template>
  <div class="header">
      <div class="header-left" @click="$router.push('/')">
          <span class="iconfont">
              &#xe624;
          </span>
      </div>
      <div class="header-title">
          城市选择
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus">

@import '~css/var.styl'

.header{
  width: 100%;
  line-height: 12.222vw;
  background: $bgColor;
  color: #fff;
  font-size: 4.444vw;
  position: relative;
}
.header-left{
  width: 5.556vw;
  padding: 0 2.778vw;
  text-align: center;
  font-weight: bold;
  position: absolute;
}
.header-title{
    text-align: center;
}
</style>