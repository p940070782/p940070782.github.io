(window["webpackJsonpmy-react"]=window["webpackJsonpmy-react"]||[]).push([[12],{230:function(e,t,n){"use strict";n.r(t),function(e,i){n.d(t,"default",(function(){return y}));n(252);var o=n(253),a=n.n(o),c=n(16),r=n(17),l=n(19),s=n(18),u=n(20),m=(n(234),n(235)),p=n.n(m),h=(n(294),n(232)),f=n(42),g=n(295),d=p.a.Item,y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).todoLogin=function(){f.a.push("/login")},e.clearLogin=function(){sessionStorage.token="",sessionStorage.mobile="",f.a.push("/login")},e.state={isLogin:sessionStorage.token},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.isLogin;return i.createElement("div",null,i.createElement(h.a,{title:"",mineShow:!0}),i.createElement("div",{style:{display:e?"block":"none"}},i.createElement("div",{style:{width:"100%",height:"4rem",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#eee",background:"url(http://peng47.com/imgs/yiyan/yiyanbeijing.jpg) no-repeat",backgroundSize:"100% 100%"}},i.createElement(g.a,null)),i.createElement(p.a,{renderHeader:function(){return"\u6211\u7684"},className:"my-list"},i.createElement(d,{arrow:"horizontal",multipleLine:!0,onClick:function(){f.a.push("/ilike")}},i.createElement("i",{className:"iconfont icon-xihuan",style:{marginRight:"0.1rem"}}),"\u6211\u7684\u559c\u6b22"),i.createElement(d,{arrow:"horizontal",multipleLine:!0,onClick:function(){f.a.push("/iconllect")}},i.createElement("i",{className:"iconfont icon-shuqian_B",style:{marginRight:"0.1rem"}}),"\u6211\u7684\u6536\u85cf")),i.createElement(p.a,{renderHeader:function(){return"\u64cd\u4f5c"},className:"my-list"},i.createElement(d,{arrow:"horizontal",onClick:function(){}},"\u6e05\u9664\u7f13\u5b58"),i.createElement(d,{arrow:"horizontal",onClick:this.clearLogin},"\u9000\u51fa\u767b\u5f55")),i.createElement("p",{style:{textAlign:"center",color:"#ccc",fontFamily:"\u4eff\u5b8b",fontSize:"0.4rem",margin:"0.5rem 0"}},"\u4e00\u8a003.31")),i.createElement("div",{style:{display:e?"none":"block",textAlign:"center"}},i.createElement("p",{style:{fontFamily:"\u5e7c\u5706",fontSize:25,margin:"2rem 0 0.4rem"}},"\u4eb2\uff0c\u70b9\u51fb\u767b\u5f55\u540e\u67e5\u770b\u54e6"),i.createElement(a.a,{onClick:this.todoLogin,inline:!0,style:{padding:"0.1rem,0.2rem",background:"#eee"}},"\u53bb\u767b\u5f55")))}}]),t}(e)}.call(this,n(0).Component,n(0))},232:function(e,t,n){"use strict";(function(e,i){n.d(t,"a",(function(){return d}));n(240);var o=n(241),a=n.n(o),c=(n(242),n(243)),r=n.n(c),l=(n(112),n(113)),s=n.n(l),u=n(16),m=n(17),p=n(19),h=n(18),f=n(20),g=(n(233),n(42)),d=function(e){function t(){var e,n;Object(u.a)(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).goBack=function(e){e&&g.a.go(-1)},n.gotoSearch=function(){g.a.push("/search")},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,o=t.leftShow,a=t.rightShow,c=t.typeShow,l=t.mineShow;return i.createElement(r.a,{style:{position:"relative"},mode:"light",icon:o&&i.createElement(s.a,{style:{color:"#333"},type:"left"}),onLeftClick:function(){return e.goBack(o)},rightContent:[a&&i.createElement(s.a,{key:"0",type:"search",style:{marginRight:"0.2rem",color:"#333"},onClick:this.gotoSearch})]},n,c&&i.createElement("p",{style:{position:"absolute",right:"0",top:"0.3rem",fontSize:"0.3rem",marginRight:"0.25rem",lineHeight:1}},"\u53ea\u770b\u8bc4\u8bba"),l&&i.createElement("p",{style:{color:"#333333",position:"absolute",right:"0",top:"0.3rem"}},i.createElement("i",{className:"iconfont icon-biaoqing",onClick:function(){return b("\u591c\u95f4\u6a21\u5f0f","\u79f0\u4e3a\u4f1a\u5458\u540e\uff0c\u5373\u53ef\u4f7f\u7528\u5e26\u6709\u6697\u9ed1\u4e3b\u9898\u7684\u591c\u95f4\u6a21\u5f0f\uff0c\u5206\u4eab\u6697\u8272\u4e3b\u9898\u5361\u7247\uff0c\u4ee5\u53ca\u66f4\u591a\u9ad8\u7ea7\u529f\u80fd\u3002")}}),i.createElement("i",{className:"iconfont icon-xingtaiduICON_sousuo--",onClick:function(){return b("\u5feb\u901f\u641c\u7d22","\u79f0\u4e3a\u4f1a\u5458\u540e\uff0c\u5373\u53ef\u5feb\u901f\u641c\u7d22\u81ea\u5df1\u521b\u5efa\u641c\u7d22\u81ea\u5df1\u521b\u5efa/\u6536\u85cf\u7684\u5361\u7247\uff0c\u4ee5\u53ca\u4f7f\u7528\u66f4\u591a\u9ad8\u7ea7\u529f\u80fd\u3002")}}),i.createElement("i",{className:"iconfont icon-shezhi",onClick:function(){return g.a.push("/fit")}})))}}]),t}(e),y=a.a.alert,b=function(e,t){var n=y(e,t,[{text:"\u53d6\u6d88",onPress:function(){return console.log("cancel")},style:"default"},{text:"\u4e86\u89e3\u4f1a\u5458",onPress:function(){return console.log("ok")}}]);setTimeout((function(){console.log("auto close"),n.close()}),5e5)}}).call(this,n(0).Component,n(0))},233:function(e,t,n){},239:function(e,t,n){e.exports=n.p+"static/media/touxiang.19c571b0.jpg"},294:function(e,t,n){},295:function(e,t,n){"use strict";(function(e,i){n.d(t,"a",(function(){return u}));var o=n(16),a=n(17),c=n(19),r=n(18),l=n(20),s=(n(296),n(24)),u=(n(72),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(r.a)(t).call(this))).handleClick=function(){e.inp.click()},e.upload=function(){console.log("\u9a6c\u4e0a\u4e0a\u4f20\u56fe\u7247....");var t=e.inp.files[0],n=new FormData;n.append("avatar",t),Object(s.a)({url:"/react/uploadAvatar",method:"POST",data:n,contentType:!1,processData:!1}).then((function(t){200==t.data.code&&e.setState({pic:t.data.pic.replace(/public/,"https://peng47.com:1907/")})}))},e.state={pic:"",mobile:sessionStorage.mobile?sessionStorage.mobile:""},e}return Object(l.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this;s.a.post("/react/getAvatar").then((function(t){t.data.type?e.setState({pic:t.data.result.pic.replace(/public/,"https://peng47.com:1907/")}):e.setState({pic:n(239)})}))}},{key:"render",value:function(){var e=this;return i.createElement("div",null,i.createElement("img",{src:this.state.pic,alt:"",onClick:this.handleClick,className:"touxiang"}),i.createElement("input",{ref:function(t){return e.inp=t},style:{display:"none"},onChange:this.upload,type:"file"}),i.createElement("p",{style:{marginTop:"0.2rem"}},this.state.mobile))}}]),t}(e))}).call(this,n(0).Component,n(0))},296:function(e,t,n){}}]);
//# sourceMappingURL=12.c2d499f7.chunk.js.map