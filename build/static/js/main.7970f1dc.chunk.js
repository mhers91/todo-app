(window.webpackJsonptodo=window.webpackJsonptodo||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),l=(n(14),n(7)),s=n(8),i=n(1),u=n(3),m=n(2),d=n(4),p=(n(15),n(16),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return o.a.createElement("h4",{className:"bg-primary text-white text-center p-2"},n.props.name,"'s To Do List (",n.props.tasks.filter((function(e){return!e.done})).length," items to do)")},n}return Object(d.a)(t,e),t}(a.Component)),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).updateNewTextValue=function(e){n.setState({newItemText:e.target.value})},n.createNewTodo=function(){n.props.callback(n.state.newItemText),n.setState({newItemText:""})},n.render=function(){return o.a.createElement("div",{className:"my-1"},o.a.createElement("input",{className:"form-control",value:n.state.newItemText,onChange:n.updateNewTextValue}),o.a.createElement("button",{className:"btn btn-primary mt-1",onClick:n.createNewTodo},"Add"))},n.state={newItemText:""},n}return Object(d.a)(t,e),t}(a.Component),f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return o.a.createElement("tr",null,o.a.createElement("td",null,n.props.item.action),o.a.createElement("td",null,o.a.createElement("input",{type:"checkbox",checked:n.props.item.done,onChange:function(){return n.props.callback(n.props.item)}})))},n}return Object(d.a)(t,e),t}(a.Component),h=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return o.a.createElement("div",{className:"form-check"},o.a.createElement("input",{className:"form-check-input",type:"checkbox",checked:n.props.isChecked,onChange:function(e){return n.props.callback(e.target.checked)}}),o.a.createElement("label",{className:"form-check-label"},"Show ",n.props.description))},n}return Object(d.a)(t,e),t}(a.Component);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).updateNewTextValue=function(e){n.setState({newItemText:e.target.value})},n.createNewTodo=function(e){n.state.todoItems.find((function(t){return t.action===e}))||n.setState({todoItems:[].concat(Object(s.a)(n.state.todoItems),[{action:e,done:!1}])},(function(){return localStorage.setItem("todos",JSON.stringify(n.state))}))},n.toggleTodo=function(e){return n.setState({todoItems:n.state.todoItems.map((function(t){return t.action===e.action?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{done:!t.done}):t}))})},n.todoTableRows=function(e){return n.state.todoItems.filter((function(t){return t.done===e})).map((function(e){return o.a.createElement(f,{key:e.action,item:e,callback:n.toggleTodo})}))},n.componentDidMount=function(){var e=localStorage.getItem("todos");n.setState(null!=e?JSON.parse(e):{userName:"Mike",todoItems:[{action:"Buy Flowers",done:!1},{action:"Get Shoes",done:!1},{action:"Collect Tickets",done:!0},{action:"Call Joe",done:!1}],showCompleted:!0})},n.changeStateData=function(){n.setState({userName:"Mike"===n.state.userName?"Bob":"Mike"})},n.render=function(){return o.a.createElement("div",null,o.a.createElement(p,{name:n.state.userName,tasks:n.state.todoItems}),o.a.createElement("div",{className:"container-fluid"},o.a.createElement(b,{callback:n.createNewTodo}),o.a.createElement("table",{className:"table table-striped table-bordered"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Done"))),o.a.createElement("tbody",null,n.todoTableRows(!1))),o.a.createElement("div",{className:"bg-secondary text-white text-center p-2"},o.a.createElement(h,{description:"Completed Tasks",isChecked:n.state.showCompleted,callback:function(e){return n.setState({showCompleted:e})}})),n.state.showCompleted&&o.a.createElement("table",{className:"table table-striped table-bordered"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Done"))),o.a.createElement("tbody",null,n.todoTableRows(!0)))))},n.state={userName:"Mike",todoItems:[{action:"Buy Flowers",done:!1},{action:"Get Shoes",done:!1},{action:"Collect Tickets",done:!0},{action:"Call Joe",done:!1}],showCompleted:!0},n}return Object(d.a)(t,e),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);c.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.7970f1dc.chunk.js.map