(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"static/media/tomato.78df75cb.svg"},40:function(e,t,a){e.exports=a(80)},45:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){e.exports=a.p+"static/media/home-view.251d3b2f.png"},70:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),i=a.n(s),c=(a(45),a(3)),o=a(4),l=a(6),m=a(5),u=a(7),d=a(15),p=a.n(d),h=a(22),f=a(16),v=a(35),b=a(17),g=a.n(b),T=a(36),E=a.n(T),y=(a(12),a(19),a(32),a(33),function(){return r.a.createElement("div",{className:"columns"},r.a.createElement("a",{className:"btn column card is-centered m-md",href:"#/"},"Home"),r.a.createElement("a",{className:"btn column card is-centered m-md",href:"#/pomodoro"},"Pomodoro Timer"),r.a.createElement("a",{className:"btn column card is-centered m-md",href:"#/mc2"},"Advanced Vigenere"))}),N=a(37),k=a.n(N),w=(a(67),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={percentage:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"convertTime",value:function(e){var t=new Date(null);return t.setSeconds(e),t.toISOString().substr(11,8)}},{key:"render",value:function(){var e=this.props,t=e.percentage,a=e.strokeWidth;return r.a.createElement("div",{style:{width:"35rem"}},r.a.createElement(k.a,{className:"title",styles:{path:{stroke:"#d74141",transition:"stroke-dashoffset 0.5s ease 0s"},text:{fill:"#d74141",fontSize:"1rem"}},strokeWidth:a,percentage:t,text:this.convertTime(this.props.time)}))}}]),t}(n.Component)),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={intervallId:0,focusTime:0,startFocusTime:0,pauseTime:0,startPauseTime:0,timer:"",changedFocusTimer:0,changedPauseTimer:0},a.tick=function(e){if("f"===e){var t=100-100*a.state.focusTime/a.state.startFocusTime,n=r.a.createElement(w,{time:a.state.focusTime,strokeWidth:5,percentage:t});i.a.render(n,document.getElementById("tick")),a.setState({focusTime:a.state.focusTime-1}),-1===a.state.focusTime&&clearInterval(a.state.intervallId)}else if("p"===e){var s=100-100*a.state.pauseTime/a.state.startPauseTime,c=r.a.createElement(w,{time:a.state.pauseTime,strokeWidth:5,percentage:s});i.a.render(c,document.getElementById("tick")),a.setState({pauseTime:a.state.pauseTime-1}),-1===a.state.pauseTime&&clearInterval(a.state.intervallId)}else{var o=r.a.createElement(w,{time:0,strokeWidth:5,percentage:0});i.a.render(o,document.getElementById("tick"))}},a.handleChange=function(e){e.target.value>=0&&a.setState(Object(f.a)({},e.target.name,60*e.target.value))},a.handleSubmitButton=function(){var e=Object(h.a)(p.a.mark(function e(t){var n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"startFocusTimer"===t.target.name?(n="/api/timer/focus/start",r=a.state.changedFocusTimer):"startPauseTimer"===t.target.name&&(n="/api/timer/pause/start",r=a.state.changedPauseTimer),e.next=3,g.a.get("https://express-pomodoro-timer.firebaseapp.com/api/timer/stop");case 3:return e.next=5,g.a.post("https://express-pomodoro-timer.firebaseapp.com"+n,{time:r/60}).then(function(e){if(e.data.focusTimer.runs)var t="f";else t=e.data.pauseTimer.runs?"p":"none";a.setState({focusTime:e.data.focusTimer.focusTime,pauseTime:e.data.pauseTimer.pauseTime,startFocusTime:e.data.focusTimer.startTime,startPauseTime:e.data.pauseTimer.startTime,changedFocusTimer:e.data.focusTimer.startTime,changedPauseTimer:e.data.pauseTimer.startTime,timer:t})});case 5:window.location.reload();case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(p.a.mark(function e(){var t=this;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="Pomodoro Timer",e.next=3,g.a.get("https://express-pomodoro-timer.firebaseapp.com/api/timer/status").then(function(e){if(e.data.focusTimer.runs)var a="f";else a=e.data.pauseTimer.runs?"p":"none";t.setState({focusTime:e.data.focusTimer.focusTime,pauseTime:e.data.pauseTimer.pauseTime,startFocusTime:e.data.focusTimer.startTime,startPauseTime:e.data.pauseTimer.startTime,changedFocusTimer:e.data.focusTimer.startTime,changedPauseTimer:e.data.pauseTimer.startTime,timer:a})});case 3:"none"!==this.state.timer?(this.setState({intervallId:setInterval(function(){t.tick(t.state.timer)},1e3)}),this.tick(this.state.timer)):(clearInterval(this.state.intervallId),this.tick());case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervallId)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Pomodoro section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container section"},r.a.createElement("h1",{className:"title is-1 has-text-white"},"Pomodoro Timer")),r.a.createElement("div",{className:"columns is-10"},r.a.createElement("div",{id:"tick",className:"column m-lg is-9 is-centered"}),r.a.createElement("div",{className:"column is-3"},r.a.createElement("img",{titel:"designed by Freepik from Flaticon",src:E.a,className:"Pomodoro-logo",alt:"logo"}),r.a.createElement("p",{className:"section subtitle has-text-white is-small"},"designed by Freepik from Flaticon"),r.a.createElement("div",{className:"is-centered"},r.a.createElement(v.a,{trigger:r.a.createElement("button",{className:"btn box"},"Options"),modal:!0,closeOnDocumentClick:!0},r.a.createElement("div",{className:"columns p-sm"},r.a.createElement("div",{className:"column"},r.a.createElement("h1",{className:"subtitle is-4"},"Focus Time:"),r.a.createElement("span",null,"Time in minutes"),r.a.createElement("input",{name:"changedFocusTimer",value:this.state.changedFocusTimer/60,onChange:this.handleChange,className:"input is-primary has-text-centered",type:"number"}),r.a.createElement("button",{name:"startFocusTimer",className:"button p-none m-t-sm column is-primary is-fullwidth",onClick:this.handleSubmitButton},"Start Focus")),r.a.createElement("div",{className:"column"},r.a.createElement("h1",{className:"subtitle is-4"},"Pause Time:"),r.a.createElement("span",null,"Time in minutes"),r.a.createElement("input",{name:"changedPauseTimer",value:this.state.changedPauseTimer/60,onChange:this.handleChange,className:"input is-primary has-text-centered",type:"number"}),r.a.createElement("button",{name:"startPauseTimer",className:"button p-none m-t-sm column is-primary is-fullwidth",onClick:this.handleSubmitButton},"Start Pause"))))))),r.a.createElement("div",{className:"section"},r.a.createElement(y,null))))}}]),t}(n.Component),C=(a(68),a(69)),O=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){document.title="Welcome"}},{key:"render",value:function(){return r.a.createElement("div",{className:"has-background-black",id:"whole-page"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section"},r.a.createElement("div",null,r.a.createElement("h1",{className:"m-b-xl title is-1 has-text-centered has-text-white"},"Welcome to mpmamaci.com"),r.a.createElement(y,null)),r.a.createElement("div",{className:"m-lg"},r.a.createElement("img",{className:"image",src:C,alt:"",border:"5rem"})))))}}]),t}(n.Component);function F(e,t){for(var a,n=e,r=0;r<e.length;r+=1)(e.charCodeAt(r)<=32||e.charCodeAt(r)>=226)&&(r+=1),(a=e.charCodeAt(r)-33-(t.charCodeAt(r%t.length)-33))<0&&(a+=193),a%=193,n=n.replaceAt(r,String.fromCharCode(a+33));return n}function j(e,t){for(var a,n=e,r=0;r<e.length;r+=1)(e.charCodeAt(r)<=32||e.charCodeAt(r)>=226)&&(r+=1),a=((a=e.charCodeAt(r)-33)+(t.charCodeAt(r%t.length)-33))%193,n=n.replaceAt(r,String.fromCharCode(a+33));return n}function S(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title is-3 is-spaced has-text-white"},"MC-2.0 Cipher"),r.a.createElement("p",{className:"subtitle is-4 has-text-white-ter"},"a low-level string encryption based on vigenere"))}function P(){return r.a.createElement("div",{className:"section"},r.a.createElement("a",{className:"has-text-info has-text-left subtitle is-3",href:"https://drive.google.com/file/d/12FUF_74zSd7J3KBtSvkC8TGALyL-KMHV/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("u",null,"Python Version for File Encryption")))}String.prototype.replaceAt=function(e,t){return this.substr(0,e)+t+this.substr(e+t.length)};a(70);var A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={inputField:"",outputField:"",passwordField:""},a.handleChange=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a.handleButtonClick=function(e){"encryption"===e.target.name?a.setState({outputField:j(a.state.inputField,a.state.passwordField)}):"decryption"===e.target.name&&a.setState({outputField:F(a.state.inputField,a.state.passwordField)})},a.TextFields=function(){return r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-half"},r.a.createElement("p",{className:"has-text-white-ter has-text-left subtitle is-5"},"Enter your text here:"),r.a.createElement("textarea",{name:"inputField",value:a.state.inputField,onChange:a.handleChange,className:"form-control textarea upperTextbox"}),r.a.createElement("p",{className:"has-text-white-ter has-text-left subtitle is-5"},"Password:"),r.a.createElement("input",{name:"passwordField",value:a.state.passwordField,onChange:a.handleChange,className:"input is-primary",type:"text"}),r.a.createElement("div",{className:"columns innerColumnsStyle is-mobile"},r.a.createElement("button",{name:"encryption",onClick:a.handleButtonClick,className:"column button is-white is-fullwidth stylesButton",type:"button"},"encryption"),r.a.createElement("button",{name:"decryption",onClick:a.handleButtonClick,className:"column button is-white is-fullwidth stylesButton",type:"button"},"decryption"))),r.a.createElement("div",{className:"column is-half"},r.a.createElement("p",{className:"has-text-white-ter has-text-left subtitle is-5"},"Result:"),r.a.createElement("textarea",{value:a.state.outputField,className:"textarea",type:"text",readOnly:!0})))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){document.title="MC-2 Cipher"}},{key:"render",value:function(){return r.a.createElement("div",{className:"cipher-header section has-background-black has-text-centered"},r.a.createElement(S,null),r.a.createElement("div",{className:"container section is-medium"},r.a.createElement("div",null,this.TextFields()),r.a.createElement(P,null),r.a.createElement(y,null)))}}]),t}(n.Component),I=a(21),B=a(13),W=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(I.a,null,r.a.createElement("div",null,this.props.routes.map(function(e){return r.a.createElement(B.a,{key:e.path,path:e.path,exact:!0,component:e.component})})))}}]),t}(n.Component),M=(a(79),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={components:[{path:"/",component:O},{path:"/pomodoro",component:x},{path:"/mc2",component:A}]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(W,{routes:this.state.components})}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.cb06035a.chunk.js.map