(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});n(2791);var i=n(1523),s=n(6842),r=n(7892),a=n.n(r),o=n(184),u=function(t){var e=t.data,n=e.link?(0,o.jsx)("a",{href:e.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}):(0,o.jsx)(i.rU,{to:"/posts/".concat(e.handle),className:"image",children:(0,o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title,height:"500px"})});return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),n,(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},c=[{title:"Super-Masks: Are They Good Initializations?",image:"/images/CubicStep/example_curves.png",date:"2019-11-25",handle:"2019-11-25-CubicStep",desc:"Current gradient based optimization ignores 0th order information. In this post I want to motivate others to try utilizing it"},{title:"Super-Masks: Are They Good Initializations?",image:"/images/SuperMask/mnist_training.png",date:"2019-11-02",handle:"2019-11-02-SuperMasks",desc:"Quick blog post about using Super Masks and how to generate them"},{title:"Hack Umass Mentor: How to Debug?",image:"/images/HUM/nutshell.jpg",date:"2019-10-21",handle:"2019-10-21-HackUmassMentor",desc:"I was a mentor at Hack Umass, and this post just describes the fun experience!"},{title:"Does Focal Loss do what it is supposed to?",image:"/images/FocalGradientLoss/fl_vs_fgl.png",date:"2019-10-21",handle:"2019-10-21-FocalGradLoss",desc:"Investigating focal gradient loss' motivation and potential remedy"},{title:"Intermediate Loss Sampling",image:"/images/ILS/ILS.png",date:"2019-10-14",handle:"2019-10-14-ILSampling",desc:"An approach to approximate sampling in a differentiablefashion that does not require a distributed representation as in Gumbell Softmax"},{title:"ANNagram",subtitle:"Using Artificial Neural Networks to descramble words",image:"/images/ANNagram/pointer_net.png",date:"2019-10-06",handle:"2019-10-06-ANNagram",desc:"Using Artificial Neural Networks to descramble words"}],h=function(){return(0,o.jsx)(s.Z,{title:"Projects",description:"Learn about Michael Shliselberg's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{"data-testid":"heading",children:(0,o.jsx)(i.rU,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"A mix of side projects, undergraduate REUs, and blog posts"})]})}),c.map((function(t){return(0,o.jsx)(u,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",s="second",r="minute",a="hour",o="day",u="week",c="month",h="quarter",d="year",l="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},M={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+$(i,2,"0")+":"+$(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,c),r=n-s<0,a=e.clone().add(i+(r?-1:1),c);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:u,d:o,D:l,h:a,m:r,s:s,ms:i,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",S={};S[v]=p;var y=function(t){return t instanceof j},D=function t(e,n,i){var s;if(!e)return v;if("string"==typeof e){var r=e.toLowerCase();S[r]&&(s=r),n&&(S[r]=n,s=r);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;S[o]=e,s=o}return!i&&s&&(v=s),s||!i&&v},w=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new j(n)},x=M;x.l=D,x.i=y,x.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function p(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=p.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return x},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return w(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<w(t)},$.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,i=!!x.u(e)||e,h=x.p(t),f=function(t,e){var s=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?s:s.endOf(o)},m=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,p=this.$M,$=this.$D,M="set"+(this.$u?"UTC":"");switch(h){case d:return i?f(1,0):f(31,11);case c:return i?f(1,p):f(0,p+1);case u:var v=this.$locale().weekStart||0,S=(g<v?g+7:g)-v;return f(i?$-S:$+(6-S),p);case o:case l:return m(M+"Hours",0);case a:return m(M+"Minutes",1);case r:return m(M+"Seconds",2);case s:return m(M+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,u=x.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[o]=h+"Date",n[l]=h+"Date",n[c]=h+"Month",n[d]=h+"FullYear",n[a]=h+"Hours",n[r]=h+"Minutes",n[s]=h+"Seconds",n[i]=h+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===d){var g=this.clone().set(l,1);g.$d[f](m),g.init(),this.$d=g.set(l,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[x.p(t)]()},$.add=function(i,h){var l,f=this;i=Number(i);var m=x.p(h),g=function(t){var e=w(f);return x.w(e.date(e.date()+Math.round(t*i)),f)};if(m===c)return this.set(c,this.$M+i);if(m===d)return this.set(d,this.$y+i);if(m===o)return g(1);if(m===u)return g(7);var p=(l={},l[r]=e,l[a]=n,l[s]=t,l)[m]||1,$=this.$d.getTime()+i*p;return x.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=x.z(this),r=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,h=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},d=function(t){return x.s(r%12||12,t,"0")},l=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:x.s(o+1,2,"0"),MMM:h(n.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,u,2),ddd:h(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(r),HH:x.s(r,2,"0"),h:d(1),hh:d(2),a:l(r,a,!0),A:l(r,a,!1),m:String(a),mm:x.s(a,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:s};return i.replace(g,(function(t,e){return e||m[t]||s.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(i,l,f){var m,g=x.p(l),p=w(i),$=(p.utcOffset()-this.utcOffset())*e,M=this-p,v=x.m(this,p);return v=(m={},m[d]=v/12,m[c]=v,m[h]=v/3,m[u]=(M-$)/6048e5,m[o]=(M-$)/864e5,m[a]=M/n,m[r]=M/e,m[s]=M/t,m)[g]||M,f?v:x.a(v)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return S[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=D(t,e,!0);return i&&(n.$L=i),n},$.clone=function(){return x.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},p}(),b=j.prototype;return w.prototype=b,[["$ms",i],["$s",s],["$m",r],["$H",a],["$W",o],["$M",c],["$y",d],["$D",l]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,j,w),t.$i=!0),w},w.locale=D,w.isDayjs=y,w.unix=function(t){return w(1e3*t)},w.en=S[v],w.Ls=S,w.p={},w}()}}]);
//# sourceMappingURL=161.b5efb7b2.chunk.js.map