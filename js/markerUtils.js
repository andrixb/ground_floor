function createMarker( LatLong, markerName, titleName, twCode, infoWindowName, mapName ){

  // Create markers for each activists group
                markerName = new google.maps.Marker({
                         position: LatLong,
                         title: titleName
                     });
                markerName.setMap(map);

                
    
                infoWindowName = new google.maps.InfoWindow({
                                content: twCode
                            });

                 google.maps.event.addListener(markerName, 'click', function () {
                            infowindow.open(mapName, markerName);
                            });

                google.maps.event.addListener(infoWindowName, 'domready', function () {
                          ! function (d, s, id) {
                                                  var js, fjs = d.getElementsByTagName(s)[0];
                                                  if (!d.getElementById(id)) {
                                                  js = d.createElement(s);
                                                  js.id = id;
                                                  js.src = "http://platform.twitter.com/widgets.js";
                                                  fjs.parentNode.insertBefore(js, fjs);
                                                 }
                            }(document, "script", "twitter-wjs");
                    });

}