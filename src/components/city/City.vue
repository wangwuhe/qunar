<template>
  <div class="city">
      <city-header></city-header>
      <city-hot :hotCities="hotCities"></city-hot>
  </div>
</template>

<script>
import CityHeader from './page/header';
import CityHot from './page/Hot';
export default {
  components:{
    CityHeader,
    CityHot
  },
  data() {
        return {
            hotCities:[],
            cities:[]
        }
    },
    mounted() {
        this.$http.get("/api/city.json").then((res)=>{
          const data=res.data.data;
          console.log(data)
            this.hotCities = data.hotCities;
            this.cities = data.cities;
        })
    }
}
</script>

<style scoped>
.city{
  background: #f5f5f5;
}
</style>