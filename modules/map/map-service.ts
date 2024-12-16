import * as L from "leaflet";

const DEFAULT_COORDS: L.LatLngTuple = [51.505, -0.09];

export class Map {
  private map: L.Map;

  constructor(coords: L.LatLngTuple = DEFAULT_COORDS) {
    this.map = new L.Map("map");
    this.map.setView(coords, 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 13,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    this.map.on("click", this.onMapClick.bind(this));

    L.marker(coords).addTo(this.map);
  }

  private onMapClick(e: L.LeafletMouseEvent) {
    const popup = L.popup({
      content: `<p>Выбрано новое место на карте.</p>
        <p>Показать погоду для него?</p>
        <button type="button" id="leaflet-popup-sumbit">Показать</button>`,
      interactive: true,
    })
      .setLatLng(e.latlng)
      .openOn(this.map);

    console.log(e.latlng);

    document
      .querySelector("#leaflet-popup-sumbit")
      ?.addEventListener("click", () => this.onPopupClick(e.latlng));
  }

  private onPopupClick(latlng: L.LatLng) {
    console.log(666);

    navigateTo({
      // path: '/',
      query: {
        lat: latlng.lat,
        lng: latlng.lng,
      },
    });
  }
}
