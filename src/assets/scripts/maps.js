import { showMoreFunc } from './customscripts';

let markers = [];
let map;
let markerCluster;
const mapStyle = [
  {
  elementType: "geometry",
  stylers: [{
    color: "#f5f5f5"
  }]
},
  {
    elementType: "labels.icon",
    stylers: [{
      visibility: "off"
    }]
  },
  {
    elementType: "labels.text.fill",
    stylers: [{
      color: "#616161"
    }]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{
      color: "#f5f5f5"
    }]
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [{
      color: "#bdbdbd"
    }]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{
      color: "#eeeeee"
    }]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{
      color: "#757575"
    }]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{
      color: "#e5e5e5"
    }]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{
      color: "#9e9e9e"
    }]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{
      color: "#ffffff"
    }]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [{
      color: "#757575"
    }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{
      color: "#dadada"
    }]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{
      color: "#616161"
    }]
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [{
      color: "#9e9e9e"
    }]
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [{
      color: "#e5e5e5"
    }]
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [{
      color: "#eeeeee"
    }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{
      color: "#c9c9c9"
    }]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{
      color: "#9e9e9e"
    }]
  }
];

const setMarker =
  process.env.NODE_ENV === 'development'
    ? "assets/images/icons/marker.svg"
    : "/local/templates/main/assets/images/icons/marker.svg";
const setBubble =
  process.env.NODE_ENV === 'development'
    ? "assets/images/icons/bubble.svg"
    : "/local/templates/main/assets/images/icons/bubble.svg";
const setBubble2 =
  process.env.NODE_ENV === 'development'
    ? "assets/images/icons/bubbleb.svg"
    : "/local/templates/main/assets/images/icons/bubbleb.svg";
const setBubble3 =
  process.env.NODE_ENV === 'development'
    ? "assets/images/icons/bubblel.svg"
    : "/local/templates/main/assets/images/icons/bubblel.svg";

const locations = [
  [59.91701049, 30.31812429, setBubble2],
  [59.91916157, 30.3251195, setBubble2],
  [59.91756978, 30.31812429, setBubble3],
  [59.92049517, 30.33250093, setBubble3],
  [59.91701049, 30.3276515, setBubble3],
  [59.92256978, 30.31812429, setBubble],
  [59.92349517, 30.33250093, setBubble],
  [59.92401049, 30.3276515, setBubble],
];

const mcOptions = {
  styles: [{
    url: setMarker,
    width: 53,
    height: 63,
    lineHeight: 40,
    fontFamily: "Montserrat",
    textSize: 14,
    textColor: "white"
  }]
};

function initMap() {
  const mapOptions = {
    center: new google.maps.LatLng(59.91916157, 30.3251195),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    zoomControl: true,
    scrollwheel: false,
    styles: mapStyle,
  };
  map = new google.maps.Map(document.getElementById("googleMaps"), mapOptions);

  locations.forEach(function (item) {
    addMarker(item);
  });

  markerCluster = new MarkerClusterer(map, markers, mcOptions);
}

function addMarker(location, icon) {
  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(parseFloat(location[0]), parseFloat(location[1])),
    icon: icon || location[2],
    map: map
  });
  markers.push(marker);
}

function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
function clearMarkers() {
  setMapOnAll(null);
}

function deleteMarkers() {
  clearMarkers();
  markerCluster.clearMarkers();
  markers = [];
}

$(function () {
  if ($("#googleMaps").length) {
    initMap();
  }
});

$(document).ready(function () {
  $('.filters--js li').click(function () {
    const icon = $(this).data('icon');
    const iconGroup = $(this).data('group');
    const coordinates = $(this).data('coordinates');
    const filter = $(this).data('filter');
    const itemGrid = $('.filtr-item');
    const filterItemGrid = $(`.filtr-item[data-category=${filter}]`);

    if($(this).hasClass('active')) {
      return;
    }

    $('.filters--js li').removeClass('active');
    $(this).addClass('active');

    deleteMarkers();

    coordinates.forEach(function (item) {
      const splitter = item.split(', ');
      addMarker(splitter, icon);
    });

    $('.more--js').attr('data-filter', filter)
    itemGrid.slideUp(500);
    filterItemGrid.slideDown(500);

    setTimeout(() => {
      showMoreFunc(".filtr-item", 7, '.more--js', false, filter);
    }, 600);

    mcOptions.styles[0].url = iconGroup;
    markerCluster = new MarkerClusterer(map, markers, mcOptions);
  });
});
