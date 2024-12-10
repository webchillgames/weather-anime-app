import { API_KEY, BASE_URL } from "./constants";
import type { WeatherOptions, Weather } from "./types";

class WeatherSevice {
  url: string;
  key: string;

  constructor(url: string, key: string) {
    this.url = url;
    this.key = key;
  }

  async getWeather(data: WeatherOptions) {
    return useFetch<Weather>(
      `${BASE_URL}/current.json?q=${data.coords.lat},${data.coords.lon}&lang=${data.lang}&key=${API_KEY}`
    );
  }
}

export const weatherService = new WeatherSevice(BASE_URL, API_KEY);
