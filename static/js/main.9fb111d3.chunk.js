(this["webpackJsonpreact-hw-03"]=this["webpackJsonpreact-hw-03"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(6),i=n.n(a),s=(n(12),n(1)),c=n(2),u=n(4),m=n(3),p=(n(13),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={isActive:!1},t.autoStartTimer=function(){t.props.autostart&&t.startTimer()},t.startTimer=function(){t.setState({isActive:!0});var e=t.props.count/1e3;t.interval=setInterval((function(){t.setState((function(e){return{count:e.count-t.props.step}})),1===e&&(t.componentWillUnmount(),t.props.timerStart&&t.props.timerOut()),e--}),t.props.step),t.props.timerStart&&t.props.timerStart()},t.pauseTimer=function(){t.componentWillUnmount(),t.setState({isActive:!1}),t.props.timerStop&&t.props.timerStop()},t.resetTimer=function(){var e=t.props.count;t.setState({isActive:!1,count:e}),t.props.autostart?(t.pauseTimer(),t.startTimer()):t.pauseTimer(),t.props.timerReset&&t.props.timerReset()},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.count;this.setState({count:t}),this.autoStartTimer()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var t=this.state.count;return o.a.createElement("div",{className:"timer-container"},o.a.createElement("div",{className:"timer-box"},"Current count: ",t/1e3),o.a.createElement("button",{className:"timer-btn",onClick:this.state.isActive?this.pauseTimer:this.startTimer},this.state.isActive?"Pause":"Start"),o.a.createElement("button",{className:"timer-btn",onClick:this.resetTimer},"Reset"))}}]),n}(r.Component)),l=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p,{count:2e3,step:1e3}),o.a.createElement(p,{count:2e3,step:1e3,autostart:!0,timerStart:function(){return console.log("Timer started")},timerStop:function(){return console.log("Timer stopped")},timerReset:function(){return console.log("Timer restarted")},timerOut:function(){return console.log("Timer out")}}))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.9fb111d3.chunk.js.map