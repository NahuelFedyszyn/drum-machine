(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{10:function(e,c,s){},12:function(e,c,s){"use strict";s.r(c);var a=s(1),t=s.n(a),d=s(3),i=s.n(d),n=(s(9),s(4)),r=(s(10),s(0));var l=function(){var e={81:{keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},87:{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},69:{keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},65:{keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},83:{keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},68:{keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},90:{keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},88:{keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},67:{keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}},c=Object(a.useState)("PLAY!"),s=Object(n.a)(c,2),t=s[0],d=s[1];function i(c){for(var s,a=document.getElementsByTagName("audio"),t=0;t<a.length;t++)a[t].pause(),a[t].currentTime=0;s=c.target.id,document.getElementById(s).style.backgroundColor="black",document.getElementById(s).style.boxShadow="0 0 15px 2px red inset",document.getElementById("display").style.textShadow="black 0 0 30px",setTimeout((function(){document.getElementById(s).style.backgroundColor="brown",document.getElementById(s).style.boxShadow="0 0 15px 2px black inset",document.getElementById("display").style.textShadow="none"}),100),c.target.lastChild.play(),d(e[c.target.id].id)}return document.onkeydown=function(e){for(var c=document.getElementsByTagName("audio"),s=0;s<c.length;s++)c[s].pause(),c[s].currentTime=0;e=e||window.event;try{document.getElementById(e.keyCode).click()}catch(a){}},Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:"mainDiv",children:[Object(r.jsx)("h1",{children:"DRUM MACHINE"}),Object(r.jsxs)("div",{className:"table",children:[Object(r.jsx)("div",{id:"leftCol",className:"col",children:Object(r.jsx)("div",{id:"drum-machine",children:Object(r.jsxs)("div",{className:"rowContainer",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("button",{onClick:i,id:"81",className:"drum-pad",children:["Q",Object(r.jsx)("audio",{id:"Q",className:"clip",src:e[81].url})]}),Object(r.jsxs)("button",{onClick:i,id:"87",className:"drum-pad",children:["W",Object(r.jsx)("audio",{id:"W",className:"clip",src:e[87].url})]}),Object(r.jsxs)("button",{onClick:i,id:"69",className:"drum-pad",children:["E",Object(r.jsx)("audio",{id:"E",className:"clip",src:e[69].url})]})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("button",{onClick:i,id:"65",className:"drum-pad",children:["A",Object(r.jsx)("audio",{id:"A",className:"clip",src:e[65].url})]}),Object(r.jsxs)("button",{onClick:i,id:"83",className:"drum-pad",children:["S",Object(r.jsx)("audio",{id:"S",className:"clip",src:e[83].url})]}),Object(r.jsxs)("button",{onClick:i,id:"68",className:"drum-pad",children:["D",Object(r.jsx)("audio",{id:"D",className:"clip",src:e[68].url})]})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("button",{onClick:i,id:"90",className:"drum-pad",children:["Z",Object(r.jsx)("audio",{id:"Z",className:"clip",src:e[90].url})]}),Object(r.jsxs)("button",{onClick:i,id:"88",className:"drum-pad",children:["X",Object(r.jsx)("audio",{id:"X",className:"clip",src:e[88].url})]}),Object(r.jsxs)("button",{onClick:i,id:"67",className:"drum-pad",children:["C",Object(r.jsx)("audio",{id:"C",className:"clip",src:e[67].url})]})]})]})})}),Object(r.jsx)("div",{id:"rightCol",className:"col",children:Object(r.jsx)("h2",{id:"display",children:t})})]}),Object(r.jsxs)("div",{className:"linkContainer",children:[Object(r.jsx)("div",{className:"nahuelContainer",children:Object(r.jsx)("a",{target:"_blank",href:"https://nahuelfedyszyn.github.io/nahuelfedy/",className:"aNahuel",children:"by Nahuel Fedyszyn"})}),Object(r.jsxs)("span",{children:[Object(r.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/nahuel-fedyszyn-a95764186/",className:"aIcon",children:Object(r.jsx)("i",{className:"bi bi-linkedin"})}),Object(r.jsx)("a",{target:"_blank",href:"https://github.com/NahuelFedyszyn",className:"aIcon",children:Object(r.jsx)("i",{className:"bi bi-github"})})]})]})]})})},m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(c){var s=c.getCLS,a=c.getFID,t=c.getFCP,d=c.getLCP,i=c.getTTFB;s(e),a(e),t(e),d(e),i(e)}))};i.a.render(Object(r.jsx)(t.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root")),m()},9:function(e,c,s){}},[[12,1,2]]]);
//# sourceMappingURL=main.2a4e890b.chunk.js.map