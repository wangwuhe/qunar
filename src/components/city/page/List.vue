<template>
  <div class="list">
    <div v-for="(val,key) in cities" :key="key">
      <div class="list-title">{{key}}</div>
      <ul class="list-msg">
        <li class="list-item" v-for="item in val" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cities"],
};
</script>

<style scoped lang="stylus">

@import '~css/common.styl'

.list-title {
  font-size: 12px;
  color: #212121;
  padding: 10px 15px;
}
.list-msg{
	position: relative;
	background: #fff;
	overflow: hidden;
}
.list-msg:before{
	content: " ";
	position: absolute;
	left:25%;
	width:25%;
	height: 100%;
	border-left:1px solid #ddd;
	border-right:1px solid #ddd;
}
.list-msg:after{
	content: " ";
	position: absolute;
	left:75%;
	width:0%;
	height: 100%;
	border-left:1px solid #ddd;
}
.list-item{
	position:relative;
	width:25%;
	font-size:15px;
	text-align: center;
	line-height: 45px;
	float:left;
	border-bottom:1px solid #ddd;
	textOverflow();
}
</style>