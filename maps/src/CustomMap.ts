export interface Mappable {
  location : {
    lat: number;
    lng: number;
  };
  markerContent() : string;
  color: string;
};

export class CustomMap {

  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const mapDiv = document.getElementById(divId);
    this.googleMap = new google.maps.Map(mapDiv, {
      zoom: 1,
      center: { 
        lat:0,
        lng:0
      }
    });
  };

  addMarker (mappable: Mappable) {
    const marker = new google.maps.Marker({
      position :{
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      map: this.googleMap, 
     });

     marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap,marker);

     });



    

  }





}