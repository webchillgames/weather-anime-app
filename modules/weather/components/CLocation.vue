<script lang="ts" setup>
import { useWeatherStore } from "../store";

const { location } = useWeatherStore();
</script>

<template>
  <div>
    {{ location.name }}
  </div>
</template>

<style lang="scss"></style>
