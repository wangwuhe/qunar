<template>
  <div class="icons">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide v-for="(item,index) in page" :key="index">
            <div class="icons-item" v-for="page in item" :key="page.id">
                <img :src="page.imgUrl" alt="">
                <p>{{page.title}}</p>
            </div>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption:{},
            "iconsList":[
				{
					"id":"01",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
					"title":"景点门票"
				},
				{
					"id":"02",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
					"title":"必游榜单"
				},
				{
					"id":"03",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
					"title":"夏日玩水"
				},
				{
					"id":"04",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
					"title":"主题乐园"
				},
				{
					"id":"05",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
					"title":"动植物园"
				},
				{
					"id":"06",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
					"title":"故宫"
				},
				{
					"id":"07",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
					"title":"一日游"
				},
				{
					"id":"08",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png",
					"title":"公园"
				},
				{
					"id":"09",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
					"title":"游乐场"
				},
				{
					"id":"10",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
					"title":"全部玩乐"
				}
			],
        }
    },
    computed: {
        page(){
            let pages=[];
            this.iconsList.forEach((item,index)=>{
                let idx=Math.floor(index/8);
                if(!pages[idx]){
                    pages[idx]=[];
                }
                pages[idx].push(item)
            })
            return pages;
        }
    },
}
</script>

<style scoped lang="stylus">
@import '~css/common.styl';
.icons{
    width: 100%;
    overflow: hidden;
    background: white;
}
.icons-item{
    width: 25%;
    padding-bottom: 25%;
    height: 0;
    float: left;
}
.icons-item img{
    width: 15.278vw;
    height: 15.278vw;
    display: block;
    margin: 0 auto;
    padding-top: 2.778vw;
}
.icons-item p{
    margin-top: 1.389vw;
    font-size: 3.889vw;
    text-align: center;
    color: #212121;
    textOverflow();
}
</style>