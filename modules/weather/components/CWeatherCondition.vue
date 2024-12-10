<script lang="ts" setup>
import { useWeatherStore } from "../store";
const {
  pressure,
  pressureValue,
  visibility,
  visibilityValue,
  wind,
  windValueUser,
} = useWeatherStore();
</script>

<template>
  <ul class="c-weather-condition">
    <li>
      <div>
        <font-awesome-icon :icon="['fas', 'wind']" class="opacity-70 mb-2" />
        <p class="opacity-70">Ветер</p>
      </div>
      <p class="mt-3">{{ wind }} {{ windValueUser }}</p>
    </li>
    <li>
      <div>
        <font-awesome-icon
          :icon="['fas', 'weight-hanging']"
          class="opacity-70 mb-2"
        />
        <p class="opacity-70">Давление</p>
      </div>
      <p class="mt-3">{{ pressure }} {{ pressureValue.toUpperCase() }}</p>
    </li>
    <li>
      <div>
        <font-awesome-icon :icon="['fas', 'eye']" class="opacity-70 mb-2" />
        <p class="opacity-70">Видимость</p>
      </div>
      <p class="mt-3">{{ visibility }} {{ visibilityValue }}</p>
    </li>
  </ul>
</template>

<style lang="scss">
.c-weather-condition {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  li {
    background-color: $primary-color;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(to right top, #a37fe5, #946eda, #855dce, #764bc3, #673ab7);

    &:nth-child(2n) {
      background-image: linear-gradient(to left bottom, #a37fe5, #946eda, #855dce, #764bc3, #673ab7);
    }

    &:nth-child(3n) {
      background-image: linear-gradient(to left top, #a37fe5, #946eda, #855dce, #764bc3, #673ab7);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);

    li {
      display: block;
    }
  }
}
</style>
