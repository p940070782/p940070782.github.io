(window["webpackJsonpmy-react"]=window["webpackJsonpmy-react"]||[]).push([[8],{224:function(e,t,n){"use strict";n.r(t),function(e,r){n.d(t,"default",(function(){return d}));var i=n(16),l=n(17),o=n(19),a=n(18),c=n(20),u=(n(279),n(232)),s=n(24),f=n(244),d=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(a.a)(t).call(this))).state={conllectList:[],pic:n(239)},e}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;s.a.post("/react/getIConllect").then((function(t){e.setState({conllectList:t.data.result})}))}},{key:"render",value:function(){var e=this.state,t=e.conllectList,n=e.pic;return r.createElement("div",null,r.createElement(u.a,{title:"\u6211\u7684\u6536\u85cf",leftShow:!0}),r.createElement("div",{style:{display:0==t.length?"block":"none",fontFamily:"\u5e7c\u5706",fontSize:25,margin:"5rem 0 0.4rem",textAlign:"center"}},"\u60a8\u7684\u6536\u85cf\u5217\u8868\u7a7a\u7a7a\u5982\u4e5f\u3002\u3002\u3002"),r.createElement("div",{style:{display:0==t.length?"none":"block"}},t.map((function(e,t){return r.createElement(f.a,{key:t,word:e.word,pic:n})}))))}}]),t}(e)}.call(this,n(0).Component,n(0))},232:function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return y}));n(240);var i=n(241),l=n.n(i),o=(n(242),n(243)),a=n.n(o),c=(n(112),n(113)),u=n.n(c),s=n(16),f=n(17),d=n(19),p=n(18),m=n(20),h=(n(233),n(42)),y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).goBack=function(e){e&&h.a.go(-1)},n.gotoSearch=function(){h.a.push("/search")},n}return Object(m.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,i=t.leftShow,l=t.rightShow,o=t.typeShow,c=t.mineShow;return r.createElement(a.a,{style:{position:"relative"},mode:"light",icon:i&&r.createElement(u.a,{style:{color:"#333"},type:"left"}),onLeftClick:function(){return e.goBack(i)},rightContent:[l&&r.createElement(u.a,{key:"0",type:"search",style:{marginRight:"0.2rem",color:"#333"},onClick:this.gotoSearch})]},n,o&&r.createElement("p",{style:{position:"absolute",right:"0",top:"0.3rem",fontSize:"0.3rem",marginRight:"0.25rem",lineHeight:1}},"\u53ea\u770b\u8bc4\u8bba"),c&&r.createElement("p",{style:{color:"#333333",position:"absolute",right:"0",top:"0.3rem"}},r.createElement("i",{className:"iconfont icon-biaoqing",onClick:function(){return b("\u591c\u95f4\u6a21\u5f0f","\u79f0\u4e3a\u4f1a\u5458\u540e\uff0c\u5373\u53ef\u4f7f\u7528\u5e26\u6709\u6697\u9ed1\u4e3b\u9898\u7684\u591c\u95f4\u6a21\u5f0f\uff0c\u5206\u4eab\u6697\u8272\u4e3b\u9898\u5361\u7247\uff0c\u4ee5\u53ca\u66f4\u591a\u9ad8\u7ea7\u529f\u80fd\u3002")}}),r.createElement("i",{className:"iconfont icon-xingtaiduICON_sousuo--",onClick:function(){return b("\u5feb\u901f\u641c\u7d22","\u79f0\u4e3a\u4f1a\u5458\u540e\uff0c\u5373\u53ef\u5feb\u901f\u641c\u7d22\u81ea\u5df1\u521b\u5efa\u641c\u7d22\u81ea\u5df1\u521b\u5efa/\u6536\u85cf\u7684\u5361\u7247\uff0c\u4ee5\u53ca\u4f7f\u7528\u66f4\u591a\u9ad8\u7ea7\u529f\u80fd\u3002")}}),r.createElement("i",{className:"iconfont icon-shezhi",onClick:function(){return h.a.push("/fit")}})))}}]),t}(e),v=l.a.alert,b=function(e,t){var n=v(e,t,[{text:"\u53d6\u6d88",onPress:function(){return console.log("cancel")},style:"default"},{text:"\u4e86\u89e3\u4f1a\u5458",onPress:function(){return console.log("ok")}}]);setTimeout((function(){console.log("auto close"),n.close()}),5e5)}}).call(this,n(0).Component,n(0))},233:function(e,t,n){},234:function(e,t,n){"use strict";n(41),n(237)},235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(2)),i=f(n(3)),l=f(n(6)),o=f(n(4)),a=f(n(5)),c=f(n(28)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),s=f(n(238));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n},p=function(e){function t(){return(0,i.default)(this,t),(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,a.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.children,i=e.className,l=e.style,o=e.renderHeader,a=e.renderFooter,s=d(e,["prefixCls","children","className","style","renderHeader","renderFooter"]),f=(0,c.default)(t,i);return u.createElement("div",(0,r.default)({className:f,style:l},s),o?u.createElement("div",{className:t+"-header"},"function"===typeof o?o():o):null,n?u.createElement("div",{className:t+"-body"},n):null,a?u.createElement("div",{className:t+"-footer"},"function"===typeof a?a():a):null)}}]),t}(u.Component);t.default=p,p.Item=s.default,p.defaultProps={prefixCls:"am-list"},e.exports=t.default},237:function(e,t,n){},238:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Brief=void 0;var r=d(n(2)),i=d(n(14)),l=d(n(3)),o=d(n(6)),a=d(n(4)),c=d(n(5)),u=d(n(28)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),f=d(n(236));function d(e){return e&&e.__esModule?e:{default:e}}var p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n},m=t.Brief=function(e){function t(){return(0,l.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return s.createElement("div",{className:"am-list-brief",style:this.props.style},this.props.children)}}]),t}(s.Component),h=function(e){function t(e){(0,l.default)(this,t);var n=(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onClick=function(e){var t=n.props,r=t.onClick,i=t.platform;if(r&&"android"===i){n.debounceTimeout&&(clearTimeout(n.debounceTimeout),n.debounceTimeout=null);var l=e.currentTarget,o=Math.max(l.offsetHeight,l.offsetWidth),a=e.currentTarget.getBoundingClientRect(),c={width:o+"px",height:o+"px",left:e.clientX-a.left-l.offsetWidth/2+"px",top:e.clientY-a.top-l.offsetWidth/2+"px"};n.setState({coverRippleStyle:c,RippleClicked:!0},(function(){n.debounceTimeout=setTimeout((function(){n.setState({coverRippleStyle:{display:"none"},RippleClicked:!1})}),1e3)}))}r&&r(e)},n.state={coverRippleStyle:{display:"none"},RippleClicked:!1},n}return(0,c.default)(t,e),(0,o.default)(t,[{key:"componentWillUnmount",value:function(){this.debounceTimeout&&(clearTimeout(this.debounceTimeout),this.debounceTimeout=null)}},{key:"render",value:function(){var e,t,n,l=this,o=this.props,a=o.prefixCls,c=o.className,d=o.activeStyle,m=o.error,h=o.align,y=o.wrap,v=o.disabled,b=o.children,g=o.multipleLine,w=o.thumb,O=o.extra,E=o.arrow,k=o.onClick,x=p(o,["prefixCls","className","activeStyle","error","align","wrap","disabled","children","multipleLine","thumb","extra","arrow","onClick"]),C=(x.platform,p(x,["platform"])),j=this.state,N=j.coverRippleStyle,S=j.RippleClicked,_=(0,u.default)(a+"-item",c,(e={},(0,i.default)(e,a+"-item-disabled",v),(0,i.default)(e,a+"-item-error",m),(0,i.default)(e,a+"-item-top","top"===h),(0,i.default)(e,a+"-item-middle","middle"===h),(0,i.default)(e,a+"-item-bottom","bottom"===h),e)),P=(0,u.default)(a+"-ripple",(0,i.default)({},a+"-ripple-animate",S)),T=(0,u.default)(a+"-line",(t={},(0,i.default)(t,a+"-line-multiple",g),(0,i.default)(t,a+"-line-wrap",y),t)),R=(0,u.default)(a+"-arrow",(n={},(0,i.default)(n,a+"-arrow-horizontal","horizontal"===E),(0,i.default)(n,a+"-arrow-vertical","down"===E||"up"===E),(0,i.default)(n,a+"-arrow-vertical-up","up"===E),n)),L=s.createElement("div",(0,r.default)({},C,{onClick:function(e){l.onClick(e)},className:_}),w?s.createElement("div",{className:a+"-thumb"},"string"===typeof w?s.createElement("img",{src:w}):w):null,s.createElement("div",{className:T},void 0!==b&&s.createElement("div",{className:a+"-content"},b),void 0!==O&&s.createElement("div",{className:a+"-extra"},O),E&&s.createElement("div",{className:R,"aria-hidden":"true"})),s.createElement("div",{style:N,className:P})),B={};return Object.keys(C).forEach((function(e){/onTouch/i.test(e)&&(B[e]=C[e],delete C[e])})),s.createElement(f.default,(0,r.default)({},B,{disabled:v||!k,activeStyle:d,activeClassName:a+"-item-active"}),L)}}]),t}(s.Component);h.defaultProps={prefixCls:"am-list",align:"middle",error:!1,multipleLine:!1,wrap:!1,platform:"ios"},h.Brief=m,t.default=h},239:function(e,t,n){e.exports=n.p+"static/media/touxiang.19c571b0.jpg"},244:function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return d}));var i=n(16),l=n(17),o=n(19),a=n(18),c=n(20),u=(n(234),n(235)),s=n.n(u),f=(n(245),s.a.Item),d=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(a.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.word,n=e.pic;return r.createElement("div",null,r.createElement(s.a,{renderHeader:function(){return""},className:"my-list"},r.createElement(f,{thumb:n},t.creator)),r.createElement(s.a,null,r.createElement("div",{style:{display:"block",position:"relative",color:"#333",boxShadow:"1px 1px 1px 1px rgba(192, 192, 192, 0.8)",background:"#fff",textAlign:"center",width:"80%",marginLeft:"0.8rem",paddingBottom:"0.2rem"}},r.createElement("a",{href:"#/detail/".concat(t.id),style:{display:"block",position:"relative",color:"#333"}},r.createElement("img",{src:t.img,alt:"",style:{width:"100%",verticalAlign:"top",height:"3rem",marginBottom:"1rem"},onLoad:function(){window.dispatchEvent(new Event("resize"))}}),r.createElement("div",{className:"content",style:{position:"relative",padding:"0.4rem"}},r.createElement("p",{className:"hitokoto",style:{height:"3rem",marginBottom:"0.2rem"}},t.hitokoto),r.createElement("p",{className:"fromTitle",style:{textAlign:"center",overflow:"hidden",width:"100%",whiteSpace:"nowrap",textOverflow:"ellipsis"}},"-\u300a",t.from,"\u300b-")),r.createElement("p",{style:{marginLeft:"0.1rem",textAlign:"left"}},"#",t.type.text)))))}}]),t}(e)}).call(this,n(0).Component,n(0))},245:function(e,t,n){},279:function(e,t,n){}}]);
//# sourceMappingURL=8.e65b0688.chunk.js.map