<script lang="ts" setup>
import { useWeatherStore } from "../store";

const {
  conditionText,
  locationPlace,
  degreeValue,
  temperature,
  feelslike,
  locationDateTime,
} = useWeatherStore();
</script>

<template>
  <div class="p-3 c-weather-top items-center">
    <div>
      <span>{{ locationDateTime }}</span>
    </div>

    <div class="c-weather-top__temperature justify-self-end">
      <span>{{ conditionText }}</span>
      <p class="uppercase font-bold">
        {{ temperature }}&#176;{{ degreeValue }}
      </p>

      <p>
        Чувствуется как {{ feelslike }}&#176;{{ degreeValue.toUpperCase() }}
      </p>
    </div>
    <div class="justify-self-end">
      <NuxtLink
        :to="{path: '/location', query: $route.query}"
        class="flex items-center hover:text-orange-500 active:text-orange-700"
      >
        <span class="mr-1">{{ locationPlace }}</span>
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.c-weather-top {
  background-image: linear-gradient(
    to left top,
    #512da8,
    #552fab,
    #5a32ad,
    #5e34b0,
    #6237b3,
    #693eb8,
    #6f44be,
    #764bc3,
    #8158cc,
    #8d65d4,
    #9872dd,
    #a37fe5
  );
  border-radius: 1rem;
  min-height: 300px;
  display: grid;
  grid-template-rows: max-content 1fr max-content;

  &__temperature {
    p:first-of-type {
      font-size: 4rem;
      line-height: 110%;
    }
  }
}
</style>
