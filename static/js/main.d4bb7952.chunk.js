(this["webpackJsonpadp-project"]=this["webpackJsonpadp-project"]||[]).push([[0],Array(33).concat([function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/uk.f656668b.svg"},function(e,t,a){e.exports=a.p+"static/media/jp.f19ae754.svg"},function(e,t,a){e.exports=a.p+"static/media/ch.14039616.svg"},function(e,t,a){e.exports=a.p+"static/media/adp.b709add2.svg"},,,function(e,t,a){e.exports=a.p+"static/media/adp-white.9e692ddf.svg"},function(e,t,a){e.exports=a.p+"static/media/ig.1d6a11bf.svg"},function(e,t,a){e.exports=a.p+"static/media/youtube.3fdd466c.svg"},function(e,t,a){e.exports=a.p+"static/media/fb.58532549.svg"},function(e,t,a){e.exports=a.p+"static/media/twitter.d02e8f4e.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.9c5a10ea.svg"},function(e,t,a){e.exports=a.p+"static/media/automotive.ab6c59b6.svg"},function(e,t,a){e.exports=a.p+"static/media/cgoods.b0fdf356.svg"},function(e,t,a){e.exports=a.p+"static/media/electrical.ab7726c5.svg"},function(e,t,a){e.exports=a.p+"static/media/healthcare.2af6dd49.svg"},function(e,t,a){e.exports=a.p+"static/media/chemical.151fe17a.svg"},function(e,t,a){e.exports=a.p+"static/media/aerospace.f844374c.svg"},function(e,t,a){e.exports=a.p+"static/media/energy.87783b23.svg"},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){e.exports=a(157)},,,,,function(e,t,a){},,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(18),l=a.n(r),s=(a(80),a(81),a(31)),o=a(49),i=a(3),m=a(53);s.a.use(m.a).use(o.a).use(i.a).init({fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},react:{useSuspense:!0,wait:!0},backend:{loadPath:"".concat("/adp-project","/locales/{{lng}}/{{ns}}.json")},load:"unspecific"});s.a,a(91),a(92);var p=a(9),u=(a(33),a(160)),d=a(161),E=a(162),v=a(163),f=a(164),g=a(159),b=(a(93),a(171));function y(){var e=Object(c.useRef)(),t=Object(c.useState)(!1),a=Object(p.a)(t,2),r=a[0],l=a[1];return Object(c.useEffect)((function(){var t=e.current,a="",c=[],n=0;function r(e,t){if(e.length>0){var a=Object(p.a)(e[t],1)[0];a.scrollIntoView(),a.focus(),e.length-1>t?t+=1:t=0}return t}function l(){c.forEach((function(e){Object(p.a)(e,2)[1].forEach((function(e){var t=e.paragraph,a=e.originalHTML;t.innerHTML=a}))})),c=[],n=0}function s(e){if("Enter"===e.key){var s=t.value.trim();""===s?(a="",l()):s!==a?(a=s,l(),c=function(e){var t=new RegExp(e,"gi"),a=[];return document.querySelectorAll(".page-section").forEach((function(e){var c=[];e.querySelectorAll("p").forEach((function(e){var a,n=e.innerText,r=e.innerHTML;if(null!=(a=t.exec(n))){var l='<span style="background-color:#FFFF00">'.concat(a[0],"</span>"),s=r.replace(t,l),o=e.innerHTML;e.innerHTML=s,c.push({paragraph:e,originalHTML:o})}})),c.length>0&&a.push([e,c])})),a}(a),n=r(c,n)):s===a&&(n=r(c,n))}}return t.addEventListener("keypress",s),function(){t.removeEventListener("keypress",s)}}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{ref:e,type:"text",className:"nav-menu__search-input",placeholder:" ",id:"search-bar"}),n.a.createElement(b.a,{placement:"bottom",isOpen:r,target:"search-bar",toggle:function(){return l(!r)}},"Search your text here"))}a(119);var j=a(55),x=a.n(j),T=a(56),_=a.n(T),h=a(57),N=a.n(h),k=[{id:"en",display:x.a,tooltip:"English"},{id:"jp",display:_.a,tooltip:"Japanese"},{id:"ch",display:N.a,tooltip:"Chinese"}];function O(){var e=Object(i.b)().i18n,t=function(t){var a=t.lang,r=Object(c.useState)(!1),l=Object(p.a)(r,2),s=l[0],o=l[1];return n.a.createElement("button",{key:a.id,onClick:function(){return function(t){e.changeLanguage(t)}(a.id)},id:a.tooltip,className:a.id},n.a.createElement("img",{src:a.display,alt:a.id}),n.a.createElement(b.a,{placement:"bottom",isOpen:s,target:a.tooltip,toggle:function(){return o(!s)}},a.tooltip))};return n.a.createElement("div",{className:"nav-menu__lang"},k.map((function(e,a){return n.a.createElement(t,{lang:e,key:a})})))}var A=a(58),P=a.n(A);function w(){var e=Object(i.b)().t;return[e("Nav.about us"),e("Nav.principles"),e("Nav.industries & applications"),e("Nav.products"),e("Nav.services"),e("Nav.our presence"),e("Nav.contact us")].map((function(e){return n.a.createElement(g.a,{key:e,className:"nav-menu text"},n.a.createElement("a",{href:"#".concat(e)},e))}))}function C(){var e=Object(c.useState)(!1),t=Object(p.a)(e,2),a=t[0],r=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{fixed:"top"},n.a.createElement("div",{className:"container"},n.a.createElement(d.a,{href:"#"},n.a.createElement("img",{src:P.a,alt:"ADP"})),n.a.createElement(E.a,{className:"d-block d-lg-none",onClick:function(){return r(!a)}}),n.a.createElement(v.a,{isOpen:a,navbar:!0,className:"nav-menu__collapse"},n.a.createElement(f.a,{className:"main-nav"},n.a.createElement(w,null),n.a.createElement(g.a,{className:"nav-menu search-lang"},n.a.createElement(O,null),n.a.createElement(y,null)))))))}a(120);var I=a(59),F=a.n(I);a(140);function S(){return n.a.createElement("div",{className:"map-marker"})}var H={styles:[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}]};function L(e){var t=e.coordinates,a=e.target,c=e.zoom,r=t.locations.map((function(e,t){return n.a.createElement(S,{lat:e.lat,lng:e.lng,key:t})}));return n.a.createElement("div",{style:{height:"100%",width:"100%"}},n.a.createElement(F.a,{defaultCenter:t.center,center:a,zoom:c,options:H},r))}var G=a(165),R=a(166),U=a(167),z={center:{lat:7.440793,lng:109.385669},zoom:3.7,locations:[{name:"Jakarta",lat:-6.1882567,lng:106.7365006},{name:"Batam",lat:1.066464,lng:104.0344033},{name:"Ho Chi Minh",lat:10.7546664,lng:106.4150337},{name:"Bangkok",lat:13.7245601,lng:100.4930247}]};function M(e){var t=e.setTarget,a=e.setZoom,r=Object(c.useState)(),l=Object(p.a)(r,2),s=l[0],o=l[1],m=Object(i.b)().t;return z.locations.map((function(e,c){var r={lat:e.lat,lng:e.lng};return n.a.createElement("div",{key:c,className:"locations"},n.a.createElement(G.a,{onClick:function(){return function(e,c){e!==s?(o(e),t(c),a(17)):(o(),t(z.center),a(z.zoom))}(c,r)}},m("Our Presence.".concat(e.name))),n.a.createElement(v.a,{isOpen:c===s},n.a.createElement(R.a,null,n.a.createElement(U.a,null,n.a.createElement("p",null,m("Our Presence.Addresses.".concat(e.name,".name"))),n.a.createElement("p",null,m("Our Presence.Addresses.".concat(e.name,".office"))),n.a.createElement("p",null,m("Our Presence.Addresses.".concat(e.name,".street"))),n.a.createElement("p",null,m("Our Presence.Addresses.".concat(e.name,".district"))),n.a.createElement("p",null,m("Our Presence.Addresses.".concat(e.name,".phone"))),n.a.createElement("p",null,m("Our Presence.Addresses.".concat(e.name,".fax")))))))}))}function D(){var e=Object(c.useState)(),t=Object(p.a)(e,2),a=t[0],r=t[1],l=Object(c.useState)(z.zoom),s=Object(p.a)(l,2),o=s[0],m=s[1],u=Object(i.b)().t;return n.a.createElement("section",{className:"page-section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"our-presence",id:encodeURI(u("Nav.our presence"))},n.a.createElement("div",{className:"col-12 col-md-5 article"},n.a.createElement("h2",null,u("Our Presence.title")),n.a.createElement(M,{setTarget:function(e){return r(e)},setZoom:function(e){return m(e)}})),n.a.createElement("div",{className:"col-12 col-md-5 album"},n.a.createElement("div",{className:"map"},n.a.createElement(L,{coordinates:z,target:a,zoom:o}))))))}function B(){var e=Object(i.b)().t,t=[1].map((function(t){return n.a.createElement("div",{key:t,className:"col-12",style:{padding:"unset"}},n.a.createElement("h2",null,e("Lipsum.title")),n.a.createElement("p",null,e("Lipsum.content")))}));return n.a.createElement("section",{className:"page-section",style:{backgroundColor:"black",opacity:".7",color:"#fff"}},n.a.createElement("div",{className:"container"},t))}var J=a(60),V=a(168),q=a(169),W=a(170),Z=(a(141),[{src:"".concat("/adp-project","/pictures/carousel/c_blue.jpg"),altText:"Slide 1",caption:"Flexible"},{src:"".concat("/adp-project","/pictures/carousel/c_green.jpg"),altText:"Slide 2",caption:"Innovative"},{src:"".concat("/adp-project","/pictures/carousel/c_white.jpg"),altText:"Slide 3",caption:"Improvement"},{src:"".concat("/adp-project","/pictures/carousel/c_yellow.jpg"),altText:"Slide 4",caption:"Comprehensive"}]);function $(){var e=Object(c.useState)(0),t=Object(p.a)(e,2),a=t[0],r=t[1],l=Object(c.useState)(!1),s=Object(p.a)(l,2),o=s[0],m=s[1],u=Object(i.b)().t,d=Z.map((function(e){return n.a.createElement(J.a,{onExiting:function(){return m(!0)},onExited:function(){return m(!1)},key:e.src},n.a.createElement("img",{src:e.src,alt:e.altText}),n.a.createElement(V.a,{captionText:u("Masthead.".concat(e.caption))}))}));return n.a.createElement(q.a,{activeIndex:a,next:function(){if(!o){var e=a===Z.length-1?0:a+1;r(e)}},previous:function(){if(!o){var e=0===a?Z.length-1:a-1;r(e)}},className:"masthead",ride:"carousel"},n.a.createElement(W.a,{items:Z,activeIndex:a,onClickHandler:function(e){o||r(e)}}),d)}a(142);var K=[{src:"".concat("/adp-project","/pictures/about us/au_office.jpg"),altText:"au_office"},{src:"".concat("/adp-project","/pictures/about us/au_polymer.jpg"),altText:"au_polymer"},{src:"".concat("/adp-project","/pictures/about us/au_granules.jpg"),altText:"au_granules"}];function Q(){var e=Object(i.b)().t,t=K.map((function(e,t){return 0===t?n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText})):n.a.createElement("div",{className:"col-6"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText}))}));return n.a.createElement("section",{className:"page-section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"about-us",id:encodeURI(e("Nav.about us"))},n.a.createElement("div",{className:"col-12 col-lg-5 article"},n.a.createElement("h2",null,e("About Us.title")),n.a.createElement("p",null,e("About Us.p1")),n.a.createElement("p",null,e("About Us.p2"))),n.a.createElement("div",{className:"col-12 col-lg-5 album"},t))))}a(143);var X=[{src:"".concat("/adp-project","/pictures/principles/p_covestro.png"),altText:"p_covestro"},{src:"".concat("/adp-project","/pictures/principles/p_celanese.png"),altText:"p_celanese"},{src:"".concat("/adp-project","/pictures/principles/p_basf.png"),altText:"p_basf"},{src:"".concat("/adp-project","/pictures/principles/p_solvay.png"),altText:"p_solvay"},{src:"".concat("/adp-project","/pictures/principles/p_lanxess.png"),altText:"p_lanxess"},{src:"".concat("/adp-project","/pictures/principles/p_lg-chem.png"),altText:"p_lg-chem"},{src:"".concat("/adp-project","/pictures/principles/p_chemours.png"),altText:"p_chemours"},{src:"".concat("/adp-project","/pictures/principles/p_exxon.png"),altText:"p_exxon"},{src:"".concat("/adp-project","/pictures/principles/p_tpsc.png"),altText:"p_tpsc"}];function Y(){var e=Object(i.b)().t,t=X.map((function(e){return n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText,className:e.altText})}));return n.a.createElement("section",{className:"page-section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"principles",id:encodeURI(e("Nav.principles"))},n.a.createElement("h2",null,e("Principles.title")),n.a.createElement("div",{className:"col-12 col-md-12 logos"},t))))}a(144);var ee=a(61),te=a.n(ee),ae=a(62),ce=a.n(ae),ne=a(63),re=a.n(ne),le=a(64),se=a.n(le),oe=a(65),ie=a.n(oe),me=a(66),pe=a.n(me),ue=[{href:"https://www.instagram.com/",icon:ce.a},{href:"https://www.youtube.com/",icon:re.a},{href:"https://www.facebook.com/",icon:se.a},{href:"https://www.twitter.com/",icon:ie.a},{href:"https://www.linkedin.com/",icon:pe.a}];function de(){var e=Object(i.b)().t,t=ue.map((function(e,t){return n.a.createElement("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",key:t},n.a.createElement("img",{src:e.icon,alt:"socmed"}))}));return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"col-md-4 about d-none d-md-block"},n.a.createElement("h2",null,e("Footer.About.title")),n.a.createElement("p",null,e("Footer.About.p1")),n.a.createElement("p",null,e("Footer.About.p2")),n.a.createElement("p",null,e("Footer.About.p3"))),n.a.createElement("div",{className:"col-12 col-md-3 contact"},n.a.createElement("h2",null,e("Footer.Contact.title")),n.a.createElement("p",null,e("Footer.Contact.name")),n.a.createElement("p",null,e("Footer.Contact.office")),n.a.createElement("p",null,e("Footer.Contact.street")),n.a.createElement("p",null,e("Footer.Contact.district")),n.a.createElement("p",null,e("Footer.Contact.phone")),n.a.createElement("p",null,e("Footer.Contact.fax"))),n.a.createElement("div",{className:"col-8 col-md-3 follow"},n.a.createElement("h2",null,e("Footer.Follow.title")),n.a.createElement("div",{className:"socmed"},t)),n.a.createElement("div",{className:"col-4 col-md-2 logo"},n.a.createElement("img",{src:te.a,alt:"adp-white"}))))}a(145),a(146);var Ee=[{src:"".concat("/adp-project","/pictures/industries & applications/auto_showroom_car.jpg"),altText:"auto_showroom_car"},{src:"".concat("/adp-project","/pictures/industries & applications/auto_blue_car.jpg"),altText:"auto_blue_car"},{src:"".concat("/adp-project","/pictures/industries & applications/auto_speedometer.jpg"),altText:"auto_speedometer"}];a(147);var ve=[{src:"".concat("/adp-project","/pictures/industries & applications/cg_cyclist.jpg"),altText:"cg_cyclist"},{src:"".concat("/adp-project","/pictures/industries & applications/cg_makeup.jpg"),altText:"cg_makeup"},{src:"".concat("/adp-project","/pictures/industries & applications/cg_roof.jpg"),altText:"cg_roof"}];a(148);var fe=[{src:"".concat("/adp-project","/pictures/industries & applications/ee_fiber_optic.jpg"),altText:"ee_fiber_optic"},{src:"".concat("/adp-project","/pictures/industries & applications/ee_vacuum_cleaner.jpg"),altText:"ee_vacuum_cleaner"},{src:"".concat("/adp-project","/pictures/industries & applications/ee_drills.jpg"),altText:"ee_drills"}];a(149);var ge=[{src:"".concat("/adp-project","/pictures/industries & applications/h_prescription.jpg"),altText:"h_prescription"},{src:"".concat("/adp-project","/pictures/industries & applications/h_sanitizer.jpg"),altText:"h_sanitizer"},{src:"".concat("/adp-project","/pictures/industries & applications/h_syringe.jpg"),altText:"h_syringe"}];a(150);var be=[{src:"".concat("/adp-project","/pictures/industries & applications/cp_paint.jpg"),altText:"cp_paint"},{src:"".concat("/adp-project","/pictures/industries & applications/cp_beaker.jpg"),altText:"cp_beaker"},{src:"".concat("/adp-project","/pictures/industries & applications/cp_polymer.jpg"),altText:"cp_polymer"}];a(151);var ye=[{src:"".concat("/adp-project","/pictures/industries & applications/at_engine.jpg"),altText:"at_engine"},{src:"".concat("/adp-project","/pictures/industries & applications/at_aircraft.jpg"),altText:"at_aircraft"},{src:"".concat("/adp-project","/pictures/industries & applications/at_tech.jpg"),altText:"at_tech"}];a(152);var je=[{src:"".concat("/adp-project","/pictures/industries & applications/er_solar.jpg"),altText:"er_solar"},{src:"".concat("/adp-project","/pictures/industries & applications/er_windmill.jpg"),altText:"er_windmill"},{src:"".concat("/adp-project","/pictures/industries & applications/er_bulb.jpg"),altText:"er_bulb"}];var xe=a(67),Te=a.n(xe),_e=a(68),he=a.n(_e),Ne=a(69),ke=a.n(Ne),Oe=a(70),Ae=a.n(Oe),Pe=a(71),we=a.n(Pe),Ce=a(72),Ie=a.n(Ce),Fe=a(73),Se=a.n(Fe),He=[{icon:Te.a,component:function(e){var t=e.Header,a=e.active,c=Object(i.b)().t,r=Ee.map((function(e,t){return 0===t?n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText})):n.a.createElement("div",{className:"col-6"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText}))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-12 col-lg-6 article__automotive ".concat(a?"active":"")},n.a.createElement(t,null),n.a.createElement("h6",null,c("Industries & Applications.Automotive.t1")),n.a.createElement("p",null,c("Industries & Applications.Automotive.p1")),n.a.createElement("h6",null,c("Industries & Applications.Automotive.t2")),n.a.createElement("p",null,c("Industries & Applications.Automotive.p2"))),n.a.createElement("div",{className:"col-12 col-lg-5 album__automotive ".concat(a?"active":"")},r))},name:"Automotive",class:"automotive"},{icon:he.a,component:function(e){var t=e.Header,a=e.active,c=Object(i.b)().t,r=ve.map((function(e,t){return 0===t?n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText})):n.a.createElement("div",{className:"col-6"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText}))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-12 col-md-6 article__consumer-goods ".concat(a?"active":"")},n.a.createElement(t,null),n.a.createElement("table",{className:"col-12"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("h6",null,c("Industries & Applications.Consumer Goods.t1")),n.a.createElement("p",null,c("Industries & Applications.Consumer Goods.p1"))),n.a.createElement("td",null),n.a.createElement("td",null,n.a.createElement("h6",null,c("Industries & Applications.Consumer Goods.t3")),n.a.createElement("p",null,c("Industries & Applications.Consumer Goods.p3")))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("h6",null,c("Industries & Applications.Consumer Goods.t2")),n.a.createElement("p",null,c("Industries & Applications.Consumer Goods.p2"))),n.a.createElement("td",null),n.a.createElement("td",null,n.a.createElement("h6",null,c("Industries & Applications.Consumer Goods.t4")),n.a.createElement("p",null,c("Industries & Applications.Consumer Goods.p4"))))))),n.a.createElement("div",{className:"col-12 col-md-5 album__consumer-goods ".concat(a?"active":"")},r))},name:"Consumer Goods",class:"consumergoods"},{icon:ke.a,component:function(e){var t=e.Header,a=e.active,c=Object(i.b)().t,r=fe.map((function(e,t){return 0===t?n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText})):n.a.createElement("div",{className:"col-6"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText}))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-12 col-md-6 article__electrical-electronics ".concat(a?"active":"")},n.a.createElement(t,null),n.a.createElement("p",null,c("Industries & Applications.Electrical & Electronics.p1"))),n.a.createElement("div",{className:"col-12 col-md-5 album__electrical-electronics ".concat(a?"active":"")},r))},name:"Electrical & Electronics",class:"electricalelectronics"},{icon:Ae.a,component:function(e){var t=e.Header,a=e.active,c=Object(i.b)().t,r=ge.map((function(e,t){return 0===t?n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText})):n.a.createElement("div",{className:"col-6"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText}))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-12 col-md-6 article__healthcare ".concat(a?"active":"")},n.a.createElement(t,null),n.a.createElement("p",null,c("Industries & Applications.Healthcare.p1"))),n.a.createElement("div",{className:"col-12 col-md-5 album__healthcare ".concat(a?"active":"")},r))},name:"Healthcare",class:"healthcare"},{icon:we.a,component:function(e){var t=e.Header,a=e.active,c=Object(i.b)().t,r=be.map((function(e,t){return 0===t?n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText})):n.a.createElement("div",{className:"col-6"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText}))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-12 col-md-6 article__chemical-paints ".concat(a?"active":"")},n.a.createElement(t,null),n.a.createElement("p",null,c("Industries & Applications.Chemical & Paints.p1"))),n.a.createElement("div",{className:"col-12 col-md-5 album__chemical-paints ".concat(a?"active":"")},r))},name:"Chemical & Paints",class:"chemicalpaints"},{icon:Ie.a,component:function(e){var t=e.Header,a=e.active,c=Object(i.b)().t,r=ye.map((function(e,t){return 0===t?n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText})):n.a.createElement("div",{className:"col-6"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText}))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-12 col-md-6 article__aerospace-transportation ".concat(a?"active":"")},n.a.createElement(t,null),n.a.createElement("p",null,c("Industries & Applications.Aerospace & Transportation.p1")),n.a.createElement("p",null,c("Industries & Applications.Aerospace & Transportation.p2"))),n.a.createElement("div",{className:"col-12 col-md-5 album__aerospace-transportation ".concat(a?"active":"")},r))},name:"Aerospace & Transportation",class:"aerospacetransportation"},{icon:Se.a,component:function(e){var t=e.Header,a=e.active,c=Object(i.b)().t,r=je.map((function(e,t){return 0===t?n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText})):n.a.createElement("div",{className:"col-6"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText}))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-12 col-md-6 article__energy-resources ".concat(a?"active":"")},n.a.createElement(t,null),n.a.createElement("p",null,c("Industries & Applications.Energy & Resources.p1"))),n.a.createElement("div",{className:"col-12 col-md-5 album__energy-resources ".concat(a?"active":"")},r))},name:"Energy & Resources",class:"energyresources"}];function Le(){var e=Object(c.useState)(0),t=Object(p.a)(e,2),a=t[0],r=t[1],l=Object(i.b)().t,s=He.map((function(e,t){var c=e.class,s=t===a;return n.a.createElement("div",{key:t,className:"wrapper"},n.a.createElement("button",{className:"tab-button__".concat(c),onClick:function(){return function(e){return r(e)}(t)}},n.a.createElement("img",{src:e.icon,alt:e.name,className:"tab-icon ".concat(s?"active":"")})),s&&n.a.createElement("div",null,l("Industries & Applications.".concat(e.name,".title"))))})),o=function(){return n.a.createElement("div",{className:"header"},n.a.createElement("h2",null,l("Nav.industries & applications")),n.a.createElement("div",{className:"header-tab"},s))},m=He.map((function(e,t){var c=e.component,r=t===a;return n.a.createElement(c,{className:"".concat(c.name.toLowerCase," ").concat(r?"active":""),Header:o,active:r,key:t})}));return n.a.createElement("section",{className:"page-section bg_blue"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"industries-applications",id:encodeURI(l("Nav.industries & applications"))},m)))}a(153),a(154);var Ge=[{name:"HIPS",pictures:[{src:"".concat("/adp-project","/pictures/products/hips_tumblr.jpg"),altText:"hips_tumblr"},{src:"".concat("/adp-project","/pictures/products/hips_plastic.jpg"),altText:"hips_plastic"},{src:"".concat("/adp-project","/pictures/products/hips_toilet.jpg"),altText:"hips_toilet"}]},{name:"GPPS",pictures:[]},{name:"EPS"},{name:"HPP"},{name:"BCPP"},{name:"HDPE"},{name:"LDPE"},{name:"LLDPE"},{name:"PVC"},{name:"PET"},{name:"EVA"}],Re=[{name:"Lipsum",pictures:[{src:"".concat("/adp-project","/pictures/products/invalid.jpg"),altText:"hips_tumblr"},{src:"".concat("/adp-project","/pictures/products/invalid.jpg"),altText:"hips_plastic"},{src:"".concat("/adp-project","/pictures/products/invalid.jpg"),altText:"hips_toilet"}]}],Ue={"Commodity Plastic":Ge,"Engineering Plastic":Re,"Super Engineering Plastic":Re,Coating:Re,Additives:Re},ze=function(e){var t=e.setCommodity,a=e.activeProduct,r=e.setActiveProduct,l=e.setName,s=e.setPictures,o=e.commodity,m=e.products,u=Object(c.useState)(),d=Object(p.a)(u,2),E=d[0],f=d[1],g=Object(i.b)().t,b=m.map((function(e,a){return n.a.createElement("button",{key:e.name,className:"product ".concat(a===E?"active":""),onClick:function(){return function(e,a,c,n){e!==E?(f(e),l(c),t(a),s(n)):(f(),l(),t(),s())}(a,o,e.name,e.pictures)}},g("Products.".concat(o,".items.").concat(e.name,".name")))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:"commodity",onClick:function(){a!==o?r(o):r()}},g("Products.".concat(o,".title"))),n.a.createElement(v.a,{isOpen:o===a},b))};function Me(e){var t=e.setCommodity,a=e.activeProduct,c=e.setActiveProduct,r=e.setName,l=e.setDescription,s=e.setPictures,o=Object.keys(Ue);return n.a.createElement("div",{className:"display"},o.map((function(e){var o=Ue[e];return n.a.createElement(ze,{setCommodity:t,activeProduct:a,setActiveProduct:c,setName:r,setDescription:l,setPictures:s,commodity:e,products:o,key:e})})))}a(155);function De(e){var t=e.commodity,a=e.name,c=e.pictures,r=Object(i.b)().t;return t&&a?n.a.createElement("div",{className:"detail"},n.a.createElement("h6",null,r("Products.".concat(t,".items.").concat(a,".name"))),n.a.createElement("p",null,r("Products.".concat(t,".items.").concat(a,".desc"))),c&&c.map((function(e,t){return 0===t?n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText})):n.a.createElement("div",{className:"col-6"},n.a.createElement("img",{src:e.src,alt:e.altText,key:e.altText}))}))):""}function Be(){var e=Object(i.b)().t,t=Object(c.useState)(),a=Object(p.a)(t,2),r=a[0],l=a[1],s=Object(c.useState)(),o=Object(p.a)(s,2),m=o[0],u=o[1],d=Object(c.useState)(),E=Object(p.a)(d,2),v=E[0],f=E[1],g=Object(c.useState)(),b=Object(p.a)(g,2),y=b[0],j=b[1];return n.a.createElement("section",{className:"page-section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"products",id:encodeURI(e("Nav.products"))},n.a.createElement("div",{className:"col-12 col-md-6 article"},n.a.createElement("h2",null,e("Products.title")),n.a.createElement(Me,{setCommodity:function(e){return l(e)},activeProduct:m,setActiveProduct:function(e){return u(e)},setName:function(e){return f(e)},setPictures:function(e){return j(e)}})),n.a.createElement("div",{className:"col-12 col-md-5 album"},n.a.createElement(De,{commodity:r,name:v,pictures:y})))))}a(156);function Je(){var e=Object(i.b)().t;return n.a.createElement("section",{className:"page-section bg_grey"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"services",id:encodeURI(e("Nav.services"))},n.a.createElement("div",{className:"col-12 col-md-6 article"},n.a.createElement("h2",null,e("Services.title"))),n.a.createElement("div",{className:"col-12 col-md-6 album"}))))}function Ve(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(C,null),n.a.createElement($,null),n.a.createElement(Q,null),n.a.createElement(Y,null),n.a.createElement(Le,null),n.a.createElement(Be,null),n.a.createElement(Je,null),n.a.createElement(B,null),n.a.createElement(D,null),n.a.createElement(de,null))}var qe=a(74),We=a.n(qe);var Ze=function(){var e=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("img",{src:We.a,className:"App-logo",alt:"logo"}),n.a.createElement("div",null,"loading..."))};return n.a.createElement(c.Suspense,{fallback:n.a.createElement(e,null)},n.a.createElement(Ve,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(Ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[75,1,2]]]);
//# sourceMappingURL=main.d4bb7952.chunk.js.map