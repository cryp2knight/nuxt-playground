(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{255:function(e,t,r){"use strict";r.r(t);r(63),r(64);var n=r(23),o=(r(10),r(2));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=r(1).a.extend({middleware:"admin",data:function(){return{user:null,savedHotels:[],bookedHotels:[],uid:""}},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.abrupt("return",{uid:r.uid});case 2:case"end":return t.stop()}}),t)})))()},mounted:function(){this.getSavedHotels(),this.getBookedHotels()},methods:{getSavedHotels:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$fire.firestore.collection("users").doc(e.uid),t.prev=1,t.next=4,r.get();case 4:data=t.sent,n=data.data().saved,e.user=data.data(),n.forEach(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.get();case 3:n=t.sent,e.savedHotels.push(l({id:n.id},n.data())),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()},getBookedHotels:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$fire.firestore.collection("users").doc(e.uid),t.prev=1,t.next=4,r.get();case 4:data=t.sent,data.data().booked.forEach(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){var n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.get();case 3:return o=t.sent,t.next=6,null===(n=r.parent.parent)||void 0===n?void 0:n.get();case 6:c=t.sent,e.bookedHotels.push(l(l({room_id:o.id},o.data()),{},{hotel_id:null==c?void 0:c.id},null==c?void 0:c.data())),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()}}}),v=r(14),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col max-w-lg mx-auto gap-5"},[r("nuxt-link",{staticClass:"mt-10 underline text-red-600",attrs:{to:"/admin"}},[e._v("back")]),e._v(" "),e.user?r("div",{staticClass:"flex flex-col"},[r("span",{staticClass:"text-3xl font-medium text-red-700 underline"},[e._v(e._s(e.user.firstName+" "+e.user.lastName))]),e._v(" "),r("div",{staticClass:"flex flex-col"},[r("span",{staticClass:"text-sm text-gray-700"},[e._v(e._s(e.user.address))]),e._v(" "),r("span",{staticClass:"text-gray-800"},[e._v(e._s(e.user.contact))]),e._v(" "),r("span",{staticClass:"text-gray-800"},[e._v(e._s(e.user.email))])]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"flex gap-5"},[e.user.saved&&e.user.saved.length>0?r("span",[r("strong",[e._v(e._s(e.user.saved.length))]),e._v(" saved rooms")]):e._e(),e._v(" "),e.user.booked&&e.user.booked.length>0?r("span",[r("strong",[e._v(e._s(e.user.booked.length))]),e._v(" booked rooms")]):e._e()])]):e._e(),e._v(" "),e.bookedHotels.length>0?r("div",{staticClass:"flex flex-col"},[r("span",{staticClass:"text-2xl font-medium"},[e._v("Booked Hotel Rooms")]),e._v(" "),r("hr"),e._v(" "),e._l(e.bookedHotels,(function(t){return r("div",{key:t.id,staticClass:"flex gap-3 bg-white p-4 m-4 rounded-xl shadow-lg"},[t.photo?r("img",{staticClass:"w-40 h-40 object-cover rounded-xl",attrs:{src:t.photo}}):e._e(),e._v(" "),r("div",{staticClass:"flex flex-col gap-3"},[r("div",{staticClass:"flex justify-between"},[r("div",{staticClass:"flex flex-col"},[r("span",{staticClass:"text-xl font-medium"},[e._v(e._s(t.name))]),e._v(" "),r("span",{},[e._v(e._s(t.address))]),e._v(" "),r("span",{staticClass:"font-bold text-lg"},[e._v("₱ "+e._s(t.price))]),e._v(" "),r("span",[e._v("Room type: "),r("strong",[e._v(e._s(t.type))])]),e._v(" "),r("span",[e._v("Booked on\n              "),r("strong",[e._v(e._s(t.booked_on.toDate().toDateString()))])])]),e._v(" "),r("span",{staticClass:"font-semibold"},[e._v(e._s(t.rating)+" out of 5 stars")])])])])}))],2):e._e(),e._v(" "),e.savedHotels.length>0?r("div",{staticClass:"flex flex-col"},[r("span",{staticClass:"text-2xl font-medium"},[e._v("Saved Hotels")]),e._v(" "),r("hr"),e._v(" "),e._l(e.savedHotels,(function(t){return r("div",{key:t.id,staticClass:"flex gap-3 bg-white p-4 m-4 rounded-xl shadow-lg"},[t.photo?r("img",{staticClass:"w-40 h-40 object-cover rounded-xl",attrs:{src:t.photo}}):e._e(),e._v(" "),r("div",{staticClass:"flex flex-col gap-3"},[r("div",{staticClass:"flex justify-between"},[r("div",{staticClass:"flex flex-col"},[r("span",{staticClass:"text-xl font-medium"},[e._v(e._s(t.name))]),e._v(" "),r("span",{},[e._v(e._s(t.address))])]),e._v(" "),r("span",{staticClass:"font-semibold"},[e._v(e._s(t.rating)+" out of 5 stars")])]),e._v(" "),r("p",{staticClass:"text-sm text-gray-700"},[e._v(e._s(t.description))])])])}))],2):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);