(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,a,s){},13:function(e,a,s){},15:function(e,a,s){},16:function(e,a,s){"use strict";s.r(a);var c=s(1),t=s.n(c),n=s(7),r=s.n(n),i=(s(12),s(13),s(3)),o=s(0),l=function(){return Object(o.jsxs)("div",{className:"range filter",children:[Object(o.jsx)("h4",{className:"filter-title",children:" \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u043e\u0432:  "}),Object(o.jsx)("input",{className:"range-count",min:"0",max:"100",type:"range"}),Object(o.jsxs)("div",{className:"range-wrapper",children:[Object(o.jsx)("label",{className:"range-count-min range-label",children:"1"}),Object(o.jsx)("label",{className:"range-count-max range-label",children:"100"})]}),Object(o.jsx)("h4",{className:"filter-title",children:" \u0413\u043e\u0434 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u0438\u044f  "}),Object(o.jsx)("input",{className:"range-years",min:"0",max:"100",type:"range"}),Object(o.jsxs)("div",{className:"range-wrapper",children:[Object(o.jsx)("label",{className:"range-years-min range-label",children:"1940"}),Object(o.jsx)("label",{className:"range-years-max range-label",children:"2010"})]})]})},m=function(){return Object(o.jsxs)("div",{className:"sort filter",children:[Object(o.jsx)("span",{className:"sort-title",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"}),Object(o.jsxs)("select",{className:"sort--select",children:[Object(o.jsx)("option",{value:"",children:"\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e: \u043e\u0442 \xab\u0410\xbb \u0434\u043e \xab\u042f\xbb"}),Object(o.jsx)("option",{value:"",children:"\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e: \u043e\u0442 \xab\u042f\xbb \u0434\u043e \xab\u0410\xbb"}),Object(o.jsx)("option",{value:"",children:"\u041f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0432\u0443: \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e"}),Object(o.jsx)("option",{value:"",children:"\u041f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0432\u0443: \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e"})]})]})},u=s(2),h=s.p+"static/media/ball.02ba2b1b.svg",j=s.p+"static/media/bell.bb18e4ce.svg",b=s.p+"static/media/cone.7a360a86.svg",p=s.p+"static/media/snowflake.a7de9f17.svg",d=s.p+"static/media/toy.d8ea3c17.svg",v=function(e){var a=e.setData,s=e.rawData,c=e.isCircle,t=e.isBell,n=e.isCone,r=e.isSnow,i=e.isFigure,l=e.setCircle,m=e.setBell,v=e.setCone,f=e.setSnow,x=e.setFigure;function O(e){switch(e.value){case"\u0448\u0430\u0440":e.classList.toggle("active"),l(c=!c);break;case"\u043a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a":e.classList.toggle("active"),m(t=!t);break;case"\u0448\u0438\u0448\u043a\u0430":e.classList.toggle("active"),v(n=!n);break;case"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430":e.classList.toggle("active"),f(r=!r);break;case"\u0444\u0438\u0433\u0443\u0440\u043a\u0430":e.classList.toggle("active"),x(i=!i)}!function(){var e=[];if(c){var o=s.filter((function(e){return"\u0448\u0430\u0440"===e.shape}));e=[].concat(Object(u.a)(e),Object(u.a)(o))}if(t){var l=s.filter((function(e){return"\u043a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a"===e.shape}));e=[].concat(Object(u.a)(e),Object(u.a)(l))}if(n){var m=s.filter((function(e){return"\u0448\u0438\u0448\u043a\u0430"===e.shape}));e=[].concat(Object(u.a)(e),Object(u.a)(m))}if(r){var h=s.filter((function(e){return"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430"===e.shape}));e=[].concat(Object(u.a)(e),Object(u.a)(h))}if(i){var j=s.filter((function(e){return"\u0444\u0438\u0433\u0443\u0440\u043a\u0430"===e.shape}));e=[].concat(Object(u.a)(e),Object(u.a)(j))}a(0===e.length?s:e)}()}return Object(o.jsxs)("div",{className:"shape filter",children:[Object(o.jsx)("h4",{className:"filter-title",children:"\u0424\u043e\u0440\u043c\u0430"}),Object(o.jsxs)("div",{className:"filter--shape",children:[Object(o.jsxs)("div",{className:"shape--item",children:[Object(o.jsx)("button",{className:"shape-btn",onClick:function(e){return O(e.currentTarget)},value:"\u0448\u0430\u0440",children:Object(o.jsx)("img",{className:"shape-img",src:h,alt:""})}),Object(o.jsx)("p",{className:"shape-text",children:"\u0428\u0430\u0440"})]}),Object(o.jsxs)("div",{className:"shape--item",children:[Object(o.jsx)("button",{className:"shape-btn",onClick:function(e){return O(e.currentTarget)},value:"\u043a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a",children:Object(o.jsx)("img",{className:"shape-img",src:j,alt:""})}),Object(o.jsx)("p",{className:"shape-text",children:"\u041a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a"})]}),Object(o.jsxs)("div",{className:"shape--item",children:[Object(o.jsx)("button",{className:"shape-btn",onClick:function(e){return O(e.currentTarget)},value:"\u0448\u0438\u0448\u043a\u0430",children:Object(o.jsx)("img",{className:"shape-img",src:b,alt:""})}),Object(o.jsx)("p",{className:"shape-text",children:"\u0428\u0438\u0448\u043a\u0430"})]}),Object(o.jsxs)("div",{className:"shape--item",children:[Object(o.jsx)("button",{className:"shape-btn",onClick:function(e){return O(e.currentTarget)},value:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",children:Object(o.jsx)("img",{className:"shape-img",src:p,alt:""})}),Object(o.jsx)("p",{className:"shape-text",children:"\u0421\u043d\u0435\u0436\u0438\u043d\u043a\u0430"})]}),Object(o.jsxs)("div",{className:"shape--item",children:[Object(o.jsx)("button",{className:"shape-btn",onClick:function(e){return O(e.currentTarget)},value:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",children:Object(o.jsx)("img",{className:"shape-img",src:d,alt:""})}),Object(o.jsx)("p",{className:"shape-text",children:"\u0424\u0438\u0433\u0443\u0440\u043a\u0430"})]})]}),Object(o.jsx)("h4",{className:"filter-title",children:"\u0426\u0432\u0435\u0442"}),Object(o.jsxs)("div",{className:"filter--color",children:[Object(o.jsx)("input",{id:"white",className:"hidden",value:"white",type:"checkbox"}),Object(o.jsx)("label",{htmlFor:"white",className:"checkbox-label white"}),Object(o.jsx)("input",{id:"yellow",className:"hidden",value:"yellow",type:"checkbox"}),Object(o.jsx)("label",{htmlFor:"yellow",className:"checkbox-label yellow"}),Object(o.jsx)("input",{id:"red",className:"hidden",value:"red",type:"checkbox"}),Object(o.jsx)("label",{htmlFor:"red",className:"checkbox-label red"}),Object(o.jsx)("input",{id:"blue",className:"hidden",value:"blue",type:"checkbox"}),Object(o.jsx)("label",{htmlFor:"blue",className:"checkbox-label blue"}),Object(o.jsx)("input",{id:"green",className:"hidden",value:"green",type:"checkbox"}),Object(o.jsx)("label",{htmlFor:"green",className:"checkbox-label green"})]}),Object(o.jsx)("h4",{className:"filter-title",children:"\u0420\u0430\u0437\u043c\u0435\u0440"}),Object(o.jsxs)("div",{className:"filter--size",children:[Object(o.jsx)("input",{id:"big",className:"size-checkbox",type:"checkbox",value:"big",name:""}),Object(o.jsx)("label",{className:"size-label",htmlFor:"big",children:"\u0411\u043e\u043b\u044c\u0448\u043e\u0439"}),Object(o.jsx)("input",{id:"medium",className:"size-checkbox",type:"checkbox",value:"medium",name:""}),Object(o.jsx)("label",{className:"size-label",htmlFor:"medium",children:"\u0421\u0440\u0435\u0434\u043d\u0438\u0439"}),Object(o.jsx)("input",{id:"little",className:"size-checkbox",type:"checkbox",value:"little",name:""}),Object(o.jsx)("label",{className:"size-label",htmlFor:"little",children:"\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439"})]}),Object(o.jsxs)("div",{className:"filter--favorite",children:[Object(o.jsx)("input",{className:"size-checkbox",value:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",type:"checkbox"}),Object(o.jsx)("h4",{className:"filter-title",children:"\u0422\u043e\u043b\u044c\u043a\u043e \u043b\u044e\u0431\u0438\u043c\u044b\u0435:"})]})]})},f=(s(15),[{num:"1",name:"\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0448\u0430\u0440 \u0441 \u0440\u0438\u0441\u0443\u043d\u043a\u043e\u043c",count:"2",year:"1960",shape:"\u0448\u0430\u0440",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"2",name:"\u0417\u0435\u043b\u0451\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0446\u0432\u0435\u0442\u0430\u043c\u0438",count:"5",year:"2000",shape:"\u0448\u0430\u0440",color:"\u0437\u0435\u043b\u0451\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"3",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u043c\u0430\u0442\u043e\u0432\u044b\u0439 \u0448\u0430\u0440",count:"3",year:"1990",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"4",name:"\u0421\u043e\u0441\u0443\u043b\u044c\u043a\u0430 \u043a\u0440\u0430\u0441\u043d\u0430\u044f",count:"2",year:"1980",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"5",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0432\u0438\u043d\u043e\u0433\u0440\u0430\u0434",count:"4",year:"1980",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!0},{num:"6",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0440\u0438\u0441\u0443\u043d\u043a\u043e\u043c",count:"6",year:"2010",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"7",name:"\u041c\u043e\u043b\u043e\u0447\u043d\u043e-\u0431\u0435\u043b\u044b\u0439 \u0448\u0430\u0440",count:"12",year:"1960",shape:"\u0448\u0430\u0440",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!0},{num:"8",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0448\u0430\u0440",count:"10",year:"2010",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"9",name:"\u041a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a \u0441\u0442\u0430\u0440\u0438\u043d\u043d\u044b\u0439",count:"2",year:"1950",shape:"\u043a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"10",name:"\u0411\u0435\u043b\u044b\u0439 \u0448\u0430\u0440 \u0440\u0435\u0442\u0440\u043e",count:"7",year:"1960",shape:"\u0448\u0430\u0440",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"11",name:"\u0428\u0438\u0448\u043a\u0430 \u0435\u043b\u043e\u0432\u0430\u044f \u0431\u0435\u043b\u0430\u044f",count:"11",year:"1960",shape:"\u0448\u0438\u0448\u043a\u0430",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u043c\u0430\u043b\u044b\u0439",favorite:!1},{num:"12",name:"\u0411\u0435\u043b\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0446\u0432\u0435\u0442\u0430\u043c\u0438",count:"5",year:"1980",shape:"\u0448\u0430\u0440",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"13",name:"\u0428\u0430\u0440 \u0440\u0430\u0441\u043f\u0438\u0441\u043d\u043e\u0439 \u0420\u0435\u043a\u0430",count:"3",year:"1970",shape:"\u0448\u0430\u0440",color:"\u0441\u0438\u043d\u0438\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!0},{num:"14",name:"\u0428\u0430\u0440 \u0440\u0430\u0441\u043f\u0438\u0441\u043d\u043e\u0439 \u0414\u0435\u0440\u0435\u0432\u043d\u044f",count:"4",year:"1970",shape:"\u0448\u0430\u0440",color:"\u0441\u0438\u043d\u0438\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!0},{num:"15",name:"\u041a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a \u0440\u0430\u0441\u043f\u0438\u0441\u043d\u043e\u0439",count:"3",year:"1970",shape:"\u043a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a",color:"\u0441\u0438\u043d\u0438\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!1},{num:"16",name:"\u0428\u0438\u0448\u043a\u0430 \u0440\u0430\u0441\u043f\u0438\u0441\u043d\u0430\u044f \u041f\u0435\u0439\u0437\u0430\u0436",count:"3",year:"1970",shape:"\u0448\u0438\u0448\u043a\u0430",color:"\u0441\u0438\u043d\u0438\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!0},{num:"17",name:"\u0428\u0438\u0448\u043a\u0430 \u0440\u0430\u0441\u043f\u0438\u0441\u043d\u0430\u044f",count:"7",year:"1970",shape:"\u0448\u0438\u0448\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!1},{num:"18",name:"\u0416\u0435\u043b\u0442\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0431\u0430\u043d\u0442\u043e\u043c",count:"2",year:"2010",shape:"\u0448\u0430\u0440",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"19",name:"\u0416\u0435\u043b\u0442\u044b\u0439 \u0448\u0430\u0440 \u0441 \u043f\u0430\u0435\u0442\u043a\u0430\u043c\u0438",count:"12",year:"1980",shape:"\u0448\u0430\u0440",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"20",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0431\u0430\u043d\u0442\u043e\u043c",count:"8",year:"1950",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!0},{num:"21",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0437\u0432\u0451\u0437\u0434\u0430\u043c\u0438",count:"4",year:"1970",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!0},{num:"22",name:"\u0428\u0438\u0448\u043a\u0430 \u0435\u043b\u043e\u0432\u0430\u044f \u0437\u043e\u043b\u043e\u0442\u0430\u044f",count:"11",year:"1990",shape:"\u0448\u0438\u0448\u043a\u0430",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u043c\u0430\u043b\u044b\u0439",favorite:!1},{num:"23",name:"\u041a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a \u0441\u0442\u0430\u0440\u0438\u043d\u043d\u044b\u0439",count:"9",year:"1950",shape:"\u043a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"24",name:"\u0421\u043d\u0435\u0436\u0438\u043d\u043a\u0430 \u0438\u0437\u044f\u0449\u043d\u0430\u044f",count:"1",year:"1940",shape:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"25",name:"\u0420\u043e\u0437\u043e\u0432\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0431\u043b\u0451\u0441\u0442\u043a\u0430\u043c\u0438",count:"12",year:"2010",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"26",name:"\u0420\u0443\u0431\u0438\u043d\u043e\u0432\u043e-\u0437\u043e\u043b\u043e\u0442\u043e\u0439 \u0448\u0430\u0440",count:"8",year:"1960",shape:"\u0448\u0430\u0440",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"27",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0443\u0437\u043e\u0440\u043e\u043c",count:"4",year:"2010",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"28",name:"\u0411\u043e\u0440\u0434\u043e\u0432\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0443\u0437\u043e\u0440\u043e\u043c",count:"10",year:"2010",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"29",name:"\u0421\u0442\u0430\u0440\u0438\u043d\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0446\u0432\u0435\u0442\u0430\u043c\u0438",count:"5",year:"1950",shape:"\u0448\u0430\u0440",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!0},{num:"30",name:"\u0421\u0442\u0430\u0440\u0438\u043d\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0443\u0437\u043e\u0440\u043e\u043c",count:"8",year:"1950",shape:"\u0448\u0430\u0440",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!0},{num:"31",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0431\u043b\u0451\u0441\u0442\u043a\u0430\u043c\u0438",count:"8",year:"2010",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"32",name:"\u0421\u0438\u043d\u0438\u0439 \u0448\u0430\u0440 \u0412\u0441\u0435\u043b\u0435\u043d\u043d\u0430\u044f",count:"11",year:"1970",shape:"\u0448\u0430\u0440",color:"\u0441\u0438\u043d\u0438\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"33",name:"\u0421\u0438\u043d\u0438\u0439 \u0448\u0430\u0440 \u0441\u043e \u0441\u043d\u0435\u0436\u0438\u043d\u043a\u043e\u0439",count:"6",year:"2010",shape:"\u0448\u0430\u0440",color:"\u0441\u0438\u043d\u0438\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!1},{num:"34",name:"\u0417\u0435\u043b\u0451\u043d\u044b\u0439  \u0448\u0430\u0440 \u0441 \u0443\u0437\u043e\u0440\u043e\u043c",count:"8",year:"2010",shape:"\u0448\u0430\u0440",color:"\u0437\u0435\u043b\u0451\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"35",name:"\u0424\u0438\u0433\u0443\u0440\u043a\u0430 \u041b\u0438\u0441 \u0432 \u0448\u0430\u0440\u0444\u0435",count:"8",year:"1950",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!0},{num:"36",name:"\u0421\u0438\u0440\u0435\u043d\u0435\u0432\u044b\u0439 \u0448\u0430\u0440 \u041c\u0435\u0442\u0435\u043b\u044c",count:"1",year:"2000",shape:"\u0448\u0430\u0440",color:"\u0441\u0438\u043d\u0438\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"37",name:"\u0417\u0435\u043b\u0451\u043d\u044b\u0439  \u0448\u0430\u0440 \u041c\u0435\u0442\u0435\u043b\u044c",count:"6",year:"2000",shape:"\u0448\u0430\u0440",color:"\u0437\u0435\u043b\u0451\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"38",name:"\u0413\u043e\u043b\u0443\u0431\u043e\u0439  \u0448\u0430\u0440 \u041c\u0435\u0442\u0435\u043b\u044c",count:"6",year:"2000",shape:"\u0448\u0430\u0440",color:"\u0441\u0438\u043d\u0438\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"39",name:"\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",count:"6",year:"1990",shape:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"40",name:"\u0421\u043d\u0435\u0436\u0438\u043d\u043a\u0430 \u0437\u043e\u043b\u043e\u0442\u0430\u044f",count:"12",year:"2020",shape:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"41",name:"\u0421\u043d\u0435\u0436\u0438\u043d\u043a\u0430 \u0430\u0440\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f",count:"11",year:"2020",shape:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"42",name:"\u0417\u0435\u043b\u0451\u043d\u044b\u0439 \u0448\u0430\u0440",count:"10",year:"1980",shape:"\u0448\u0430\u0440",color:"\u0437\u0435\u043b\u0451\u043d\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!1},{num:"43",name:"\u0421\u043d\u0435\u0436\u0438\u043d\u043a\u0430 \u0434\u0432\u0443\u0445\u0446\u0432\u0435\u0442\u043d\u0430\u044f",count:"6",year:"1960",shape:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"44",name:"\u0424\u0438\u0433\u0443\u0440\u043a\u0430 \u0410\u043d\u0433\u0435\u043b\u0430",count:"11",year:"1940",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!0},{num:"45",name:"\u0421\u043d\u0435\u0436\u0438\u043d\u043a\u0430 \u043d\u043e\u0432\u043e\u0433\u043e\u0434\u043d\u044f\u044f",count:"1",year:"1980",shape:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"46",name:"\u0424\u0438\u0433\u0443\u0440\u043a\u0430 \u041c\u0443\u0445\u043e\u043c\u043e\u0440",count:"10",year:"1950",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u043c\u0430\u043b\u044b\u0439",favorite:!1},{num:"47",name:"\u0424\u0438\u0433\u0443\u0440\u043a\u0430 \u041a\u043e\u043b\u043e\u0434\u0435\u0446",count:"6",year:"1950",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u043c\u0430\u043b\u044b\u0439",favorite:!1},{num:"48",name:"\u0416\u0435\u043b\u0442\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0431\u0430\u043d\u0442\u043e\u043c",count:"6",year:"1960",shape:"\u0448\u0430\u0440",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"49",name:"\u0421\u043d\u0435\u0436\u0438\u043d\u043a\u0430 \u0441 \u0431\u0438\u0440\u044e\u0437\u043e\u0439",count:"4",year:"1980",shape:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"50",name:"\u041a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a \u0431\u043e\u043b\u044c\u0448\u043e\u0439",count:"3",year:"2020",shape:"\u043a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"51",name:"\u0428\u0438\u0448\u043a\u0430 \u0441 \u0438\u0437\u043c\u043e\u0440\u043e\u0437\u044c\u044e",count:"12",year:"1970",shape:"\u0448\u0438\u0448\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u043c\u0430\u043b\u044b\u0439",favorite:!1},{num:"52",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u043d\u0430\u0434\u043f\u0438\u0441\u044c\u044e",count:"12",year:"1990",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!0},{num:"53",name:"\u0421\u043d\u0435\u0436\u0438\u043d\u043a\u0430 \u0441\u0435\u0440\u0435\u0431\u0440\u0438\u0441\u0442\u0430\u044f",count:"6",year:"2020",shape:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"54",name:"\u0417\u0435\u043b\u0451\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0440\u0438\u0441\u0443\u043d\u043a\u043e\u043c",count:"6",year:"2010",shape:"\u0448\u0430\u0440",color:"\u0437\u0435\u043b\u0451\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"55",name:"\u041f\u0440\u044f\u043d\u0438\u0447\u043d\u044b\u0439 \u0434\u043e\u043c\u0438\u043a",count:"1",year:"1940",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"56",name:"\u041f\u0440\u044f\u043d\u0438\u0447\u043d\u044b\u0439 \u0442\u0435\u0440\u0435\u043c\u043e\u043a",count:"1",year:"1940",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u043c\u0430\u043b\u044b\u0439",favorite:!1},{num:"57",name:"\u041f\u0440\u044f\u043d\u0438\u0447\u043d\u0430\u044f \u0438\u0437\u0431\u0443\u0448\u043a\u0430",count:"1",year:"1940",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!1},{num:"58",name:"\u0424\u0438\u0433\u0443\u0440\u043a\u0430 \u0431\u0435\u043b\u043e\u0433\u043e \u043c\u0435\u0434\u0432\u0435\u0434\u044f",count:"2",year:"1980",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!1},{num:"59",name:"\u0416\u0435\u043b\u0442\u044b\u0439 \u0448\u0430\u0440 \u0441 \u043d\u0430\u0434\u043f\u0438\u0441\u044c\u044e",count:"10",year:"1990",shape:"\u0448\u0430\u0440",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!1},{num:"60",name:"\u0424\u0438\u0433\u0443\u0440\u043a\u0430 \u0413\u043e\u043b\u0443\u0431\u044c",count:"12",year:"1940",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!0}]),x=function(){var e=Object(c.useState)(f),a=Object(i.a)(e,2),s=a[0],t=a[1],n=Object(c.useState)((function(){return!1})),r=Object(i.a)(n,2),u=r[0],h=r[1],j=Object(c.useState)((function(){return!1})),b=Object(i.a)(j,2),p=b[0],d=b[1],x=Object(c.useState)((function(){return!1})),O=Object(i.a)(x,2),y=O[0],N=O[1],g=Object(c.useState)((function(){return!1})),z=Object(i.a)(g,2),k=z[0],w=z[1],C=Object(c.useState)((function(){return!1})),F=Object(i.a)(C,2),S=F[0],L=F[1];return Object(o.jsx)("div",{className:"blur",children:Object(o.jsxs)("div",{className:"page page-toys",children:[Object(o.jsxs)("div",{className:"controls",children:[Object(o.jsx)(m,{}),Object(o.jsx)(l,{}),Object(o.jsx)(v,{setData:t,rawData:f,isCircle:u,isBell:p,isCone:y,isSnow:k,isFigure:S,setCircle:h,setBell:d,setCone:N,setSnow:w,setFigure:L})]}),Object(o.jsx)("div",{className:"card-container",children:s.map((function(e){return a=e,Object(o.jsxs)("div",{className:"card",children:[Object(o.jsxs)("h3",{className:"card-title",children:[" ",a.name," "]}),Object(o.jsx)("img",{className:"card-img",src:"./image/toys/".concat(a.num,".png"),alt:""}),Object(o.jsxs)("ul",{className:"card--description",children:[Object(o.jsxs)("li",{className:"description-item",children:[" \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: ",a.count," "]}),Object(o.jsxs)("li",{className:"description-item",children:["\u0413\u043e\u0434 \u043f\u043e\u043a\u0443\u043f\u043a\u0438: ",a.year]}),Object(o.jsxs)("li",{className:"description-item",children:["\u0424\u043e\u0440\u043c\u0430: ",a.shape," "]}),Object(o.jsxs)("li",{className:"description-item",children:["\u0426\u0432\u0435: ",a.color]}),Object(o.jsxs)("li",{className:"description-item",children:["\u0420\u0430\u0437\u043c\u0435\u0440: ",a.size,"  "]}),Object(o.jsx)("li",{className:"description-item",children:"\u041b\u044e\u0431\u0438\u043c\u0430\u044f:  da "})]}),Object(o.jsx)("div",{className:"card-ribbon"})]});var a}))})]})})};var O=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"App-header"}),Object(o.jsx)(x,{})]})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(a){var s=a.getCLS,c=a.getFID,t=a.getFCP,n=a.getLCP,r=a.getTTFB;s(e),c(e),t(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(t.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.f452a20a.chunk.js.map