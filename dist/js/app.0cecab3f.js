(function(t){function e(e){for(var s,n,r=e[0],l=e[1],c=e[2],u=0,m=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"009a":function(t,e,a){t.exports=a.p+"img/20140525_151620.b11553b9.png"},"0c81":function(t,e,a){},"543d":function(t,e,a){"use strict";var s=a("8f65"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("d3b7"),a("786c"),a("68aa"),a("9393"),a("09d7");for(var s,i=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("keep-alive",[a("router-view")],1)},n=[],r={name:"app",data:function(){return{}}},l=r,c=a("0c7c"),d=Object(c["a"])(l,o,n,!1,null,null,null),u=d.exports,m=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"appcontent"}},[a("ec-main-sidebar"),a("div",[a("ec-map-component")],1)],1)},h=[],f={name:"home",data:function(){return{msg:"Welcome to Your Vue.js App"}}},g=f,v=(a("cccb"),Object(c["a"])(g,p,h,!1,null,null,null)),b=v.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"wrap-data-area"}},[a("div",{staticClass:"modal fade",staticStyle:{"background-color":"rgba(0, 0, 0, 0.6)"},attrs:{id:"myModal"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered modal-sm"},[a("div",{staticClass:"modal-content mb-0 p-0",staticStyle:{"background-color":"rgba(255, 255, 255, 0.6)"}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"container-fluid"},[a("button",{staticClass:"btn btn-warning close-modal",attrs:{type:"button"},on:{click:function(e){return t.closeModal()}}},[t._v("×")]),a("img",{staticClass:"img-fluid",staticStyle:{height:"100%",width:"100%"},attrs:{id:"img01"}})])]),t._m(0)])])]),a("div",{attrs:{id:"toggler-nav"}},[a("a",{attrs:{id:"closebtn",href:"javascript:void(0)"},on:{click:function(e){return t.closeNav()}}},[t._v("Go to Map")])]),t._v(" "),a("div",{staticClass:"container",attrs:{id:"nav-ctrls"}},[a("div",{staticClass:"row"},[a("div",{attrs:{id:"upperctr"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"sidebar-upperctr-elem",attrs:{id:"searchfilter",type:"text",placeholder:"Search street and/or year"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),a("div",[a("button",{staticClass:"btn btn-outline-warning sidebar-upperctr-elem",attrs:{id:"clearingbtn"},on:{click:t.selAllMarkers}},[t._v("Select all")]),a("button",{staticClass:"btn btn-outline-warning sidebar-upperctr-elem",attrs:{id:"clearingbtn"},on:{click:t.clearAllMarkers}},[t._v("Clear all")])]),a("button",{staticClass:"btn btn-outline-warning",staticStyle:{"margin-left":"5px"},attrs:{id:"trackingbtn"},on:{click:function(e){return t.trackingAllowed()}}},[t._v("Tracking?")])])]),a("div",{staticClass:"content-fluid",attrs:{id:"sel-gallery"}},[t.filteredLocationsLost.length>0?a("div",{staticClass:"grid"},[a("h3",[t._v("Get Lost!")]),t._l(t.filteredLocationsLost,(function(e){return a("div",{staticClass:"cell"},[a("div",{staticClass:"item-title"},[a("img",{staticClass:"responsive-image",staticStyle:{width:"100px",height:"100px","margin-left":"20px"},attrs:{id:t.idConcat(e.itemid+"_img"),src:e.picture},on:{click:function(a){return t.openModal(e)}}}),a("br"),a("button",{staticClass:"btn btn-street",class:e.sel?"btn-outline-secondary":"btn-outline-info",attrs:{type:"button",id:t.idConcat(e.itemid),value:e.itemid},on:{click:function(e){return t.cltMarker(e)}}},[t._v(t._s(e.street)+", "+t._s(e.year))])])])}))],2):t._e(),a("div",{staticClass:"grid"},[a("h3",[t._v("Sarphatipark Route "+t._s(t.getlostC))]),t._l(t.filteredLocations,(function(e){return a("div",{staticClass:"cell"},[a("div",{staticClass:"item-title"},[a("img",{staticClass:"responsive-image",staticStyle:{width:"100px",height:"100px","margin-left":"20px"},attrs:{id:t.idConcat(e.itemid+"_img"),src:e.picture},on:{click:function(a){return t.openModal(e)}}}),a("br"),a("button",{staticClass:"btn btn-street",class:e.sel?"btn-outline-secondary":"btn-outline-info",attrs:{type:"button",id:t.idConcat(e.itemid),value:e.itemid},on:{click:function(e){return t.cltMarker(e)}}},[t._v(t._s(e.street)+", "+t._s(e.year))])])])}))],2)])])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("h5",{staticStyle:{color:"blue"},attrs:{id:"modal-title"}})])}],w=(a("4de4"),a("caad"),a("ac1f"),a("2532"),a("841c"),a("98b1")),_=(a("d81d"),a("a9e3"),a("1276"),[{imgid:2,fotolink:"https://images.memorix.nl/ams/thumb/250x250/925c2dcc-9cf6-4881-24f1-72e9c21963d6.jpg",fotolinkM:"testcamera",estyear:"1930",estaddress:"Van Ostadestraat",address:"Van Ostadestraat 318",location:"4.9005937,52.3535972",src:"Amsterdam Stadsarchief",getlost:37,useas:"game"},{imgid:8,fotolink:"https://images.memorix.nl/ams/thumb/250x250/fe18d62d-52f6-dc31-3108-1f7d1b637f6f.jpg",fotolinkM:"testcamera",estyear:"1982",estaddress:"Van Ostadestraat",address:"Van Ostadestraat 233B",location:"4.8987005,52.3532503",src:"Amsterdam Stadsarchief",getlost:37,useas:"game"},{imgid:12,fotolink:"https://images.memorix.nl/ams/thumb/250x250/cd09c2d3-b613-6da1-3b9d-e83a48733533.jpg",fotolinkM:"testcamera",estyear:"1990",estaddress:"Sint Willibrordusstraat",address:"Sint Willibrordusstraat 45-51",location:"4.902578,52.3545568",src:"Amsterdam Stadsarchief",getlost:37,useas:"game"},{imgid:17,fotolink:"https://images.memorix.nl/ams/thumb/250x250/17c40be5-5114-cd5a-40d6-01037eef779e.jpg",fotolinkM:"testcamera",estyear:"2013",estaddress:"Sint Willibrordusstraat",address:"Sint Willibrordusstraat 103",location:"4.9005766,52.3540134",src:"Amsterdam Stadsarchief",getlost:37,useas:"game"},{imgid:18,fotolink:"https://images.memorix.nl/ams/thumb/250x250/c4dc22f6-fcf2-f0b2-3967-7d7a9dd899e1.jpg",fotolinkM:"testcamera",estyear:"1960",estaddress:"Tweede Sweelinckstraat",address:"Tweede Sweelinckstraat 7",location:"4.8995093,52.3537571",src:"Amsterdam Stadsarchief",getlost:37,useas:"game"},{imgid:19,fotolink:"https://images.memorix.nl/ams/thumb/250x250/4cdea208-6584-e368-677c-1c1ca23884cf.jpg",fotolinkM:"testcamera",estyear:"1929",estaddress:"Sint Willibrordusstraat",address:"Sint Willibrordusstraat 41-43",location:"4.9028828,52.3546504",src:"Amsterdam Stadsarchief",getlost:37,useas:"game"},{imgid:20,fotolink:"https://i.ibb.co/s67jpwC/38411898-1471457126332115-5705350490611515392-n.jpg",fotolinkM:"testcamera",estyear:"1920",estaddress:"Tweede van de Helststraat",address:"Oranjekerk, Tvd. Helststraat",location:"4.8945015,52.351891",src:"Postcards from De Pijp",getlost:22,useas:"game"},{imgid:22,fotolink:"https://i.ibb.co/BsXkK2m/sarphatistraat1930.jpg",fotolinkM:"testcamera",estyear:"1930",estaddress:"Tweede van de Helststraat",address:"Tvd. Helststraat (f. Tvd Helstraat, Sarphatistraat)",location:"4.8946854,52.3530512",src:"Postcards from De Pijp",getlost:1,useas:"expand"},{imgid:23,fotolink:"https://i.ibb.co/Wv9cpSZ/46121199-1570939006383926-7229724539620425728-o.jpg",fotolinkM:"testcamera",estyear:"1930",estaddress:"Tweede van der Helststraat",address:"Tvd. Helststraat (f. Tvd Helstraat)",location:"4.8944401,52.3534401",src:"Postcards from De Pijp",getlost:1,useas:"hist"},{imgid:24,fotolink:"https://i.ibb.co/v46qWNp/38134332-1466032990207862-7692404727715201024-o.jpg",fotolinkM:"testcamera",estyear:"1904",estaddress:"Eerste van der Helststraat",address:"Eerste van der Helststraat",location:"4.89377,52.3545782",src:"Postcards from De Pijp",getlost:1,useas:"show"},{imgid:25,fotolink:"https://i.ibb.co/XxtJNV8/37791962-1460631477414680-3838707156299808768-o.jpg",fotolinkM:"testcamera",estyear:"1896",estaddress:"Sarphatipark",address:"Sarphati Monument",location:"4.8957276,52.3545591",src:"Postcards from De Pijp",getlost:1,useas:"show"},{imgid:26,fotolink:"https://i.ibb.co/GW0JMLL/36834703-1438786799599148-3308086413852934144-n.jpg",fotolinkM:"testcamera",estyear:"1903",estaddress:"Sarphatipark",address:"Sarphatipark 97",location:"4.8981705,52.3555075",src:"Postcards from De Pijp",getlost:1,useas:"hist"},{imgid:29,fotolink:"https://i.ibb.co/rQF7X70/73524538-1933956336748856-7694439992457691136-o.jpg",fotolinkM:"testcamera",estyear:"1903",estaddress:"Sarphatipark",address:"Sarphatipark ooste brug",location:"4.8981105,52.3547897",src:"Postcards from De Pijp",getlost:1,useas:"show"},{imgid:30,fotolink:"https://i.ibb.co/GpgX6kk/71673398-1884247855053038-4462119632089645056-o.jpg",fotolinkM:"testcamera",estyear:"1926",estaddress:"Sarphatipark",address:"Sarphatipark",location:"4.8980505,52.3554075",src:"Postcards from De Pijp",getlost:1,useas:"show"},{imgid:31,fotolink:"https://i.ibb.co/xSw6TvC/96782129-2146377135506774-303116668375138304-o.jpg",fotolinkM:"testcamera",estyear:"1896",estaddress:"Sarphatipark",address:"Sarphati Monument",location:"4.8955741,52.3544473",src:"Postcards from De Pijp",getlost:1,useas:"hist"},{imgid:32,fotolink:"https://i.ibb.co/Pz92dT8/92124460-2107041329440355-4292891692924665856-o.jpg",fotolinkM:"testcamera",estyear:"1926",estaddress:"Sarphatipark",address:"Sarphatipark",location:"4.8960476,52.3543612",src:"Postcards from De Pijp",getlost:1,useas:"show"},{imgid:33,fotolink:"https://i.ibb.co/rbFLBGk/78590459-1956572267820596-5756755219010551808-o.jpg",fotolinkM:"testcamera",estyear:"1909",estaddress:"Sarphatipark",address:"Sarphatipark",location:"4.898305,52.3546897",src:"Postcards from De Pijp",getlost:1,useas:"show"},{imgid:34,fotolink:"https://i.ibb.co/rG7LnsP/edb5d2e6cf9eef2e3662a6a19449d82c-Jacob-Olie.jpg",fotolinkM:"testcamera",estyear:"1896",estaddress:"Sarphatipark",address:"Sarphatipark",location:"4.8957996,52.35377000",src:"Pinterest",getlost:1,useas:"hist"},{imgid:35,fotolink:"https://i.ibb.co/Dg8YwbT/1001004005311508-2-sarphatipark-Heida-Boek.jpg",fotolinkM:"testcamera",estyear:"1930?",estaddress:"Sarphatipark",address:"Sarphatipark",location:"4.897305,52.3546897",src:"Sarphatipark (Heida Boek)",getlost:1,useas:"show"},{imgid:36,fotolink:"https://i.ibb.co/TTbMzVV/moedersmetkinderenwagensarphatipark.jpg",fotolinkM:"testcamera",estyear:"1960?",estaddress:"Sarphatipark",address:"Sarphatipark",location:"4.897905,52.354400",src:"Amsterdam Stadsarchief",getlost:1,useas:"show"},{imgid:37,fotolink:"https://i.ibb.co/417W2QV/96686857-2147572285387259-1397301557451554816-o.jpg",fotolinkM:"testcamera",estyear:"1901",estaddress:"Sarphatipark",address:"Sarphatipark",location:"4.8990891,52.354050",src:"Postcards from De Pijp",getlost:1,useas:"expand"},{imgid:38,fotolink:"https://i.ibb.co/k6yNFdS/26991770-1288629217948241-7779623053001071435-n.jpg",fotolinkM:"testcamera",estyear:"1901",estaddress:"Sarphatipark",address:"Sarphatipark",location:"4.8992391,52.354100",src:"Postcards from De Pijp",getlost:1,useas:"show"},{imgid:39,fotolink:"https://i.ibb.co/10x2WQz/81037459-1998157360328753-7887221420604784640-n.jpg",fotolinkM:"testcamera",estyear:"1901",estaddress:"Sarphatipark",address:"Sarphatipark",location:"4.8992391,52.3542381",src:"Postcards from De Pijp",getlost:1,useas:"hist"},{imgid:40,fotolink:"https://i.ibb.co/JjLYJdJ/20645281-1142090705935427-2804930796581003892-o.jpg",fotolinkM:"testcamera",estyear:"1901",estaddress:"Sarphatipark",address:"Sarphatipark",location:"4.89700,52.354580",src:"Postcards from De Pijp",getlost:1,useas:"show"}]),S=_.map((function(t,e){return{itemid:e,imgid:t.imgid,picture:t.fotolink,year:t.estyear,getlost:t.getlost,useas:t.useas,lng:Number(t.location.split(",")[0]),lat:Number(t.location.split(",")[1]),street:"null"===t.address?t.estaddress.toLowerCase():t.address.toLowerCase()}}),[]),M={output:S},j=0;j<M.output.length;j++)M.output[j].currentclass="'btn btn-outline-info btn-street'",M.output[j].sel=!1;var P={data:function(){return{cl1:"'btn btn-outline-info btn-street'",center:window.EventBus.depijpcenter,locations:M.output,transLocation:[],search:"",racking:!1,getlost:1}},mounted:function(){this.locations,this.filteredLocations},computed:{getlostC:function(){return parseInt(window.EventBus.getlost)},filteredLocationsLost:function(){var t,e=this;return console.log(444),this.locations.length?(t=this.locations.filter((function(t){if(window.EventBus.$on("yeslost",(function(t){this.getlost=t.where,console.log(2222,this.getlost)})),console.log(1111,window.EventBus.getlost,t.getlost,e.getlost),1!=t.getlost&&t.getlost==parseInt(window.EventBus.getlost))return[t.street+" "+t.year][0].toLowerCase().includes(e.search.toLowerCase())})),t):[]},filteredLocations:function(){var t,e=this;return this.locations.length?(t=this.locations.filter((function(t){var a=""===e.search||" "===e.search;if(1==t.getlost)return!!a||[t.street+" "+t.year][0].toLowerCase().includes(e.search.toLowerCase())})),t):[]}},methods:(s={cltMarker:function(t){var e=t.target.value;document.getElementById("btnaddmark_"+e)&&(document.getElementById("btnaddmark_"+e).classList.contains("btn-outline-info")?this.locations[e].sel=!0:document.getElementById("btnaddmark_"+e).classList.contains("btn-outline-secondary")&&(this.locations[e].sel=!1),window.EventBus.$emit("clt-marker",this.locations[e]))},idConcat:function(t){return"btnaddmark_"+t},closeNav:function(){document.getElementById("mySidenav").style.width="0px",document.getElementById("menu-open-test").style.marginLeft="0px",document.getElementById("menu-open-test").style.visibility="visible",this.$router.push({name:"home"})},selAllMarkers:function(){for(var t=0;t<this.filteredLocations.length;t++){var e=this.filteredLocations[t].itemid;if(this.locations[e].hasOwnProperty("sel")&&!1===this.locations[e].sel||!this.locations[e].hasOwnProperty("sel")){var a={target:{value:e}};this.cltMarker(a)}}},clearAllMarkers:function(){for(var t=this,e=function(e){var a=t.locations.filter((function(a){return a.itemid===t.filteredLocations[e].itemid}))[0];if(a.hasOwnProperty("sel")&&!0===a.sel){var s={target:{value:a.itemid}};t.cltMarker(s)}},a=0;a<this.filteredLocations.length;a++)e(a)}},Object(w["a"])(s,"cltMarker",(function(t){var e=t.target.value;document.getElementById("btnaddmark_"+e)&&(document.getElementById("btnaddmark_"+e).classList.contains("btn-outline-info")?this.locations[e].sel=!0:document.getElementById("btnaddmark_"+e).classList.contains("btn-outline-secondary")&&(this.locations[e].sel=!1),window.EventBus.$emit("clt-marker",this.locations[e]))})),Object(w["a"])(s,"trackingAllowed",(function(){0==this.tracking?this.tracking=!0:this.tracking=!1,window.EventBus.$emit("tracking",{tr:this.tracking})})),Object(w["a"])(s,"openModal",(function(t){var e=document.getElementById("myModal"),a=document.getElementById(this.idConcat(t.itemid+"_img")),s=document.getElementById("modal-title"),i=document.getElementById("img01");e.style.display="block",i.src=a.src,s.innerHTML=t.street+", "+t.year,e.classList.add("show")})),Object(w["a"])(s,"closeModal",(function(){var t=document.getElementById("myModal");t.classList.remove("show"),t.style.display="none"})),s)},C=P,T=Object(c["a"])(C,y,k,!1,null,null,null),x=T.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{margin:"10px 20px"},attrs:{id:"about"}},[s("div",[s("h4",{staticStyle:{margin:"30px 20px"}},[s("u",[t._v("About VerPijp")])]),s("h5",[s("u",[s("i",[t._v("What?")])])]),s("p",[t._v("This proof-of-concept sketches a browsing alternative through collections of historical images of De Pijp, geocoded at the approximated locations where the images were taken. Current source is "),s("i",[t._v("Stadarchief Amsterdam")]),t._v(" API. The resulting demo site is part of a broader personal project: "),s("i",[t._v("De Pijp Experiment")]),t._v(" - proof-of-concept sites focused on solutions/alternatives for De Pijp neighborhood by De Pijp neighbors.")]),s("h5",[s("u",[s("i",[t._v("Why?")])])]),s("p",[t._v("People trend to create stronger bonds to places for which they know its history and its subculture. The goal of this concept is to help neighbors and visitors to create that bond to De Pijp neighbourhood through old images. It takes inspiration from diferent directions: "),s("ul",[s("li",[t._v("My kid, who for some time showed an special interest in history")]),s("li",[t._v("Some enthusiastic neighbors who have been sharing with me details of the history of De Pijp and Amsterdam")]),s("li",[t._v('Previous initiatives: www.oldsf.org and its Amsterdam clone, www.oudams.nl; London Museum\'s StreetMuseum and its Dutch counterpart, Street Museum NL (onh.nl); "Verbeelding aan de Amstel" Exhibition; others')])])]),s("h5",[s("u",[s("i",[t._v("For Who?")])])]),s("p",[t._v("The project tests a light tool destinated to the general public, no matter the background, who want to inmerse into the historical context of the neighborhood. It could be also thought as a tool for students and those in the educative sector.")]),s("h5",[s("u",[s("i",[t._v("Who?")])])]),s("img",{attrs:{id:"myphoto",src:a("009a")}}),s("p",[t._v('Hi. My name is Evaristo and I have been learning to code during my free time. Enjoy problem-solving and trouble-shooting. I also have a passion for data and data-driven projects. I speak Python, Javascript, SQL, and a bit of other foreign languages. "Simplicity" and "Social" drive me in.')])])])}],B={},L=Object(c["a"])(B,E,I,!1,null,null,null),A=L.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"vid-outerContainer"}},[a("video",{staticClass:"vid-containers",attrs:{id:"videostream",type:"video/webm"}}),a("div",{staticClass:"vid-containers",attrs:{id:"video-overlay"}},[a("div",{staticClass:"vid-sidenav",attrs:{id:"vid-mySidenav"}},[a("a",{staticClass:"vid-closemenu",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.closeNav()}}},[t._v("×")]),a("a",{attrs:{href:"#"}},[t._v("Photo Story")]),a("a",{attrs:{href:"#"}},[t._v("Tutorial")]),a("a",{attrs:{href:"./#/gallery"},on:{click:function(e){return t.gettingLost()}}},[t._v('Want to get "lost"?')]),a("a",{attrs:{href:"./#/gallery"}},[t._v("Go To Map")])]),a("span",{staticStyle:{"font-size":"30px",cursor:"pointer"},attrs:{id:"vid-openmenu"},on:{click:function(e){return t.openNav()}}},[t._v("☰")]),a("div",{style:{transform:"scale("+t.scale+")"}},[a("vue-draggable-resizable",{attrs:{h:t.height_comp,scale:t.scale,x:t.x,y:t.y}},[a("img",{staticClass:"w3-round",attrs:{src:t.newpicture,alt:"OldSarphati"}})])],1),a("div",{attrs:{id:"toolbar"}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.scale,expression:"scale",modifiers:{number:!0}}],attrs:{type:"range",min:"0.5",max:"3",step:"0.1"},domProps:{value:t.scale},on:{__r:function(e){t.scale=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),a("label",[t._v("Scale")])]),a("button",{attrs:{id:"vid-capture-button"},on:{click:function(e){return t.captureWebCamButton()}}},[a("i",{staticClass:"fas fa-camera-retro fa-3x",attrs:{id:"yes-camera"}}),t._m(0)]),a("button",{attrs:{id:"compass"},on:{click:function(e){return t.captureDirectionButton()}}},[a("i",{staticClass:"fas fa-compass fa-3x"})])])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"fa-stack fa-lg",attrs:{id:"no-camera"}},[a("i",{staticClass:"fa fa-camera-retro fa-stack-1x fa-2x"}),a("i",{staticClass:"fa fa-ban fa-stack-2x",staticStyle:{color:"#d9534f"}})])}],D=(a("4160"),a("b65f"),a("466d"),a("159b"),{data:function(){return{scale:1,x:0,y:0,videoplay:!1,video:"",webcamplay:!1,webcamp:"",webcampconstrains:{video:!0},devorienteventName:"",compassicon:"",compassactive:!1,bodyborder:"",pitem:this.$route.query.q,vd:M.output}},computed:{height_comp:function(){return Number(localStorage.getItem("locstoheight"))+20},newitem:function(){return this.$route.query.q},newpicture:function(){return this.vd[this.newitem]?this.vd[this.newitem].picture:""}},watch:{pitem:function(t,e){console.log(e,t)}},created:function(){document.querySelector(".w3-round")&&localStorage.setItem("locstoheight",document.querySelector(".w3-round").height)},mounted:function(){this.x=.5*(window.innerWidth-document.querySelector(".w3-round").width),this.y=.5*(window.innerHeight+document.querySelector(".w3-round").height)},methods:{openNav:function(){document.getElementById("vid-mySidenav").style.width="250px",document.getElementById("vid-openmenu").style.zIndex="-1"},closeNav:function(){document.getElementById("vid-mySidenav").style.width="0",document.getElementById("vid-openmenu").style.zIndex="1"},detectmob:function(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))},captureWebCamButton:function(){var t=this,e=this.detectmob();function a(t){this.webcamp=document.querySelector("video"),this.webcamp.srcObject=t,document.querySelector("#vid-capture-button").style.color="red",this.webcamplay=!0;var e=this;this.webcamp.onloadedmetadata=function(t){e.webcamp.play()}}function s(t){alert("Error: "+t)}this.webcamp=document.getElementById("videostream"),!1===this.webcamplay?e?navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"environment"}},audio:!1}).then(a.bind(this)).catch(s):e||navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(a.bind(this)).catch(s):this.webcamp.srcObject.getTracks().forEach((function(e){e.stop(),t.webcam=document.querySelector("video"),t.webcam.srcObject=null,t.webcamplay=!1,document.querySelector("#vid-capture-button").style.color="black"}))},orientationVarInit:function(){this.bodyborder=document.querySelector("#vid-outerContainer"),this.compassicon=document.querySelector("#compass"),"ondeviceorientationabsolute"in window?this.devorienteventName="deviceorientationabsolute":"ondeviceorientation"in window?this.devorienteventName="deviceorientation":(this.devorienteventName="",console.error("Compass not supported")),"onorientation"in window||window},captureDirectionButton:function(){function t(t){var e=t.alpha,a=t.beta,s=t.gamma;t.absolute&&t.absolute,Math.PI;e&&a&&s||(e=a=s=0),this.bodyborder.style.borderColor=cscale[Math.trunc(10*Math.cos(Math.abs(e)*Math.PI/180))>9?9:Math.round(10*Math.cos(Math.abs(e)*Math.PI/180))]}this.compassactive?(this.orientationVarInit(),this.bodyborder.style.borderStyle="none",this.bodyborder.style.borderWidth="0px",window.removeEventListener(this.devorienteventName,t.bind(this)),this.compassicon.style.color="black"):(this.orientationVarInit(),this.bodyborder.style.borderStyle="solid",this.bodyborder.style.borderWidth="15px",window.addEventListener(this.devorienteventName,t.bind(this),!0),this.compassicon.style.color="red"),this.compassactive=!this.compassactive},gettingLost:function(){window.EventBus.$emit("yeslost",{where:this.$route.query.gl}),console.log(333,window.EventBus.getlost),this.$router.push("/gallery")}}}),W=D,N=(a("e4bb"),Object(c["a"])(W,O,$,!1,null,null,null)),q=N.exports,H=[{path:"",name:"home",component:b,children:[{path:"gallery",name:"maingallery",component:x},{path:"about",name:"mainabout",component:A}]},{path:"/testcamera",name:"camera",component:q},{path:"*",name:"404",redirect:""}],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal fade",staticStyle:{"background-color":"rgba(0, 0, 0, 0.6)"},attrs:{id:"myModal_map"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered modal-sm"},[a("div",{staticClass:"modal-content mb-0 p-0",staticStyle:{"background-color":"rgba(255, 255, 255, 0.6)"}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"container-fluid"},[a("button",{staticClass:"btn btn-warning close-modal",attrs:{type:"button"},on:{click:function(e){return t.closeModal()}}},[t._v("×")]),a("img",{staticClass:"img-fluid",staticStyle:{height:"100%",width:"100%"},attrs:{id:"img01_map"}})])]),t._m(0)])])]),a("div",{staticClass:"h-250",attrs:{id:"map"}})])},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("h5",{staticStyle:{color:"blue"},attrs:{id:"modal-title_map"}})])}],F=(a("99af"),a("b64b"),{data:[{featureType:"administrative",elementType:"all",stylers:[{saturation:"-100"}]},{featureType:"administrative.province",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"all",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",elementType:"all",stylers:[{saturation:-100},{lightness:"50"},{visibility:"simplified"}]},{featureType:"poi.attraction",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.government",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.medical",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.school",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.sports_complex",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:"-100"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"all",stylers:[{lightness:"30"}]},{featureType:"road.local",elementType:"all",stylers:[{lightness:"40"}]},{featureType:"transit",elementType:"all",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]},{featureType:"water",elementType:"labels",stylers:[{lightness:-25},{saturation:-100}]}]}),G={props:{centerlat:{type:Number,default:function(){return window.EventBus.depijpcenter.lat}},centerlng:{type:Number,default:function(){return window.EventBus.depijpcenter.lng}},zoom:{type:Number,default:function(){return 17}},mapstyle:null},created:function(){var t=this;window.EventBus.$on("clear-all-markers",(function(){t.clearAllMarkers()})),window.EventBus.$on("clt-marker",(function(e){if(!1===e.sel)t.clearMarker(e);else if(!0===e.sel){var a=t.makeMarker(e);t.$markers[e.itemid]=a}})),window.EventBus.$on("tracking",(function(e){!0===e.tr?t.startTrackPosition():t.stopTrackPosition()}))},mounted:function(){var t=this;this.$markers={},this.$mymarker={};var e={lat:0,lng:0,street:""};dt.then((function(){t.initMap(),t.$mymarker=t.makeMarker(e,!0)})).catch((function(t){console.log("RESULT loading GM API",t)})),i["a"].nextTick().then((function(){t.clearMarker()}))},data:function(){return{posWatchID:null}},methods:{initMap:function(){this.$map=new window.google.maps.Map(document.getElementById("map"),{center:new window.google.maps.LatLng(this.centerlat,this.centerlng),zoom:this.zoom,styles:F.data})},makeInfoWindow:function(t){window.openModal_map=function(t){var e=document.getElementById("myModal_map"),a=document.getElementById("img01_map");e.style.display="block",a.src=t,e.classList.add("show")};var e='\n          <div id="content">\n              <div id="siteNotice"></div>\n              <table>\n                  <tr><td><button onclick="openModal_map(\''.concat(t.picture,'\')"><strong>foto</strong></button></td></tr>\n                  <tr><td><a href="/#/testcamera?q=').concat(t.itemid,"&gl=").concat(t.imgid,'"><strong>foto overlap (experimental)</strong></a></td></tr>\n                  <tr><td><strong>year</strong></td><td>').concat(t.year,"</td></tr>\n                  <tr><td><strong>est.address</strong></td><td>").concat(t.street,'</td></tr>\n                  <tr><td><strong>bron</strong></td><td><a href="https://www.facebook.com/PrentenVanWeleerAmsterdamDePijp/">Postcards from de Pijp</a></td></tr>\n              </table>\n          <div>\n          ');return new window.google.maps.InfoWindow({content:e})},openModal:function(t){var e=document.getElementById("myModal_map"),a=document.getElementById("img01_map");e.style.display="block",a.src=t,e.classList.add("show")},closeModal:function(){var t=document.getElementById("myModal_map");t.classList.remove("show"),t.style.display="none"},iconType:function(t){return"show"==t?"http://icons.iconarchive.com/icons/designbolts/free-multimedia/32/Dslr-Camera-icon.png":"hist"==t?"http://icons.iconarchive.com/icons/icons8/ios7/32/Cinema-History-icon.png":"game"==t?"http://icons.iconarchive.com/icons/thegirltyler/brand-camp/32/Search-icon.png":"expand"==t?"http://icons.iconarchive.com/icons/icons8/ios7/32/Editing-Expand-icon.png":void 0},makeMarker:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=this,s=new window.google.maps.Marker({position:new window.google.maps.LatLng(t.lat,t.lng),icon:e?{path:google.maps.SymbolPath.CIRCLE,scale:7,fillColor:"#00CCFF",fillOpacity:.8,strokeWeight:1}:this.iconType(t.useas),map:a.$map}),i=a.makeInfoWindow(t);return s.addListener("click",(function(){i.open(a.$map,this)})),s},clearMarker:function(t){this.$markers[t.itemid].setMap(null)},clearAllMarkers:function(){for(var t=Object.keys(this.$markers),e=0;e<t.length;e++)this.$markers[t[e]].setMap(null),document.getElementById("btnaddmark_"+t[e]).classList.remove("btn-outline-secondary"),document.getElementById("btnaddmark_"+t[e]).classList.add("btn-outline-info")},startTrackPosition:function(){navigator.geolocation?this.posWatchID=navigator.geolocation.watchPosition(this.successPosition,this.failurePosition,{enableHighAccuracy:!0,timeout:15e3,maximumAge:1e3}):document.getElementById("resulttest").innerHTML="Your browser does not support Geolocation API!!!"},stopTrackPosition:function(){this.posWatchID&&(navigator.geolocation.clearWatch(this.posWatchID),this.$mymarker.setPosition({lat:0,lng:0}))},successPosition:function(t){this.$mymarker.setPosition({lat:t.coords.latitude,lng:t.coords.longitude})},failurePosition:function(t){alert("Error Code: "+t.code+" Error Message: "+t.message)}}},R=G,J=(a("543d"),Object(c["a"])(R,V,z,!1,null,"6615a1cf",null)),Q=J.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidenav"},[a("div",{staticClass:"childsidenav",attrs:{id:"mySidenav"}},[a("ec-nav-main-sidebar"),t._v(" "),a("router-view")],1),t._v(" "),a("span",{staticClass:"childsidenav",staticStyle:{display:"inline-block","font-size":"30px",cursor:"pointer"},attrs:{id:"menu-open-test"},on:{click:function(e){return t.openNav()}}},[t._v("☰"),a("span",{staticStyle:{color:"#BFACAC"}},[t._v("_")]),t._v("VerPijp")])])},X=[],Y={methods:{openNav:function(){document.getElementById("mySidenav").style.width="100%",document.getElementById("menu-open-test").style.marginLeft="100%",document.getElementById("menu-open-test").style.visibility="hidden",this.$router.push({path:"/gallery"})}}},Z=Y,K=(a("bda1"),Object(c["a"])(Z,U,X,!1,null,null,null)),tt=K.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"navbar-area"}},[a("div",{attrs:{id:"sidebar-data"}},[a("div",[a("h3",{staticClass:"header-brand"},[t._v("VerPijp")]),a("ul",{staticClass:"nav nav-pills"},[a("router-link",{attrs:{to:"gallery",tag:"li","active-class":"active"}},[a("a",[t._v("Gallery")])]),a("router-link",{attrs:{to:"about",tag:"li","active-class":"active"}},[a("a",[t._v("About")])])],1)])])])},at=[],st={},it=Object(c["a"])(st,et,at,!1,null,null,null),ot=it.exports,nt=a("fb19"),rt=a.n(nt);a.d(e,"loadedGoogleMapsAPI",(function(){return dt})),i["a"].use(m["a"]);var lt=new m["a"]({routes:H});i["a"].component("ecMapComponent",Q),i["a"].component("ecMainSidebar",tt),i["a"].component("ecPhotoGallery",x),i["a"].component("ecNavMainSidebar",ot),i["a"].component("ecGeneralAbout",A),i["a"].component("ecCamInterf",q),i["a"].component("VueDraggableResizable",rt.a);var ct=document.documentElement;ct.RequestFullscreen?ct.RequestFullscreen():ct.mozRequestFullScreen?ct.mozRequestFullScreen():ct.msRequestFullscreen?ct.msRequestFullscreen():ct.webkitRequestFullscreen&&ct.webkitRequestFullscreen(),window.EventBus=new i["a"]({data:function(){return{depijpcenter:{lat:52.3542,lng:4.896411},getlost:1}}});var dt=new Promise((function(t,e){document,window.GoogleMapsInit=t;var a=document.createElement("script");a.setAttribute("src","https://maps.googleapis.com/maps/api/js?key=AIzaSyBQtJTgRmPAOo0p7m4IeqlhcQgWiD1bdZ4&callback=GoogleMapsInit"),document.body.appendChild(a)}));new i["a"]({router:lt,el:"#app",render:function(t){return t(u)}})},6113:function(t,e,a){},"81fa":function(t,e,a){},"8f65":function(t,e,a){},bda1:function(t,e,a){"use strict";var s=a("81fa"),i=a.n(s);i.a},cccb:function(t,e,a){"use strict";var s=a("6113"),i=a.n(s);i.a},e4bb:function(t,e,a){"use strict";var s=a("0c81"),i=a.n(s);i.a}});
//# sourceMappingURL=app.0cecab3f.js.map