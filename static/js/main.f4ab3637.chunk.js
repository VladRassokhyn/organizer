(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{125:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(11),r=n.n(i),s=(n(125),n(76)),o=n(26),j=n(55),d=n(8),b="ADD_TODO",O="REMOVE_TODO",l="EDIT_TODO",u="CLOSE_TODO_SUB_MENU",x="OPEN_TODO_SUB_MENU",h="OPEN_TODO_EDIT_MODE",p="CLOSE_TODO_EDIT_MODE",m="SORT_TODO_BY",f="FINISH_TODO",g={todos:[],finishedTodos:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(d.a)(Object(d.a)({},e),{},{todos:[].concat(Object(j.a)(e.todos),[{id:e.todos[0]?e.todos[e.todos.length-1].id+1:0,text:t.text,importance:t.importance,isOpenSubMenu:!1,isEditMode:!1,lastEditDate:Date.now()}])});case O:return Object(d.a)(Object(d.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.id}))});case x:return Object(d.a)(Object(d.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{isOpenSubMenu:!0}):Object(d.a)(Object(d.a)({},e),{},{isOpenSubMenu:!1,isEditMode:!1})}))});case u:return Object(d.a)(Object(d.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{isOpenSubMenu:!1,isEditMode:!1}):e}))});case h:return Object(d.a)(Object(d.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{isEditMode:!0}):Object(d.a)(Object(d.a)({},e),{},{isEditMode:!1})}))});case p:return Object(d.a)(Object(d.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{isEditMode:!1}):e}))});case l:return Object(d.a)(Object(d.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{text:t.text,importance:t.importance,isEditMode:!1,lastEditDate:Date.now()}):e}))});case m:var n=t.dirName;if("importance"===t.sortType){var a=Object(j.a)(e[n].sort((function(e,t){return e.importance>t.importance?1:-1})));return Object(d.a)(Object(d.a)({},e),{},Object(o.a)({},n,t.reverse?a.reverse():a))}if("date"===t.sortType){var c=Object(j.a)(e[n].sort((function(e,t){return e.lastEditDate>t.lastEditDate?1:-1})));return Object(d.a)(Object(d.a)({},e),{},Object(o.a)({},n,t.reverse?c.reverse():c))}return e;case f:return Object(d.a)(Object(d.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.todo.id})),finishedTodos:[].concat(Object(j.a)(e.finishedTodos),[t.todo])});default:return e}},y=Object(s.a)({todo:v}),w=Object(s.b)(y),S=n(34),E=n(37),D=n(4),N=n(205),C=n(218),M=n(19),T=n(216),k=n(206),_=n(209),I=n(195),B=n(208),z=n(56),L=n(210),U=n(198),F=n(102),H=n.n(F),P=n(104),R=n.n(P),J=n(103),W=n.n(J),Y=n(199),A=n(200),G=n(201),V=n(105),X=n.n(V),q=n(16),K=n(52),Q=function(e){return{type:u,id:e}},Z=n(106),$=n(73),ee=n.n($),te=n(95),ne=n.n(te),ae=n(190),ce=n(211),ie=n(196),re=n(193),se=n(220),oe=n(197),je=n(215),de=n(217),be=n(3),Oe=function(e){var t=e.todo,n=Object(a.useState)("1"),i=Object(E.a)(n,2),r=i[0],s=i[1],o=Object(a.useState)(!1),j=Object(E.a)(o,2),d=j[0],O=j[1],u=Object(a.useState)(t?t.text:""),x=Object(E.a)(u,2),h=x[0],m=x[1],f=Object(S.b)(),g=function(e){s(e.target.value)};return Object(be.jsxs)("div",{children:[Object(be.jsx)(Z.a,{onSubmit:t?function(){var e;t&&f((e=t.id,{type:l,id:e,text:h,importance:r}))}:function(){h.length>=1?(f({type:b,text:h,importance:r}),m(""),s("1")):O(!0)},children:function(e){return Object(be.jsx)("form",{onSubmit:e.handleSubmit,children:Object(be.jsxs)(ae.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(be.jsx)(ae.a,{item:!0,xs:t?11:10,children:Object(be.jsx)(ce.a,{name:"text",fullWidth:!0,variant:"outlined",multiline:!0,value:h,onChange:function(e){return m(e.target.value)},label:t?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043e\u043a"})}),t&&Object(be.jsxs)(ae.a,{item:!0,xs:1,children:[Object(be.jsx)(ie.a,{type:"submit",children:Object(be.jsx)(ne.a,{})}),Object(be.jsx)(ie.a,{onClick:function(){return f((e=t.id,{type:p,id:e}));var e},children:Object(be.jsx)(ee.a,{})})]}),!t&&Object(be.jsx)(ae.a,{item:!0,xs:2,children:Object(be.jsx)(ie.a,{style:{width:"100%"},type:"submit",color:"primary",size:"small",className:"",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})}),Object(be.jsx)(ae.a,{item:!0,xs:12,children:Object(be.jsx)(ae.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",children:Object(be.jsx)(ae.a,{item:!0,xs:12,children:Object(be.jsx)(re.a,{component:"fieldset",children:Object(be.jsxs)(se.a,{row:!0,name:"importance",value:r,onChange:g,children:[Object(be.jsx)(oe.a,{value:"1",control:Object(be.jsx)(je.a,{style:{color:"red"}}),label:"\u0412\u0430\u0436\u043d\u043e"}),Object(be.jsx)(oe.a,{value:"2",control:Object(be.jsx)(je.a,{style:{color:"green"}}),label:"\u0421\u0440\u0435\u0434\u043d\u0435"}),Object(be.jsx)(oe.a,{value:"3",control:Object(be.jsx)(je.a,{style:{color:"grey"}}),label:"\u041d\u0435\u0432\u0430\u0436\u043d\u043e"})]})})})})})]})})}}),Object(be.jsx)(de.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:d,autoHideDuration:3e3,onClose:function(e,t){"clickaway"!==t&&O(!1)},message:"\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",action:Object(be.jsxs)(c.a.Fragment,{children:[Object(be.jsx)(ie.a,{color:"secondary",size:"small",onClick:function(){return O(!1)},children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(be.jsx)(U.a,{size:"small","aria-label":"close",color:"inherit",onClick:function(){return O(!1)},children:Object(be.jsx)(ee.a,{fontSize:"small"})})]})})]})},le=S.c,ue=n(204),xe=n(96),he=n.n(xe),pe=n(202),me=n(203),fe=n(97),ge=n.n(fe),ve=n(98),ye=n.n(ve),we=n(99),Se=n.n(we),Ee=function(e){var t=e.todo,n=e.finished,a=Object(S.b)(),c=new Date(t.lastEditDate),i="";switch(t.importance){case"1":i="red";break;case"2":i="green";break;case"3":i="grey"}return Object(be.jsxs)("div",{children:[Object(be.jsx)(Y.a,{children:t.isEditMode?Object(be.jsx)(ae.a,{item:!0,xs:12,children:Object(be.jsx)(Oe,{todo:t})}):Object(be.jsxs)(Y.a,{button:!0,onClick:function(){return t.isOpenSubMenu?a(Q(t.id)):a((e=t.id,{type:x,id:e}));var e},children:[Object(be.jsx)(A.a,{children:Object(be.jsx)(he.a,{style:{color:i}})}),Object(be.jsx)(G.a,{primary:t.text}),Object(be.jsxs)("div",{className:"todo-list-item__date",children:[Object(be.jsx)("span",{children:"".concat(c.getDay(),"/").concat(c.getMonth(),"/").concat(c.getFullYear())}),Object(be.jsx)("span",{children:"".concat(c.getHours(),":").concat(c.getMinutes())})]}),!n&&Object(be.jsx)("div",{children:t.isOpenSubMenu?Object(be.jsx)(pe.a,{}):Object(be.jsx)(me.a,{})})]})}),!n&&Object(be.jsx)(ue.a,{in:t.isOpenSubMenu,timeout:"auto",unmountOnExit:!0,children:Object(be.jsx)(I.a,{component:"div",disablePadding:!0,children:Object(be.jsxs)(Y.a,{children:[Object(be.jsx)(Y.a,{button:!0,className:"todo-list-item",onClick:function(){return a(function(e){return{type:f,todo:e}}(t))},children:Object(be.jsx)(ge.a,{})}),Object(be.jsx)(Y.a,{button:!0,className:"todo-list-item",onClick:function(){var e;a(Q(t.id)),a((e=t.id,{type:h,id:e}))},children:Object(be.jsx)(ye.a,{})}),Object(be.jsx)(Y.a,{button:!0,className:"todo-list-item",onClick:function(){return a((e=t.id,{type:O,id:e}));var e},children:Object(be.jsx)(Se.a,{})})]})})})]})},De=n(213),Ne=n(207),Ce=n(212),Me=n(100),Te=n.n(Me),ke=function(e){var t=e.name,n=e.sortType,c=e.dirName,i=Object(S.b)(),r=Object(a.useState)(!0),s=Object(E.a)(r,2),o=s[0],j=s[1];return Object(be.jsx)("div",{children:Object(be.jsxs)(ie.a,{onClick:function(){i(function(e,t,n){return{type:m,sortType:e,reverse:t,dirName:n}}(n,o,c)),j(!o)},children:[Object(be.jsx)(Te.a,{}),t]})})},_e=n(101),Ie=n.n(_e),Be=Object(N.a)((function(e){return Object(C.a)({root:{width:"100%",backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}})})),ze=[{path:"/todo-list",component:function(){var e=Be(),t=Object(M.a)(),n=c.a.useState(0),a=Object(E.a)(n,2),i=a[0],r=a[1],s=le((function(e){return e.todo}));return Object(be.jsxs)("div",{children:[Object(be.jsx)(Oe,{}),Object(be.jsxs)(ae.a,{container:!0,justify:"center",alignItems:"center",children:[Object(be.jsxs)("div",{className:e.root,children:[Object(be.jsx)(k.a,{position:"static",color:"default",children:Object(be.jsxs)(De.a,{value:i,onChange:function(e,t){r(t)},indicatorColor:"primary",textColor:"primary",children:[Object(be.jsx)(Ne.a,{label:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435"}),Object(be.jsx)(Ne.a,{label:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"})]})}),Object(be.jsx)(Ie.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:i,onChangeIndex:function(e){r(e)},children:Object.keys(s).map((function(t,n){return Object(be.jsx)("div",{hidden:i!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n),children:i===n&&Object(be.jsx)(Ce.a,{p:3,children:Object(be.jsx)(ae.a,{item:!0,xs:12,children:Object(be.jsx)(I.a,{component:"div","aria-labelledby":"nested-list-subheader",subheader:Object(be.jsxs)(ae.a,{container:!0,alignItems:"center",children:[Object(be.jsx)(ae.a,{item:!0,xs:1,children:Object(be.jsx)(ke,{name:"\u0432\u0430\u0436\u043d\u043e\u0441\u0442\u044c",sortType:"importance",dirName:t})}),Object(be.jsx)(ae.a,{item:!0,xs:10}),Object(be.jsx)(ae.a,{item:!0,xs:1,children:Object(be.jsx)(ke,{name:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d",sortType:"date",dirName:t})})]}),className:e.root,children:s[t].map((function(e,t){return Object(be.jsx)(Ee,{finished:1===n,todo:e},t)}))})})})},n)}))})]}),Object(be.jsx)(ae.a,{item:!0,xs:2})]}),Object(be.jsx)("hr",{})]})},name:"\u0421\u043f\u0438\u0441\u043e\u043a \u0414\u0435\u043b"}],Le=function(e){return Object(be.jsx)(q.a,{path:e.path,render:function(t){return Object(be.jsx)(e.component,Object(d.a)(Object(d.a)({},t),{},{routName:e.name,routes:e.routes}))}})},Ue=240,Fe=Object(N.a)((function(e){return Object(C.a)({root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:Ue,width:"calc(100% - ".concat(Ue,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:Ue,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:Ue,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(o.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}})})),He=function(e){var t,n,a,i=Object(q.f)(),r=Fe(),s=Object(M.a)(),j=c.a.useState(!1),b=Object(E.a)(j,2),O=b[0],l=b[1];return Object(be.jsxs)("div",{className:r.root,children:[Object(be.jsx)(B.a,{}),Object(be.jsx)(k.a,{position:"fixed",className:Object(D.a)(r.appBar,Object(o.a)({},r.appBarShift,O)),children:Object(be.jsxs)(_.a,{children:[Object(be.jsx)(U.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return l(!0)},edge:"start",className:Object(D.a)(r.menuButton,Object(o.a)({},r.hide,O)),children:Object(be.jsx)(H.a,{})}),Object(be.jsx)(z.a,{variant:"h6",noWrap:!0,children:null===(t=ze.find((function(e){return i.pathname===e.path})))||void 0===t?void 0:t.name})]})}),Object(be.jsxs)(T.a,{variant:"permanent",className:Object(D.a)(r.drawer,(n={},Object(o.a)(n,r.drawerOpen,O),Object(o.a)(n,r.drawerClose,!O),n)),classes:{paper:Object(D.a)((a={},Object(o.a)(a,r.drawerOpen,O),Object(o.a)(a,r.drawerClose,!O),a))},children:[Object(be.jsx)("div",{className:r.toolbar,children:Object(be.jsx)(U.a,{onClick:function(){return l(!1)},children:"rtl"===s.direction?Object(be.jsx)(W.a,{}):Object(be.jsx)(R.a,{})})}),Object(be.jsx)(L.a,{}),Object(be.jsx)(I.a,{children:["\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"].map((function(e){return Object(be.jsx)(K.b,{to:"/todo-list",children:Object(be.jsxs)(Y.a,{button:!0,children:[Object(be.jsx)(A.a,{children:Object(be.jsx)(X.a,{})}),Object(be.jsx)(G.a,{primary:e})]})},e)}))}),Object(be.jsx)(L.a,{})]}),Object(be.jsxs)("main",{className:r.content,children:[Object(be.jsx)("div",{className:r.toolbar}),Object(be.jsx)(q.c,{children:ze.map((function(e,t){return Object(be.jsx)(Le,Object(d.a)({},e),t)}))})]})]})};r.a.render(Object(be.jsx)(K.a,{children:Object(be.jsx)(S.a,{store:w,children:Object(be.jsx)(He,{})})}),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.f4ab3637.chunk.js.map