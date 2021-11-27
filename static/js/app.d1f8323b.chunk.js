(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{136:function(e,t,a){"use strict";a.d(t,"b",(function(){return U})),a.d(t,"a",(function(){return q})),a.d(t,"c",(function(){return V}));var n=a(28),i=a.n(n),o=a(0),r=a.n(o),l=a(3),c=a(13),s=a(2),u=a(63),g=a(77),d=a(101),m={device:"null",lang:"en",width:window.innerWidth,height:window.innerHeight},h=Object(g.b)({name:"client",initialState:m,reducers:{setClient:function(e){var t=(new d.UAParser).getResult();e.device=t.device.type?t.device.type:"web"},setScreenSize:function(e,t){e.width=t.payload.width,e.height=t.payload.height},getState:function(e){return e},setLanguage:function(e){window.navigator.language.indexOf("-")>0?e.lang=window.navigator.language.substring(0,2):e.lang=window.navigator.language},setSpecificLang:function(e,t){e.lang=t.payload},getLanguage:function(e){e.lang}}}),p=h.actions,f=(p.setClient,p.setLanguage,p.setSpecificLang),E=(p.getLanguage,p.setScreenSize),v=h.reducer,y=Object(g.a)({reducer:{client:v}}),b=function(){return Object(u.b)()},w=u.c,x=a(64),T=a(197),C=a(199),F=a(9),j=[{lang:"en",menu:"MENU",home:"HOME",projects:"PROJECTS",contact:"CONTACT"},{lang:"fr",menu:"MENU",home:"ACCUEIL",projects:"PROJETS",contact:"CONTACT"},{lang:"de",menu:"SPEISEKARTE",home:"HEIMAT",projects:"PROJEKTE",contact:"KONTAKT"},{lang:"es",menu:"MEN\xda",home:"HOGAR",projects:"PROYECTOS",contact:"CONTACTO"},{lang:"it",menu:"MEN\xd9",home:"CASA",projects:"PROGETTI",contact:"CONTATTO"},{lang:"ru",menu:"\u041c\u0415\u041d\u042e",home:"\u0414\u041e\u041c",projects:"\u041f\u0420\u041e\u0415\u041a\u0422\u042b",contact:"\u041a\u041e\u041d\u0422\u0410\u041a\u0422"},{lang:"zh",menu:"\u83dc\u5355",home:"\u5bb6",projects:"\u9879\u76ee",contact:"\u8054\u7cfb"},{lang:"ja",menu:"\u30e1\u30cb\u30e5\u30fc",home:"\u5bb6",projects:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",contact:"\u9023\u7d61\u5148"}],O=function(){var e=r.a.useState(!1),t=i()(e,2),a=t[0],n=t[1],o=w((function(e){return e.client})),l=function(){return n(!1)},u=Object(F.e)(),g=j.find((function(e){return e.lang===o.lang}));return r.a.createElement(s.a,{style:V.header},r.a.createElement(s.a,{style:V.navLeft},r.a.createElement(c.a,{style:V.headerTextColor},"yllo.cc")),r.a.createElement(s.a,{style:V.navRight},r.a.createElement(T.a,{visible:a,onDismiss:l,anchor:r.a.createElement(x.a,{onPress:function(){return n(!0)},color:"#B084CC",title:g.menu})},r.a.createElement(T.a.Item,{onPress:function(){u("/",{replace:!0}),l()},title:g.home}),r.a.createElement(C.a,null),r.a.createElement(T.a.Item,{onPress:function(){u("/projects",{replace:!0}),l()},title:j.map((function(e){if(e.lang===o.lang)return e.projects}))}),r.a.createElement(C.a,null),r.a.createElement(T.a.Item,{onPress:function(){u("/contact",{replace:!0}),l()},title:g.contact}))))},S=a(50),z=[{lang:"en",menu:"MENU",home:"HOME",projects:"PROJECTS",contact:"CONTACT"},{lang:"fr",menu:"MENU",home:"ACCUEIL",projects:"PROJETS",contact:"CONTACT"},{lang:"de",menu:"SPEISEKARTE",home:"HEIMAT",projects:"PROJEKTE",contact:"KONTAKT"},{lang:"es",menu:"MEN\xda",home:"HOGAR",projects:"PROYECTOS",contact:"CONTACTO"},{lang:"it",menu:"MEN\xd9",home:"CASA",projects:"PROGETTI",contact:"CONTATTO"},{lang:"ru",menu:"\u041c\u0415\u041d\u042e",home:"\u0414\u041e\u041c",projects:"\u041f\u0420\u041e\u0415\u041a\u0422\u042b",contact:"\u041a\u041e\u041d\u0422\u0410\u041a\u0422"},{lang:"zh",menu:"\u83dc\u5355",home:"\u5bb6",projects:"\u9879\u76ee",contact:"\u8054\u7cfb"},{lang:"ja",menu:"\u30e1\u30cb\u30e5\u30fc",home:"\u5bb6",projects:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",contact:"\u9023\u7d61\u5148"}],R=function(){var e=w((function(e){return e.client})),t=z.find((function(t){return t.lang===e.lang}));return r.a.createElement(s.a,{style:V.header},r.a.createElement(s.a,{style:V.navLeft},r.a.createElement(S.a,{to:"/"},r.a.createElement(c.a,{style:V.headerTextColor},"yllo.cc"))),r.a.createElement(s.a,{style:V.navRight},r.a.createElement(s.a,{style:{paddingRight:"5%"}},r.a.createElement(S.a,{to:"/"},r.a.createElement(c.a,{style:V.headerTextColor},t.home))),r.a.createElement(s.a,{style:{paddingRight:"5%"}},r.a.createElement(S.a,{to:"/projects"},r.a.createElement(c.a,{style:V.headerTextColor},t.projects))),r.a.createElement(s.a,null,r.a.createElement(S.a,{to:"/contact"},r.a.createElement(c.a,{style:V.headerTextColor},t.contact)))))},L=function(){var e=w((function(e){return e.client})),t=b(),a=r.a.useState({width:0,height:0}),n=i()(a,2),l=(n[0],n[1]),c=Object(o.useCallback)((function(e){l({width:window.innerWidth,height:window.innerHeight}),t(E({width:window.innerWidth,height:window.innerHeight}))}),[]);return Object(o.useEffect)((function(){return window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}}),[c]),"mobile"===e.device?r.a.createElement(O,null):e.height>640&&e.width>640?r.a.createElement(R,null):r.a.createElement(O,null)},I=a(83),N=a(201),k=a(135),A=a(15),J=a(57),M=[{lang:"en",text:"Hi, I'm Olly!"},{lang:"es",text:"Hola, soy Olly!"},{lang:"fr",text:"Bonjour, je suis Olly!"},{lang:"de",text:"Hallo, ich bin Olly!"},{lang:"it",text:"Ciao, sono Olly!"},{lang:"ru",text:"\u041f\u0440\u0438\u0432\u0435\u0442, \u044f Olly!"},{lang:"zh",text:"\u4f60\u597d\uff0c\u6211\u662fOlly!"},{lang:"ja",text:"\u3053\u3093\u306b\u3061\u306f\u3001\u79c1\u306fOlly\u3067\u3059!"}],P=[{lang:"en",text:"A passionate developer from London, creating lots of apps using React, React Native, Typescript, JavaScript, Java, C#!"},{lang:"es",text:"Un desarrollador apasionado de Londres, creando muchas aplicaciones usando React, React Native, Typescript, JavaScript, Java, C#!"},{lang:"fr",text:"Un d\xe9veloppeur passionn\xe9 de Londres, cr\xe9ant beaucoup d'applications en utilisant React, React Native, Typescript, JavaScript, Java, C#!"},{lang:"de",text:"Ein passionierter Entwickler aus London, die viele Apps mit React, React Native, Typescript, JavaScript, Java, C# erstellt!"},{lang:"it",text:"Uno sviluppatore passionato da Londra, creando molte applicazioni usando React, React Native, Typescript, JavaScript, Java, C#!"},{lang:"ru",text:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u0438\u0437 \u041b\u043e\u043d\u0434\u043e\u043d\u0430, \u0441\u043e\u0437\u0434\u0430\u044e\u0449\u0438\u0439 \u043c\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c React, React Native, Typescript, JavaScript, Java, C#!"},{lang:"zh",text:"\u4e00\u4e2a\u70ed\u7231\u5f00\u53d1\u7684\u82f1\u56fd\u5f00\u53d1\u8005\uff0c\u521b\u5efa\u4e86\u8bb8\u591a\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528React\u3001React Native\u3001Typescript\u3001JavaScript\u3001Java\u3001C#!"},{lang:"ja",text:"\u82f1\u56fd\u306e\u4eba\u6c17\u306e\u3042\u308b\u958b\u767a\u8005\u3067\u3059\u3002React\u3001React Native\u3001Typescript\u3001JavaScript\u3001Java\u3001C#\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\uff01"}],H=[{lang:"en",text:"I have designed this site to showcase some of my skills, feel free to have a look around! This site is completely resizable, whether you're viewing this on a mobile or a web browser! Check it out, if you're on a web browser try resizing your page! You'll see the mobile header & mobile components instead of the web components!"},{lang:"es",text:"He dise\xf1ado este sitio para mostrar algunas de mis habilidades, \xa1sea libre de ver por todo el sitio! Este sitio es totalmente redimensionable, aunque est\xe9 viendo esto en un dispositivo m\xf3vil o un navegador web! \xa1Revisa esto, si est\xe1s en un navegador web, prueba a redimensionar tu p\xe1gina! \xa1Vas a ver el encabezado m\xf3vil y los componentes m\xf3viles en lugar de los componentes web!"},{lang:"fr",text:"J'ai con\xe7u ce site pour montrer quelques de mes comp\xe9tences, n'h\xe9sitez pas \xe0 y aller! Ce site est enti\xe8rement redimensionnable, quelle que soit la taille de votre \xe9cran! Regardez-le, si vous \xeates sur un navigateur web, essayez de redimensionner votre page!"},{lang:"de",text:"Ich habe diese Website entworfen, um einige meiner F\xe4higkeiten zu zeigen, frei von einem Blick dar\xfcber! Diese Website ist vollst\xe4ndig skalierbar, ob Sie dies auf einem Mobilger\xe4t oder einem Webbrowser sehen! \xdcberpr\xfcfen Sie es, wenn Sie auf einem Webbrowser sehen, versuchen Sie, Ihre Seite zu skalieren!"},{lang:"it",text:"Ho progettato questo sito per mostrare alcune delle mie competenze, non esitate a dare un'occhiata! Questo sito \xe8 interamente ridimensionabile, anche se si sta visualizzando su un dispositivo mobile o un browser web! Controlla, se si sta visualizzando su un browser web, prova a ridimensionare la pagina!"},{lang:"ru",text:"\u042f \u0441\u043e\u0437\u0434\u0430\u043b \u044d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u043c\u043e\u0438\u0445 \u043d\u0430\u0432\u044b\u043a\u043e\u0432, \u043d\u0435 \u0431\u0435\u0441\u043f\u043e\u043a\u043e\u0439\u0442\u0435\u0441\u044c, \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043f\u043e \u0432\u0441\u0435\u043c\u0443 \u0441\u0430\u0439\u0442\u0443! \u042d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u043c\u044b\u0439, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0432\u044b \u043f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0435 \u044d\u0442\u043e \u043d\u0430 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u0438\u043b\u0438 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435! \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0435\u0433\u043e, \u0435\u0441\u043b\u0438 \u0432\u044b \u043d\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b!"},{lang:"zh",text:"\u6211\u8bbe\u8ba1\u4e86\u8fd9\u4e2a\u7f51\u7ad9, \u4ee5\u5c55\u793a\u4e00\u4e9b\u6211\u7684\u6280\u80fd, \u8bf7\u81ea\u7531\u6d4f\u89c8! \u8fd9\u4e2a\u7f51\u7ad9\u662f\u5b8c\u5168\u53ef\u4ee5\u8c03\u6574\u5927\u5c0f\u7684, \u5373\u4f7f\u4f60\u5728\u79fb\u52a8\u8bbe\u5907\u6216\u8005\u7f51\u9875\u6d4f\u89c8\u5668\u4e0a\u67e5\u770b! \u68c0\u67e5\u5b83, \u5982\u679c\u4f60\u5728\u7f51\u9875\u6d4f\u89c8\u5668\u4e0a, \u8bf7\u5c1d\u8bd5\u8c03\u6574\u4f60\u7684\u9875\u9762\u5927\u5c0f!"},{lang:"ja",text:"\u3053\u306e\u30b5\u30a4\u30c8\u306f\u79c1\u306e\u30b9\u30ad\u30eb\u306e\u4e00\u90e8\u3092\u7d39\u4ecb\u3059\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u304a\u6c17\u8efd\u306b\u3054\u89a7\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u30b5\u30a4\u30c8\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u3067\u8868\u793a\u3057\u3066\u3044\u308b\u5834\u5408\u3067\u3082Web\u30d6\u30e9\u30a6\u30b6\u30fc\u3067\u8868\u793a\u3057\u3066\u3044\u308b\u5834\u5408\u3067\u3082\u3001\u5b8c\u5168\u306b\u30b5\u30a4\u30ba\u5909\u66f4\u3067\u304d\u307e\u3059\u3002 Web\u30d6\u30e9\u30a6\u30b6\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u30da\u30fc\u30b8\u306e\u30b5\u30a4\u30ba\u3092\u5909\u66f4\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002 Web\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4ee3\u308f\u308a\u306b\u3001\u30e2\u30d0\u30a4\u30eb\u30d8\u30c3\u30c0\u30fc\u3068\u30e2\u30d0\u30a4\u30eb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}],B=[{lang:"en",text:"Have a project, or an idea? Feel free to contact me using the contact link either in the menu, or the header. Oh, have you noticed the button below? This site also checks your browser's native language, and adjusts the site accordingly!"},{lang:"es",text:"\xbfTienes un proyecto o una idea? No dude en contactarme usando el enlace de contacto en el men\xfa o en el encabezado. Oh, \xbfhas notado el bot\xf3n de abajo? Este sitio tambi\xe9n verifica el idioma nativo de su navegador y ajusta el sitio en consecuencia!"},{lang:"fr",text:"Vous avez un projet, une id\xe9e? N'h\xe9sitez pas \xe0 me contacter en utilisant le lien contact soit dans le menu, soit dans l'ent\xeate. Oh, avez-vous remarqu\xe9 le bouton ci-dessous ? Ce site v\xe9rifie \xe9galement la langue maternelle de votre navigateur et ajuste le site en cons\xe9quence!"},{lang:"de",text:"Sie haben ein Projekt oder eine Idee? Kontaktieren Sie mich gerne \xfcber den Kontaktlink entweder im Men\xfc oder in der Kopfzeile. Oh, haben Sie den Button unten bemerkt? Diese Site \xfcberpr\xfcft auch die Muttersprache Ihres Browsers und passt die Site entsprechend an!"},{lang:"it",text:"Hai un progetto o un'idea? Non esitate a contattarmi utilizzando il link di contatto nel menu o nell'intestazione. Oh, hai notato il pulsante sotto? Questo sito anche controlla la lingua nativa del tuo browser e adatta il sito in conseguenza!"},{lang:"ru",text:"\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u0438\u043b\u0438 \u0438\u0434\u0435\u044f? \u041d\u0435 \u0431\u0435\u0441\u043f\u043e\u043a\u043e\u0439\u0442\u0435\u0441\u044c, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441\u043e \u043c\u043d\u043e\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u0441\u044b\u043b\u043a\u0443 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432 \u043c\u0435\u043d\u044e \u0438\u043b\u0438 \u0432 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0435. \u041e, \u0432\u044b \u0437\u0430\u043c\u0435\u0442\u0438\u043b\u0438 \u043a\u043d\u043e\u043f\u043a\u0443 \u043d\u0438\u0436\u0435? \u042d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u044f\u0437\u044b\u043a \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442 \u0435\u0433\u043e \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u044d\u0442\u0438\u043c!"},{lang:"zh",text:"\u4f60\u6709\u4e00\u4e2a\u9879\u76ee\u6216\u4e00\u4e2a\u60f3\u6cd5\uff1f\u8bf7\u8054\u7cfb\u6211\uff0c\u4f7f\u7528\u8054\u7cfb\u94fe\u63a5\u5728\u83dc\u5355\u6216\u6807\u9898\u680f\u3002\u54e6\uff0c\u4f60\u6ce8\u610f\u5230\u4e86\u4e0b\u9762\u7684\u6309\u94ae\u5417\uff1f\u8fd9\u4e2a\u7f51\u7ad9\u4e5f\u68c0\u67e5\u4e86\u4f60\u7684\u6d4f\u89c8\u5668\u7684\u672c\u5730\u8bed\u8a00\uff0c\u5e76\u9002\u5e94\u7f51\u7ad9!"},{lang:"ja",text:"\u3042\u306a\u305f\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u307e\u305f\u306f\u30a2\u30a4\u30c7\u30a2\uff1f\u304a\u554f\u3044\u5408\u308f\u305b\u306f\u3001\u30e1\u30cb\u30e5\u30fc\u307e\u305f\u306f\u30d8\u30c3\u30c0\u30fc\u306e\u30ea\u30f3\u30af\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u304a\u6c17\u306b\u5165\u308a\u306e\u30dc\u30bf\u30f3\u3092\u898b\u3066\u3044\u307e\u3059\u304b\uff1f\u3053\u306e\u30b5\u30a4\u30c8\u306f\u3001\u3042\u306a\u305f\u306e\u30d6\u30e9\u30a6\u30b6\u30fc\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u8a00\u8a9e\u3092\u78ba\u8a8d\u3057\u3001\u305d\u308c\u306b\u5408\u308f\u305b\u3066\u30b5\u30a4\u30c8\u3092\u8abf\u6574\u3057\u307e\u3059!"}],K=[{lang:"en",text:"Randomise Language"},{lang:"es",text:"Idioma aleatorio"},{lang:"fr",text:"Langue al\xe9atoire"},{lang:"de",text:"Zuf\xe4llige Sprache"},{lang:"it",text:"Lingua casuale"},{lang:"ru",text:"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0439 \u044f\u0437\u044b\u043a"},{lang:"zh",text:"\u968f\u673a\u8bed\u8a00"},{lang:"ja",text:"\u30e9\u30f3\u30c0\u30e0\u306a\u8a00\u8a9e"}],W=function(e){var t=b(),a=K.map((function(t){if(t.lang===e.lang)return t.text}));return r.a.createElement(s.a,{style:V.container},r.a.createElement(c.a,{style:{fontFamily:"Inter_900Black",color:"#F7F7FF",fontSize:"ja"===e.lang?"200%":"250%"}},M.map((function(t){if(t.lang===e.lang)return t.text}))),r.a.createElement(s.a,null,r.a.createElement(J.a,{style:{opacity:.1,position:"absolute",width:window.innerWidth/1.25,height:window.innerHeight/1.25,resizeMode:"contain",marginTop:"-20%"},blurRadius:1.5,borderRadius:10,source:U})),r.a.createElement(c.a,{style:{fontFamily:"Inter_300Light",color:"#F7F7FF",fontSize:"ja"===e.lang?"75%":"80%",width:"95%"}},P.map((function(t){if(t.lang===e.lang)return t.text}))),r.a.createElement(c.a,{style:{fontFamily:"Inter_300Light",color:"#F7F7FF",fontSize:"ja"===e.lang?"75%":"80%",width:"95%"}},H.map((function(t){if(t.lang===e.lang)return t.text}))),r.a.createElement(c.a,{style:{fontFamily:"Inter_300Light",color:"#F7F7FF",fontSize:"ja"===e.lang?"75%":"80%",width:"95%",paddingTop:"1%"}},B.map((function(t){if(t.lang===e.lang)return t.text}))),r.a.createElement(s.a,{style:{width:"70%",paddingTop:"5%"}},r.a.createElement(x.a,{onPress:function(){var e=["en","es","fr","de","it","ru","zh","ja"],a=Math.floor(Math.random()*e.length);console.log("attempting to set to: "+e[a]),t(f(e[a]))},title:a.toString(),color:"#B084CC"})))},_=function(){var e=Object(o.useRef)(new A.a.Value(0)).current;Object(o.useEffect)((function(){t()}));var t=function(){A.a.timing(e,{toValue:1,duration:500}).start()},a=(b(),w((function(e){return e.client})));return console.log(a.width),"mobile"==a.device?r.a.createElement(A.a.View,{style:[{opacity:e}]},W(a)):a.height>640&&a.width>640?r.a.createElement(A.a.View,{style:[{opacity:e}]},function(e){var t=b(),a=K.map((function(t){if(t.lang===e.lang)return t.text})),n={primary:"zh"===e.lang||"ja"===e.lang?"325%":"400%",dev:("zh"===e.lang||e.lang,"100%"),secondary:"zh"===e.lang||"ja"===e.lang?"74%":"75%"};return r.a.createElement(s.a,{style:V.container},r.a.createElement(c.a,{style:{fontFamily:"Inter_900Black",color:"#F7F7FF",fontSize:n.primary,width:"95%"}},M.map((function(t){if(t.lang===e.lang)return t.text}))),r.a.createElement(c.a,{style:{fontFamily:"Inter_300Light",color:"#F7F7FF",fontSize:n.dev,width:"45%"}},P.map((function(t){if(t.lang===e.lang)return t.text}))),r.a.createElement(c.a,{style:{fontFamily:"Inter_300Light",color:"#F7F7FF",fontSize:n.secondary,width:"45%"}},H.map((function(t){if(t.lang===e.lang)return t.text}))),r.a.createElement(c.a,{style:{fontFamily:"Inter_300Light",color:"#F7F7FF",fontSize:n.secondary,width:"45%",paddingTop:"2%"}},B.map((function(t){if(t.lang===e.lang)return t.text}))),r.a.createElement(s.a,{style:{width:"50%",paddingTop:"5%"}},r.a.createElement(x.a,{onPress:function(){var e=["en","es","fr","de","it","ru","zh","ja"],a=Math.floor(Math.random()*e.length);console.log("attempting to set to: "+e[a]),t(f(e[a]))},title:a.toString(),color:"#B084CC"})))}(a)):r.a.createElement(A.a.View,{style:[{opacity:e}]},W(a))},U=a(189);function q(){var e=Object(I.c)({Inter_900Black:I.b,Inter_300Light:I.a}),t=i()(e,1)[0],a=r.a.useState(!1),n=i()(a,2),l=n[0],g=n[1];return Object(o.useEffect)((function(){t&&setTimeout((function(){g(!0)}),1e3)}),[t]),r.a.createElement(S.b,null,r.a.createElement(u.a,{store:y},r.a.createElement(N.a,null,r.a.createElement(s.a,{style:V.app},l?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{style:{}},r.a.createElement(L,null)),r.a.createElement(F.c,null,r.a.createElement(F.b,{exact:!0,path:"/",element:r.a.createElement(_,null)}))):r.a.createElement(s.a,{style:V.container},r.a.createElement(k.a,{size:300,width:20,progress:100,animateFromValue:0,duration:1e3,backgroundColor:"purple",color:"blue"}),r.a.createElement(c.a,{style:V.headerTextColor},"Loading site..."))))))}var V=l.a.create({app:{flex:1,backgroundColor:"#340580",color:"#fff",height:"100%"},header:{flex:2,maxHeight:"7%",paddingLeft:"5%",paddingTop:"2%",paddingRight:"5%"},headerTextColor:{color:"#F7F7FF",fontFamily:"Inter_900Black"},navLeft:{flexDirection:"row",justifyContent:"flex-start",color:"#F7F7FF"},navRight:{bottom:"20px",flexDirection:"row",justifyContent:"flex-end",color:"#F7F7FF"},container:{flex:2,paddingLeft:"10%",paddingTop:"5%",paddingRight:"10%",alignSelf:"center"}})},142:function(e,t,a){e.exports=a(190)},189:function(e,t,a){e.exports=a.p+"static/media/desktop.c8a87ae7.png"}},[[142,1,2]]]);
//# sourceMappingURL=app.d1f8323b.chunk.js.map