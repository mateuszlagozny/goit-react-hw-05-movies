"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[518],{1518:function(e,t,n){n.r(t),n.d(t,{Movies:function(){return d}});var a=n(885),s=n(4569),r=n.n(s),c=n(2791),u=n(501),i=n(6871),o=n(8494),l=n(6066),f=n(1084),h=n(184),d=function(e){var t=e.BASE_URL,n=e.API_KEY,s=(0,c.useState)(""),d=(0,a.Z)(s,2),m=d[0],p=d[1],v=(0,c.useState)(""),x=(0,a.Z)(v,2),g=x[0],j=x[1],k=(0,c.useState)(""),_=(0,a.Z)(k,2),w=_[0],y=_[1],S=(0,u.lr)(),b=(0,a.Z)(S,2),C=b[0],E=b[1],q=(0,i.TH)(),N="".concat(t,"search/movie?query=").concat(g,"&api_key=").concat(n,"&language=en-EN&page=1&include_adult=false"),Z=C.get("query");(0,c.useEffect)((function(){null!==Z&&j(Z)}),[Z]);return(0,c.useEffect)((function(){""!==g&&r().get(N).then((function(e){y(e.data.results)}))}),[N,g]),(0,h.jsxs)("div",{className:f.default.movies_block,children:[(0,h.jsxs)("form",{className:f.default.form,children:[(0,h.jsx)("input",{type:"text",placeholder:"Search images and photos",value:m,onChange:function(e){p(e.currentTarget.value.toLowerCase())}}),(0,h.jsxs)("button",{type:"submit",onClick:function(e){e.preventDefault(),""!==m.trim()?(E({query:m}),j(m),p("")):l.Am.warn("There is nothing for this request!")},children:[(0,h.jsx)(o.Yfv,{}),(0,h.jsx)("span",{children:"Search"})]})]}),(0,h.jsx)("ul",{className:f.default.moviesList,children:w&&w.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"/movies/".concat(e.id),state:{from:q},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=518.5abf7a08.chunk.js.map