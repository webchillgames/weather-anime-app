import { defineStore } from "pinia";
import type {
  Degree_value,
  Pressure_value,
  Visibility_value,
  Weather,
} from "./types";

export const useWeatherStore = defineStore("weather", () => {
  const weather = ref<Weather | null>(null);
  const degreeValue = ref<Degree_value>("c");
  const pressureValue = ref<Pressure_value>("mb");
  const visibilityValue = ref<Visibility_value>("km");

  const current = computed(() => weather.value?.current);
  const location = computed(() => weather.value?.location);

  const temperature = computed(() =>
    current.value ? current.value[`temp_${degreeValue.value}`] : null
  );

  const feelslike = computed(() =>
    current.value ? current.value[`feelslike_${degreeValue.value}`] : null
  );

  const pressure = computed(() =>
    current.value ? current.value[`pressure_${pressureValue.value}`] : null
  );
  

  const conditionText = computed(() =>
    current.value ? current.value.condition.text : ""
  );

  const visibility = computed(() =>
    current.value ? current.value[`vis_${visibilityValue.value}`] : null
  );

  function setWeather(data: Weather | null) {
    weather.value = data;
  }

  return {
    conditionText,
    weather,
    setWeather,
    location,
    current,
    temperature,
    feelslike,
    pressure,
    visibility,
    degreeValue,
    pressureValue,
    visibilityValue,
  };
});
