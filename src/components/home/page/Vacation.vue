<template>
  <div class="vacation">
      <div class="vacation-title">
          周末去哪儿
      </div>
      <ul>
          <li class="vacation-item" v-for="item in vacationList" :key="item.id">
              <div class="vacation-img">
                  <img :src="item.imgUrl" alt="">
              </div>
              <div class="vacation-msg">
                  <p>{{item.title}}</p>
                  <p>{{item.msg}}</p>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:['vacationList'],
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
.vacation-title{
    font-size: 4.444vw;
    padding: 3.333vw;
}
.vacation-item{
    margin-bottom: 1.389vw;
    background: white;
    font-size: 3.889vw;
}
.vacation-img{
    width: 100%;
    height: 0;
    padding-bottom: 37.4375%;
}
.vacation-img img{
    width: 100%;
}
.vacation-msg{
    padding: 2.778vw 0 2.778vw 2.778vw;
}
.vacation-msg p{
    margin-top: 2.778vw;
}
.vacation-msg p+p{
    color: #616161;
    font-size: 3.333vw;
}
</style>