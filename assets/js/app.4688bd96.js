(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d21df49":"417db3c7","chunk-6e423270":"f7c061b1","chunk-2d229d2b":"d2c44a3b","chunk-33e09b00":"feb9df47"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-6e423270":1,"chunk-33e09b00":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d21df49":"31d6cfe0","chunk-6e423270":"a89cd09f","chunk-2d229d2b":"31d6cfe0","chunk-33e09b00":"52ef46aa"}[e]+".css",r=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("v-toolbar-items",[n("v-btn",{attrs:{text:"",href:"/","active-class":""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",{staticClass:"font-weight-bold"},[e._v("ViVid")]),n("span",{staticClass:"font-weight-light"},[e._v("HOTELS")])])],1)],1),n("v-spacer"),n("v-toolbar-items",e._l(e.filteredMenu,(function(t,a){return n("v-btn",{key:a,attrs:{text:"",to:t.route,color:t.color}},[e._v(e._s(t.text))])})),1)],1),n("v-content",[n("notifications",{attrs:{position:"bottom right"}}),n("v-fade-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)],1)},r=[],i={name:"App",data:()=>({menu:[{condition:!0,text:"Reserve",route:"/",color:"blue"},{condition:!1,text:"Reserve",route:"/",color:"blue"},{condition:!0,text:"Reservations",route:"/reservations"},{condition:!0,text:"Rooms",route:"/rooms"},{condition:!0,text:"Room Types",route:"/roomtypes"}]}),computed:{filteredMenu(){return this.menu.filter(e=>{return this.$store.state.logged==e.condition})}}},s=i,c=n("2877"),l=n("6544"),u=n.n(l),d=n("7496"),f=n("40dc"),h=n("8336"),p=n("a75b"),v=n("0789"),m=n("2fa4"),b=n("2a7f"),g=Object(c["a"])(s,o,r,!1,null,null,null),k=g.exports;u()(g,{VApp:d["a"],VAppBar:f["a"],VBtn:h["a"],VContent:p["a"],VFadeTransition:v["d"],VSpacer:m["a"],VToolbarItems:b["a"],VToolbarTitle:b["b"]});var x=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{bg:"","fill-height":"","grid-list-md":"","text-xs-center":""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",[n("v-alert",{attrs:{type:"error",value:!0}},[n("span",[e._v("Page Not Found")])])],1)],1)],1)},w=[],D={},_=D,V=n("0798"),T=n("a523"),C=n("0e8f"),O=n("a722"),S=Object(c["a"])(_,y,w,!1,null,null,null),j=S.exports;u()(S,{VAlert:V["a"],VContainer:T["a"],VFlex:C["a"],VLayout:O["a"]});var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md6:"","offset-md3":""}},[n("v-card",[n("v-card-title",[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[e._v("Reserve Your Dates")])],1)],1),n("v-card-text",[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"Check In Date","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.checkin,callback:function(t){e.checkin=t},expression:"checkin"}},a))]}}]),model:{value:e.checkinMenu,callback:function(t){e.checkinMenu=t},expression:"checkinMenu"}},[n("v-date-picker",{attrs:{"allowed-dates":e.checkinDates},on:{input:function(t){e.checkinMenu=!1}},model:{value:e.checkin,callback:function(t){e.checkin=t},expression:"checkin"}})],1)],1),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"Check Out Date","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.checkout,callback:function(t){e.checkout=t},expression:"checkout"}},a))]}}]),model:{value:e.checkoutMenu,callback:function(t){e.checkoutMenu=t},expression:"checkoutMenu"}},[n("v-date-picker",{attrs:{"allowed-dates":e.checkoutDates},on:{input:function(t){e.checkoutMenu=!1,e.checkDates()}},model:{value:e.checkout,callback:function(t){e.checkout=t},expression:"checkout"}})],1)],1),n("v-flex",{attrs:{xs12:""}},[n("v-select",{attrs:{disabled:!e.checkin||!e.checkout,items:e.roomtypes,label:"Room Type","item-text":"name","return-object":""},scopedSlots:e._u([{key:"item",fn:function(t){var a=t.item;return[n("span",{staticClass:"pr-5"},[e._v(e._s(a.name))]),n("v-spacer"),n("v-chip",{attrs:{outlined:""}},[e._v("Rs. "+e._s(a.price)+" / "+e._s(a.rooms.length)+" Available")])]}}]),model:{value:e.roomtype,callback:function(t){e.roomtype=t},expression:"roomtype"}})],1),n("v-flex",{attrs:{xs12:"","pa-5":""}},[n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-btn",{attrs:{disabled:!e.checkin||!e.checkout||!e.roomtype||0==e.roomtype.rooms.length,color:"primary"},on:{click:function(t){return e.showDialog()}}},[e._v("Check Out")])],1)],1)],1)],1),n("v-card-actions")],1)],1)],1),n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Guest Information")]),n("v-card-text",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"First Name"},model:{value:e.guest.firstName,callback:function(t){e.$set(e.guest,"firstName",t)},expression:"guest.firstName"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Last Name"},model:{value:e.guest.lastName,callback:function(t){e.$set(e.guest,"lastName",t)},expression:"guest.lastName"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Identity"},model:{value:e.guest.identity,callback:function(t){e.$set(e.guest,"identity",t)},expression:"guest.identity"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Mobile"},model:{value:e.guest.mobile,callback:function(t){e.$set(e.guest,"mobile",t)},expression:"guest.mobile"}})],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},nativeOn:{click:function(t){return e.saveDialog()}}},[e._v("Save")]),n("v-btn",{attrs:{text:""},nativeOn:{click:function(t){return e.closeDialog()}}},[e._v("Cancel")])],1)],1)],1)],1)],1)},M=[],N={data:()=>({guest:{firstName:"",lastName:"",identity:"",mobile:""},checkinMenu:!1,checkin:"",checkoutMenu:!1,checkout:"",dialog:!1,dates:["",""],roomtype:null,roomtypes:[]}),created:function(){var e=new Date,t=new Date;t.setDate(t.getDate()+1),e=e.toISOString().slice(0,10),t=t.toISOString().slice(0,10),this.checkin=e,this.checkout=t,this.checkDates()},methods:{showDialog:function(){this.dialog=!0},saveDialog:function(){var e=new Date(this.checkin).getTime(),t=new Date(this.checkout).getTime(),n=this.roomtype.rooms[0].id;this.$axios.post("/api/guest",this.guest).then(a=>{this.$axios.post("/api/reservation",{guest:a.data.id,checkIn:e,checkOut:t,room:n}).then(e=>{this.closeDialog(),this.checkDates(),this.$notify({type:"success",title:"Successfully Reserved"})})})},closeDialog:function(){this.dialog=!1,this.roomtype=null,this.guest={firstName:"",lastName:"",identity:"",mobile:""}},checkDates:function(){var e=new Date(this.checkin).getTime(),t=new Date(this.checkout).getTime();this.$axios.get(`/api/reservation/available/${e}/${t}`).then(e=>{this.roomtypes=e.data})},checkinDates:function(e){this.checkout="";var t=new Date(e),n=new Date;return n.setDate(n.getDate()-1),t>=n},checkoutDates:function(e){var t=new Date(this.checkin),n=new Date(e);return n>t}}},$=N,E=n("b0af"),A=n("99d9"),L=n("cc20"),R=n("2e4b"),I=n("169a"),F=n("e449"),B=n("b974"),q=n("8654"),H=n("71d9"),J=Object(c["a"])($,P,M,!1,null,null,null),G=J.exports;u()(J,{VBtn:h["a"],VCard:E["a"],VCardActions:A["a"],VCardText:A["b"],VCardTitle:A["c"],VChip:L["a"],VContainer:T["a"],VDatePicker:R["a"],VDialog:I["a"],VFlex:C["a"],VLayout:O["a"],VMenu:F["a"],VSelect:B["a"],VSpacer:m["a"],VTextField:q["a"],VToolbar:H["a"],VToolbarTitle:b["b"]}),a["default"].use(x["a"]);var K=new x["a"]({routes:[{path:"/",name:"home",component:G},{path:"/roomtypes",name:"roomtypes",component:()=>Promise.all([n.e("chunk-6e423270"),n.e("chunk-33e09b00")]).then(n.bind(null,"210b"))},{path:"/rooms",name:"rooms",component:()=>n.e("chunk-2d21df49").then(n.bind(null,"d403"))},{path:"/reservations",name:"reservations",component:()=>Promise.all([n.e("chunk-6e423270"),n.e("chunk-2d229d2b")]).then(n.bind(null,"dea5"))},{path:"*",name:"notfound",component:j}]}),U=n("2f62");a["default"].use(U["a"]);var Y=new U["a"].Store({state:{logged:!0,user:{name:"Shakthi"}},mutations:{},actions:{}}),z=n("bc3a"),Q=n.n(z);let W={};const X=Q.a.create(W);X.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),X.interceptors.response.use((function(e){return e}),(function(e){return 400==e.response.status&&a["default"].notify({type:"warn",title:"Validation Error",text:e.response.data.details}),Promise.reject(e)})),Plugin.install=function(e,t){e.axios=X,window.axios=X,Object.defineProperties(e.prototype,{axios:{get(){return X}},$axios:{get(){return X}}})},a["default"].use(Plugin);Plugin;var Z=n("f309");a["default"].use(Z["a"]);var ee=new Z["a"]({theme:{},icons:{iconfont:"mdi"}}),te=(n("d5e8"),n("5363"),n("ee98")),ne=n.n(te);a["default"].use(ne.a),a["default"].config.productionTip=!0,new a["default"]({router:K,store:Y,vuetify:ee,render:e=>e(k)}).$mount("#app")}});
//# sourceMappingURL=app.4688bd96.js.map