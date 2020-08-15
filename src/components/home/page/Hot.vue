<template>
  <div class="hot">
      <div class="hot-top">
          <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
          <span>本周热门榜单</span>
          <span class="hot-title">全部榜单</span>
      </div>
      <ul class="hot-list">
          <li class="hot-item" v-for="item in hotList" :key="item.id">
              <img :src="item.imgUrl" alt="">
              <p>{{item.title}}</p>
              <p>
                  <span class="hot-mark">￥{{item.mark}}</span>起
              </p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            "hotList":[
				{
					"id":"01",
					"imgUrl":"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg",
					"title":"故宫",
					"mark":"20"
				},
				{
					"id":"02",
					"imgUrl":"http://img1.qunarzz.com/sight/p0/1704/d6/d62a708bc69472f5a3.img.jpg_150x150_54ba6c62.jpg",
					"title":"十渡聚龙湾玻璃栈道",
					"mark":"35"
				},
				{
					"id":"03",
					"imgUrl":"http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_150x150_2dec3e78.jpg",
					"title":"八达岭长城",
					"mark":"25"
				},
				{
					"id":"04",
					"imgUrl":"http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_150x150_8a63d940.jpg",
					"title":"水立方",
					"mark":"14"
				},
				{
					"id":"05",
					"imgUrl":"http://img1.qunarzz.com/sight/p0/201405/30/63494597d8a8346abd77cc9e1cd2ee79.jpg_150x150_7037ca72.jpg",
					"title":"定陵",
					"mark":"50"
				}
			],
        }
    },
}
</script>

<style scoped lang="stylus">
@import '~css/common.styl';
.hot{
    background: white;
    margin-top: 10.001px;
    font-size: 14px;
}
.hot-top{
    padding: 10px;
    position: relative;
}
.hot-top img{
    width: 15px;
    height: 15px;
}
.hot-top span{
    color: #212121;
    font-size: 16px;
}
.hot-top span.hot-title{
    position: absolute;
    right: 10px;
    color: #616161;
    font-size: 14px;
}
.hot-list{
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    height: 150px;
}
.hot-item{
    display: inline-block;
    padding: 0 10px;
    width: 100px;
    height: 100px;
}
.hot-item img{
    width: 100%;
    height: 100%;
}
.hot-item p{
    margin-top: 5px;
    text-align: center;
    textOverflow();
}
.hot-item p .hot-mark{
    color: #ff8300;
    font-size: 16px;
}
</style>