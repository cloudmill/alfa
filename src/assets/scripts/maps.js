import {showMoreFunc} from './customscripts';
import {myModal} from './modal';

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
  NODE_ENV_PATH === 'development'
    ? "assets/images/icons/marker.svg"
    : "/local/templates/main/assets/images/icons/marker.svg";

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
  const mapID = document.getElementById("googleMaps");
  const locations = mapID.dataset.locations;

  const mapOptions = {
    center: new google.maps.LatLng(59.91916157, 30.3251195),
    zoom: NODE_ENV_PATH === 'development' ? 15 : 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    zoomControl: true,
    scrollwheel: false,
    styles: mapStyle,
  };

  map = new google.maps.Map(mapID, mapOptions);

  JSON.parse(locations).forEach(function (item) {
    addMarker(item);
  });

  markerCluster = new MarkerClusterer(map, markers, mcOptions);
}

function initMapContact() {
  const mapID = document.getElementById("google");
  const locations = mapID.dataset.locations;

  const mapOptions = {
    center: new google.maps.LatLng(59.91916157, 30.3251195),
    zoom: NODE_ENV_PATH === 'development' ? 15 : 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    zoomControl: true,
    scrollwheel: false,
    styles: mapStyle,
  };

  map = new google.maps.Map(mapID, mapOptions);

  JSON.parse(locations).forEach(function (item) {
    addMarker(item, null, null, true);
  });

  markerCluster = new MarkerClusterer(map, markers, mcOptions);
}

function addMarker(location, icon, popup, isContact = false) {
  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(parseFloat(location[0]), parseFloat(location[1])),
    icon: icon || location[2],
    map: map
  });
  const ifHasSidebar = popup && popup[3] || location && location[6];
  if(ifHasSidebar) {
    marker.addListener('click', function () {
      const modal = document.getElementById("projectsPopup");
      modal.setAttribute("data-tool", popup ? popup[0] : location[3]);
      modal.setAttribute("data-title", popup ? popup[1] : location[4]);
      modal.setAttribute("data-content", popup ? popup[2] : location[5]);
      modal.setAttribute("data-cat", popup ? popup[3] : location[6]);
      modal.setAttribute("data-image", popup ? popup[4] : location[7]);
      modal.setAttribute("data-link", popup ? popup[5] : location[8]);

      myModal.open();
    });
  }
  const title = popup ? popup[0] : location[3];
  const content = popup ? popup[1] : location[4];
  const link = popup ? popup[2] : location[5];
  let infowindow;
  if(isContact) {
    infowindow = new google.maps.InfoWindow({
      content: `<p><b class="text__xs">${title}</b></p><p>${content}</p><a href="#" class="text--gray">${link}</a>`
    });
  } else {
    infowindow = new google.maps.InfoWindow({
      content: `<p><b class="text__xs">${title}</b></p>${content}`
    });
  }
  marker.addListener('mouseover', function () {
    infowindow.open(map,marker);
  });
  marker.addListener('mouseout', function () {
    infowindow.close();
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
  if ($("#google").length) {
    initMapContact();
  }
});

$('.filters--js li').click(function () {
  const icon = $(this).data('icon');
  const iconGroup = $(this).data('group');
  const coordinates = $(this).data('coordinates');
  const filter = $(this).data('filter');
  const popup = $(this).data('popup');
  const itemGrid = $('.filtr-item');
  const filterItemGrid = $(`.filtr-item[data-category=${filter}]`);

  if ($(this).hasClass('active')) {
    return;
  }

  $('.filters--js li').removeClass('active');
  $(this).addClass('active');

  deleteMarkers();

  coordinates.forEach(function (item, index) {
    const splitter = item.split(', ');
    addMarker(splitter, icon, popup[index]);
  });

  $('.more--js').attr('data-filter', filter);
  itemGrid.velocity({ scaleX: 0, scaleY: 0 }, { display: "none", duration: 300 });
  // filterItemGrid.velocity({ scaleX: 1, scaleY: 1 }, { display: "block", duration: 300, delay: 200 });
  // itemGrid.slideUp(500);
  // filterItemGrid.slideDown(500);

  setTimeout(() => {
    showMoreFunc(".filtr-item", 7, '.more--js', false, filter);
  }, 200);

  mcOptions.styles[0].url = iconGroup;
  markerCluster = new MarkerClusterer(map, markers, mcOptions);
});
