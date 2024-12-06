<script lang="ts" setup>
import CLocation from "./components/CLocation.vue";
import CWeather from "./components/CWeather.vue";
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
    console.log(data.value);
  } catch (error) {
    console.log(error);
  }
}

getWeatherHandler();
</script>

<template>
  <div class="p-1">
    <CLocation />
    <CWeather />
  </div>
</template>

<style lang="scss"></style>
