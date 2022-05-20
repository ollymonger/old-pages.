(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{260:function(e,t,n){"use strict";n.d(t,"a",(function(){return Z})),n.d(t,"b",(function(){return $}));var a=n(14),i=n.n(a),r=n(0),o=n.n(r),l=n(13),c=n(32),u=n(9),s=n(139),m=n(20),d=n.n(m),g=n(177),h=n(219),f={device:"null",lang:"en",width:window.innerWidth,height:window.innerHeight,githubRepos:[]},p=Object(g.b)({name:"client",initialState:f,reducers:{setClient:function(e){var t=(new h.UAParser).getResult();e.device=t.device.type?t.device.type:"web"},setScreenSize:function(e,t){e.width=t.payload.width,e.height=t.payload.height},addGithubRepos:function(e,t){e.githubRepos=[].concat(d()(e.githubRepos),[t.payload])},getState:function(e){return e},setLanguage:function(e){window.navigator.language.indexOf("-")>0?e.lang=window.navigator.language.substring(0,2):e.lang=window.navigator.language},setSpecificLang:function(e,t){e.lang=t.payload},getLanguage:function(e){e.lang}}}),y=p.actions,E=y.setClient,v=y.setLanguage,w=(y.setSpecificLang,y.getLanguage,y.setScreenSize),b=y.addGithubRepos,C=p.reducer,j=Object(g.a)({reducer:{client:C}}),S=s.c,x=n(151),I=n(397),O=n(398),T=n(33),L=[{lang:"en",menu:"MENU",home:"HOME",projects:"PROJECTS",contact:"CONTACT"},{lang:"fr",menu:"MENU",home:"ACCUEIL",projects:"PROJETS",contact:"CONTACT"},{lang:"de",menu:"SPEISEKARTE",home:"HEIMAT",projects:"PROJEKTE",contact:"KONTAKT"},{lang:"es",menu:"MEN\xda",home:"HOGAR",projects:"PROYECTOS",contact:"CONTACTO"},{lang:"it",menu:"MEN\xd9",home:"CASA",projects:"PROGETTI",contact:"CONTATTO"},{lang:"ru",menu:"\u041c\u0415\u041d\u042e",home:"\u0414\u041e\u041c",projects:"\u041f\u0420\u041e\u0415\u041a\u0422\u042b",contact:"\u041a\u041e\u041d\u0422\u0410\u041a\u0422"},{lang:"zh",menu:"\u83dc\u5355",home:"\u5bb6",projects:"\u9879\u76ee",contact:"\u8054\u7cfb"},{lang:"ja",menu:"\u30e1\u30cb\u30e5\u30fc",home:"\u5bb6",projects:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",contact:"\u9023\u7d61\u5148"}],F=function(){var e=o.a.useState(!1),t=i()(e,2),n=t[0],a=t[1],r=S((function(e){return e.client})),l=function(){return a(!1)},s=Object(T.e)(),m=L.find((function(e){return e.lang===r.lang}));return o.a.createElement(u.a,{style:$.header},o.a.createElement(u.a,{style:$.navLeft},o.a.createElement(c.a,{style:$.headerTextColor},"yllo.cc")),o.a.createElement(u.a,{style:$.navRight},o.a.createElement(I.a,{visible:n,onDismiss:l,anchor:o.a.createElement(x.a,{onPress:function(){return a(!0)},color:"#B084CC",title:m.menu})},o.a.createElement(I.a.Item,{onPress:function(){s("/",{replace:!0}),l()},title:m.home}),o.a.createElement(O.a,null),o.a.createElement(I.a.Item,{onPress:function(){s("/projects",{replace:!0}),l()},title:L.map((function(e){if(e.lang===r.lang)return e.projects}))}),o.a.createElement(O.a,null),o.a.createElement(I.a.Item,{onPress:function(){s("/contact",{replace:!0}),l()},title:m.contact}))))},k=n(140),A=function(){var e=S((function(e){return e.client})),t=L.find((function(t){return t.lang===e.lang?t:"en"===t.lang}));return o.a.createElement(u.a,{style:$.header},o.a.createElement(u.a,{style:$.navLeft},o.a.createElement(k.a,{to:"/"},o.a.createElement(c.a,{style:$.headerTextColor},"yllo.cc"))),o.a.createElement(u.a,{style:$.navRight},o.a.createElement(u.a,{style:{paddingRight:"5%"}},o.a.createElement(k.a,{to:"/"},o.a.createElement(c.a,{style:$.headerTextColor},t.home)))))},R=function(){var e=S((function(e){return e.client})),t=Object(s.b)(),n=o.a.useState({width:0,height:0}),a=i()(n,2),l=(a[0],a[1]),c=Object(r.useCallback)((function(e){l({width:window.innerWidth,height:window.innerHeight}),t(w({width:window.innerWidth,height:window.innerHeight}))}),[]);return Object(r.useEffect)((function(){return window.addEventListener("resize",c),t(E()),t(v()),fetch("https://api.github.com/users/ollymonger/repos").then((function(e){return e.json()})).then((function(n){for(var a in n){var i={id:n[a].id,name:n[a].name,description:n[a].description,license:n[a].license,full_name:n[a].full_name,owner:{login:n[a].owner.login,id:n[a].owner.id,avatar_url:n[a].owner.avatar_url},openIssues:n[a].open_issues,stars:n[a].stargazers_count,url:n[a].html_url};t(b(i))}console.log(e.githubRepos)})),function(){window.removeEventListener("resize",c)}}),[c]),"mobile"===e.device?o.a.createElement(F,null):e.height>600&&e.width>640?o.a.createElement(A,null):o.a.createElement(F,null)},_=n(181),z=n(400),P=n(262),D=n(16),V=function(e){var t=e.title,n=e.time,a=e.style,l=e.onComplete,s=e.enabled,m=o.a.useState(""),d=i()(m,2),g=d[0],h=d[1],f=o.a.useState(!1),p=i()(f,2),y=p[0],E=p[1],v=o.a.useState(!1),w=i()(v,2),b=w[0],C=w[1];return Object(r.useEffect)((function(){var e=setInterval((function(){g.length<t.length?h(g+t[g.length]):(l(!0),E(!0),clearInterval(e))}),n);return function(){return clearInterval(e)}}),[g]),Object(r.useEffect)((function(){if(y&&s){var e=setInterval((function(){C(!b)}),500);return function(){return clearInterval(e)}}}),[y,b]),o.a.createElement(u.a,null,o.a.createElement(c.a,{style:a},g," ",o.a.createElement(c.a,{style:{position:"absolute"}},b?"|":"")))},q=n(259),N={AboutMe:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{style:{fontFamily:"Inter_300Light",color:"lightgray",fontSize:"0.75rem",paddingLeft:"5vw",paddingTop:"5vh",width:"50%",textAlign:"justify"}},"I am a self-employed, self-taught Software Engineer with 4/5 years experience of coding (as a hobby) and about 6/7 months with my current employment! I am always looking for new things to learn, whether that be Dev Ops or learning a complete new language. "),o.a.createElement(c.a,{style:{fontFamily:"Inter_300Light",color:"lightgray",fontSize:"0.75rem",paddingLeft:"5vw",paddingTop:"2vh",width:"90%",textAlign:"justify"}},'During my coding adventure, I have been able to have access to suites like: Microsoft Azure and Amazon\'s AWS as my tasks had required me to use these platforms. In my free time however, I was able to apply and use the Google Cloud to host a variety of different projects on my "own" servers and manage them accordingly.'))},Page2:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{style:{fontFamily:"Inter_300Light",color:"lightgray",fontSize:"0.75rem",paddingLeft:"5vw",paddingTop:"5vh",width:"90%",textAlign:"justify"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),o.a.createElement(c.a,{style:{fontFamily:"Inter_300Light",color:"lightgray",fontSize:"0.75rem",paddingLeft:"5vw",paddingTop:"2vh",width:"90%",textAlign:"justify"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))},Page3:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{style:{fontFamily:"Inter_300Light",color:"lightgray",fontSize:"0.75rem",marginLeft:"45vw",paddingTop:"5vh",width:"45%",textAlign:"justify"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "))}},M=n(399),B=n(79),U=n(111),H=function(e){var t=e.item,n=e.onPress,a=(e.backgroundColor,e.textColor);return o.a.createElement(U.a,{onPress:n,style:{width:"100%",height:"100%"},onFocus:function(){console.log("focus")}},o.a.createElement(u.a,{style:{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}},o.a.createElement(M.a,{name:t.icon,size:24,color:a})))},G=function(e){var t=e.item;return o.a.createElement(u.a,{style:{display:"flex",flexDirection:"column",width:"100%",height:"12vh"}},o.a.createElement(H,{item:t,onPress:function(){},backgroundColor:"black",textColor:"black"}))},W=function(){return o.a.createElement(u.a,{style:{margin:"auto",width:"65%",height:"50vh",backgroundColor:"#34056A",borderRadius:5,display:"flex",flexDirection:"row"}},o.a.createElement(u.a,{style:{width:"10%",height:"100%"}},o.a.createElement(B.a,{renderItem:function(e){var t=e.item;return o.a.createElement(G,{item:t})},data:[{icon:"smileo",title:"Yllo.cc",description:"A website for a startup company"},{icon:"smileo",title:"Yllo.cc",description:"A website for a startup company"},{icon:"smileo",title:"Yllo.cc",description:"A website for a startup company"},{icon:"smileo",title:"Yllo.cc",description:"A website for a startup company"}],keyExtractor:function(e){return e.title}})),o.a.createElement(u.a,{style:{width:"80%",flex:1}},"Test"))},J=function(){var e=Object(r.useRef)(new D.a.Value(0)).current,t=S((function(e){return e.client}));Object(r.useEffect)((function(){n()}));var n=function(){D.a.timing(e,{toValue:1,duration:100,useNativeDriver:!1}).start()};return"mobile"==t.device?o.a.createElement(D.a.View,{style:[{opacity:e}]},Q(t)):t.height>600&&t.width>640?o.a.createElement(D.a.View,{style:[{opacity:e}]},X(t)):o.a.createElement(D.a.View,{style:[{opacity:e}]},Q(t))},K=["Passionate Developer","Creative Thinker","Problem Solver","Team Player","Motivated Individual","Self-taught Developer"],Y=K[Math.floor(Math.random()*K.length)],X=function(e){var t=Object(r.useState)(!1),n=i()(t,2),a=n[0],l=n[1],s=Object(r.useState)(0),m=i()(s,2),d=m[0],g=m[1],h=Object(r.useState)(!1),f=i()(h,2),p=(f[0],f[1],Object(r.useState)("right")),y=i()(p,2),E=(y[0],y[1],Object(r.useRef)(new D.a.Value(475)).current),v=Object(r.useRef)(new D.a.Value(0)).current;return o.a.createElement(u.a,{style:{backgroundColor:"#34057B",height:"90VH",marginTop:"1vh"}},o.a.createElement(D.a.View,{style:{width:"100%",height:E,justifyContent:"center",alignItems:"center",paddingTop:"1vh"}},o.a.createElement(u.a,{style:{justifyContent:"flex-start",alignItems:"flex-start",width:"18vw"}},o.a.createElement(c.a,{style:{color:"white",fontFamily:"Inter_300Light"}},"Hi I'm Olly, a...")),o.a.createElement(V,{title:Y,time:100,style:{color:"white",fontFamily:"Inter_900Black",fontSize:"3rem"},onComplete:function(e){l(e)},enabled:!0}),a?o.a.createElement(V,{title:"Thanks for checking out my site.",time:100,style:{color:"white",fontFamily:"Inter_300Light"},onComplete:function(){D.a.timing(E,{toValue:200,duration:300,useNativeDriver:!1}).start((function(e){e.finished&&g(1)})),D.a.timing(v,{toValue:1,duration:200,useNativeDriver:!1}).start()}}):o.a.createElement(o.a.Fragment,null)),1===d?o.a.createElement(W,null):o.a.createElement(o.a.Fragment,null))},Q=function(e){var t=Object(r.useState)(!1),n=i()(t,2),a=n[0],l=n[1],s=Object(r.useState)(0),m=i()(s,2),d=m[0],g=m[1],h=Object(r.useState)(!1),f=i()(h,2),p=f[0],y=f[1],E=Object(r.useState)("right"),v=i()(E,2),w=v[0],b=v[1],C=Object(r.useRef)(new D.a.Value(475)).current,j=Object(r.useRef)(new D.a.Value(0)).current;return o.a.createElement(u.a,{style:{backgroundColor:"#34057B",height:"86vh",overflow:"hidden"}},o.a.createElement(D.a.View,{style:{width:"100%",height:C,justifyContent:"center",alignItems:"center",paddingTop:"1vh"}},o.a.createElement(u.a,{style:{justifyContent:"center",alignItems:"center"}},o.a.createElement(c.a,{style:{color:"white",fontFamily:"Inter_300Light"}},"Hi I'm Olly, a...")),o.a.createElement(V,{title:Y,time:100,style:{color:"white",fontFamily:"Inter_900Black",fontSize:"1.95rem"},onComplete:function(e){l(e)},enabled:!0}),a?o.a.createElement(V,{title:"Thanks for checking out my site.",time:100,style:{color:"white",fontFamily:"Inter_300Light"},onComplete:function(){D.a.timing(C,{toValue:130,duration:300,useNativeDriver:!1}).start((function(e){})),D.a.timing(j,{toValue:1,duration:200,useNativeDriver:!1}).start()}}):o.a.createElement(o.a.Fragment,null)),o.a.createElement(q.a,{onGestureEvent:function(e){var t=0,n=e.nativeEvent.translationX,a=d;2===e.nativeEvent.state&&(t=n),4===e.nativeEvent.state&&(n<t&&b("left"),n>t&&b("right"),y(!0)),5===e.nativeEvent.state&&(n>0&&n-t>125&&((a=d-1)<0&&(a=2),g(a),d<0&&g(2)),n<0&&t-n>125&&((a=d+1)>2&&(a=0),g(a),d>2&&g(0)),y(!1))}},o.a.createElement(D.a.View,{style:{width:"99vw",height:e.height<=750?"68vh":"73vh",backgroundColor:"#34056A",opacity:j,borderTopLeftRadius:25,borderTopRightRadius:25,marginLeft:"0.5vw"}},p?o.a.createElement(u.a,{style:{position:"absolute"}},o.a.createElement(M.a,{name:"right"===w?"stepbackward":"stepforward",size:24,color:"lightgray",style:{marginLeft:"45vw"}})):o.a.createElement(o.a.Fragment,null),o.a.createElement((function(){var e;0==d&&(e="AboutMe"),1==d&&(e="Page2"),2==d&&(e="Page3");var t=N[e];return o.a.createElement(t,null)}),null))))};n(389);function Z(){var e=Object(_.c)({Inter_900Black:_.b,Inter_300Light:_.a}),t=(i()(e,1)[0],o.a.useState(!1)),n=i()(t,2),a=n[0],r=n[1];return o.a.createElement(k.b,null,o.a.createElement(s.a,{store:j},o.a.createElement(z.a,null,o.a.createElement(u.a,{style:$.app},a?o.a.createElement(u.a,{style:{}},o.a.createElement(R,null)):o.a.createElement(o.a.Fragment,null),o.a.createElement(u.a,null,a?o.a.createElement(u.a,null,o.a.createElement(T.c,null,o.a.createElement(T.b,{path:"/",element:o.a.createElement(J,null)})),o.a.createElement(u.a,{style:$.loadedContainer},o.a.createElement(c.a,{style:{fontFamily:"Inter_300Light",color:"lightgray",fontSize:"0.75rem"}},"\xa9"," 2022 yllo.cc |",o.a.createElement("a",{href:"https://github.com/ollymonger/ollymonger.github.io/",style:{color:"lightgray",textDecoration:"none"}}," Source")," | Built using Expo and React-Native"))):o.a.createElement(u.a,{style:$.loadingContainer},o.a.createElement(P.a,{size:200,width:10,fill:100,rotation:0,duration:700,tintColor:"#B084CC",backgroundColor:"purple",onAnimationComplete:function(){return r(!0)}},(function(e){return o.a.createElement(c.a,{style:$.loadingText},e>=95?"LOADED":Math.round(e)+"%")}))))))))}var $=l.a.create({app:{flex:1,backgroundColor:"#340580",color:"#fff",WebkitTouchCallout:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none",overflow:"hidden",height:"100%",width:"100%"},header:{flex:1,maxHeight:"5%",paddingLeft:"5%",paddingTop:"2vh",paddingRight:"5%"},headerTextColor:{color:"#F7F7FF",fontFamily:"Inter_900Black"},navLeft:{flexDirection:"row",justifyContent:"flex-start",color:"#F7F7FF"},navRight:{bottom:"20px",flexDirection:"row",justifyContent:"flex-end",color:"#F7F7FF"},loadingContainer:{flex:2,paddingLeft:"23vw",paddingTop:"25vh",paddingRight:"23vw",alignSelf:"center"},loadingText:{fontFamily:"Inter_900Black",fontSize:"2rem",color:"#B084CC"},loadedContainer:{color:"lightgray",backgroundColor:"#340580",width:"100%",justifyContent:"center",alignItems:"center",height:"6.5vh",padding:"0.5vh"}})},269:function(e,t,n){e.exports=n(391)},389:function(e,t,n){e.exports=n.p+"static/media/desktop.c8a87ae7.png"}},[[269,1,2]]]);
//# sourceMappingURL=app.d82fe339.chunk.js.map