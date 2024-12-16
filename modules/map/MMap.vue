<script lang="ts" setup>
import "leaflet/dist/leaflet.css";
import { Map } from "./map-service";

const route = useRoute();

const coords = computed(() => {
  if (route.query.lat === undefined || route.query.lon === undefined) {
    return;
  }

  return [Number(route.query.lat), Number(route.query.lon)] as L.LatLngTuple;
});

onMounted(() => {
    new Map(coords.value)
});
</script>

<template>
  <div id="map"></div>
</template>

<style lang="scss">
#map {
  height: 100vh;
}
</style>
