(this.webpackJsonpappweb=this.webpackJsonpappweb||[]).push([[0],{111:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),l=t.n(c),i=(t(84),t(42)),o=t(10),m=t(34),s=t.n(m),u=t(44),p=t(43),d=t(151),f=t(147),v=t(144),E=t(148),g=t(145),b=t(149),h=t(41),y=t.n(h),x=t(139),C=t(142),w=t(143),j=t(150),D=t(61),O=t.n(D),k=t(35),F=t.n(k),S=F.a.create({baseURL:"http://localhost:3333"}),N=F.a.create({baseURL:"http://localhost:3334"});function P(){return r.a.createElement(x.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ","Devops/Developer"," ",(new Date).getFullYear(),".")}var V=Object(C.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function I(e){var a=e.history,t=Object(n.useState)(""),c=Object(p.a)(t,2),l=c[0],i=c[1],o=Object(n.useState)(""),m=Object(p.a)(o,2),h=m[0],C=m[1],D=Object(n.useState)(!1),k=Object(p.a)(D,2),F=k[0],I=k[1],R=V();function T(){return(T=Object(u.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),I(!0),e.next=4,S.post("/validar",{cpf:l});case 4:t=e.sent,C(t.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),I(!0),e.next=4,S.post("/validar",{cpf:l});case 4:if(n=e.sent,C(n.data),console.log(l+" - "+h),!h){e.next=11;break}return e.next=10,N.post("/enviar",{cpf:l});case 10:a.push("/main");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(w.a,{component:"main",maxWidth:"xs"},r.a.createElement(v.a,null),r.a.createElement("div",{className:R.paper},r.a.createElement(d.a,{className:R.avatar},r.a.createElement(y.a,null)),r.a.createElement(x.a,{component:"h1",variant:"h5"},"Registro de CPF"),r.a.createElement("form",{className:R.form,noValidate:!0,onSubmit:function(e){return W.apply(this,arguments)}},r.a.createElement(g.a,{container:!0,spacing:2},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(O.a,{mask:"999.999.999-99",value:l,onChange:function(e){return i(e.target.value)}},(function(){return r.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"cpf",label:"CPF Cliente",name:"cpf",autoComplete:"cpf"})}))),h&&r.a.createElement(g.a,{item:!0},r.a.createElement(f.a,{variant:"contained",color:"primary",type:"submit"},"Enviar")),!h&&r.a.createElement(g.a,{item:!0},r.a.createElement(f.a,{variant:"contained",color:"secondary",type:"submit",onClick:function(e){return T.apply(this,arguments)}},"Validar"))))),!h&&F&&r.a.createElement(b.a,{mt:5},r.a.createElement(j.a,{variant:"filled",severity:"error"},"CPF de Cliente Inv\xe1lido!")),h&&r.a.createElement(b.a,{mt:5},r.a.createElement(j.a,{variant:"filled",severity:"success"},"CPF ",l," V\xe1lido!")),r.a.createElement(b.a,{mt:5},r.a.createElement(P,null)))}function R(){return r.a.createElement(x.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ","Devops/Developer"," ",(new Date).getFullYear(),".")}var T=Object(C.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function W(){var e=T();return r.a.createElement(w.a,{component:"main",maxWidth:"xs"},r.a.createElement(v.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(d.a,{className:e.avatar},r.a.createElement(y.a,null)),r.a.createElement(x.a,{component:"h1",variant:"h5"},"Registro de CPF")),r.a.createElement(b.a,{mt:5},r.a.createElement(j.a,{variant:"filled",severity:"success"},"Fluxo de Valida\xe7\xe3o de CPF conclu\xeddo com Sucesso!")),r.a.createElement(i.b,{to:"/"},r.a.createElement(f.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Voltar")),r.a.createElement(b.a,{mt:5},r.a.createElement(R,null)))}function J(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{path:"/",exact:!0,component:I}),r.a.createElement(o.a,{path:"/main",component:W}))}var L=function(){return r.a.createElement(J,null)};l.a.render(r.a.createElement(L,null),document.getElementById("root"))},79:function(e,a,t){e.exports=t(111)},84:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.b17e9548.chunk.js.map