(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{134:function(e,t,n){"use strict";n.d(t,"a",(function(){return R})),n.d(t,"b",(function(){return S}));var a=n(31),l=n.n(a),r=n(0),c=n.n(r),o=n(3),i=n(2),u=n(60),s=n(74),m=n(100),f=Object(s.b)({name:"client",initialState:{device:"null",lang:"en"},reducers:{setClient:function(e){var t=(new m.UAParser).getResult();e.device=t.device.type?t.device.type:"web"},setLanguage:function(e){window.navigator.language.indexOf("-")>0?e.lang=window.navigator.language.substring(0,2):e.lang=window.navigator.language},getLanguage:function(e){e.lang}}}),g=f.actions,d=g.setClient,E=g.setLanguage,p=(g.getLanguage,f.reducer),x=Object(s.a)({reducer:{client:p}}),y=function(){return Object(u.b)()},v=u.c,h=n(23),F=n(138),b=n(195),C=n(197),j=n(10),w=function(){var e=c.a.useState(!1),t=l()(e,2),n=t[0],a=t[1],r=function(){return a(!1)},o=Object(j.e)();return c.a.createElement(i.a,{style:S.header},c.a.createElement(i.a,{style:S.navLeft},c.a.createElement(h.a,{style:S.headerTextColor},"yllo.cc")),c.a.createElement(i.a,{style:S.navRight},c.a.createElement(b.a,{visible:n,onDismiss:r,anchor:c.a.createElement(F.a,{onPress:function(){return a(!0)},title:"Menu"})},c.a.createElement(b.a.Item,{onPress:function(){o("/",{replace:!0}),r()},title:"Home"}),c.a.createElement(C.a,null),c.a.createElement(b.a.Item,{onPress:function(){o("/projects",{replace:!0}),r()},title:"Projects"}),c.a.createElement(C.a,null),c.a.createElement(b.a.Item,{onPress:function(){o("/contact",{replace:!0}),r()},title:"Contact"}))))},T=n(47),k=function(){return c.a.createElement(i.a,{style:S.header},c.a.createElement(i.a,{style:S.navLeft},c.a.createElement(T.a,{to:"/"},c.a.createElement(h.a,{style:S.headerTextColor},"yllo.cc"))),c.a.createElement(i.a,{style:S.navRight},c.a.createElement(T.a,{to:"/projects"},c.a.createElement(i.a,{style:{right:"50%"}},c.a.createElement(h.a,{style:S.headerTextColor},"PROJECTS"))),c.a.createElement(T.a,{to:"/contact"},c.a.createElement(i.a,null,c.a.createElement(h.a,{style:S.headerTextColor},"CONTACT")))))},L=function(){var e=v((function(e){return e.client})),t=y();return Object(r.useEffect)((function(){t(d()),t(E())})),"mobile"===e.device?c.a.createElement(w,null):c.a.createElement(k,null)},O=n(90),B=n(199),I=[{lang:"en",text:"Welcome"},{lang:"fr",text:"Bonjour"},{lang:"es",text:"Bienvenido"},{lang:"de",text:"Willkommen"},{lang:"it",text:"Benvenuto"},{lang:"ja",text:"\u3088\u3046\u3053\u305d"},{lang:"ko",text:"\ud658\uc601\ud569\ub2c8\ub2e4"},{lang:"zh",text:"\u6b22\u8fce"},{lang:"ru",text:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c"}],P=function(){y();var e=v((function(e){return e.client}));return"mobile"==e.device?function(e){return c.a.createElement(i.a,{style:S.container},c.a.createElement(h.a,{style:{fontFamily:"Inter_900Black",color:"#F7F7FF",fontSize:"300%"}},I.map((function(t){if(t.lang===e.lang)return t.text}))))}(e):function(e){return c.a.createElement(i.a,{style:S.container},c.a.createElement(h.a,{style:{fontFamily:"Inter_900Black",color:"#F7F7FF",fontSize:"400%"}},I.map((function(t){if(t.lang===e.lang)return t.text}))))}(e)};function R(){var e=Object(O.b)({Inter_900Black:O.a});l()(e,1)[0];return c.a.createElement(T.b,null,c.a.createElement(u.a,{store:x},c.a.createElement(B.a,null,c.a.createElement(i.a,{style:S.app},c.a.createElement(i.a,{style:S.header},c.a.createElement(L,null)),c.a.createElement(j.c,null,c.a.createElement(j.b,{exact:!0,path:"/",element:c.a.createElement(P,null)}))))))}var S=o.a.create({app:{flex:1,backgroundColor:"#340580",color:"#fff",height:"100%"},header:{flex:2,maxHeight:"7%",paddingLeft:"5%",paddingTop:"2%",paddingRight:"5%"},headerTextColor:{color:"#F7F7FF",fontFamily:"Inter_900Black"},navLeft:{flexDirection:"row",justifyContent:"flex-start",color:"#F7F7FF"},navRight:{bottom:"20px",flexDirection:"row",justifyContent:"flex-end",color:"#F7F7FF"},container:{flex:2,paddingLeft:"10%",paddingTop:"10%",paddingRight:"10%",alignSelf:"center"}})},141:function(e,t,n){e.exports=n(188)}},[[141,1,2]]]);
//# sourceMappingURL=app.710e7735.chunk.js.map