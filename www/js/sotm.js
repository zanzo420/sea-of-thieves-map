!function(e){var o={};function s(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=o,s.d=function(e,o,t){s.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,o){if(1&o&&(e=s(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var i in e)s.d(t,i,function(o){return e[o]}.bind(null,i));return t},s.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(o,"a",o),o},s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},s.p="",s(s.s=0)}([function(e,o,s){e.exports=s(1)},function(e,o,s){"use strict";s.r(o);var t;let i;window.addEventListener("load",function(){function e(e){console.log("online offline update"),navigator.onLine?console.log("went online"):console.log(" went offline")}window.addEventListener("online",e),window.addEventListener("offline",e)}),"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js").then(function(){console.log("Service Worker Registered")}),t=!!navigator.onLine;var r=document.querySelector("#install-button");window.addEventListener("beforeinstallprompt",e=>{console.log("beforeinstallprompt - showme!!!"),e.preventDefault(),i=e,document.querySelector("#installBut").classList.add("showme")}),r.addEventListener("click",()=>{document.querySelector("#installBut").classList.remove("showme"),i.prompt(),i.userChoice.then(e=>{"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),i=null})}),window.addEventListener("appinstalled",e=>{console.log("a2hs","installed")});var a=[],n=[{loc:[-39.625,60.1],title:"Lone Cove",radius:4,pigs:!0,snakes:!0},{loc:[-67.53125,48.125],title:"Cannon Cove",radius:4,chickens:!0,pigs:!0},{loc:[-65.09375,62.84375],title:"Rum Runner Isle",radius:2,pigs:!0},{loc:[-78.422607,118.649658],title:"The Crooked Masts",radius:3,chickens:!0,snakes:!0},{loc:[-25.71875,15.59375],title:"Sailor's Bounty",radius:4,chickens:!0,pigs:!0},{loc:[-18.227905,40.417725],title:"Smuggler's Bay",radius:4,chickens:!0,snakes:!0},{loc:[-20.850708,54.960571],title:"Salty Sands",radius:2,chickens:!0},{loc:[-25.875,66.875],title:"Picaroon Palms",radius:2,snakes:!0},{loc:[-24.90625,85.8125],title:"Scurvy Isley",radius:2},{loc:[-25.786011,104.275391],title:"Old Faithful Isle",radius:4,chickens:!0,pigs:!0},{loc:[-20.0625,118.4375],title:"Black Sand Atoll",radius:2,snakes:!0},{loc:[-18.634888,133.902466],title:"Marauder's Arch",radius:4,chickens:!0,pigs:!0},{loc:[-30.094604,30.657227],title:"Sandy Shallows",radius:2,snakes:!0},{loc:[-30.9375,47.96875],title:"Boulder Cay",radius:2,chickens:!0},{loc:[-42.625,21.96875],title:"Keel Haul Fort",radius:2,isFortress:!0},{loc:[-45.8125,41.28125],title:"Sanctuary Outpost",radius:4,isOutpost:!0},{loc:[-53.90625,55],title:"Lonely Isle",radius:2,snakes:!0},{loc:[-53.125,69.25],title:"Hidden Spring Keep",radius:3,isFortress:!0},{loc:[-38.733154,112.010498],title:"Blind Man's Lagoon",radius:2,pigs:!0},{loc:[-32.576904,123.666748],title:"Shark Fin Camp",radius:2,isFortress:!0},{loc:[-39.858154,134.197998],title:"Plunderer's Plight",radius:2,pigs:!0},{loc:[-31.59375,141.65625],title:"Black Water Enclave",radius:2,chickens:!0},{loc:[-38.125,90.5625],title:"Kraken's Watchtower",radius:2,isFortress:!0},{loc:[-51.208862,103.17157],title:"Dagger Tooth Outpost",radius:4,isOutpost:!0},{loc:[-49.613525,122.312012],title:"The Sunken Grove",radius:3,pigs:!0,snakes:!0},{loc:[-53.00293,142.175415],title:"Galleon's Grave Outpost",radius:3,isOutpost:!0},{loc:[-62.65918,114.48791],title:"Isle of Last Words",radius:2,pigs:!0,snakes:!0},{loc:[-65.15625,127.15625],title:"Skull Keep",radius:2,isFortress:!0},{loc:[-69.125,140.09375],title:"Tri-Rock Isle",radius:2,chickens:!0},{loc:[-77.875,132.375],title:"Shiver Retreat",radius:2,pigs:!0},{loc:[-76.14502,149.006836],title:"Liar's Backbone",radius:2,snakes:!0},{loc:[-90.52002,127.038086],title:"Shark Tooth Key",radius:2,pigs:!0},{loc:[-88.67627,142.475586],title:"Kraken's Fall",radius:4,pigs:!0,snakes:!0},{loc:[-71.851074,100.23291],title:"Shipwreck Bay",radius:4,chickens:!0,pigs:!0},{loc:[-55.99707,28.127686],title:"Rapier Cay",radius:2,chickens:!0},{loc:[-63.62207,19.908936],title:"Crescent Isle",radius:3,pigs:!0,snakes:!0},{loc:[-72.65625,29.5],title:"Golden Sand Outpost",radius:4,isOutpost:!0},{loc:[-79.662964,14.701294],title:"Sea Dog's Rest",radius:2,pigs:!0},{loc:[-79.412262,57.996521],title:"Twin Groves",radius:2,chickens:!0},{loc:[-89,45.9375],title:"Wanderer's Refuge",radius:4,chickens:!0,snakes:!0},{loc:[-89.544189,28.243774],title:"Lagoon of Whispers",radius:2,chickens:!0,snakes:!0},{loc:[-94.631592,14.016357],title:"Mermaid's Hideaway",radius:3,chickens:!0,pigs:!0},{loc:[-102.756592,34.328857],title:"Sailor's Knot Stronghold",radius:3,isFortress:!0},{loc:[-101.039307,69.45874],title:"Fools Lagoon",radius:2,pigs:!0},{loc:[-98.539307,80.95874],title:"Castaway Isle",radius:1,snakes:!0},{loc:[-101.820557,94.89624],title:"Old Boot Fort",radius:2,isFortress:!0},{loc:[-115.021362,49.43103],title:"Plunder Valley",radius:4,chickens:!0,pigs:!0},{loc:[-113.333862,67.2747],title:"Chicken Isle",radius:2,chickens:!0,pigs:!0},{loc:[-113.13248893641892,82.49137646476655],title:"Snake Island",radius:3,pigs:!0,snakes:!0},{loc:[-114.133301,103.807495],title:"Crooks's Hollow",radius:2,chickens:!0,snakes:!0},{loc:[-112.352051,119.151245],title:"Barnacle Cay",radius:2,chickens:!0},{loc:[-123.622437,131.406738],title:"Ancient Spire Outpost",radius:2,isOutpost:!0},{loc:[-121.170898,31.903809],title:"Discovery Ridge",radius:4,chickens:!0,snakes:!0},{loc:[-134.920898,42.466309],title:"Old Salts Atoll",radius:2,chickens:!0},{loc:[-126.573975,62.819702],title:"Lost Gold Fort",radius:2,isFortress:!0},{loc:[-142.713379,57.555176],title:"Shark Bait Cove",radius:4,chickens:!0,pigs:!0},{loc:[-145.838379,71.555176],title:"Lookout Point",radius:2,pigs:!0},{loc:[-150.088379,82.367676],title:"Booty Isle",radius:2,snakes:!0},{loc:[-132.392822,80.059204],title:"Plunder Outpost",radius:3,isOutpost:!0},{loc:[-124.549072,92.434204],title:"Paradise Spring",radius:2,pigs:!0},{loc:[-130.830322,101.809204],title:"Cutlass Cay",radius:2,snakes:!0},{loc:[-127.950684,114.55481],title:"The Crow's Nest Fortress",radius:2,isFortress:!0},{loc:[-141.200684,110.21106],title:"Mutineer Rock",radius:2,chickens:!0},{loc:[-141.24353,125.804077],title:"Devil's Ridge",radius:3,pigs:!0,snakes:!0},{loc:[-145.062866,96.548401],title:"Thieves' Haven",radius:4,chickens:!0,pigs:!0}],l=[{loc:[-12.625,28.4375],title:"D2",isLarge:!0,desc:"Large (3rd out of the 4 offshore rocks counting from the east, at the back of the island, D2"},{loc:[-20.726562,132.023438],title:"Marauder's Arch",isLarge:!0,desc:"South top"},{loc:[-52.882812,69.21875],title:"Hidden Spring Keep",isLarge:!1,desc:" Very top, use the South West cannon"},{loc:[-140.34375,125.289063],title:"Devil's Ridge",isLarge:!1,desc:" North side underneath the ridge"},{loc:[-61,84.875],title:"N10",isLarge:!1,desc:"Underwater, uncharted island"},{loc:[-71.132812,100.97656],title:"Shipwreck Bay",isLarge:!0,desc:"Northern small island"},{loc:[-95.96875,14.945313],title:"Mermaid's Hideaway",isLarge:!1,desc:"Across from the Southern peak"},{loc:[-133.460937,80.585938],title:"Plunder Outpost",isLarge:!0,desc:"South top"},{loc:[-145.875,98.648438],title:"Thieves Haven",isLarge:!1,desc:"East rock in the water"},{loc:[-133.460937,80.585938],title:"Plunder Outpost",isLarge:!0,desc:"South top"}],c=t,d=[];console.log("-- detect isOnline: "+c);var u="";"localhost"!=location.hostname&&(u="https://cdn.chenzorama.com/");var p=L.map("mapid",{maxZoom:7,minZoom:2,crs:L.CRS.Simple,attributionControl:!1,preferCanvas:!1}).setView([70,70],4),g=new L.LatLngBounds(p.unproject([0,20924],7),p.unproject([20924,0],7));p.setMaxBounds(g,{padding:[200,200]}),new L.Hash(p),L.tileLayer(u+"images/tiles/{z}/{x}/{y}.png",{minZoom:2,maxZoom:7,bounds:g,noWrap:!0,tms:!1}).addTo(p);var h=new L.LayerGroup;p.addLayer(h);var k=L.icon({iconUrl:"/images/markers/xmarkthespot_marker.png",shadowUrl:"/images/markers/xmarkthespot_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[15,30],shadowAnchor:[0,0],popupAnchor:[0,0]});p.on("click",function(e){console.log("You clicked the map at "+e.latlng)});var m=new L.LayerGroup;p.addLayer(m);var f=new L.LayerGroup;a.push(["chickens",f]);var v=new L.LayerGroup;a.push(["snakes",v]);var w=new L.LayerGroup;a.push(["pigs",w]);var y=new L.Control.Search({position:"topright",layer:m,initial:!1,zoom:4,marker:!1});p.addControl(y);var S=L.icon({iconUrl:"/images/markers/chicken_marker.png",shadowUrl:"/images/markers/chicken_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[0,30],shadowAnchor:[0,0],popupAnchor:[0,0]}),C=L.icon({iconUrl:"/images/markers/snake_marker.png",shadowUrl:"/images/markers/snake_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[30,30],shadowAnchor:[0,0],popupAnchor:[0,0]}),O=L.icon({iconUrl:"/images/markers/pig_marker.png",shadowUrl:"/images/markers/pig_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[30,0],shadowAnchor:[0,0],popupAnchor:[0,0]});for(var b in L.islandCircle=L.Circle.extend({options:{name:"islandName",json:{}}}),n){var A=n[b].title,j=n[b].radius,T=new L.islandCircle(n[b].loc,{strokeweight:1,opacity:0,color:"#fff",fillColor:"#fff",fillOpacity:0,radius:j,className:"islandClass",name:A,title:A,json:n[b]});if(m.addLayer(T),d.push(T),T.on({mousedown:function(e){p.dragging.disable(),p.on("mousemove",function(o){e.target.setLatLng(o.latlng)})},mouseup:function(e){p.removeEventListener("mousemove"),console.log(e.target.options.title),console.log("["+e.latlng.lat+", "+e.latlng.lng+"],"),p.dragging.enable()}}),n[b].chickens){var P=R(n[b].loc,.5*j,.6*j);L.marker(P,{icon:S,title:"chicken"}).addTo(f).setIcon(S)}if(n[b].snakes){var B=R(n[b].loc,.5*j,.6*j*-1);L.marker(B,{icon:C,title:"snake"}).addTo(v)}if(n[b].pigs){var F=R(n[b].loc,.5*j*-1,.6*j*-1);L.marker(F,{icon:O,title:"pigs"}).addTo(w)}}var M=new L.LayerGroup;a.push(["thrones",M]);var _=L.icon({iconUrl:"/images/markers/throne_marker.png",shadowUrl:"/images/markers/throne_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[15,30],shadowAnchor:[0,0],popupAnchor:[-20,-45]});for(var x in l){var z=l[x].loc;L.marker(z,{icon:_,title:"Skelton Throne"}).addTo(M).bindPopup(l[x].desc)}var G=L.popup({maxWidth:"500",minWidth:"120",className:"context_popup"});function I(){p.getZoom()>=4&&$(".leaflet-grid-label").addClass("big")}function R(e,o,s){return[e[0]+o,e[1]+s]}p.on("contextmenu",function(e){var o=e.latlng;G.setLatLng(e.latlng).setContent("<ul><li class='js-addMarker'>Add Marker</li><li class='js-closest' data-type='chickens'>Closest Chickens</li><li class='js-closest' data-type='pigs'>Closest Pigs</li><li class='js-closest' data-type='snakes'>Closest Snakes</li></ul>").openOn(p),$(".js-addMarker").click(function(){console.log("Lat, Long: "+o),L.marker(o,{icon:k,draggable:!0}).addTo(p),p.closePopup()}),$(".js-closest").click(function(){console.log("Lat, Long: "+o);var s=$(this).data("type");!function(e,o){var s,t=1e3,i="*None*";for(var r in console.log("!findNearestMarker "+o),n){var a=n[r].title,l=n[r].loc;(s=p.distance(l,e))<t&&n[r][o]&&(t=s,i=a,console.log(typeof n[r][o]))}window.console.log("The nearest marker is: "+i)}(e.latlng,s),p.closePopup()})}),L.simpleGraticule({interval:5.85,showOriginLabel:!1,redraw:"move",zoomIntervals:[{start:3,end:6,interval:5.85}]}).addTo(p),p.on("zoomend",function(){I()}),p.on("move",function(){I()}),p.on("moveend",function(){I()}),window.dev={toggleOn:function(){for(var e in console.log("dev"),$(".islandClass").addClass("show"),d);}};var U=-1;$(function(){$(".js-searchforisland").click(function(){"left"==$(this).data("dir")?--U<0&&(U=n.length-1):++U>=n.length&&(U=0);var e=n[U].loc;p.setView(e,6)}),$(".js-toggleMarkers").click(function(){!function(e,o){var s=function(e){for(var o=0;o<a.length;o++)if(a[o][0]==e)return a[o][1]}(e);o?p.addLayer(s):p.removeLayer(s)}($(this).attr("name"),$(this).is(":checked"))})})}]);
//# sourceMappingURL=maps/sotm.js.map