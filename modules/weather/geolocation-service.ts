class Geolocation {
  getUserPosition() {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(this.pushWithQuery);
    } else {
      console.log("на нет и суда нет");
    }
  }
  pushWithQuery(position: GeolocationPosition) {
    navigateTo({
      query: {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      },
    });
  }
}

export const geolocationService = new Geolocation();
