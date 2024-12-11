<script lang="ts" setup>
import CWeatherCondition from "./components/CWeatherCondition.vue";
import CWeatherTop from "./components/CWeatherTop.vue";
import { useWeatherStore } from "./store";
import { weatherService } from "./weather-service";
import { useRoute } from "vue-router";
import { geolocationService } from "./geolocation-service";

const { setWeather } = useWeatherStore();
const route = useRoute();

geolocationService.getUserPosition();

watch(
  () => route.query,
  (v) => {
    if (!route.query.coords) {
      geolocationService.getUserPosition();
    }
    getWeatherHandler();
  },
  { immediate: true }
);

async function getWeatherHandler() {
  try {
    const { data } = await weatherService.getWeather({
      coords: {
        lat: Number(route.query.lat),
        lon: Number(route.query.lon),
      },

      lang: "ru",
    });
    setWeather(data.value);
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div class="p-1 m-weather">
    <CWeatherTop />
    <CWeatherCondition class="my-2" />
  </div>
</template>

<style lang="scss">
.m-weather {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 768px) {
    display: block;
  }
}
</style>
