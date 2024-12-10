<script lang="ts" setup>
import CWeatherCondition from "./components/CWeatherCondition.vue";
import CWeatherTop from "./components/CWeatherTop.vue";
import { useWeatherStore } from "./store";
import { weatherService } from "./weather-service";

const { setWeather } = useWeatherStore();

async function getWeatherHandler() {
  try {
    const { data } = await weatherService.getWeather({
      coords: {
        lat: 47.952132,
        lon: -124.384397,
      },

      lang: "ru",
    });
    setWeather(data.value);
  } catch (error) {
    console.log(error);
  }
}

getWeatherHandler();
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
