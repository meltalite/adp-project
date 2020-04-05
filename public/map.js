var markers = [];
function myMap  () {

  var addresses = [
    {
      position: {
        lat: -6.163513,
        lng: 106.810172
      },
    },

    {
      position: {
        lat: 3.588562,
        lng: 98.681483
      },
    },

    {
      position: {
        lat: -6.953368,
        lng: 107.588179
      },
    },

    {
      position: {
        lat: -7.565730,
        lng: 110.888279
      },
    },

    {
      position: {
        lat: -6.955007,
        lng: 110.413134
      },
    },

    {
      position: {
        lat: -7.242974,
        lng: 112.697812
      },
    },

    {
      position: {
        lat: -6.319958,
        lng: 107.132956
      },
    },

  ]

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: addresses[2].position,
    styles: [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#f5f5f5"
      }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
    ]

  });

  for (var item in addresses) {

    var address = addresses[item].address;
    markers.push(
      new google.maps.Marker({
        position: addresses[item].position,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: normalIcon()
      }),
    )
  }

  var currentMarker = null;

  markers[0].setIcon(highlightedIcon());

  jQuery('#contact .marker').click(
    // mouse in      
    function () {
      markers[0].setIcon(normalIcon());
      if (currentMarker !== null)
        markers[currentMarker].setIcon(normalIcon());
      currentMarker = jQuery('#contact .marker').index(this);
      markers[currentMarker].setIcon(highlightedIcon());
      map.setZoom(13);
      map.setCenter(new google.maps.LatLng(addresses[currentMarker].position.lat, addresses[currentMarker].position.lng));
    },
  );
}

function normalIcon() {
  return {
    url: 'https://bukitmega.com/wp-content/themes/BM/images/map-marker.png'
  };
}
function highlightedIcon() {
  return {
    url: 'https://bukitmega.com/wp-content/themes/BM/images/green-location-icon.png'
  };
}