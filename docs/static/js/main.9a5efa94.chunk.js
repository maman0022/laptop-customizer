(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(3),c=a.n(o),s=(a(15),a(4)),u=a(5),m=a(7),l=a(6),i=a(8),d={FEATURES:{Processor:[{name:"17th Generation Intel Core HB (7 Core with donut spare)",cost:700},{name:"Professor X AMD Fire Breather with sidewinder technology",cost:1200}],"Operating System":[{name:"Ubuntu Linux 16.04",cost:200},{name:"Bodhi Linux",cost:300}],"Video Card":[{name:"Toyota Corolla 1.5v",cost:1150.98},{name:"Mind mild breeze 2000",cost:1345}],Display:[{name:'15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',cost:1500},{name:'15.3" HGTV (3840 x 2160) Home makeover edition',cost:1400}]}};a(16);function f(){return n.a.createElement("header",null,n.a.createElement("h1",null,"ELF Computing | Laptops"))}var y=a(1),p=a.n(y);function E(e){return e.store.FEATURES[e.feature].map(function(t){var a=p()(JSON.stringify(t));return n.a.createElement("div",{key:a,className:"feature__item"},n.a.createElement("input",{type:"radio",id:a,className:"feature__option",name:p()(e.feature),checked:t.name===e.state.selected[e.feature].name,onChange:function(a){return e.updateFeature(e.feature,t)}}),n.a.createElement("label",{htmlFor:a,className:"feature__label"},t.name," (",e.USCurrencyFormat.format(t.cost),")"))})}a(17);function _(e){return Object.keys(e.store.FEATURES).map(function(t,a){var r=t+"-"+a;return n.a.createElement("fieldset",{className:"feature",key:r},n.a.createElement("legend",{className:"feature__name"},n.a.createElement("h3",null,t)),n.a.createElement(E,{store:e.store,feature:t,USCurrencyFormat:e.USCurrencyFormat,state:e.state,updateFeature:e.updateFeature}))})}a(18);function h(e){return n.a.createElement("form",{className:"main__form"},n.a.createElement("h2",null,"Customize your laptop"),n.a.createElement(_,{USCurrencyFormat:e.USCurrencyFormat,state:e.state,updateFeature:e.updateFeature,store:e.store}))}a(19);function F(e){return Object.keys(e.state.selected).map(function(t,a){var r=t+"-"+a,o=e.state.selected[t];return n.a.createElement("div",{className:"summary__option",key:r},n.a.createElement("div",{className:"summary__option__label"},t," "),n.a.createElement("div",{className:"summary__option__value"},o.name),n.a.createElement("div",{className:"summary__option__cost"},e.USCurrencyFormat.format(o.cost)))})}function v(e){return n.a.createElement("div",{className:"summary__total"},n.a.createElement("div",{className:"summary__total__label"},"Total"),n.a.createElement("div",{className:"summary__total__value"},e.USCurrencyFormat.format(e.total)))}a(20);function C(e){return n.a.createElement("section",{className:"main__summary"},n.a.createElement("h2",null,"Your cart"),n.a.createElement(F,{USCurrencyFormat:e.USCurrencyFormat,state:e.state}),n.a.createElement(v,{total:e.total,USCurrencyFormat:e.USCurrencyFormat}))}a(21);var S=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={selected:{Processor:{name:"17th Generation Intel Core HB (7 Core with donut spare)",cost:700},"Operating System":{name:"Ubuntu Linux 16.04",cost:200},"Video Card":{name:"Toyota Corolla 1.5v",cost:1150.98},Display:{name:'15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',cost:1500}}},a.updateFeature=function(e,t){var r=Object.assign({},a.state.selected);r[e]=t,a.setState({selected:r})},a}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.state.selected).reduce(function(t,a){return t+e.state.selected[a].cost},0);return n.a.createElement("div",{className:"App"},n.a.createElement(f,null),n.a.createElement("main",null,n.a.createElement(h,{USCurrencyFormat:S,state:this.state,updateFeature:this.updateFeature,store:d}),n.a.createElement(C,{USCurrencyFormat:S,total:t,state:this.state})))}}]),t}(r.Component);c.a.render(n.a.createElement(U,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.9a5efa94.chunk.js.map