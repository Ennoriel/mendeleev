import{S as s,i as r,s as a,e as t,t as e,c as o,a as n,g as c,d as u,f as d,F as p,h as l,k as f,l as i,n as m,G as h}from"./chunks/vendor-49a13ddd.js";function k(s){let r,a,f=s[1].stack+"";return{c(){r=t("pre"),a=e(f)},l(s){r=o(s,"PRE",{});var t=n(r);a=c(t,f),t.forEach(u)},m(s,t){d(s,r,t),p(r,a)},p(s,r){2&r&&f!==(f=s[1].stack+"")&&l(a,f)},d(s){s&&u(r)}}}function v(s){let r,a,v,E,g,x,P,$=s[1].message+"",j=s[1].stack&&k(s);return{c(){r=t("h1"),a=e(s[0]),v=f(),E=t("p"),g=e($),x=f(),j&&j.c(),P=i()},l(t){r=o(t,"H1",{});var e=n(r);a=c(e,s[0]),e.forEach(u),v=m(t),E=o(t,"P",{});var d=n(E);g=c(d,$),d.forEach(u),x=m(t),j&&j.l(t),P=i()},m(s,t){d(s,r,t),p(r,a),d(s,v,t),d(s,E,t),p(E,g),d(s,x,t),j&&j.m(s,t),d(s,P,t)},p(s,[r]){1&r&&l(a,s[0]),2&r&&$!==($=s[1].message+"")&&l(g,$),s[1].stack?j?j.p(s,r):(j=k(s),j.c(),j.m(P.parentNode,P)):j&&(j.d(1),j=null)},i:h,o:h,d(s){s&&u(r),s&&u(v),s&&u(E),s&&u(x),j&&j.d(s),s&&u(P)}}}function E({error:s,status:r}){return{props:{error:s,status:r}}}function g(s,r,a){let{status:t}=r,{error:e}=r;return s.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),r(this,s,g,v,a,{status:0,error:1})}}export{E as load};
