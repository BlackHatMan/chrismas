(this.webpackJsonpchristmas=this.webpackJsonpchristmas||[]).push([[0],{14:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),s=a(5),n=a.n(s),i=(a(20),a(21),a(0)),l=function(){return Object(i.jsxs)("footer",{class:"footer",children:[Object(i.jsx)("div",{class:"logo"}),Object(i.jsx)("a",{href:"https://rs.school/",target:"blank",children:"The Rolling Scopes School"}),Object(i.jsx)("a",{href:"https://github.com/blackhatman",target:"blank",children:"BlackHatMan"})]})},o=a(4),u=function(e){var t=e.toggleHandler;return Object(i.jsxs)("div",{className:"color filter",children:[Object(i.jsx)("h4",{className:"filter-title",children:"\u0426\u0432\u0435\u0442"}),Object(i.jsxs)("div",{className:"filter--color",children:[Object(i.jsx)("input",{id:"white",onClick:function(e){return t(e.currentTarget)},className:"hidden",value:"white",type:"checkbox"}),Object(i.jsx)("label",{htmlFor:"white",className:"checkbox-label white"}),Object(i.jsx)("input",{id:"yellow",onClick:function(e){return t(e.currentTarget)},className:"hidden",value:"yellow",type:"checkbox"}),Object(i.jsx)("label",{htmlFor:"yellow",className:"checkbox-label yellow"}),Object(i.jsx)("input",{id:"red",onClick:function(e){return t(e.currentTarget)},className:"hidden",value:"red",type:"checkbox"}),Object(i.jsx)("label",{htmlFor:"red",className:"checkbox-label red"}),Object(i.jsx)("input",{id:"blue",onClick:function(e){return t(e.currentTarget)},className:"hidden",value:"blue",type:"checkbox"}),Object(i.jsx)("label",{htmlFor:"blue",className:"checkbox-label blue"}),Object(i.jsx)("input",{id:"green",onClick:function(e){return t(e.currentTarget)},className:"hidden",value:"green",type:"checkbox"}),Object(i.jsx)("label",{htmlFor:"green",className:"checkbox-label green"})]})]})},m=a.p+"static/media/snow.127061e2.svg",j=a.p+"static/media/audio.f77405bc.svg",b=function(){return Object(i.jsxs)("div",{className:"global filter",children:[Object(i.jsx)("button",{className:"global-volume filter-btn",children:Object(i.jsx)("img",{className:"filter-img",src:m,alt:""})}),Object(i.jsx)("button",{className:"global-ice filter-btn",children:Object(i.jsx)("img",{className:"filter-img",src:j,alt:""})}),Object(i.jsx)("input",{className:"global-search",type:"text",placeholder:"   \u041f\u043e\u0438\u0441\u043a",autoFocus:!0})]})},h=a(6),d=a(7),f=a(10),p=a(9),O=a(8),v=a.n(O),g=(a(14),function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={minCount:1,maxCount:20},e.onUpdate=function(t,a,c){e.setState({startYear:Math.floor(c[0]),endYear:Math.floor(c[1])}),e.props.scrollHandler(c,"count")},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"slider",children:[Object(i.jsx)("h4",{className:"filter-title",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u043e\u0432"}),Object(i.jsx)(v.a,{connect:!0,step:1,start:[this.state.minCount,this.state.maxCount],range:{min:1,max:20},onSlide:this.onUpdate}),Object(i.jsxs)("div",{className:"value-wrapper",children:[Object(i.jsx)("label",{className:"min-value",children:this.state.minCount}),Object(i.jsx)("label",{className:"max-value",children:this.state.maxCount})]})]})}}]),a}(r.a.Component)),x=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={startYear:1940,endYear:2021},e.onUpdate=function(t,a,c){e.setState({startYear:Math.floor(c[0]),endYear:Math.floor(c[1])}),e.props.scrollHandler(c,"years")},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"slider",children:[Object(i.jsx)("h4",{className:"filter-title",children:"\u0413\u043e\u0434 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u0438\u044f"}),Object(i.jsx)(v.a,{connect:!0,margin:10,step:1,start:[this.state.startYear,this.state.endYear],range:{min:1940,max:2021},onSlide:this.onUpdate}),Object(i.jsxs)("div",{className:"value-wrapper",children:[Object(i.jsx)("label",{className:"min-value",children:this.state.startYear}),Object(i.jsx)("label",{className:"max-value",children:this.state.endYear})]})]})}}]),a}(r.a.Component),N=function(e){var t=e.scrollHandler;return Object(i.jsxs)("div",{className:"range filter",children:[Object(i.jsx)(x,{scrollHandler:t}),Object(i.jsx)(g,{scrollHandler:t})]})},y=function(){return Object(i.jsxs)("div",{className:"reset filter",children:[Object(i.jsxs)("div",{className:"filter--favorite",children:[Object(i.jsx)("input",{className:"size-checkbox",value:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",type:"checkbox"}),Object(i.jsx)("h4",{className:"filter-title",children:"\u0422\u043e\u043b\u044c\u043a\u043e \u043b\u044e\u0431\u0438\u043c\u044b\u0435:"})]}),Object(i.jsx)("div",{className:"filter--reset",children:Object(i.jsx)("button",{className:"reset-btn",children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b"})})]})},z=a.p+"static/media/ball.02ba2b1b.svg",w=a.p+"static/media/bell.bb18e4ce.svg",k=a.p+"static/media/cone.7a360a86.svg",C=a.p+"static/media/snowflake.a7de9f17.svg",Y=a.p+"static/media/toy.d8ea3c17.svg",S=function(e){var t=e.toggleHandler;return Object(i.jsxs)("div",{className:"shape filter",children:[Object(i.jsx)("h4",{className:"filter-title",children:"\u0424\u043e\u0440\u043c\u0430"}),Object(i.jsxs)("div",{className:"filter--shape",children:[Object(i.jsxs)("div",{className:"shape--item",children:[Object(i.jsx)("button",{className:"filter-btn",onClick:function(e){return t(e.currentTarget)},value:"\u0448\u0430\u0440",children:Object(i.jsx)("img",{className:"filter-img",src:z,alt:""})}),Object(i.jsx)("p",{className:"shape-text",children:"\u0428\u0430\u0440"})]}),Object(i.jsxs)("div",{className:"shape--item",children:[Object(i.jsx)("button",{className:"filter-btn",onClick:function(e){return t(e.currentTarget)},value:"\u043a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a",children:Object(i.jsx)("img",{className:"filter-img",src:w,alt:""})}),Object(i.jsx)("p",{className:"shape-text",children:"\u041a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a"})]}),Object(i.jsxs)("div",{className:"shape--item",children:[Object(i.jsx)("button",{className:"filter-btn",onClick:function(e){return t(e.currentTarget)},value:"\u0448\u0438\u0448\u043a\u0430",children:Object(i.jsx)("img",{className:"filter-img",src:k,alt:""})}),Object(i.jsx)("p",{className:"shape-text",children:"\u0428\u0438\u0448\u043a\u0430"})]}),Object(i.jsxs)("div",{className:"shape--item",children:[Object(i.jsx)("button",{className:"filter-btn",onClick:function(e){return t(e.currentTarget)},value:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",children:Object(i.jsx)("img",{className:"filter-img",src:C,alt:""})}),Object(i.jsx)("p",{className:"shape-text",children:"\u0421\u043d\u0435\u0436\u0438\u043d\u043a\u0430"})]}),Object(i.jsxs)("div",{className:"shape--item",children:[Object(i.jsx)("button",{className:"filter-btn",onClick:function(e){return t(e.currentTarget)},value:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",children:Object(i.jsx)("img",{className:"filter-img",src:Y,alt:""})}),Object(i.jsx)("p",{className:"shape-text",children:"\u0424\u0438\u0433\u0443\u0440\u043a\u0430"})]})]}),Object(i.jsx)("h4",{className:"filter-title",children:"\u0420\u0430\u0437\u043c\u0435\u0440"}),Object(i.jsxs)("div",{className:"filter--size",children:[Object(i.jsx)("input",{id:"big",className:"size-checkbox",onClick:function(e){return t(e.currentTarget)},type:"checkbox",value:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439"}),Object(i.jsx)("label",{className:"size-label",htmlFor:"big",children:"\u0411\u043e\u043b\u044c\u0448\u043e\u0439"}),Object(i.jsx)("input",{id:"medium",className:"size-checkbox",onClick:function(e){return t(e.currentTarget)},type:"checkbox",value:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439"}),Object(i.jsx)("label",{className:"size-label",htmlFor:"medium",children:"\u0421\u0440\u0435\u0434\u043d\u0438\u0439"}),Object(i.jsx)("input",{id:"little",className:"size-checkbox",onClick:function(e){return t(e.currentTarget)},type:"checkbox",value:"\u043c\u0430\u043b\u044b\u0439"}),Object(i.jsx)("label",{className:"size-label",htmlFor:"little",children:"\u041c\u0430\u043b\u044b\u0439"})]})]})},T=function(e){var t=e.sortHandler;return Object(i.jsxs)("div",{className:"sort filter",children:[Object(i.jsx)("span",{className:"sort-title",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(i.jsxs)("select",{className:"sort--select",onChange:function(e){return t(e.target.value)},children:[Object(i.jsx)("option",{className:"select-item",value:"nameUp",children:"\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e: \u043e\u0442 \xab\u0410\xbb \u0434\u043e \xab\u042f\xbb"}),Object(i.jsx)("option",{className:"select-item",value:"nameDown",children:"\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e: \u043e\u0442 \xab\u042f\xbb \u0434\u043e \xab\u0410\xbb"}),Object(i.jsx)("option",{className:"select-item",value:"countUp",children:"\u041f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0432\u0443: \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e"}),Object(i.jsx)("option",{className:"select-item",value:"countDown",children:"\u041f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0432\u0443: \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e"})]})]})},B=a(3),F=[{num:"1",name:"\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0448\u0430\u0440 \u0441 \u0440\u0438\u0441\u0443\u043d\u043a\u043e\u043c",count:"2",year:"1960",shape:"\u0448\u0430\u0440",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"2",name:"\u0417\u0435\u043b\u0451\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0446\u0432\u0435\u0442\u0430\u043c\u0438",count:"5",year:"2000",shape:"\u0448\u0430\u0440",color:"\u0437\u0435\u043b\u0451\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"3",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u043c\u0430\u0442\u043e\u0432\u044b\u0439 \u0448\u0430\u0440",count:"3",year:"1990",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"4",name:"\u0421\u043e\u0441\u0443\u043b\u044c\u043a\u0430 \u043a\u0440\u0430\u0441\u043d\u0430\u044f",count:"2",year:"1980",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"5",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0432\u0438\u043d\u043e\u0433\u0440\u0430\u0434",count:"4",year:"1980",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!0},{num:"6",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0440\u0438\u0441\u0443\u043d\u043a\u043e\u043c",count:"6",year:"2010",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"7",name:"\u041c\u043e\u043b\u043e\u0447\u043d\u043e-\u0431\u0435\u043b\u044b\u0439 \u0448\u0430\u0440",count:"12",year:"1960",shape:"\u0448\u0430\u0440",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!0},{num:"8",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0448\u0430\u0440",count:"10",year:"2010",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"9",name:"\u041a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a \u0441\u0442\u0430\u0440\u0438\u043d\u043d\u044b\u0439",count:"2",year:"1950",shape:"\u043a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"10",name:"\u0411\u0435\u043b\u044b\u0439 \u0448\u0430\u0440 \u0440\u0435\u0442\u0440\u043e",count:"7",year:"1960",shape:"\u0448\u0430\u0440",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"11",name:"\u0428\u0438\u0448\u043a\u0430 \u0435\u043b\u043e\u0432\u0430\u044f \u0431\u0435\u043b\u0430\u044f",count:"11",year:"1960",shape:"\u0448\u0438\u0448\u043a\u0430",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u043c\u0430\u043b\u044b\u0439",favorite:!1},{num:"12",name:"\u0411\u0435\u043b\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0446\u0432\u0435\u0442\u0430\u043c\u0438",count:"5",year:"1980",shape:"\u0448\u0430\u0440",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"13",name:"\u0428\u0430\u0440 \u0440\u0430\u0441\u043f\u0438\u0441\u043d\u043e\u0439 \u0420\u0435\u043a\u0430",count:"3",year:"1970",shape:"\u0448\u0430\u0440",color:"\u0441\u0438\u043d\u0438\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!0},{num:"14",name:"\u0428\u0430\u0440 \u0440\u0430\u0441\u043f\u0438\u0441\u043d\u043e\u0439 \u0414\u0435\u0440\u0435\u0432\u043d\u044f",count:"4",year:"1970",shape:"\u0448\u0430\u0440",color:"\u0441\u0438\u043d\u0438\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!0},{num:"15",name:"\u041a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a \u0440\u0430\u0441\u043f\u0438\u0441\u043d\u043e\u0439",count:"3",year:"1970",shape:"\u043a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a",color:"\u0441\u0438\u043d\u0438\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!1},{num:"16",name:"\u0428\u0438\u0448\u043a\u0430 \u0440\u0430\u0441\u043f\u0438\u0441\u043d\u0430\u044f \u041f\u0435\u0439\u0437\u0430\u0436",count:"3",year:"1970",shape:"\u0448\u0438\u0448\u043a\u0430",color:"\u0441\u0438\u043d\u0438\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!0},{num:"17",name:"\u0428\u0438\u0448\u043a\u0430 \u0440\u0430\u0441\u043f\u0438\u0441\u043d\u0430\u044f",count:"7",year:"1970",shape:"\u0448\u0438\u0448\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!1},{num:"18",name:"\u0416\u0435\u043b\u0442\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0431\u0430\u043d\u0442\u043e\u043c",count:"2",year:"2010",shape:"\u0448\u0430\u0440",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"19",name:"\u0416\u0435\u043b\u0442\u044b\u0439 \u0448\u0430\u0440 \u0441 \u043f\u0430\u0435\u0442\u043a\u0430\u043c\u0438",count:"12",year:"1980",shape:"\u0448\u0430\u0440",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"20",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0431\u0430\u043d\u0442\u043e\u043c",count:"8",year:"1950",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!0},{num:"21",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0437\u0432\u0451\u0437\u0434\u0430\u043c\u0438",count:"4",year:"1970",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!0},{num:"22",name:"\u0428\u0438\u0448\u043a\u0430 \u0435\u043b\u043e\u0432\u0430\u044f \u0437\u043e\u043b\u043e\u0442\u0430\u044f",count:"11",year:"1990",shape:"\u0448\u0438\u0448\u043a\u0430",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u043c\u0430\u043b\u044b\u0439",favorite:!1},{num:"23",name:"\u041a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a \u0441\u0442\u0430\u0440\u0438\u043d\u043d\u044b\u0439",count:"9",year:"1950",shape:"\u043a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"24",name:"\u0421\u043d\u0435\u0436\u0438\u043d\u043a\u0430 \u0438\u0437\u044f\u0449\u043d\u0430\u044f",count:"1",year:"1940",shape:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"25",name:"\u0420\u043e\u0437\u043e\u0432\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0431\u043b\u0451\u0441\u0442\u043a\u0430\u043c\u0438",count:"12",year:"2010",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"26",name:"\u0420\u0443\u0431\u0438\u043d\u043e\u0432\u043e-\u0437\u043e\u043b\u043e\u0442\u043e\u0439 \u0448\u0430\u0440",count:"8",year:"1960",shape:"\u0448\u0430\u0440",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"27",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0443\u0437\u043e\u0440\u043e\u043c",count:"4",year:"2010",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"28",name:"\u0411\u043e\u0440\u0434\u043e\u0432\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0443\u0437\u043e\u0440\u043e\u043c",count:"10",year:"2010",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"29",name:"\u0421\u0442\u0430\u0440\u0438\u043d\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0446\u0432\u0435\u0442\u0430\u043c\u0438",count:"5",year:"1950",shape:"\u0448\u0430\u0440",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!0},{num:"30",name:"\u0421\u0442\u0430\u0440\u0438\u043d\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0443\u0437\u043e\u0440\u043e\u043c",count:"8",year:"1950",shape:"\u0448\u0430\u0440",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!0},{num:"31",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0431\u043b\u0451\u0441\u0442\u043a\u0430\u043c\u0438",count:"8",year:"2010",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"32",name:"\u0421\u0438\u043d\u0438\u0439 \u0448\u0430\u0440 \u0412\u0441\u0435\u043b\u0435\u043d\u043d\u0430\u044f",count:"11",year:"1970",shape:"\u0448\u0430\u0440",color:"\u0441\u0438\u043d\u0438\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"33",name:"\u0421\u0438\u043d\u0438\u0439 \u0448\u0430\u0440 \u0441\u043e \u0441\u043d\u0435\u0436\u0438\u043d\u043a\u043e\u0439",count:"6",year:"2010",shape:"\u0448\u0430\u0440",color:"\u0441\u0438\u043d\u0438\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!1},{num:"34",name:"\u0417\u0435\u043b\u0451\u043d\u044b\u0439  \u0448\u0430\u0440 \u0441 \u0443\u0437\u043e\u0440\u043e\u043c",count:"8",year:"2010",shape:"\u0448\u0430\u0440",color:"\u0437\u0435\u043b\u0451\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"35",name:"\u0424\u0438\u0433\u0443\u0440\u043a\u0430 \u041b\u0438\u0441 \u0432 \u0448\u0430\u0440\u0444\u0435",count:"8",year:"1950",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!0},{num:"36",name:"\u0421\u0438\u0440\u0435\u043d\u0435\u0432\u044b\u0439 \u0448\u0430\u0440 \u041c\u0435\u0442\u0435\u043b\u044c",count:"1",year:"2000",shape:"\u0448\u0430\u0440",color:"\u0441\u0438\u043d\u0438\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"37",name:"\u0417\u0435\u043b\u0451\u043d\u044b\u0439  \u0448\u0430\u0440 \u041c\u0435\u0442\u0435\u043b\u044c",count:"6",year:"2000",shape:"\u0448\u0430\u0440",color:"\u0437\u0435\u043b\u0451\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"38",name:"\u0413\u043e\u043b\u0443\u0431\u043e\u0439  \u0448\u0430\u0440 \u041c\u0435\u0442\u0435\u043b\u044c",count:"6",year:"2000",shape:"\u0448\u0430\u0440",color:"\u0441\u0438\u043d\u0438\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"39",name:"\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",count:"6",year:"1990",shape:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"40",name:"\u0421\u043d\u0435\u0436\u0438\u043d\u043a\u0430 \u0437\u043e\u043b\u043e\u0442\u0430\u044f",count:"12",year:"2020",shape:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"41",name:"\u0421\u043d\u0435\u0436\u0438\u043d\u043a\u0430 \u0430\u0440\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f",count:"11",year:"2020",shape:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"42",name:"\u0417\u0435\u043b\u0451\u043d\u044b\u0439 \u0448\u0430\u0440",count:"10",year:"1980",shape:"\u0448\u0430\u0440",color:"\u0437\u0435\u043b\u0451\u043d\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!1},{num:"43",name:"\u0421\u043d\u0435\u0436\u0438\u043d\u043a\u0430 \u0434\u0432\u0443\u0445\u0446\u0432\u0435\u0442\u043d\u0430\u044f",count:"6",year:"1960",shape:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"44",name:"\u0424\u0438\u0433\u0443\u0440\u043a\u0430 \u0410\u043d\u0433\u0435\u043b\u0430",count:"11",year:"1940",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!0},{num:"45",name:"\u0421\u043d\u0435\u0436\u0438\u043d\u043a\u0430 \u043d\u043e\u0432\u043e\u0433\u043e\u0434\u043d\u044f\u044f",count:"1",year:"1980",shape:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"46",name:"\u0424\u0438\u0433\u0443\u0440\u043a\u0430 \u041c\u0443\u0445\u043e\u043c\u043e\u0440",count:"10",year:"1950",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u043c\u0430\u043b\u044b\u0439",favorite:!1},{num:"47",name:"\u0424\u0438\u0433\u0443\u0440\u043a\u0430 \u041a\u043e\u043b\u043e\u0434\u0435\u0446",count:"6",year:"1950",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u043c\u0430\u043b\u044b\u0439",favorite:!1},{num:"48",name:"\u0416\u0435\u043b\u0442\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0431\u0430\u043d\u0442\u043e\u043c",count:"6",year:"1960",shape:"\u0448\u0430\u0440",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"49",name:"\u0421\u043d\u0435\u0436\u0438\u043d\u043a\u0430 \u0441 \u0431\u0438\u0440\u044e\u0437\u043e\u0439",count:"4",year:"1980",shape:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"50",name:"\u041a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a \u0431\u043e\u043b\u044c\u0448\u043e\u0439",count:"3",year:"2020",shape:"\u043a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"51",name:"\u0428\u0438\u0448\u043a\u0430 \u0441 \u0438\u0437\u043c\u043e\u0440\u043e\u0437\u044c\u044e",count:"12",year:"1970",shape:"\u0448\u0438\u0448\u043a\u0430",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u043c\u0430\u043b\u044b\u0439",favorite:!1},{num:"52",name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u043d\u0430\u0434\u043f\u0438\u0441\u044c\u044e",count:"12",year:"1990",shape:"\u0448\u0430\u0440",color:"\u043a\u0440\u0430\u0441\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!0},{num:"53",name:"\u0421\u043d\u0435\u0436\u0438\u043d\u043a\u0430 \u0441\u0435\u0440\u0435\u0431\u0440\u0438\u0441\u0442\u0430\u044f",count:"6",year:"2020",shape:"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"54",name:"\u0417\u0435\u043b\u0451\u043d\u044b\u0439 \u0448\u0430\u0440 \u0441 \u0440\u0438\u0441\u0443\u043d\u043a\u043e\u043c",count:"6",year:"2010",shape:"\u0448\u0430\u0440",color:"\u0437\u0435\u043b\u0451\u043d\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"55",name:"\u041f\u0440\u044f\u043d\u0438\u0447\u043d\u044b\u0439 \u0434\u043e\u043c\u0438\u043a",count:"1",year:"1940",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",favorite:!1},{num:"56",name:"\u041f\u0440\u044f\u043d\u0438\u0447\u043d\u044b\u0439 \u0442\u0435\u0440\u0435\u043c\u043e\u043a",count:"1",year:"1940",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u043c\u0430\u043b\u044b\u0439",favorite:!1},{num:"57",name:"\u041f\u0440\u044f\u043d\u0438\u0447\u043d\u0430\u044f \u0438\u0437\u0431\u0443\u0448\u043a\u0430",count:"1",year:"1940",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!1},{num:"58",name:"\u0424\u0438\u0433\u0443\u0440\u043a\u0430 \u0431\u0435\u043b\u043e\u0433\u043e \u043c\u0435\u0434\u0432\u0435\u0434\u044f",count:"2",year:"1980",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!1},{num:"59",name:"\u0416\u0435\u043b\u0442\u044b\u0439 \u0448\u0430\u0440 \u0441 \u043d\u0430\u0434\u043f\u0438\u0441\u044c\u044e",count:"10",year:"1990",shape:"\u0448\u0430\u0440",color:"\u0436\u0435\u043b\u0442\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!1},{num:"60",name:"\u0424\u0438\u0433\u0443\u0440\u043a\u0430 \u0413\u043e\u043b\u0443\u0431\u044c",count:"12",year:"1940",shape:"\u0444\u0438\u0433\u0443\u0440\u043a\u0430",color:"\u0431\u0435\u043b\u044b\u0439",size:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439",favorite:!0}];a(30);var U=function(){var e=Object(o.b)(),t=function(e){var t=[];if(e.toggle.isCircle){var a=F.filter((function(e){return"\u0448\u0430\u0440"===e.shape}));t=[].concat(Object(B.a)(t),Object(B.a)(a))}if(e.toggle.isBell){var c=F.filter((function(e){return"\u043a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a"===e.shape}));t=[].concat(Object(B.a)(t),Object(B.a)(c))}if(e.toggle.isCone){var r=F.filter((function(e){return"\u0448\u0438\u0448\u043a\u0430"===e.shape}));t=[].concat(Object(B.a)(t),Object(B.a)(r))}if(e.toggle.isSnow){var s=F.filter((function(e){return"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430"===e.shape}));t=[].concat(Object(B.a)(t),Object(B.a)(s))}if(e.toggle.isFigure){var n=F.filter((function(e){return"\u0444\u0438\u0433\u0443\u0440\u043a\u0430"===e.shape}));t=[].concat(Object(B.a)(t),Object(B.a)(n))}if(e.toggle.isBig||e.toggle.isMedium||e.toggle.isSmall){t=0===t.length?F:t;var i=e.toggle.isBig?t.filter((function(e){return"\u0431\u043e\u043b\u044c\u0448\u043e\u0439"===e.size})):[],l=e.toggle.isMedium?t.filter((function(e){return"\u0441\u0440\u0435\u0434\u043d\u0438\u0439"===e.size})):[],o=e.toggle.isSmall?t.filter((function(e){return"\u043c\u0430\u043b\u044b\u0439"===e.size})):[];t=[].concat(Object(B.a)(i),Object(B.a)(l),Object(B.a)(o))}if(e.toggle.isWhite||e.toggle.isYellow||e.toggle.isRed||e.toggle.isBlue||e.toggle.isGreen){t=0===t.length?F:t;var u=e.toggle.isWhite?t.filter((function(e){return"\u0431\u0435\u043b\u044b\u0439"===e.color})):[],m=e.toggle.isYellow?t.filter((function(e){return"\u0436\u0435\u043b\u0442\u044b\u0439"===e.color})):[],j=e.toggle.isRed?t.filter((function(e){return"\u043a\u0440\u0430\u0441\u043d\u044b\u0439"===e.color})):[],b=e.toggle.isBlue?t.filter((function(e){return"\u0441\u0438\u043d\u0438\u0439"===e.color})):[],h=e.toggle.isGreen?t.filter((function(e){return"\u0437\u0435\u043b\u0451\u043d\u044b\u0439"===e.color})):[];t=[].concat(Object(B.a)(u),Object(B.a)(m),Object(B.a)(j),Object(B.a)(b),Object(B.a)(h))}var d=t.filter((function(t){return t.year>=e.range.startYear&&t.year<=e.range.endYear&&t.count>=e.range.minCount&&t.count<=e.range.maxCount}));return e.sort.nameUp&&d.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),e.sort.nameDown&&d.sort((function(e,t){return e.name<t.name?1:e.name>t.name?-1:0})),e.sort.countDown&&d.sort((function(e,t){return Number.parseInt(e.count)<Number.parseInt(t.count)?1:Number.parseInt(e.count)>Number.parseInt(t.count)?-1:0})),e.sort.countUp&&d.sort((function(e,t){return Number.parseInt(e.count)>Number.parseInt(t.count)?1:Number.parseInt(e.count)<Number.parseInt(t.count)?-1:0})),d}(Object(o.c)((function(e){return e})));Object(c.useEffect)((function(){t=F,console.log("data")}),[]);var a=function(t){var a={type:t.value,currentTarget:t};e(a)};return Object(i.jsx)("div",{className:"blur",children:Object(i.jsxs)("div",{className:"page page-toys",children:[Object(i.jsxs)("div",{className:"controls",children:[Object(i.jsx)(b,{}),Object(i.jsx)(T,{sortHandler:function(t){e({type:t})}}),Object(i.jsx)(S,{toggleHandler:a}),Object(i.jsx)(N,{scrollHandler:function(t,a){var c={type:a,valueStart:t[0],valueEnd:t[1]};e(c)}}),Object(i.jsx)(u,{toggleHandler:a}),Object(i.jsx)(y,{})]}),Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsx)("h2",{className:"toys-title",children:" \u0418\u0413\u0420\u0423\u0428\u041a\u0418 "}),Object(i.jsx)("div",{className:"card-container",children:0===t.length?Object(i.jsx)("div",{style:{fontSize:"60px"},children:"\u0422\u0430\u043a\u0438\u0445 \u043d\u044f\u043c\u0430"}):t.map((function(e){return t=e,Object(i.jsxs)("div",{className:"card",children:[Object(i.jsxs)("h3",{className:"card-title",children:[" ",t.name," "]}),Object(i.jsx)("img",{className:"card-img",src:"./image/toys/".concat(t.num,".png"),alt:""}),Object(i.jsxs)("ul",{className:"card--description",children:[Object(i.jsxs)("li",{className:"description-item",children:[" \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: ",t.count," "]}),Object(i.jsxs)("li",{className:"description-item",children:["\u0413\u043e\u0434 \u043f\u043e\u043a\u0443\u043f\u043a\u0438: ",t.year]}),Object(i.jsxs)("li",{className:"description-item",children:["\u0424\u043e\u0440\u043c\u0430: ",t.shape," "]}),Object(i.jsxs)("li",{className:"description-item",children:["\u0426\u0432\u0435: ",t.color]}),Object(i.jsxs)("li",{className:"description-item",children:["\u0420\u0430\u0437\u043c\u0435\u0440: ",t.size,"  "]}),Object(i.jsxs)("li",{className:"description-item",children:["\u041b\u044e\u0431\u0438\u043c\u0430\u044f: ",t.favorite?"\u0434\u0430":"\u043d\u0435\u0442"," "]})]}),Object(i.jsx)("div",{className:"card-ribbon"})]},t.num);var t}))})]})]})})};var H=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{className:"App-header"}),Object(i.jsx)(U,{}),Object(i.jsx)(l,{})]})},M=a(2),D=a(13),I={isCircle:!1,isBellL:!1,isCone:!1,isSnow:!1,isFigure:!1,isBig:!1,isMedium:!1,isSmall:!1,isWhite:!1,isYellow:!1,isRed:!1,isBlue:!1,isGreen:!1},L={startYear:1940,endYear:2021,minCount:1,maxCount:20},R={nameUp:!1,nameDown:!1,countUp:!1,countDown:!1},G=Object(D.a)({toggle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"\u0448\u0430\u0440":return t.currentTarget.classList.toggle("active"),Object(M.a)(Object(M.a)({},e),{},{isCircle:e.isCircle=!e.isCircle});case"\u043a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a":return t.currentTarget.classList.toggle("active"),Object(M.a)(Object(M.a)({},e),{},{isBell:e.isBellL=!e.isBell});case"\u0448\u0438\u0448\u043a\u0430":return t.currentTarget.classList.toggle("active"),Object(M.a)(Object(M.a)({},e),{},{isCone:e.isCone=!e.isCone});case"\u0441\u043d\u0435\u0436\u0438\u043d\u043a\u0430":return t.currentTarget.classList.toggle("active"),Object(M.a)(Object(M.a)({},e),{},{isSnow:e.isSnow=!e.isSnow});case"\u0444\u0438\u0433\u0443\u0440\u043a\u0430":return t.currentTarget.classList.toggle("active"),Object(M.a)(Object(M.a)({},e),{},{isFigure:e.isFigure=!e.isFigure});case"\u0431\u043e\u043b\u044c\u0448\u043e\u0439":return Object(M.a)(Object(M.a)({},e),{},{isBig:e.isBig=!e.isBig});case"\u0441\u0440\u0435\u0434\u043d\u0438\u0439":return Object(M.a)(Object(M.a)({},e),{},{isMedium:e.isMedium=!e.isMedium});case"\u043c\u0430\u043b\u044b\u0439":return Object(M.a)(Object(M.a)({},e),{},{isSmall:e.isSmall=!e.isSmall});case"white":return Object(M.a)(Object(M.a)({},e),{},{isWhite:e.isWhite=!e.isWhite});case"yellow":return Object(M.a)(Object(M.a)({},e),{},{isYellow:e.isYellow=!e.isYellow});case"red":return Object(M.a)(Object(M.a)({},e),{},{isRed:e.isRed=!e.isRed});case"blue":return Object(M.a)(Object(M.a)({},e),{},{isBlue:e.isBlue=!e.isBlue});case"green":return Object(M.a)(Object(M.a)({},e),{},{isGreen:e.isGreen=!e.isGreen});default:return e}},range:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"years":return Object(M.a)(Object(M.a)({},e),{},{startYear:t.valueStart,endYear:t.valueEnd});case"count":return Object(M.a)(Object(M.a)({},e),{},{minCount:t.valueStart,maxCount:t.valueEnd});default:return e}},sort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"nameUp":return Object(M.a)(Object(M.a)({},R),{},{nameUp:!0});case"nameDown":return Object(M.a)(Object(M.a)({},R),{},{nameDown:!0});case"countUp":return Object(M.a)(Object(M.a)({},R),{},{countUp:!0});case"countDown":return Object(M.a)(Object(M.a)({},R),{},{countDown:!0});default:return e}}}),W=Object(D.b)(G);n.a.render(Object(i.jsx)(o.a,{store:W,children:Object(i.jsx)(H,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.0ee8f94b.chunk.js.map