<script lang="ts" setup>
import { useWeatherStore } from "../store";

const {
  degreeValue,
  conditionText,
  temperature,
  feelslike,
  pressure,
  visibility,
  pressureValue,
  visibilityValue,
} = useWeatherStore();
</script>

<template>
  <div class="p-3">
    <div>
      <p>
        {{ temperature }}&#176; {{ degreeValue.toUpperCase() }} -
        {{ conditionText }}
      </p>
      <p>Чувствуется как {{ feelslike }}</p>
    </div>

    <div>
      <div>
        <p>Давление</p>
        <p>{{ pressure }}{{ pressureValue }}</p>
      </div>

      <div>
        <p>Видимость</p>
        <p>{{ visibility }}{{ visibilityValue }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// @mixin wrapper {
//   padding: 16px;
//   border-radius: 16px;
// }

// .c-weather {
//   @include wrapper;
// }
</style>
