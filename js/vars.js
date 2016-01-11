// GLOBAL CONFIGURATION VARS

var maxTweets = 1,
	enableLinks = true,
	showUser = true,
	showTime = true,
	showRetweet = false,
	showInteraction = false;




// SWEETS WAY

var textSW = '<a class="twitter-timeline" href="https://twitter.com/SweetsWayN20" id="sweetsWay">Tweets by @SweetsWayN20</a>';

var configSW = {
                                "id": '603618955379474432',
                                "domId": 'sweetsWay',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var sweetsWay = new google.maps.Marker({
			 position: new google.maps.LatLng(51.6282242, -0.1725143),
			 title:"Sweets Way Estate",
            /* icon: 'images/location.png' */
});


// WEST HENDON

var textWH = '<a class="twitter-timeline" href="https://twitter.com/OurWestHendon" id="westHendon">Tweets by @OurWestHendon</a>';

var configWH = {
                                "id": '603629867461140481',
                                "domId": 'westHendon',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var westHen = new google.maps.Marker({
			 position: new google.maps.LatLng(51.5776963, -0.240519),
 			 title:"West Hendon Estate"
});


//CARPENTERS ESTATE

var textCE = '<a class="twitter-timeline" href="https://twitter.com/FocusE15" data-widget-id="605708946289135616" id="carpentersEst">Tweets by @FocusE15</a>';
    
var configCE = {
					            "id": '605708946289135616',
					            "domId": 'carpentersEst',
					            "maxTweets": maxTweets,
					            "enableLinks": enableLinks,
					            "showUser": showUser,
					            "showTime": showTime,
					            "showRetweet": showRetweet,
					            "showInteraction": showInteraction
					            };

var carpEstate = new google.maps.Marker({
			 position: new google.maps.LatLng(51.53780070000001, -0.0050533),
			 title:"Carpenters Estate"
});


// BOLEYN GROUND

 var textBG = '<a class="twitter-timeline" href="https://twitter.com/BoleynDev100" id="boleynGr">Tweets by @BoleynDev100</a>';
    
 var configBG = {
                                "id": '605715198788423680',
                                "domId": 'boleynGr',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var bolGround = new google.maps.Marker({
			 position: new google.maps.LatLng(51.5323349, 0.0385594),
 			 title:"Boleyn Ground"
});


// AYLESBURY ESTATE

var textAE = '<a class="twitter-timeline" href="https://twitter.com/Fight4Aylesbury" data-widget-id="605717206366863360" id="aylesEst">Tweets by @Fight4Aylesbury</a>';

var textHASL = '<a class="twitter-timeline" href="https://twitter.com/HousingActionSL" data-widget-id="605717569442562048" id="housingAct">Tweets by @HousingActionSL</a>';

var configAE = {
                                "id": '605717206366863360',
                                "domId": 'aylesEst',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var ayleEstate = new google.maps.Marker({
			 position: new google.maps.LatLng(51.4873625, -0.0878584),
 			 title:"Aylesbury Estate"
 });


// CRESSINGHAM GARDENS

var textCG = '<a class="twitter-timeline" href="https://twitter.com/SaveCressingham" data-widget-id="605718044342644736" id="cressGard">Tweets by @SaveCressingham</a>';

var configCG = {
                                "id": '605718044342644736',
                                "domId": 'cressGard',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var cressGardens = new google.maps.Marker({
			 position: new google.maps.LatLng(51.446806, -0.1119125),
 			 title:"Cressingham Gardens"
 });

// FRED WIGG and JOHN WALSH Towers

var textFJT = '<a class="twitter-timeline" href="https://twitter.com/FredJohnTowers" data-widget-id="605718573005336576" id="fredJTowers">Tweets by @FredJohnTowers</a>';

var configFJT = {
                                "id": '605718573005336576',
                                "domId": 'fredJTowers',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var FJTowers = new google.maps.Marker({
                         position: new google.maps.LatLng(51.56105119999999, 0.0140119),
                         title:"Fred Wigg and John Walsh Towers"
 });

// JOINERS ARMS

var textJA = '<a class="twitter-timeline" href="https://twitter.com/Joinersliveson" data-widget-id="605719157401862144" id="joinArms">Tweets by @Joinersliveson</a>';

var configJA = {
                                "id": '605719157401862144',
                                "domId": 'joinArms',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var joinersArms = new google.maps.Marker({
                         position: new google.maps.LatLng(51.5297085, -0.0745976),
                         title:"Joiners Arms"
 });

// EARL'S COURT

var textEC = '<a class="twitter-timeline" href="https://twitter.com/saveEarlsCourt" data-widget-id="605719551465136129" id="eCourt">Tweets by @saveEarlsCourt</a>';

var configEC = {
                                "id": '605719551465136129',
                                "domId": 'eCourt',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var earlsCourt = new google.maps.Marker({
                         position: new google.maps.LatLng(51.4894268, -0.1969814),
                         title:"Earl's Court"
 });


// SUTTON ESTATE

var textSE = '<a class="twitter-timeline" href="https://twitter.com/SaveOurSutton" data-widget-id="605720007927037952" id="sutEst">Tweets by @SaveOurSutton</a>';

var configSE = {
                                "id": '605720007927037952',
                                "domId": 'sutEst',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var suttonEstate = new google.maps.Marker({
                         position: new google.maps.LatLng(51.49064760000001, -0.1681879),
                         title:"Sutton Estate"
 });


// NEW ERA ESTATE

var textNE = '<a class="twitter-timeline" href="https://twitter.com/newera4all" data-widget-id="605720355936858112" id="newEst">Tweets by @newera4all</a>';

var configNE = {
                                "id": '605720355936858112',
                                "domId": 'newEst',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var newEraEstate = new google.maps.Marker({
                         position: new google.maps.LatLng(51.5362458, -0.0813675),
                         title:"New Era Estate"
 });

// BALFRON TOWER

var textBT = '<a class="twitter-timeline" href="https://twitter.com/BalfronSocial" data-widget-id="605720810989481984" id="bTower">Tweets by @BalfronSocial</a>';

var configBT = {
                                "id": '605720810989481984',
                                "domId": 'bTower',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var balTower = new google.maps.Marker({
                         position: new google.maps.LatLng(51.5135701, -0.008883500000000001),
                         title:"Balfron Tower"
 });

// GUINNESS ESTATE

var textGE = '<a class="twitter-timeline" href="https://twitter.com/guinness_occupy" data-widget-id="605721150694522880" id="gEst">Tweets by @guinness_occupy</a>';

var configGE = {
                                "id": '605721150694522880',
                                "domId": 'gEst',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var guinessEstate = new google.maps.Marker({
                         position: new google.maps.LatLng(51.4591286, -0.1059258),
                         title:"Guiness Estate"
 });


// HEATHROW 

var textH = '<a class="twitter-timeline" href="https://twitter.com/transheathrow" data-widget-id="605721600533635072" id="heathExp">Tweets by @transheathrow</a>';

var configH = {
                                "id": '605721600533635072',
                                "domId": 'heathExp',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var heathrow = new google.maps.Marker({
                         position: new google.maps.LatLng(51.4904439, -0.4572307999999999),
                         title:"Heathrow Expansion"
 });

// SOHO

var textS = '<a class="twitter-timeline" href="https://twitter.com/WeAreSaveSoho" data-widget-id="605721965836541952" id="saveSoho">Tweets by @WeAreSaveSoho</a>';

var configS = {
                                "id": '605721965836541952',
                                "domId": 'saveSoho',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var soho = new google.maps.Marker({
                         position: new google.maps.LatLng(51.5150724, -0.1295829),
                         title:"Save Soho"
 });


// NORTHUMBERLAND PARK 

var textNP = '<a class="twitter-timeline" href="https://twitter.com/No2demolition" data-widget-id="605722313800224768" id="nPark">Tweets by @No2demolition</a>';

var configNP = {
                                "id": '605722313800224768',
                                "domId": 'nPark',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var northPark = new google.maps.Marker({
                         position: new google.maps.LatLng(51.60197, -0.05391),
                         title:"Northumberland Park"
 });

// RAVENSBURY GROVE

var textRG = '<a class="twitter-timeline" href="https://twitter.com/ravensburygrove" data-widget-id="605722729887764480" id="rGrove">Tweets by @ravensburygrove</a>';

var configRG = {
                                "id": '605722729887764480',
                                "domId": 'rGrove',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var ravGrove = new google.maps.Marker({
                         position: new google.maps.LatLng(51.399065, -0.1819289 ),
                         title:"Ravensbury Grove"
 });


// CENTRAL HILL

var textCH = '<a class="twitter-timeline" href="https://twitter.com/savecentralhill" data-widget-id="605723110290137088" id="cenH">Tweets by @savecentralhill</a>';

var configCH = {
                                "id": '605723110290137088',
                                "domId": 'cenH',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var centralHill = new google.maps.Marker({
                         position: new google.maps.LatLng(51.4208878, -0.08990760000000002 ),
                         title:"Central Hill, Upper Norwood"
 });



// BRUNE BERNARD CARTER ESTATE

var textBBC = '<a class="twitter-timeline" href="https://twitter.com/BBCResidents" data-widget-id="605723603729059840" id="bruneBC">Tweets by @BBCResidents</a>';

var configBBC = {
                                "id": '605723603729059840',
                                "domId": 'bruneBC',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var bbcEstate = new google.maps.Marker({
                         position: new google.maps.LatLng(51.5177296, -0.0748819 ),
                         title:"Brune Bernard Carter Estate"
 });

// BRIXTON ARCHES

var textBA = '<a class="twitter-timeline" href="https://twitter.com/ReclaimBrixton" data-widget-id="605723940842012672" id="brixtArch">Tweets by @ReclaimBrixton</a>';

var configBA = {
                                "id": '605723940842012672',
                                "domId": 'brixtArch',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var brixtonArches = new google.maps.Marker({
                         position: new google.maps.LatLng(51.4634193, -0.114466 ),
                         title:"Brixton Arches"
 });
// CLAPHAM JUNCTION

var textCJ = '<a class="twitter-timeline" href="https://twitter.com/c_j_a_g" data-widget-id="605724357483220992" id="clapJun">Tweets by @c_j_a_g</a>';

var configCJ = {
                                "id": '605724357483220992',
                                "domId": 'clapJun',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var claphamJunction = new google.maps.Marker({
                         position: new google.maps.LatLng(51.4641211, -0.1699555),
                         title:"Clapham Junction"
 });

// HARIGEY HOUSING

var textHH = '<a class="twitter-timeline" href="https://twitter.com/HaringeyHousing" data-widget-id="605727292933992450" id="harHous">Tweets by @HaringeyHousing</a>';

var configHH = {
                                "id": '605727292933992450',
                                "domId": 'harHous',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var haringeyHouse = new google.maps.Marker({
                         position: new google.maps.LatLng(51.5909359, -0.10952),
                         title:"Haringey Housing Action"
 });

// KNIGHTS WALK

var textKW = '<a class="twitter-timeline" href="https://twitter.com/Knights_Walk" data-widget-id="605727699580141569" id="kniWal">Tweets by @Knights_Walk</a>'

var configKW = {
                                "id": '605727699580141569',
                                "domId": 'kniWal',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var knightsWalk = new google.maps.Marker({
                         position: new google.maps.LatLng(51.4886784, -0.1069021),
                         title:"Hands Off Knights Walk"
 });

// TOWER HAMLETS

var textTH = '<a class="twitter-timeline" href="https://twitter.com/THRenters" data-widget-id="605728148337082370" id="towHaml">Tweets by @THRenters</a>'

var configTH = {
                                "id": '605728148337082370',
                                "domId": 'towHaml',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var towerHamlets = new google.maps.Marker({
                         position: new google.maps.LatLng(51.5127955, -0.05855799999999999),
                         title:"Chapman House / Tower Hamlets Renters"
 });


// DOLLIS VALLEY

var textDV = '<a class="twitter-timeline" href="https://twitter.com/ourbohemia" data-widget-id="605728622113124352" id="dollVal">Tweets by @ourbohemia</a>';


var configDV = {
                                "id": '605728622113124352',
                                "domId": 'dollVal',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var dollisValley = new google.maps.Marker({
                         position: new google.maps.LatLng(51.6439758, -0.2026677),
                         title:"Dollis Valley Pre-School Occupation"
 });



// SOUTHWARK - HEYGATE ESTATE

var textSH = '<a class="twitter-timeline" href="https://twitter.com/SouthwarkNotes" data-widget-id="605728970311643136" id="southw">Tweets by @SouthwarkNotes</a>';

var configSH = {
                                "id": '605728970311643136',
                                "domId": 'southw',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var southwarkHeygateEstate = new google.maps.Marker({
                         position: new google.maps.LatLng(51.49338139999999, -0.0963879),
                         title:"Heygate Estate"
 });

// QUEEN'S MARKET

var textQM = '<a class="twitter-timeline" href="https://twitter.com/FoQMarket" data-widget-id="605729348205821952" id="queensMar">Tweets by @FoQMarket</a>';

var configQM = {
                                "id": '605729348205821952',
                                "domId": 'queensMar',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var queensMarket = new google.maps.Marker({
                         position: new google.maps.LatLng(51.5344305, 0.0347829),
                         title:"Friends of Queens Market"
 });

// CANTON STREET GARAGES

var textCSG = '<a class="twitter-timeline" href="https://twitter.com/CantonStGarages" data-widget-id="605729797403242496" id="cantStGar">Tweets by @CantonStGarages</a>';

var configCSG = {
                                "id": '605729797403242496',
                                "domId": 'cantStGar',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var cantonStreetGarages = new google.maps.Marker({
                         position: new google.maps.LatLng(51.5123349, -0.0232172),
                         title:"Canton Street Garages"
 });

// HACKNEY - DIGS

var textHD = '<a class="twitter-timeline" href="https://twitter.com/Hackney_renters" data-widget-id="605730166283882496" id="hackDig">Tweets by @Hackney_renters</a>';

var configHD = {
                                "id": '605730166283882496',
                                "domId": 'hackDig',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var hackneyDigs = new google.maps.Marker({
                         position: new google.maps.LatLng(51.5379608, -0.0578713),
                         title:"Digs (Hackney Renters)"
 });

// WYATT PARK

var textWP = '<a class="twitter-timeline" href="https://twitter.com/WPRRG" data-widget-id="605730603942703104" id="wyattPk">Tweets by @WPRRG</a>';

var configWP = {
                                "id": '605730603942703104',
                                "domId": 'wyattPk',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var wyattPark = new google.maps.Marker({
                         position: new google.maps.LatLng(51.44060019999999, -0.1230061),
                         title:"Wyatt Park Residents"
 });


// NORTON FOLGATE

var textNF = '<a class="twitter-timeline" href="https://twitter.com/SpitalfieldsT" data-widget-id="605731246346539010" id="nortFol">Tweets by @SpitalfieldsT</a>';

var configNF = {
                                "id": '605731246346539010',
                                "domId": 'nortFol',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var nortonFolgate = new google.maps.Marker({
                         position: new google.maps.LatLng(51.52087390000001, -0.078814),
                         title:"Save Norton Folgate"
 });

// LEA MARSHES

var textLM = '<a class="twitter-timeline" href="https://twitter.com/SaveLeaMarshes" data-widget-id="605731462382546944" id="leaMars">Tweets by @SaveLeaMarshes</a>';

var configLM = {
                                "id": '605731462382546944',
                                "domId": 'leaMars',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var leaMarshes = new google.maps.Marker({
                         position: new google.maps.LatLng(51.5716285, -0.05201340000000001),
                         title:"Save Lea Marshes"
 });
// CAMDEN 

var textC = '<a class="twitter-timeline" href="https://twitter.com/CamdenResists" data-widget-id="605731759012114432" id="camd">Tweets by @CamdenResists</a>';

var configC = {
                                "id": '605731759012114432',
                                "domId": 'camd',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var camden = new google.maps.Marker({
                         position: new google.maps.LatLng(51.539102, -0.1416636),
                         title:"Camden Resists"
 });


// CHRISP STREET

var textCS = '<a class="twitter-timeline" href="https://twitter.com/SaveChrispSt" data-widget-id="605732109160984576" id="chriSt">Tweets by @SaveChrispSt</a>';

var configCS = {
                                "id": '605732109160984576',
                                "domId": 'chriSt',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var chrispStreet = new google.maps.Marker({
                         position: new google.maps.LatLng(51.51224140000001, -0.0145483),
                         title:"Save Chrisp Street Market"
 });

// ROBIN HOOD GARDENS

var textRHG = '<a class="twitter-timeline" href="https://twitter.com/saverobinhood" data-widget-id="605732457024000001" id="robHood">Tweets by @saverobinhood</a>';

var configRHG = {
                                "id": '605732457024000001',
                                "domId": 'robHood',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var robinHood = new google.maps.Marker({
                         position: new google.maps.LatLng(51.50942360000001, -0.0088191),
                         title:"Save Robin Hood"
 });

// NORTH KENSINGTON

var textNK = '<a class="twitter-timeline" href="https://twitter.com/Westway23" data-widget-id="605732826571517952" id="northKen">Tweets by @Westway23</a>';

var configNK = {
                                "id": '605732826571517952',
                                "domId": 'northKen',
                                "maxTweets": maxTweets,
                                "enableLinks": enableLinks,
                                "showUser": showUser,
                                "showTime": showTime,
                                "showRetweet": showRetweet,
                                "showInteraction": showInteraction
                                };

var northKensington = new google.maps.Marker({
                         position: new google.maps.LatLng(51.5170751, -0.2102208),
                         title:"Westway 23"
 });


// STOKEY LOCAL

var textSL = '<a class="twitter-timeline" href="https://twitter.com/stokeylocal" data-widget-id="605733116012072960" id="stokLoc">Tweets by @stokeylocal</a>';

// CANAL SIDE

var textCAS = '<a class="twitter-timeline" href="https://twitter.com/savecanalside" data-widget-id="605733399689621504">Tweets by @savecanalside</a>';

// ROYAL VAUXHALL TAVERN

var textRVT = '<a class="twitter-timeline" href="https://twitter.com/RVTfuture" data-widget-id="605733632049852418" id="royalVaux">Tweets by @RVTfuture</a>';

// WARDS CORNER

var textWC = '<a class="twitter-timeline" href="https://twitter.com/Wards_Corner" data-widget-id="605734159223529473" id="wardsCorn">Tweets by @Wards_Corner</a>'

















