(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{255:function(e,t,r){"use strict";r.r(t);r(36);var n=r(23),o=(r(10),r(2));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=r(1).a.extend({middleware:"admin",data:function(){return{users:[]}},methods:{getUsers:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$fire.firestore.collection("users"),t.prev=1,t.next=4,r.get();case 4:n=t.sent,s=n.docs.map((function(e){return l(l({},e.data()),{},{id:e.id})})),e.users=s,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()}},mounted:function(){this.getUsers()}}),f=r(14),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col mx-auto max-w-lg m-4"},[r("div",{staticClass:"flex justify-between items-center"},[r("h1",{staticClass:"text-3xl font-medium"},[e._v("Admin Dashboard")]),e._v(" "),r("nuxt-link",{staticClass:"text-red-500 font-bold text-lg underline",attrs:{to:"/add-hotel"}},[e._v("Add hotel")])],1),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"flex flex-wrap"},e._l(e.users,(function(t){return r("div",{key:t.id,staticClass:"p-3 bg-white rounded-xl shadow-lg m-3 flex flex-col gap-3"},[r("nuxt-link",{staticClass:"text-xl font-medium text-red-700 underline",attrs:{to:"/users/"+t.id}},[e._v(e._s((t.firstName||"admin")+" "+(t.lastName||"admin")))]),e._v(" "),r("div",{staticClass:"flex flex-col"},[r("span",{staticClass:"text-sm text-gray-700"},[e._v(e._s(t.address))]),e._v(" "),r("span",{staticClass:"text-gray-800"},[e._v(e._s(t.contact))]),e._v(" "),r("span",{staticClass:"text-gray-800"},[e._v(e._s(t.email))])]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"flex gap-5"},[t.saved&&t.saved.length>0?r("span",[r("strong",[e._v(e._s(t.saved.length))]),e._v(" saved rooms")]):e._e(),e._v(" "),t.booked&&t.booked.length>0?r("span",[r("strong",[e._v(e._s(t.booked.length))]),e._v(" booked rooms")]):e._e()])],1)})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);