(this["webpackJsonpredux-anecdotes"]=this["webpackJsonpredux-anecdotes"]||[]).push([[0],{56:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(9),a=n.n(c),o=n(4),u=n(2),i=n.n(u),s=n(5),d=n(10),f=n.n(d),p="http://localhost:"+(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||3001)+"/db/anecdotes",l={getAll:function(){var t=Object(s.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get(p);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),createNew:function(){var t=Object(s.a)(i.a.mark((function t(e){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={content:e,votes:0},t.next=3,f.a.post(p,n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),addVote:function(){var t=Object(s.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.votes+=1,t.next=3,f.a.put("".concat(p,"/").concat(e.id),e);case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(t){return t.sort((function(t,e){return e.votes-t.votes})),t},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(console.log("state now: ",t),console.log("action",e),e.type){case"NEW_ANECDOTE":return O(t.concat(e.data));case"INIT_ANECDOTES":return O(e.data);case"VOTE":return O(t.map((function(t){return t.id!==e.data.id?t:e.data})));default:return t}},j="",b=function(t,e){return function(){var n=Object(s.a)(i.a.mark((function n(r){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return clearTimeout(j),r({type:"SET_NOTIFICATION",notification:t}),n.next=4,new Promise((function(t){return j=setTimeout(t,1e3*e)}));case 4:r({type:"REMOVE_NOTIFICATION"});case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_NOTIFICATION":return e.notification;case"REMOVE_NOTIFICATION":return"";default:return t}},x=n(1),T=function(t){var e=t.anecdote,n=t.handleClick;return Object(x.jsxs)("div",{children:[e.content,Object(x.jsxs)("div",{children:["has ",e.votes," ",Object(x.jsx)("button",{onClick:n,children:"vote"})]})]})},E=function(){var t=Object(o.c)(),e=Object(o.d)((function(t){var e=t.filter,n=t.anecdotes;return e?n.filter((function(t){return t.content.includes(e)})):n})),n=function(e){t(function(t){return function(){var e=Object(s.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.addVote(t);case 2:r=e.sent,n({type:"VOTE",data:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(e)),t(b("you voted '"+e.content+"'",5))};return Object(x.jsx)("div",{children:e.map((function(t){return Object(x.jsx)(T,{anecdote:t,handleClick:function(){return n(t)}},t.id)}))})},w={createAnecdote:function(t){return function(){var e=Object(s.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.createNew(t);case 2:r=e.sent,n({type:"NEW_ANECDOTE",data:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},setNotification:b},m=Object(o.b)(null,w)((function(t){var e=function(){var e=Object(s.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),r=n.target.anecdote.value,n.target.anecdote.value="",t.createAnecdote(r),t.setNotification("New anecdote '"+r+"' created",5);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("form",{onSubmit:e,children:[Object(x.jsx)("br",{}),"Add anecdote:",Object(x.jsx)("input",{name:"anecdote"}),Object(x.jsx)("button",{type:"submit",children:"add"})]})})),y=Object(o.b)((function(t){return{notification:t.notification}}))((function(t){var e=t.notification;return e?Object(x.jsx)("div",{style:{border:"solid",padding:10,borderWidth:1,marginBottom:10},children:e}):null})),N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_FILTER":return e.filter;default:return t}},I={setFilter:function(t){return{type:"SET_FILTER",filter:t}}},g=Object(o.b)(null,I)((function(t){return Object(x.jsxs)("div",{style:{marginBottom:10},children:["filter ",Object(x.jsx)("input",{onChange:function(e){e.preventDefault();var n=e.target.value;t.setFilter(n)}})]})})),_=function(){var t=Object(o.c)();return Object(r.useEffect)((function(){t(function(){var t=Object(s.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getAll();case 2:n=t.sent,e({type:"INIT_ANECDOTES",data:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[t]),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Anecdotes"}),Object(x.jsx)(y,{}),Object(x.jsx)(g,{}),Object(x.jsx)(E,{}),Object(x.jsx)(m,{})]})},S=n(6),A=n(25),C=n(24),k=Object(S.combineReducers)({anecdotes:v,notification:h,filter:N}),D=Object(S.createStore)(k,Object(C.composeWithDevTools)(Object(S.applyMiddleware)(A.a)));a.a.render(Object(x.jsx)(o.a,{store:D,children:Object(x.jsx)(_,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.2fbd5cc5.chunk.js.map