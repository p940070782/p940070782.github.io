(window["webpackJsonpreact-cli"]=window["webpackJsonpreact-cli"]||[]).push([[11],{220:function(e,t,n){"use strict";(function(e,r){n.d(t,"a",function(){return j});n(229);var o,a=n(230),c=n.n(a),i=(n(111),n(112)),l=n.n(i),u=(n(231),n(232)),s=n.n(u),f=n(37),p=n(38),d=n(40),h=n(39),b=n(41),y=(n(233),n(234)),g=n.n(y),m=(n(221),n(73)),v=(n(31),n(71)),O=n(72),k=g.a.Item,j=Object(v.b)()(o=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).goback=function(e){e&&(n.props.dispatch(Object(O.b)(localStorage.oldTab)),m.a.go(-1))},n.gotoSearch=function(){m.a.push("/search")},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.show,o=t.search,a=t.login,i=t.scan;return r.createElement(c.a,{mode:"dark",icon:n&&r.createElement(l.a,{type:"left"}),onLeftClick:function(){return e.goback(n)},rightContent:[!o&&r.createElement(l.a,{key:"0",onClick:this.gotoSearch,type:"search",style:{marginRight:"16px"}}),r.createElement(w,{key:1,login:a,scan:i})]}," ",this.props.title)}}]),t}(e))||o,C=function(e){return r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/".concat(e,".svg"),className:"am-icon am-icon-xs",alt:""})},w=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).handleVisibleChange=function(t){e.setState({visible:t})},e.onSelect=function(t){e.setState({visible:!1}),console.log(t);var n=t.props.value;"scan"==n?m.a.push("/scan"):"login"==n?m.a.push("/login"):e.showActionSheet()},e.showActionSheet=function(){var e=["\u62cd\u6444","\u4ece\u624b\u673a\u76f8\u518c\u9009\u62e9","\u5220\u9664","\u53d6\u6d88"];s.a.showActionSheetWithOptions({options:e,cancelButtonIndex:e.length-1,destructiveButtonIndex:e.length-2,message:"wh1906",maskClosable:!0,"data-seed":"logId",wrapProps:{onTouchStart:function(e){return e.preventDefault()}}},function(e){console.log(e)})},e.state={visible:!1},e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.login,n=e.scan;return r.createElement(g.a,{mask:!0,overlayClassName:"fortest",overlayStyle:{color:"currentColor"},visible:this.state.visible,overlay:[!n&&r.createElement(k,{key:"4",value:"scan",icon:C("tOtXhkIWzwotgGSeptou"),"data-seed":"logId"},"\u626b\u4e00\u626b"),r.createElement(k,{key:"5",value:"photo",icon:C("PKAgAqZWJVNwKsAJSmXd"),style:{whiteSpace:"nowrap"}},"\u62cd\u7167"),!t&&r.createElement(k,{key:"6",value:"login",icon:C("uQIYTFeRrjPELImDRrPt")},r.createElement("span",{style:{marginRight:5}},"\u767b\u5f55"))],align:{overflow:{adjustY:0,adjustX:0},offset:[-10,0]},onVisibleChange:this.handleVisibleChange,onSelect:this.onSelect},r.createElement("div",{style:{height:"100%",padding:"0 15px",marginRight:"-15px",display:"flex",alignItems:"center"}},r.createElement(l.a,{type:"ellipsis"})))}}]),t}(e)}).call(this,n(0).Component,n(0))},221:function(e,t,n){},257:function(e,t,n){"use strict";var r,o,a,c=n(74),i=n(239),l=n(37),u=n(240),s=(n(241),n(222));function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var p=(r=function e(){Object(l.a)(this,e),Object(i.a)(this,"userInfo",o,this),Object(i.a)(this,"changeUserInfo",a,this)},o=Object(u.a)(r.prototype,"userInfo",[s.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{isLogin:!1}}}),a=Object(u.a)(r.prototype,"changeUserInfo",[s.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.userInfo=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e.userInfo,{},t)}}}),r);t.a=new p},258:function(e,t,n){"use strict";var r,o,a,c,i,l,u,s,f=n(239),p=n(37),d=n(38),h=n(240),b=(n(241),n(222)),y=n(31),g=(r=function(){function e(){Object(p.a)(this,e),Object(f.a)(this,"carList",o,this),Object(f.a)(this,"getCarList",a,this),Object(f.a)(this,"changeOneCheck",c,this),Object(f.a)(this,"changeAllCheck",i,this),Object(f.a)(this,"changeOneCount",l,this),Object(f.a)(this,"changeCountByInp",u,this),Object(f.a)(this,"delChecked",s,this)}return Object(d.a)(e,[{key:"carNum",get:function(){var e=0;return this.carList.forEach(function(t){e+=1*t.count}),e}},{key:"checkNum",get:function(){var e=0;return this.carList.forEach(function(t){t.checked&&(e+=1*t.count)}),e}},{key:"total",get:function(){var e=0;return this.carList.forEach(function(t){t.checked&&(e+=t.count*t.goodInfo.price*1)}),e}},{key:"quan",get:function(){var e=!0;return this.carList.forEach(function(t){t.checked||(e=!1)}),e}}]),e}(),o=Object(h.a)(r.prototype,"carList",[b.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),a=Object(h.a)(r.prototype,"getCarList",[b.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){y.a.post("/react/getShopcarInfo").then(function(t){e.carList=t.data.carList})}}}),c=Object(h.a)(r.prototype,"changeOneCheck",[b.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,n){y.a.post("/react/checkOneAndAll",{goodId:t,checked:n}).then(function(r){e.carList=e.carList.map(function(e){return t==e.goodId&&(e.checked=n),e})})}}}),i=Object(h.a)(r.prototype,"changeAllCheck",[b.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){y.a.post("/react/checkOneAndAll",{checked:t}).then(function(n){e.carList=e.carList.map(function(e){return e.checked=t,e})})}}}),l=Object(h.a)(r.prototype,"changeOneCount",[b.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,n){y.a.post("/react/changecount",{goodId:t,flag:n}).then(function(e){}),e.carList=e.carList.map(function(e){return e.goodId==t&&(e.count+=n?1:-1),e})}}}),u=Object(h.a)(r.prototype,"changeCountByInp",[b.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,n){y.a.post("/react/changecount",{goodId:t,count:n}).then(function(e){}),e.carList=e.carList.map(function(e){return e.goodId==t&&(e.count=parseInt(n)),e})}}}),s=Object(h.a)(r.prototype,"delChecked",[b.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=[];e.carList.forEach(function(e){e.checked&&t.push(e.goodId)}),console.log(t),y.a.post("/react/delSelect",{goodIdList:t}).then(function(t){e.carList=e.carList.filter(function(e){return!e.checked})})}}}),Object(h.a)(r.prototype,"carNum",[b.e],Object.getOwnPropertyDescriptor(r.prototype,"carNum"),r.prototype),Object(h.a)(r.prototype,"checkNum",[b.e],Object.getOwnPropertyDescriptor(r.prototype,"checkNum"),r.prototype),Object(h.a)(r.prototype,"total",[b.e],Object.getOwnPropertyDescriptor(r.prototype,"total"),r.prototype),Object(h.a)(r.prototype,"quan",[b.e],Object.getOwnPropertyDescriptor(r.prototype,"quan"),r.prototype),r);t.a=new g},279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(4)),o=s(n(5)),a=s(n(3)),c=s(n(6)),i=s(n(13)),l=s(n(456)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function s(e){return e&&e.__esModule?e:{default:e}}var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},p=function(e){function t(){return(0,r.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,r=f(e,["className","style"]),o=r.prefixCls,a=r.children,c=(0,i.default)(o+"-wrapper",t);"class"in r&&delete r.class;var s=u.createElement("label",{className:c,style:n},u.createElement(l.default,r),a);return this.props.wrapLabel?s:u.createElement(l.default,this.props)}}]),t}(u.Component);t.default=p,p.defaultProps={prefixCls:"am-checkbox",wrapLabel:!0},e.exports=t.default},386:function(e,t,n){"use strict";n.r(t),function(e,r){n.d(t,"default",function(){return v});n(387);var o,a=n(389),c=n.n(a),i=(n(298),n(299)),l=n.n(i),u=(n(237),n(238)),s=n.n(u),f=n(37),p=n(38),d=n(40),h=n(39),b=n(41),y=(n(398),n(220)),g=n(258),m=(n(257),n(253)),v=Object(m.a)(o=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).checkOne=function(e){g.a.changeOneCheck(e.target.goodId,e.target.checked)},n.checkAll=function(e){console.log(e.target.checked),g.a.changeAllCheck(e.target.checked)},n.add=function(e,t){g.a.changeOneCount(e,!0)},n.reduce=function(e,t){t>1&&g.a.changeOneCount(e,!1)},n.changeCount=function(e,t){console.log(t.target.value);var n=t.target.value;parseInt(n)>1&&g.a.changeCountByInp(e,n)},n.delSelect=function(){g.a.delChecked()},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){g.a.getCarList()}},{key:"render",value:function(){var e=this,t=g.a.carList,n=(g.a.carNum,g.a.total),o=g.a.checkNum,a=g.a.quan;return r.createElement("div",{className:"indexview"},r.createElement(y.a,{title:"\u8d2d\u7269\u8f66"}),r.createElement("div",{style:{display:sessionStorage.token?"none":"block"}},r.createElement(s.a,{type:"primary"}," \u4f60\u5c1a\u672a\u767b\u9646,\u8bf7\u9a6c\u4e0a\u767b\u5f55  ")),r.createElement("div",{style:{display:sessionStorage.token?"block":"none"}},r.createElement("div",{style:{display:t.length>0?"none":"block"}},r.createElement("h2",null," \u4f60 \u8fd8\u4e70\u8d2d\u4e70\u4efb\u4f55\u5546\u54c1,\u8d2d\u7269\u8f66\u7a7a\u7a7a\u5982\u4e5f , \u8bf7\u9a6c\u4e0a\u53bb\u8d2d\u4e70 ")),r.createElement("div",{style:{display:!t.length>0?"none":"block"}},r.createElement("div",{id:"carDiv"},r.createElement("div",{id:"tbody"},r.createElement(l.a,{marqueeProps:{loop:!0,style:{padding:"0 7.5px"}}},"\u5373\u65e5-01.26\uff0c\u8d2d\u300c\u5e03\u83b1\u514b/\u6817\u84c9\u6697\u9999/\u677e\u4ec1\u6de1\u5976/\u6838\u6843\u65af\u8bfa/\u5e03\u6717\u5c3c\u300d\uff0c\u5b9e\u4ed8\u6ee1200\u5143\uff0c\u914d\u9001\u5b8c\u6210\u540e\u8d6021cake\u300c\u8089\u6842\u5377\u300d\u5151\u6362\u5238\u3002"),t&&t.map(function(t,n){return t.goodInfo&&r.createElement("ul",{className:"tr",key:n,id:t._id},r.createElement("li",{style:{width:"11%"}},r.createElement(c.a,{checked:t.checked,goodId:t.goodId,onChange:e.checkOne})),r.createElement("li",{style:{width:"24%"}},r.createElement("img",{src:t.goodInfo.img})),r.createElement("li",{style:{width:"38%"}},r.createElement("p",{style:{lineHeight:"18px",marginTop:"36px"}},t.goodInfo.name.slice(0,6)),r.createElement("p",{style:{lineHeight:"18px"}},"\uffe5",t.goodInfo.price)),r.createElement("li",{style:{width:"26%"}},r.createElement("span",{style:{fontSize:"22px",marginRight:"3px"},onClick:function(){return e.reduce(t.goodId,t.count)}},"-"),r.createElement("input",{goodsid:t.goodId,type:"text",value:t.count,onChange:function(n){e.changeCount(t.goodId,n)},style:{width:"54px",fontSize:"16px",textAlign:"center",background:"none",border:"0"}}),r.createElement("span",{style:{fontSize:"22px"},onClick:function(){return e.add(t.goodId,t.count)}},"+")))})),r.createElement("div",{className:"carFoot"},r.createElement(c.a,{style:{width:"4%",float:"left",marginLeft:"2%",lineHeight:"50px"},onClick:this.checkAll,checked:a}),r.createElement("p",{onClick:this.delSelect,style:{width:"28%",lineHeight:"50px",fontSize:"14px",color:"red",marginLeft:"4%"}},"\u5220\u9664\u9009\u4e2d"),r.createElement("p",{style:{width:"36%",lineHeight:"50px",color:"#fff"}},"\u5546\u54c1\u603b\u4ef7:",r.createElement("span",{style:{width:"100px",color:"red"}},"  ",n," ")),r.createElement("p",{style:{backgroundColor:"#5c3715",width:"26%",fontSize:"20px",lineHeight:"50px",textAlign:"center",color:"#fff",letterSpacing:"2px"}},"\u4e0b\u5355 ",o))))))}}]),t}(e))||o}.call(this,n(0).Component,n(0))},387:function(e,t,n){"use strict";n(70),n(262),n(388)},388:function(e,t,n){},389:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(390)),o=c(n(279)),a=c(n(397));function c(e){return e&&e.__esModule?e:{default:e}}o.default.CheckboxItem=a.default,o.default.AgreeItem=r.default,t.default=o.default,e.exports=t.default},390:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=p(n(2)),o=p(n(4)),a=p(n(5)),c=p(n(3)),i=p(n(6)),l=p(n(13)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),s=p(n(254)),f=p(n(279));function p(e){return e&&e.__esModule?e:{default:e}}var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},h=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e=this.props,t=e.style,n=d(e,["style"]),o=n.prefixCls,a=n.className,c=(0,l.default)(o+"-agree",a);return u.createElement("div",(0,r.default)({},(0,s.default)(n),{className:c,style:t}),u.createElement(f.default,(0,r.default)({},n,{className:o+"-agree-label"})))}}]),t}(u.Component);t.default=h,h.defaultProps={prefixCls:"am-checkbox"},e.exports=t.default},391:function(e,t,n){var r=n(392);var o={shouldComponentUpdate:function(e,t){return function(e,t,n){return!r(e.props,t)||!r(e.state,n)}(this,e,t)}};e.exports=o},392:function(e,t,n){"use strict";var r=n(393);e.exports=function(e,t,n,o){var a=n?n.call(o,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var c=r(e),i=r(t),l=c.length;if(l!==i.length)return!1;o=o||null;for(var u=Object.prototype.hasOwnProperty.bind(t),s=0;s<l;s++){var f=c[s];if(!u(f))return!1;var p=e[f],d=t[f],h=n?n.call(o,p,d,f):void 0;if(!1===h||void 0===h&&p!==d)return!1}return!0}},393:function(e,t,n){var r=n(394),o=n(395),a=n(396),c=/^\d+$/,i=Object.prototype.hasOwnProperty,l=r(Object,"keys"),u=9007199254740991;var s,f=(s="length",function(e){return null==e?void 0:e[s]});function p(e,t){return e="number"==typeof e||c.test(e)?+e:-1,t=null==t?u:t,e>-1&&e%1==0&&e<t}function d(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=u}function h(e){for(var t=function(e){if(null==e)return[];b(e)||(e=Object(e));var t=e.length;t=t&&d(t)&&(a(e)||o(e))&&t||0;var n=e.constructor,r=-1,c="function"==typeof n&&n.prototype===e,l=Array(t),u=t>0;for(;++r<t;)l[r]=r+"";for(var s in e)u&&p(s,t)||"constructor"==s&&(c||!i.call(e,s))||l.push(s);return l}(e),n=t.length,r=n&&e.length,c=!!r&&d(r)&&(a(e)||o(e)),l=-1,u=[];++l<n;){var s=t[l];(c&&p(s,r)||i.call(e,s))&&u.push(s)}return u}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var y=l?function(e){var t,n=null==e?void 0:e.constructor;return"function"==typeof n&&n.prototype===e||"function"!=typeof e&&(null!=(t=e)&&d(f(t)))?h(e):b(e)?l(e):[]}:h;e.exports=y},394:function(e,t){var n="[object Function]",r=/^\[object .+?Constructor\]$/;var o=Object.prototype,a=Function.prototype.toString,c=o.hasOwnProperty,i=o.toString,l=RegExp("^"+a.call(c).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e,t){var o=null==e?void 0:e[t];return function(e){if(null==e)return!1;if(function(e){return function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}(e)&&i.call(e)==n}(e))return l.test(a.call(e));return function(e){return!!e&&"object"==typeof e}(e)&&r.test(e)}(o)?o:void 0}},395:function(e,t){var n=9007199254740991,r="[object Arguments]",o="[object Function]",a="[object GeneratorFunction]",c=Object.prototype,i=c.hasOwnProperty,l=c.toString,u=c.propertyIsEnumerable;e.exports=function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}(e.length)&&!function(e){var t=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}(e)?l.call(e):"";return t==o||t==a}(e)}(e)}(e)&&i.call(e,"callee")&&(!u.call(e,"callee")||l.call(e)==r)}},396:function(e,t){var n="[object Function]",r=/^\[object .+?Constructor\]$/;function o(e){return!!e&&"object"==typeof e}var a=Object.prototype,c=Function.prototype.toString,i=a.hasOwnProperty,l=a.toString,u=RegExp("^"+c.call(i).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),s=function(e,t){var a=null==e?void 0:e[t];return function(e){if(null==e)return!1;if(function(e){return function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}(e)&&l.call(e)==n}(e))return u.test(c.call(e));return o(e)&&r.test(e)}(a)?a:void 0}(Array,"isArray"),f=9007199254740991;var p=s||function(e){return o(e)&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=f}(e.length)&&"[object Array]"==l.call(e)};e.exports=p},397:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(2)),o=d(n(12)),a=d(n(4)),c=d(n(5)),i=d(n(3)),l=d(n(6)),u=d(n(13)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),f=d(n(276)),p=d(n(279));function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},b=f.default.Item;function y(){}var g=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.listPrefixCls,a=(t.onChange,t.disabled),c=t.checkboxProps,i=t.onClick,l=h(t,["listPrefixCls","onChange","disabled","checkboxProps","onClick"]),f=l.prefixCls,d=l.className,g=l.children,m=(0,u.default)(f+"-item",d,(0,o.default)({},f+"-item-disabled",!0===a));a||(l.onClick=i||y);var v={};return["name","defaultChecked","checked","onChange","disabled"].forEach(function(t){t in e.props&&(v[t]=e.props[t])}),s.createElement(b,(0,r.default)({},l,{prefixCls:n,className:m,thumb:s.createElement(p.default,(0,r.default)({},c,v))}),g)}}]),t}(s.Component);t.default=g,g.defaultProps={prefixCls:"am-checkbox",listPrefixCls:"am-list",checkboxProps:{}},e.exports=t.default},398:function(e,t,n){},456:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(12),c=n.n(a),i=n(83),l=n.n(i),u=n(4),s=n.n(u),f=n(5),p=n.n(f),d=n(3),h=n.n(d),b=n(6),y=n.n(b),g=n(0),m=n.n(g),v=n(1),O=n.n(v),k=n(391),j=n.n(k),C=n(13),w=n.n(C),x=function(e){function t(e){s()(this,t);var n=h()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));E.call(n);var r="checked"in e?e.checked:e.defaultChecked;return n.state={checked:r},n}return y()(t,e),p()(t,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:e.checked})}},{key:"shouldComponentUpdate",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return j.a.shouldComponentUpdate.apply(this,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,a=t.style,i=t.name,u=t.type,s=t.disabled,f=t.readOnly,p=t.tabIndex,d=t.onClick,h=t.onFocus,b=t.onBlur,y=l()(t,["prefixCls","className","style","name","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur"]),g=Object.keys(y).reduce(function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=y[t]),e},{}),v=this.state.checked,O=w()(n,r,(e={},c()(e,n+"-checked",v),c()(e,n+"-disabled",s),e));return m.a.createElement("span",{className:O,style:a},m.a.createElement("input",o()({name:i,type:u,readOnly:f,disabled:s,tabIndex:p,className:n+"-input",checked:!!v,onClick:d,onFocus:h,onBlur:b,onChange:this.handleChange},g)),m.a.createElement("span",{className:n+"-inner"}))}}]),t}(m.a.Component);x.propTypes={prefixCls:O.a.string,className:O.a.string,style:O.a.object,name:O.a.string,type:O.a.string,defaultChecked:O.a.oneOfType([O.a.number,O.a.bool]),checked:O.a.oneOfType([O.a.number,O.a.bool]),disabled:O.a.bool,onFocus:O.a.func,onBlur:O.a.func,onChange:O.a.func,onClick:O.a.func,tabIndex:O.a.string,readOnly:O.a.bool},x.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}};var E=function(){var e=this;this.handleChange=function(t){var n=e.props;n.disabled||("checked"in n||e.setState({checked:t.target.checked}),n.onChange({target:o()({},n,{checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()}}))}},P=x;n.d(t,"default",function(){return P})}}]);
//# sourceMappingURL=11.4241ce38.chunk.js.map