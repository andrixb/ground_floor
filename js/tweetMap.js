/**
 * The ZoomControl adds +/- button for the map
 *
 */

function ZoomControl(controlDiv, map) {

    // Creating divs & styles for custom zoom control
    controlDiv.style.padding = '5px';

    // Set CSS for the control wrapper
    var controlWrapper = document.createElement('div');
    controlWrapper.style.backgroundColor = 'white';
    controlWrapper.style.borderStyle = 'solid';
    controlWrapper.style.borderColor = 'gray';
    controlWrapper.style.borderWidth = '1px';
    controlWrapper.style.cursor = 'pointer';
    controlWrapper.style.textAlign = 'center';
    controlWrapper.style.width = '32px';
    controlWrapper.style.height = '64px';
    controlDiv.appendChild(controlWrapper);

    // Set CSS for the zoomIn
    var zoomInButton = document.createElement('div');
    zoomInButton.style.width = '32px';
    zoomInButton.style.height = '32px';
    /* Change this to be the .png image you want to use */
    zoomInButton.style.backgroundImage = 'url("images/plus.png")';
    controlWrapper.appendChild(zoomInButton);

    // Set CSS for the zoomOut
    var zoomOutButton = document.createElement('div');
    zoomOutButton.style.width = '32px';
    zoomOutButton.style.height = '32px';
    /* Change this to be the .png image you want to use */
    zoomOutButton.style.backgroundImage = 'url("images/minus.png")';
    controlWrapper.appendChild(zoomOutButton);

    // Setup the click event listener - zoomIn
    google.maps.event.addDomListener(zoomInButton, 'click', function () {
        map.setZoom(map.getZoom() + 1);
    });

    // Setup the click event listener - zoomOut
    google.maps.event.addDomListener(zoomOutButton, 'click', function () {
        map.setZoom(map.getZoom() - 1);
    });

}




function init() {





    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {

        draggable: true,
        scrollwheel: false,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(51.3678281, -0.0822395), // London

        // How zoomed in you want the map to start at (always required)
        zoom: 11,
        minZoom: 11,

        zoomControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.LEFT_TOP
        },

        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.LEFT_TOP
        },

        panControl: false,

        scaleControl: true,

        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },



        scroll: {
            x: $(window).scrollLeft(),
            y: $(window).scrollTop()
        },


        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#a0d6d1"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#dedede"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#dedede"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dedede"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f1f1f1"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#333333"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f2f2f2"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };




    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>


    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Fetch markers from kml file
    /*
    var layer = new google.maps.KmlLayer('http://www.andreabaldo.co.uk/ground_floor/rhmaps.kml');
    layer.setMap(map);
    */


    // Create the DIV to hold the control and call the ZoomControl() constructor
    // passing in this DIV.
    var zoomControlDiv = document.createElement('div');
    var zoomControl = new ZoomControl(zoomControlDiv, map);

    zoomControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomControlDiv);


    // Create markers for each group


    /***** SWEETS WAY ESTATE *****/
    sweetsWay.setMap(map);

    var infowindowSW = new google.maps.InfoWindow({
        content: textSW
    });

    google.maps.event.addListener(sweetsWay, 'click', function () {
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowSW.open(map, sweetsWay);
        twitterFetcher.fetch(configSW);
    });

    google.maps.event.addListener(infowindowSW, 'domready', function () {});


    /***** WEST HENDON ESTATE *****/
    westHen.setMap(map);

    var infowindowWH = new google.maps.InfoWindow({
        content: textWH
    });

    google.maps.event.addListener(westHen, 'click', function () {
        infowindowSW.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowWH.open(map, westHen);
        twitterFetcher.fetch(configWH);
    });

    google.maps.event.addListener(infowindowWH, 'domready', function () {});

    /***** CARPENTERS ESTATE *****/
    carpEstate.setMap(map);

    var infowindowCE = new google.maps.InfoWindow({
        content: textCE
    });

    google.maps.event.addListener(carpEstate, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowCE.open(map, carpEstate);
        twitterFetcher.fetch(configCE);
    });

    google.maps.event.addListener(infowindowCE, 'domready', function () {});

    /***** BOLEYN GROUND *****/
    bolGround.setMap(map);

    var infowindowBG = new google.maps.InfoWindow({
        content: textBG
    });

    google.maps.event.addListener(bolGround, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowBG.open(map, bolGround);
        twitterFetcher.fetch(configBG);
    });

    google.maps.event.addListener(infowindowBG, 'domready', function () {});

    /***** AYLESBURY ESTATE *****/
    ayleEstate.setMap(map);

    var infowindowAE = new google.maps.InfoWindow({
        content: textAE
    });

    google.maps.event.addListener(ayleEstate, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowAE.open(map, ayleEstate);
        twitterFetcher.fetch(configAE);
    });

    google.maps.event.addListener(infowindowAE, 'domready', function () {});

    /***** CRESSINGHAM GARDENS *****/
    cressGardens.setMap(map);

    var infowindowCG = new google.maps.InfoWindow({
        content: textCG
    });

    google.maps.event.addListener(cressGardens, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowCG.open(map, cressGardens);
        twitterFetcher.fetch(configCG);
    });

    google.maps.event.addListener(infowindowCG, 'domready', function () {});


    /***** FRED WIGG and JOHN WALSH TOWERS *****/
    FJTowers.setMap(map);

    var infowindowFJT = new google.maps.InfoWindow({
        content: textFJT
    });

    google.maps.event.addListener(FJTowers, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowFJT.open(map, FJTowers);
        twitterFetcher.fetch(configFJT);
    });

    google.maps.event.addListener(infowindowFJT, 'domready', function () {});

    /***** JOINERS ARMS *****/
    joinersArms.setMap(map);

    var infowindowJA = new google.maps.InfoWindow({
        content: textJA
    });

    google.maps.event.addListener(joinersArms, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowJA.open(map, joinersArms);
        twitterFetcher.fetch(configJA);
    });

    google.maps.event.addListener(infowindowJA, 'domready', function () {});

    /***** EARL'S COURT *****/
    earlsCourt.setMap(map);

    var infowindowEC = new google.maps.InfoWindow({
        content: textEC
    });

    google.maps.event.addListener(earlsCourt, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowEC.open(map, earlsCourt);
        twitterFetcher.fetch(configEC);
    });

    google.maps.event.addListener(infowindowEC, 'domready', function () {});

    /***** SUTTON ESTATE *****/
    suttonEstate.setMap(map);

    var infowindowSE = new google.maps.InfoWindow({
        content: textSE
    });

    google.maps.event.addListener(suttonEstate, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowSE.open(map, suttonEstate);
        twitterFetcher.fetch(configSE);
    });

    google.maps.event.addListener(infowindowSE, 'domready', function () {});

    /***** NEW ERA ESTATE *****/
    newEraEstate.setMap(map);

    var infowindowNE = new google.maps.InfoWindow({
        content: textNE
    });

    google.maps.event.addListener(newEraEstate, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowNE.open(map, newEraEstate);
        twitterFetcher.fetch(configNE);
    });

    google.maps.event.addListener(infowindowNE, 'domready', function () {});

    /***** BALFRON TOWER *****/
    balTower.setMap(map);

    var infowindowBT = new google.maps.InfoWindow({
        content: textBT
    });

    google.maps.event.addListener(balTower, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowBT.open(map, balTower);
        twitterFetcher.fetch(configBT);
    });

    google.maps.event.addListener(infowindowBT, 'domready', function () {});

    /***** GUINESS ESTATE *****/
    guinessEstate.setMap(map);

    var infowindowGE = new google.maps.InfoWindow({
        content: textGE
    });

    google.maps.event.addListener(guinessEstate, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowH.close();
        infowindowS.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowGE.open(map, guinessEstate);
        twitterFetcher.fetch(configGE);
    });

    google.maps.event.addListener(infowindowGE, 'domready', function () {});

    /***** HEATHROW *****/
    heathrow.setMap(map);

    var infowindowH = new google.maps.InfoWindow({
        content: textH
    });

    google.maps.event.addListener(heathrow, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowS.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowH.open(map, heathrow);
        twitterFetcher.fetch(configH);
    });

    google.maps.event.addListener(infowindowH, 'domready', function () {});


    /***** SOHO *****/
    soho.setMap(map);

    var infowindowS = new google.maps.InfoWindow({
        content: textS
    });

    google.maps.event.addListener(soho, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowS.open(map, soho);
        twitterFetcher.fetch(configS);
    });

    google.maps.event.addListener(infowindowS, 'domready', function () {});


    /***** NORTHUMBERLAND PARK *****/
    northPark.setMap(map);

    var infowindowNP = new google.maps.InfoWindow({
        content: textNP
    });

    google.maps.event.addListener(northPark, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowNP.open(map, northPark);
        twitterFetcher.fetch(configNP);
    });

    google.maps.event.addListener(infowindowNP, 'domready', function () {});

    /***** RAVENSBURY GROVE *****/
    ravGrove.setMap(map);

    var infowindowRG = new google.maps.InfoWindow({
        content: textRG
    });

    google.maps.event.addListener(ravGrove, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowRG.open(map, ravGrove);
        twitterFetcher.fetch(configRG);
    });

    google.maps.event.addListener(infowindowRG, 'domready', function () {});

    /***** CENTRAL HILL *****/

    centralHill.setMap(map);

    var infowindowCH = new google.maps.InfoWindow({
        content: textCH
    });

    google.maps.event.addListener(centralHill, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowCH.open(map, centralHill);
        twitterFetcher.fetch(configCH);
    });

    google.maps.event.addListener(infowindowCH, 'domready', function () {});


    /***** BRUNE BERNARD CARTER ESTATE *****/
    bbcEstate.setMap(map);

    var infowindowBBC = new google.maps.InfoWindow({
        content: textBBC
    });

    google.maps.event.addListener(bbcEstate, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowBBC.open(map, bbcEstate);
        twitterFetcher.fetch(configBBC);
    });

    google.maps.event.addListener(infowindowBBC, 'domready', function () {});

    /***** BRIXTON ARCHES *****/
    brixtonArches.setMap(map);

    var infowindowBA = new google.maps.InfoWindow({
        content: textBA
    });

    google.maps.event.addListener(brixtonArches, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowBA.open(map, brixtonArches);
        twitterFetcher.fetch(configBA);
    });

    google.maps.event.addListener(infowindowBA, 'domready', function () {});

    /***** CLAPHAM JUNCTION *****/
    claphamJunction.setMap(map);

    var infowindowCJ = new google.maps.InfoWindow({
        content: textCJ
    });

    google.maps.event.addListener(claphamJunction, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowCJ.open(map, claphamJunction);
        twitterFetcher.fetch(configCJ);
    });

    google.maps.event.addListener(infowindowCJ, 'domready', function () {});

    /***** HARINGEY HOUSING *****/
    haringeyHouse.setMap(map);

    var infowindowHH = new google.maps.InfoWindow({
        content: textHH
    });

    google.maps.event.addListener(haringeyHouse, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowHH.open(map, haringeyHouse);
        twitterFetcher.fetch(configHH);
    });

    google.maps.event.addListener(infowindowHH, 'domready', function () {});

    /***** KNIGHTS WALK *****/
    knightsWalk.setMap(map);

    var infowindowKW = new google.maps.InfoWindow({
        content: textKW
    });

    google.maps.event.addListener(knightsWalk, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowKW.open(map, knightsWalk);
        twitterFetcher.fetch(configKW);
    });

    google.maps.event.addListener(infowindowKW, 'domready', function () {});

    /***** TOWER HAMLETS *****/
    towerHamlets.setMap(map);

    var infowindowTH = new google.maps.InfoWindow({
        content: textTH
    });

    google.maps.event.addListener(towerHamlets, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowTH.open(map, towerHamlets);
        twitterFetcher.fetch(configTH);
    });

    google.maps.event.addListener(infowindowTH, 'domready', function () {});

    /***** DOLLIS VALLEY *****/
    dollisValley.setMap(map);

    var infowindowDV = new google.maps.InfoWindow({
        content: textDV
    });

    google.maps.event.addListener(dollisValley, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowTH.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowDV.open(map, dollisValley);
        twitterFetcher.fetch(configDV);
    });

    google.maps.event.addListener(infowindowDV, 'domready', function () {});

    /***** SOUTHWARK - HEYGATE ESTATE *****/
    southwarkHeygateEstate.setMap(map);

    var infowindowSH = new google.maps.InfoWindow({
        content: textSH
    });

    google.maps.event.addListener(southwarkHeygateEstate, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowTH.close();
        infowindowDV.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowSH.open(map, southwarkHeygateEstate);
        twitterFetcher.fetch(configSH);
    });

    google.maps.event.addListener(infowindowSH, 'domready', function () {});

    /***** QUEEN'S MARKET *****/
    queensMarket.setMap(map);

    var infowindowQM = new google.maps.InfoWindow({
        content: textQM
    });

    google.maps.event.addListener(queensMarket, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowTH.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowQM.open(map, queensMarket);
        twitterFetcher.fetch(configQM);
    });

    google.maps.event.addListener(infowindowQM, 'domready', function () {});

    /***** CANTON STREET GARAGES *****/
    cantonStreetGarages.setMap(map);

    var infowindowCSG = new google.maps.InfoWindow({
        content: textCSG
    });

    google.maps.event.addListener(cantonStreetGarages, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowTH.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowHD.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowCSG.open(map, cantonStreetGarages);
        twitterFetcher.fetch(configCSG);
    });

    google.maps.event.addListener(infowindowCSG, 'domready', function () {});

    /***** HACKNEY DIGS *****/
    hackneyDigs.setMap(map);

    var infowindowHD = new google.maps.InfoWindow({
        content: textHD
    });

    google.maps.event.addListener(hackneyDigs, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowTH.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowWP.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowHD.open(map, hackneyDigs);
        twitterFetcher.fetch(configHD);
    });

    google.maps.event.addListener(infowindowHD, 'domready', function () {});

    /***** WYATT PARK *****/
    wyattPark.setMap(map);

    var infowindowWP = new google.maps.InfoWindow({
        content: textWP
    });

    google.maps.event.addListener(wyattPark, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowTH.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowWP.open(map, wyattPark);
        twitterFetcher.fetch(configWP);
    });

    google.maps.event.addListener(infowindowWP, 'domready', function () {});


    /***** NORTON FOLGATE *****/
    nortonFolgate.setMap(map);

    var infowindowNF = new google.maps.InfoWindow({
        content: textNF
    });

    google.maps.event.addListener(nortonFolgate, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowTH.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowNF.open(map, nortonFolgate);
        twitterFetcher.fetch(configNF);
    });

    google.maps.event.addListener(infowindowNF, 'domready', function () {});

    /***** LEA MARSHES *****/
    leaMarshes.setMap(map);

    var infowindowLM = new google.maps.InfoWindow({
        content: textLM
    });

    google.maps.event.addListener(leaMarshes, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowTH.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowNF.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowLM.open(map, leaMarshes);
        twitterFetcher.fetch(configLM);
    });

    google.maps.event.addListener(infowindowLM, 'domready', function () {});

    /***** CAMDEN *****/
    camden.setMap(map);

    var infowindowC = new google.maps.InfoWindow({
        content: textC
    });

    google.maps.event.addListener(camden, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowTH.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowCS.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowC.open(map, camden);
        twitterFetcher.fetch(configC);
    });

    google.maps.event.addListener(infowindowC, 'domready', function () {});

    /***** CHRISP STREET *****/
    chrispStreet.setMap(map);

    var infowindowCS = new google.maps.InfoWindow({
        content: textCS
    });

    google.maps.event.addListener(chrispStreet, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowTH.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowRHG.close();
        infowindowNK.close();

        infowindowCS.open(map, chrispStreet);
        twitterFetcher.fetch(configCS);
    });

    google.maps.event.addListener(infowindowCS, 'domready', function () {});

    /***** ROBIN HOOD GARDENS *****/
    robinHood.setMap(map);

    var infowindowRHG = new google.maps.InfoWindow({
        content: textRHG
    });

    google.maps.event.addListener(robinHood, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowTH.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowNK.close();

        infowindowRHG.open(map, robinHood);
        twitterFetcher.fetch(configRHG);
    });

    google.maps.event.addListener(infowindowRHG, 'domready', function () {});


    /***** NORTH KENSIGNTON *****/
    northKensington.setMap(map);

    var infowindowNK = new google.maps.InfoWindow({
        content: textNK
    });

    google.maps.event.addListener(northKensington, 'click', function () {
        infowindowSW.close();
        infowindowWH.close();
        infowindowCE.close();
        infowindowBG.close();
        infowindowAE.close();
        infowindowCG.close();
        infowindowFJT.close();
        infowindowJA.close();
        infowindowEC.close();
        infowindowSE.close();
        infowindowNE.close();
        infowindowBT.close();
        infowindowGE.close();
        infowindowH.close();
        infowindowS.close();
        infowindowNP.close();
        infowindowRG.close();
        infowindowCH.close();
        infowindowBBC.close();
        infowindowBA.close();
        infowindowCJ.close();
        infowindowHH.close();
        infowindowKW.close();
        infowindowTH.close();
        infowindowDV.close();
        infowindowSH.close();
        infowindowQM.close();
        infowindowCSG.close();
        infowindowHD.close();
        infowindowNF.close();
        infowindowLM.close();
        infowindowC.close();
        infowindowCS.close();
        infowindowRHG.close();

        infowindowNK.open(map, northKensington);
        twitterFetcher.fetch(configNK);
    });

    google.maps.event.addListener(infowindowNK, 'domready', function () {});


    // Set the parallax scrolling on the map
    var offset = $(map.getDiv()).offset();

    map.panBy(((mapOptions.scroll.x - offset.left) / 3), ((mapOptions.scroll.y - offset.top) / 1.5));

    google.maps.event.addDomListener(window, 'scroll', function () {

        var scrollY = $(window).scrollTop(),
            scrollX = $(window).scrollLeft(),
            scroll = map.get('scroll');

        if (scroll) {
            map.panBy(-((scroll.x - scrollX) / 3), -((scroll.y - scrollY) / 3));
        }
        map.set('scroll', {
            x: scrollX,
            y: scrollY
        })

    });




}

google.maps.event.addDomListener(window, 'load', init);