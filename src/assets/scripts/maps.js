import {showMoreFunc, showMoreFuncMulti} from './filters';
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
    ? "assets/images/icons/markerd.svg"
    : "/local/templates/main/assets/images/icons/markerd.svg";

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
let infoWindow;

function initMap() {
  const mapID = document.getElementById("googleMaps");
  const locations = mapID.dataset.locations;

   const mapOptions = {
    center: new google.maps.LatLng(59.91916157, 30.3251195),
    zoom: 2,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    zoomControl: true,
    scrollwheel: false,
    disableDefaultUI: true,
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
    zoom: 11,
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

function addMarker(location, icon, popup, isContact = false, zoom) {
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
  infoWindow = new google.maps.InfoWindow();

  if(isContact) {
    marker.addListener('click', function () {
      infoWindow.setContent(`<p><b class="text__xs">${popup ? popup[0] : location[3]}</b></p><p>${popup ? popup[1] : location[4]}</p><a href="${$('input[name=link_map]').val()}" class="text--gray">${popup ? popup[2] : location[5]}</a>`);
      infoWindow.open(map, marker);
    });
    google.maps.event.addListener(map, "click", function() {
      infoWindow.close();
    });
  } else {
    marker.addListener('mouseover', function () {
      infoWindow.setContent(`<p><b class="text__xs">${popup ? popup[0] : location[3]}</b></p>${popup ? popup[1] : location[4]}`);
      infoWindow.open(map,marker);
    });
    marker.addListener('mouseout', function () {
      infoWindow.close();
    });
  }
  markers.push(marker);
}

function openInfoWindow(id){
  google.maps.event.trigger(markers[id], 'click');
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


$('.anchorMap').on('click', 'a', function(event) {
  event.preventDefault();
  const id = $(this).attr('href');
  const top = $(id).offset().top;
  const markerId = $(this).data('id');
  openInfoWindow(markerId);
  $('body,html').animate({scrollTop: top}, 1000);
});

let getAllCoordinates = {
  service: {
    coordinates: null,
    icon: '',
    iconGroup: '',
  },
  conference:  {
    coordinates: null,
    icon: '',
    iconGroup: '',
  },
  projects:  {
    coordinates: null,
    icon: '',
    iconGroup: '',
  },
};

$('.filters--js li').click(function () {
  const icon = $(this).data('icon');
  const iconGroup = $(this).data('group');
  const coordinates = $(this).data('coordinates');
  const filter = $(this).data('filter');
  const popup = $(this).data('popup');
  const zoom = $(this).data('zoom');
  const itemGrid = $('.filtr-item');
  // const filterItemGrid = $(`.filtr-item[data-category=${filter}]`);

  if(process.env.NODE_ENV === 'development') {
    $(this).toggleClass('active');
  } else {

    if ($(this).hasClass('active')) {
      return;
    }
    $('.filters--js li').removeClass('active');
    $(this).addClass('active');
  }

  deleteMarkers();

  if(process.env.NODE_ENV === 'development') {
    if ($(this).hasClass('active')) {
      getAllCoordinates[filter].coordinates = coordinates;
      getAllCoordinates[filter].iconGroup = iconGroup;
      getAllCoordinates[filter].icon = icon;
    } else {
      getAllCoordinates[filter].coordinates = null;
      getAllCoordinates[filter].iconGroup = '';
      getAllCoordinates[filter].icon = '';
    }

    const mergedArrays = [].concat(...Object.values(getAllCoordinates));

    mergedArrays.forEach((item, index) => {
      !!item.coordinates && item.coordinates.forEach((subItem) => {
        const splitter = !!subItem && subItem.split(', ');
        !!splitter && addMarker(splitter, item.icon, popup[index]);
        map.setZoom(zoom);
      });
    });
  } else {
    coordinates.forEach(function (item, index) {
      const splitter = item.split(', ');
      addMarker(splitter, icon, popup[index]);
      map.setZoom(zoom);
    });
  }

  $('.more--js').attr('data-filter', filter);
  itemGrid.velocity({ scaleX: 0, scaleY: 0 }, { display: "none", duration: 300 });

  setTimeout(() => {
    if(process.env.NODE_ENV === 'development') {
      showMoreFuncMulti(".filtr-item", 7, '.more--js-fl', filter, $(this).hasClass('active'));
    } else {
      showMoreFunc(".filtr-item", 7, '.more--js', false, filter);
    }
  }, 200);

  mcOptions.styles[0].url = iconGroup;
  markerCluster = new MarkerClusterer(map, markers, mcOptions);
});
