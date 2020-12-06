(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{223:function(t,e,r){"use strict";r.r(e);r(11);var n=r(2),o=r(27),c=r(0),l=r(35);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=c.a.extend({name:"Registration",data:function(){return{email:"",password:""}},computed:f(f({},Object(l.d)({authUser:function(t){return t.authUser}})),Object(l.c)({isLoggedIn:"isLoggedIn"})),methods:{register:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$fire.auth.createUserWithEmailAndPassword(t.email,t.password);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},signInUser:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$fire.auth.signInWithEmailAndPassword(t.email,t.password);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}}),v=r(22),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-3 md:max-w-md"},[t.isLoggedIn?t._e():r("div",{staticClass:"bg-white rounded-3xl p-6 shadow-xl"},[r("span",{staticClass:"text-3xl font-semibold text-gray-800"},[t._v("LAYAS")]),t._v(" "),r("div",{staticClass:"flex flex-col mt-4"},[r("label",{staticClass:"text-sm text-red-700"},[t._v("Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"my-2 px-3 py-1 border rounded-lg text-gray-700 outline-none",attrs:{type:"email",placeholder:"john@mail.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"flex flex-col"},[r("label",{staticClass:"text-sm text-red-700"},[t._v("Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"my-2 px-3 py-1 border rounded-lg text-gray-700 outline-none",attrs:{type:"password",placeholder:"******"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),r("hr",{staticClass:"my-3"}),t._v(" "),r("div",{staticClass:"flex mt-4"},[r("Button",{staticClass:"text-white w-20 bg-red-600 p-2 font-semibold rounded-lg hover:bg-red-900",on:{click:t.register}},[t._v("Register")]),t._v(" "),r("Button",{staticClass:"ml-2 w-20 text-white bg-red-600 p-2 font-semibold rounded-lg hover:bg-red-900",on:{click:t.signInUser}},[t._v("Sign In")])],1)])])}),[],!1,null,null,null);e.default=component.exports},224:function(t,e,r){var n=r(5);e.f=n},236:function(t,e,r){"use strict";var n=r(3),o=r(4),c=r(29),l=r(28),d=r(12),f=r(99),m=r(153),v=r(6),y=r(14),h=r(69),w=r(10),x=r(7),O=r(24),_=r(25),j=r(66),P=r(48),S=r(100),C=r(50),k=r(94),R=r(237),N=r(98),E=r(47),I=r(16),D=r(65),L=r(17),T=r(18),$=r(96),U=r(67),A=r(68),F=r(97),J=r(5),W=r(224),B=r(238),H=r(71),Q=r(38),Y=r(39).forEach,z=U("hidden"),G=J("toPrimitive"),K=Q.set,M=Q.getterFor("Symbol"),V=Object.prototype,X=o.Symbol,Z=c("JSON","stringify"),tt=E.f,et=I.f,nt=R.f,ot=D.f,at=$("symbols"),it=$("op-symbols"),st=$("string-to-symbol-registry"),ct=$("symbol-to-string-registry"),ut=$("wks"),lt=o.QObject,pt=!lt||!lt.prototype||!lt.prototype.findChild,ft=d&&v((function(){return 7!=S(et({},"a",{get:function(){return et(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=tt(V,e);n&&delete V[e],et(t,e,r),n&&t!==V&&et(V,e,n)}:et,mt=function(t,e){var symbol=at[t]=S(X.prototype);return K(symbol,{type:"Symbol",tag:t,description:e}),d||(symbol.description=e),symbol},vt=m?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof X},gt=function(t,e,r){t===V&&gt(it,e,r),x(t);var n=j(e,!0);return x(r),y(at,n)?(r.enumerable?(y(t,z)&&t[z][n]&&(t[z][n]=!1),r=S(r,{enumerable:P(0,!1)})):(y(t,z)||et(t,z,P(1,{})),t[z][n]=!0),ft(t,n,r)):et(t,n,r)},bt=function(t,e){x(t);var r=_(e),n=C(r).concat(xt(r));return Y(n,(function(e){d&&!yt.call(r,e)||gt(t,e,r[e])})),t},yt=function(t){var e=j(t,!0),r=ot.call(this,e);return!(this===V&&y(at,e)&&!y(it,e))&&(!(r||!y(this,e)||!y(at,e)||y(this,z)&&this[z][e])||r)},ht=function(t,e){var r=_(t),n=j(e,!0);if(r!==V||!y(at,n)||y(it,n)){var o=tt(r,n);return!o||!y(at,n)||y(r,z)&&r[z][n]||(o.enumerable=!0),o}},wt=function(t){var e=nt(_(t)),r=[];return Y(e,(function(t){y(at,t)||y(A,t)||r.push(t)})),r},xt=function(t){var e=t===V,r=nt(e?it:_(t)),n=[];return Y(r,(function(t){!y(at,t)||e&&!y(V,t)||n.push(at[t])})),n};(f||(T((X=function(){if(this instanceof X)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=F(t),r=function(t){this===V&&r.call(it,t),y(this,z)&&y(this[z],e)&&(this[z][e]=!1),ft(this,e,P(1,t))};return d&&pt&&ft(V,e,{configurable:!0,set:r}),mt(e,t)}).prototype,"toString",(function(){return M(this).tag})),T(X,"withoutSetter",(function(t){return mt(F(t),t)})),D.f=yt,I.f=gt,E.f=ht,k.f=R.f=wt,N.f=xt,W.f=function(t){return mt(J(t),t)},d&&(et(X.prototype,"description",{configurable:!0,get:function(){return M(this).description}}),l||T(V,"propertyIsEnumerable",yt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:X}),Y(C(ut),(function(t){B(t)})),n({target:"Symbol",stat:!0,forced:!f},{for:function(t){var e=String(t);if(y(st,e))return st[e];var symbol=X(e);return st[e]=symbol,ct[symbol]=e,symbol},keyFor:function(t){if(!vt(t))throw TypeError(t+" is not a symbol");if(y(ct,t))return ct[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!d},{create:function(t,e){return void 0===e?S(t):bt(S(t),e)},defineProperty:gt,defineProperties:bt,getOwnPropertyDescriptor:ht}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:wt,getOwnPropertySymbols:xt}),n({target:"Object",stat:!0,forced:v((function(){N.f(1)}))},{getOwnPropertySymbols:function(t){return N.f(O(t))}}),Z)&&n({target:"JSON",stat:!0,forced:!f||v((function(){var symbol=X();return"[null]"!=Z([symbol])||"{}"!=Z({a:symbol})||"{}"!=Z(Object(symbol))}))},{stringify:function(t,e,r){for(var n,o=[t],c=1;arguments.length>c;)o.push(arguments[c++]);if(n=e,(w(e)||void 0!==t)&&!vt(t))return h(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!vt(e))return e}),o[1]=e,Z.apply(null,o)}});X.prototype[G]||L(X.prototype,G,X.prototype.valueOf),H(X,"Symbol"),A[z]=!0},237:function(t,e,r){var n=r(25),o=r(94).f,c={}.toString,l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return l&&"[object Window]"==c.call(t)?function(t){try{return o(t)}catch(t){return l.slice()}}(t):o(n(t))}},238:function(t,e,r){var path=r(152),n=r(14),o=r(224),c=r(16).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});n(e,t)||c(e,t,{value:o.f(t)})}},239:function(t,e,r){"use strict";var n=r(3),o=r(12),c=r(4),l=r(14),d=r(10),f=r(16).f,m=r(151),v=c.Symbol;if(o&&"function"==typeof v&&(!("description"in v.prototype)||void 0!==v().description)){var y={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof h?new v(t):void 0===t?v():v(t);return""===t&&(y[e]=!0),e};m(h,v);var w=h.prototype=v.prototype;w.constructor=h;var x=w.toString,O="Symbol(test)"==String(v("test")),_=/^Symbol\((.*)\)[^)]+$/;f(w,"description",{configurable:!0,get:function(){var symbol=d(this)?this.valueOf():this,t=x.call(symbol);if(l(y,symbol))return"";var desc=O?t.slice(7,-1):t.replace(_,"$1");return""===desc?void 0:desc}}),n({global:!0,forced:!0},{Symbol:h})}},250:function(t,e,r){"use strict";r.r(e);r(236),r(239),r(63),r(30),r(37),r(101),r(64),r(11);var n=r(2),o=r(27),c=r(0),l=r(223),d=r(35);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m=c.a.extend({data:function(){return{name:"",address:"",rating:"",description:"",photo:"",tags:"",rooms:[],room:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.c)(["isLoggedIn"])),components:{Registration:l.default},methods:{arrayTags:function(){return this.tags.split(",")},addToRoom:function(){var t=this.room.split(",");if(2===t.length){var e=+t[1];isNaN(e)?alert("invalid format, price must be a number"):(this.rooms.push({type:t[0],price:t[1],is_available:!0}),this.room="")}else alert("invalid format")},saveToFirestore:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[["name",t.name],["address",t.address],["rating",t.rating],["description",t.description],["photo url",t.photo]],i=0;case 2:if(!(i<r.length)){e.next=9;break}if(""!==r[i][1]){e.next=6;break}return alert("".concat(r[i][0]," cannot be empty")),e.abrupt("return");case 6:i++,e.next=2;break;case 9:return o=t.$fire.firestore.collection("hotelReservation"),e.prev=10,e.next=13,o.add({name:t.name,address:t.address,photo:t.photo,description:t.description,rating:+t.rating,tags:t.arrayTags()}).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.rooms.length>0)){e.next=3;break}return e.next=3,t.rooms.forEach((function(t){r.collection("rooms").add(t)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 13:e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(10),alert(e.t0),e.abrupt("return");case 19:alert("Success.");case 20:case"end":return e.stop()}}),e,null,[[10,15]])})))()}}}),v=r(22),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col items-center mx-5 mt-8"},[t.isLoggedIn?r("div",[r("div",{staticClass:"flex flex-col"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"w-full px-4 my-1 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500",attrs:{type:"text",placeholder:"Hotel name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"w-full px-4 my-1 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500",attrs:{type:"text",placeholder:"Hotel address"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"w-full px-4 my-1 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500",attrs:{placeholder:"description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),r("label",{staticClass:"text-gray-500"},[t._v("Rating (out of 5 stars)")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.rating,expression:"rating"}],staticClass:"w-full px-4 my-1 py-2 border bg-white",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.rating=e.target.multiple?r:r[0]}}},[r("option",[t._v("1")]),t._v(" "),r("option",[t._v("2")]),t._v(" "),r("option",[t._v("3")]),t._v(" "),r("option",[t._v("4")]),t._v(" "),r("option",[t._v("5")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.photo,expression:"photo"}],staticClass:"w-full px-4 my-1 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500",attrs:{type:"text",placeholder:"Photo URL"},domProps:{value:t.photo},on:{input:function(e){e.target.composing||(t.photo=e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.tags,expression:"tags"}],staticClass:"w-full px-4 my-1 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500",attrs:{type:"text",placeholder:"tags (separated by comma)"},domProps:{value:t.tags},on:{input:function(e){e.target.composing||(t.tags=e.target.value)}}}),t._v(" "),r("div",[r("ul",t._l(t.rooms,(function(e,n){return r("li",{key:n},[t._v("\n            "+t._s(e.type)+" - "),r("b",[t._v(t._s(e.price))]),t._v(" "),r("button",{staticClass:"bg-red-900 text-white rounded-full w-5 h-5 mx-3",on:{click:function(e){return t.rooms.splice(n,1)}}},[t._v("\n              x\n            ")])])})),0)]),t._v(" "),r("div",{staticClass:"flex"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.room,expression:"room"}],staticClass:"w-full px-4 my-1 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500",attrs:{type:"text",placeholder:"type, price (master, 1250)"},domProps:{value:t.room},on:{input:function(e){e.target.composing||(t.room=e.target.value)}}}),t._v(" "),r("button",{staticClass:"bg-red-200 p-2 rounded ml-5",on:{click:t.addToRoom}},[t._v("\n          add\n        ")])]),t._v(" "),r("button",{staticClass:"px-4 my-1 py-2 bg-red-600 text-white rounded-lg mt-5",on:{click:t.saveToFirestore}},[t._v("\n        Save\n      ")])])]):t._e(),t._v(" "),t.isLoggedIn?t._e():r("Registration")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Registration:r(223).default})}}]);