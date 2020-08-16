<template>
  <div class="city">
    <city-header></city-header>
    <city-hot :hotCities="hotCities"></city-hot>
    <city-sort :cities="cities"></city-sort>
    <city-list :cities="cities"></city-list>
  </div>
</template>

<script>
import CityHeader from "./page/header";
import CityHot from "./page/Hot";
import CitySort from "./page/Sort";
import CityList from "./page/List";
export default {
  components: {
    CityHeader,
    CityHot,
    CitySort,
    CityList,
  },
  data() {
    return {
      hotCities: [],
      cities: [],
    };
  },
  mounted() {
    this.$http.get("/api/city.json").then((res) => {
      const data = res.data.data;
      console.log(data);
      this.hotCities = data.hotCities;
      this.cities = data.cities;
    });
  },
};
</script>

<style scoped>
.city {
  background: #f5f5f5;
}
</style>