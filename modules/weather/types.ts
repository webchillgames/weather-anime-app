export type Coords = {
  lat: number | null;
  lon: number | null;
};

export type WeatherOptions = {
  coords: Coords;
  lang: Lang;
};

export type WeatherLocation = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};

export type WeatherCondition = {
  text: string;
  icon: string;
  code: number;
};

export type WeatherCurrent = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
};

export type Weather = {
  current: WeatherCurrent;
  location: WeatherLocation;
};

export type Lang = "ru" | "";
export type Degree_value = "c" | "f";
export type Pressure_value = "in" | "mb";
export type Visibility_value = "km" | "miles";
export type Speed_value = "kph" | "mph";

export type WeatherState = {
  weather: Weather | null;
  degreeValue: Degree_value;
  pressureValue: Pressure_value;
  visibilityValue: Visibility_value;
  speedValue: Speed_value;
  coords: Coords | null;
};
