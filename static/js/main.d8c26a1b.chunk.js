(this.webpackJsonppokefacts=this.webpackJsonppokefacts||[]).push([[0],{13:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(4),o=n.n(c),s=(n(13),n(3)),r=n(5),i=n(6),h=n(8),l=n(7),u=n(0),f=function(e){var t=e.searchChange;return Object(u.jsx)("div",{children:Object(u.jsx)("input",{className:"pa2 br4 ba b--green bg-lightest-blue f6 tc",type:"search",placeholder:"Search Pokemons!",onKeyPress:t})})},m=(n(15),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).randomPokeID=function(){return Math.floor(898*Math.random())+1},e.searchValueCheck=function(){return"number"===typeof e.state.searchfield?e.state.searchfield:"string"===typeof e.state.searchfield?e.state.searchfield.toLowerCase():void 0},e.searchPokemon=function(){Promise.all([fetch("https://pokeapi.co/api/v2/pokemon/".concat(e.searchValueCheck())),fetch("https://pokeapi.co/api/v2/pokemon/".concat(e.searchValueCheck())).then((function(e){return e.json()})).then((function(e){return fetch(e.species.url)}))]).then((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return Promise.all([n.json(),a.json()])})).then((function(t){var n=Object(s.a)(t,2),a=n[0],c=n[1];e.setState({pokeName:a.name,pokeImage:a.sprites.front_default,pokeForm:c.flavor_text_entries[1].flavor_text})})).catch((function(e){e&&console.log(e)}))},e.onSearchChange=function(t){e.setState({searchfield:t.target.value},(function(){e.searchPokemon()}))},e.handleKeyPress=function(t){"Enter"===t.key&&e.setState({searchfield:t.target.value},(function(){e.searchPokemon()}))},e.handleOnClick=function(){var t=e.randomPokeID();e.setState({searchfield:t},(function(){e.searchPokemon()}))},e.state={searchfield:"",pokeName:"",pokeImage:"",pokeForm:"",pokeID:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.handleOnClick()}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"flex justify-center w-100 h-100 test",children:Object(u.jsxs)("div",{className:"tc justify-center",children:[Object(u.jsx)("h1",{className:"pokeName",children:this.state.pokeName}),Object(u.jsx)("img",{src:this.state.pokeImage,width:"200",height:"200",alt:"pokemong",className:"center"}),Object(u.jsx)("div",{className:"pa4 f6",children:this.state.pokeForm}),Object(u.jsxs)("div",{className:"pa3 ma2",children:[Object(u.jsx)(f,{searchChange:this.handleKeyPress}),Object(u.jsx)("button",{onClick:this.handleOnClick,className:"ma3 pa2 br3 f6",children:"Random Pokemon"})]})]})})}}]),n}(a.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};n(16);o.a.render(Object(u.jsx)(m,{}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.d8c26a1b.chunk.js.map