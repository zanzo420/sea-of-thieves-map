!function(o){var e={};function r(n){if(e[n])return e[n].exports;var t=e[n]={i:n,l:!1,exports:{}};return o[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=o,r.c=e,r.d=function(o,e,n){r.o(o,e)||Object.defineProperty(o,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(e,"a",e),e},r.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},r.p="",r(r.s=2)}([,,function(o,e,r){o.exports=r(3)},function(o,e){console.log("sea of thieves map");var r=L.map("mapid",{crs:L.CRS.Simple}),n=[[0,0],[700,1e3]];L.imageOverlay("images/sotm.jpg",n).addTo(r);r.fitBounds(n),r.on("click",function(o){console.log("You clicked the map at "+o.latlng)});var t=new L.LayerGroup;r.addLayer(t);var a=637;for(downCount=0;downCount<26;downCount++){var l=210;for(down=a-23.3,count=0;count<26;count++){over=l+23.4;var c=L.polygon([[a,l],[a,over],[down,over],[down,l]],{fillColor:"#fff",stroke:0,zindex:30,className:"alphanum_grid",title:"VINCE"});l+=23.4,t.addLayer(c)}a-=23.3}var u=new L.LayerGroup;r.addLayer(u);var d=new L.Control.Search({position:"topright",layer:u,initial:!1,zoom:4,marker:!1});r.addControl(d);var s=[{loc:[494.035156,433.823242],title:"Lone Cove",radius:10},{loc:[376,391],title:"Cannon Cove",radius:12},{loc:[412.825195,441.530273],title:"Rum Runner Isle",radius:4},{loc:[350.492188,656.982422],title:"The Crooked Masts",radius:14}];for(i in s){var f=s[i].title,p=L.circle(s[i].loc,{strokeweight:1,opacity:0,color:"#fff",fillColor:"#fff",fillOpacity:0,radius:s[i].radius,className:"customclass",title:f,add:function(){console.log("here?")}}).bindPopup(f);u.addLayer(p)}r.on("zoomend",function(){console.log("haHA!!!")})}]);
//# sourceMappingURL=maps/sotm.js.map