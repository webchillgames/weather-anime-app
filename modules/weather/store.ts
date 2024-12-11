import { defineStore } from "pinia";
import { format } from "date-fns";
import { ru } from 'date-fns/locale/ru'

import type {
  Degree_value,
  Pressure_value,
  Visibility_value,
  Weather,
  WeatherCurrent,
  WeatherLocation,
  WeatherState,
} from "./types";

export const useWeatherStore = defineStore("weather", {
  state: (): WeatherState => ({
    weather: null,
    degreeValue: "c",
    pressureValue: "mb",
    visibilityValue: "km",
    speedValue: "kph",
    coords: null,
  }),
  getters: {
    current(state): WeatherCurrent | null {
      return state.weather?.current || null;
    },
    location(state): WeatherLocation | null {
      return state.weather?.location || null;
    },
    temperature(state): number | undefined {
      return this.current?.[`temp_${state.degreeValue}`];
    },
    feelslike(state): number | undefined {
      return this.current?.[`feelslike_${state.degreeValue}`];
    },
    wind(state): number | undefined {
      return this.current?.[`wind_${state.speedValue}`];
    },
    windValueUser(state): string {
      return state.speedValue.startsWith("k") ? "км/ч" : "миль/ч";
    },
    pressure(state): number | null {
      return this.current?.[`pressure_${state.pressureValue}`] || null;
    },
    conditionText(): string {
      return this.current?.condition.text || "";
    },
    visibility(state): number | null {
      return this.current?.[`vis_${state.visibilityValue}`] || null;
    },
    locationPlace(): string | undefined {
      return this.location?.name;
    },
    locationDateTime(): string {
      return this.location?.localtime_epoch
        ? `${format(
            new Date(this.location.localtime_epoch * 1000),
            `d MMMM, EEEE`, {
              locale: ru
            }
          )}`
        : "";
    },
    conditionIcon(): string | null {
      return this.current?.condition.icon || null;
    },
  },
  actions: {
    setWeather(v: Weather | null) {
      this.weather = v;
    },
    setDegreeValue(v: Degree_value) {
      this.degreeValue = v;
    },
    setPressureValue(v: Pressure_value) {
      this.pressureValue = v;
    },
    setVisibilityValue(v: Visibility_value) {
      this.visibilityValue = v;
    },
  },
});
