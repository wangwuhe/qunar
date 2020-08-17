<template>
  <div class="city">
    <city-header></city-header>
    <city-list :hotCities="hotCities" :cities="cities"></city-list>
  </div>
</template>

<script>
import CityHeader from "./page/header";
import CityList from "./page/List";
export default {
  components: {
    CityHeader,
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