(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{125:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(11),r=n.n(i),s=(n(125),n(76)),o=n(52),j=n(8),d="ADD_TODO",b="REMOVE_TODO",l="EDIT_TODO",O="CLOSE_TODO_SUB_MENU",u="OPEN_TODO_SUB_MENU",x="OPEN_TODO_EDIT_MODE",h="CLOSE_TODO_EDIT_MODE",p="SORT_TODO_BY",m="FINISH_TODO",f={todos:[],finishedTodos:[]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(j.a)(Object(j.a)({},e),{},{todos:[].concat(Object(o.a)(e.todos),[{id:e.todos[0]?e.todos[e.todos.length-1].id+1:0,text:t.text,importance:t.importance,isOpenSubMenu:!1,isEditMode:!1,lastEditDate:Date.now()}])});case b:return Object(j.a)(Object(j.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.id}))});case u:return Object(j.a)(Object(j.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{isOpenSubMenu:!0}):Object(j.a)(Object(j.a)({},e),{},{isOpenSubMenu:!1,isEditMode:!1})}))});case O:return Object(j.a)(Object(j.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{isOpenSubMenu:!1,isEditMode:!1}):e}))});case x:return Object(j.a)(Object(j.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{isEditMode:!0}):Object(j.a)(Object(j.a)({},e),{},{isEditMode:!1})}))});case h:return Object(j.a)(Object(j.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{isEditMode:!1}):e}))});case l:return Object(j.a)(Object(j.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{text:t.text,importance:t.importance,isEditMode:!1,lastEditDate:Date.now()}):e}))});case p:if("importance"===t.sortType){var n=Object(o.a)(e.todos.sort((function(e,t){return e.importance>t.importance?1:-1})));return Object(j.a)(Object(j.a)({},e),{},{todos:t.reverse?n.reverse():n})}if("date"===t.sortType){var a=Object(o.a)(e.todos.sort((function(e,t){return e.lastEditDate>t.lastEditDate?1:-1})));return Object(j.a)(Object(j.a)({},e),{},{todos:t.reverse?a.reverse():a})}return e;case m:var c=e.todos.find((function(e){return e.id===t.id}));return c?Object(j.a)(Object(j.a)({},e),{},{todos:Object(o.a)(e.todos.filter((function(e){return e.id!==t.id}))),finishedTodos:[].concat(Object(o.a)(e.finishedTodos),[c])}):e;default:return e}},v=Object(s.a)({todo:g}),y=Object(s.b)(v),w=n(33),S=n(36),E=n(37),D=n(3),C=n(205),M=n(218),T=n(19),N=n(216),_=n(206),k=n(209),I=n(195),B=n(208),z=n(56),L=n(210),U=n(198),F=n(102),H=n.n(F),P=n(104),R=n.n(P),W=n(103),J=n.n(W),Y=n(199),A=n(200),G=n(201),V=n(105),X=n.n(V),q=n(16),K=n(53),Q=function(e){return{type:O,id:e}},Z=n(106),$=n(73),ee=n.n($),te=n(95),ne=n.n(te),ae=n(190),ce=n(211),ie=n(196),re=n(193),se=n(220),oe=n(197),je=n(215),de=n(217),be=n(4),le=function(e){var t=e.todo,n=Object(a.useState)("1"),i=Object(S.a)(n,2),r=i[0],s=i[1],o=Object(a.useState)(!1),j=Object(S.a)(o,2),b=j[0],O=j[1],u=Object(a.useState)(t?t.text:""),x=Object(S.a)(u,2),p=x[0],m=x[1],f=Object(w.b)(),g=function(e){s(e.target.value)};return Object(be.jsxs)("div",{children:[Object(be.jsx)(Z.a,{onSubmit:t?function(){var e;t&&f((e=t.id,{type:l,id:e,text:p,importance:r}))}:function(){p.length>=1?(f({type:d,text:p,importance:r}),m(""),s("1")):O(!0)},children:function(e){return Object(be.jsx)("form",{onSubmit:e.handleSubmit,children:Object(be.jsxs)(ae.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(be.jsx)(ae.a,{item:!0,xs:t?11:10,children:Object(be.jsx)(ce.a,{name:"text",fullWidth:!0,variant:"outlined",multiline:!0,value:p,onChange:function(e){return m(e.target.value)},label:t?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043e\u043a"})}),t&&Object(be.jsxs)(ae.a,{item:!0,xs:1,children:[Object(be.jsx)(ie.a,{type:"submit",children:Object(be.jsx)(ne.a,{})}),Object(be.jsx)(ie.a,{onClick:function(){return f((e=t.id,{type:h,id:e}));var e},children:Object(be.jsx)(ee.a,{})})]}),!t&&Object(be.jsx)(ae.a,{item:!0,xs:2,children:Object(be.jsx)(ie.a,{style:{width:"100%"},type:"submit",color:"primary",size:"small",className:"",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})}),Object(be.jsx)(ae.a,{item:!0,xs:12,children:Object(be.jsx)(ae.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",children:Object(be.jsx)(ae.a,{item:!0,xs:12,children:Object(be.jsx)(re.a,{component:"fieldset",children:Object(be.jsxs)(se.a,{row:!0,name:"importance",value:r,onChange:g,children:[Object(be.jsx)(oe.a,{value:"1",control:Object(be.jsx)(je.a,{style:{color:"red"}}),label:"\u0412\u0430\u0436\u043d\u043e"}),Object(be.jsx)(oe.a,{value:"2",control:Object(be.jsx)(je.a,{style:{color:"green"}}),label:"\u0421\u0440\u0435\u0434\u043d\u0435"}),Object(be.jsx)(oe.a,{value:"3",control:Object(be.jsx)(je.a,{style:{color:"grey"}}),label:"\u041d\u0435\u0432\u0430\u0436\u043d\u043e"})]})})})})})]})})}}),Object(be.jsx)(de.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:b,autoHideDuration:3e3,onClose:function(e,t){"clickaway"!==t&&O(!1)},message:"\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",action:Object(be.jsxs)(c.a.Fragment,{children:[Object(be.jsx)(ie.a,{color:"secondary",size:"small",onClick:function(){return O(!1)},children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(be.jsx)(U.a,{size:"small","aria-label":"close",color:"inherit",onClick:function(){return O(!1)},children:Object(be.jsx)(ee.a,{fontSize:"small"})})]})})]})},Oe=w.c,ue=n(204),xe=n(96),he=n.n(xe),pe=n(202),me=n(203),fe=n(97),ge=n.n(fe),ve=n(98),ye=n.n(ve),we=n(99),Se=n.n(we),Ee=function(e){var t=e.todo,n=Object(w.b)(),a=new Date(t.lastEditDate),c="";switch(t.importance){case"1":c="red";break;case"2":c="green";break;case"3":c="grey"}return Object(be.jsxs)("div",{children:[Object(be.jsx)(Y.a,{children:t.isEditMode?Object(be.jsx)(ae.a,{item:!0,xs:12,children:Object(be.jsx)(le,{todo:t})}):Object(be.jsxs)(Y.a,{button:!0,onClick:function(){return t.isOpenSubMenu?n(Q(t.id)):n((e=t.id,{type:u,id:e}));var e},children:[Object(be.jsx)(A.a,{children:Object(be.jsx)(he.a,{style:{color:c}})}),Object(be.jsx)(G.a,{primary:t.text}),Object(be.jsxs)("div",{className:"todo-list-item__date",children:[Object(be.jsx)("span",{children:"".concat(a.getDay(),"/").concat(a.getMonth(),"/").concat(a.getFullYear())}),Object(be.jsx)("span",{children:"".concat(a.getHours(),":").concat(a.getMinutes())})]}),t.isOpenSubMenu?Object(be.jsx)(pe.a,{}):Object(be.jsx)(me.a,{})]})}),Object(be.jsx)(ue.a,{in:t.isOpenSubMenu,timeout:"auto",unmountOnExit:!0,children:Object(be.jsx)(I.a,{component:"div",disablePadding:!0,children:Object(be.jsxs)(Y.a,{children:[Object(be.jsx)(Y.a,{button:!0,className:"todo-list-item",children:Object(be.jsx)(ge.a,{onClick:function(){return n((e=t.id,{type:p,id:e}));var e}})}),Object(be.jsx)(Y.a,{button:!0,className:"todo-list-item",onClick:function(){var e;n(Q(t.id)),n((e=t.id,{type:x,id:e}))},children:Object(be.jsx)(ye.a,{})}),Object(be.jsx)(Y.a,{button:!0,className:"todo-list-item",onClick:function(){return n((e=t.id,{type:b,id:e}));var e},children:Object(be.jsx)(Se.a,{})})]})})})]})},De=n(213),Ce=n(207),Me=n(212),Te=n(100),Ne=n.n(Te),_e=function(e){var t=e.name,n=e.sortType,c=Object(w.b)(),i=Object(a.useState)(!0),r=Object(S.a)(i,2),s=r[0],o=r[1];return Object(be.jsx)("div",{children:Object(be.jsxs)(ie.a,{onClick:function(){c(function(e,t){return{type:p,sortType:e,reverse:t}}(n,s)),o(!s)},children:[Object(be.jsx)(Ne.a,{}),t]})})},ke=n(101),Ie=n.n(ke);function Be(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var ze=Object(C.a)((function(e){return Object(M.a)({root:{width:"100%",backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}})})),Le=[{path:"/todo-list",component:function(){var e=ze(),t=Object(T.a)(),n=c.a.useState(0),a=Object(S.a)(n,2),i=a[0],r=a[1],s=Oe((function(e){return e.todo.todos}));return Object(be.jsxs)("div",{children:[Object(be.jsx)(le,{}),Object(be.jsxs)(ae.a,{container:!0,justify:"center",alignItems:"center",children:[Object(be.jsxs)("div",{className:e.root,children:[Object(be.jsx)(_.a,{position:"static",color:"default",children:Object(be.jsxs)(De.a,{value:i,onChange:function(e,t){r(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth",children:[Object(be.jsx)(Ce.a,Object(j.a)({label:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435"},Be(0))),Object(be.jsx)(Ce.a,Object(j.a)({label:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"},Be(1)))]})}),Object(be.jsx)(Ie.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:i,onChangeIndex:function(e){r(e)},children:Object(be.jsx)("div",{hidden:0!==i,id:"full-width-tabpanel-".concat(0),"aria-labelledby":"full-width-tab-".concat(0),children:0===i&&Object(be.jsx)(Me.a,{p:3,children:Object(be.jsx)(ae.a,{item:!0,xs:12,children:Object(be.jsx)(I.a,{component:"div","aria-labelledby":"nested-list-subheader",subheader:Object(be.jsxs)(ae.a,{container:!0,alignItems:"center",children:[Object(be.jsx)(ae.a,{item:!0,xs:1,children:Object(be.jsx)(_e,{name:"\u0432\u0430\u0436\u043d\u043e\u0441\u0442\u044c",sortType:"importance"})}),Object(be.jsx)(ae.a,{item:!0,xs:10}),Object(be.jsx)(ae.a,{item:!0,xs:1,children:Object(be.jsx)(_e,{name:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d",sortType:"date"})})]}),className:e.root,children:s.map((function(e,t){return Object(be.jsx)(Ee,{todo:e},t)}))})})})})})]}),Object(be.jsx)(ae.a,{item:!0,xs:2})]}),Object(be.jsx)("hr",{})]})},name:"\u0421\u043f\u0438\u0441\u043e\u043a \u0414\u0435\u043b"}],Ue=function(e){return Object(be.jsx)(q.a,{path:e.path,render:function(t){return Object(be.jsx)(e.component,Object(j.a)(Object(j.a)({},t),{},{routName:e.name,routes:e.routes}))}})},Fe=240,He=Object(C.a)((function(e){return Object(M.a)({root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:Fe,width:"calc(100% - ".concat(Fe,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:Fe,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:Fe,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(E.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(j.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}})})),Pe=function(e){var t,n,a,i=Object(q.f)(),r=He(),s=Object(T.a)(),o=c.a.useState(!1),d=Object(S.a)(o,2),b=d[0],l=d[1];return Object(be.jsxs)("div",{className:r.root,children:[Object(be.jsx)(B.a,{}),Object(be.jsx)(_.a,{position:"fixed",className:Object(D.a)(r.appBar,Object(E.a)({},r.appBarShift,b)),children:Object(be.jsxs)(k.a,{children:[Object(be.jsx)(U.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return l(!0)},edge:"start",className:Object(D.a)(r.menuButton,Object(E.a)({},r.hide,b)),children:Object(be.jsx)(H.a,{})}),Object(be.jsx)(z.a,{variant:"h6",noWrap:!0,children:null===(t=Le.find((function(e){return i.pathname===e.path})))||void 0===t?void 0:t.name})]})}),Object(be.jsxs)(N.a,{variant:"permanent",className:Object(D.a)(r.drawer,(n={},Object(E.a)(n,r.drawerOpen,b),Object(E.a)(n,r.drawerClose,!b),n)),classes:{paper:Object(D.a)((a={},Object(E.a)(a,r.drawerOpen,b),Object(E.a)(a,r.drawerClose,!b),a))},children:[Object(be.jsx)("div",{className:r.toolbar,children:Object(be.jsx)(U.a,{onClick:function(){return l(!1)},children:"rtl"===s.direction?Object(be.jsx)(J.a,{}):Object(be.jsx)(R.a,{})})}),Object(be.jsx)(L.a,{}),Object(be.jsx)(I.a,{children:["\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"].map((function(e){return Object(be.jsx)(K.b,{to:"/todo-list",children:Object(be.jsxs)(Y.a,{button:!0,children:[Object(be.jsx)(A.a,{children:Object(be.jsx)(X.a,{})}),Object(be.jsx)(G.a,{primary:e})]})},e)}))}),Object(be.jsx)(L.a,{})]}),Object(be.jsxs)("main",{className:r.content,children:[Object(be.jsx)("div",{className:r.toolbar}),Object(be.jsx)(q.c,{children:Le.map((function(e,t){return Object(be.jsx)(Ue,Object(j.a)({},e),t)}))})]})]})};r.a.render(Object(be.jsx)(K.a,{children:Object(be.jsx)(w.a,{store:y,children:Object(be.jsx)(Pe,{})})}),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.9813a89d.chunk.js.map