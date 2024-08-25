import{s as Oe,n as pe,c as Ne,r as Ae,a as ae}from"../chunks/scheduler.BvblBlQa.js";import{S as He,i as Le,e as u,t as F,s as H,c as f,a as g,b as G,d,f as L,l as i,g as z,h as o,j as Z,k as $,m as oe,n as se,o as ee,p as De,q as ne}from"../chunks/index.CbVHyh7v.js";import{e as re}from"../chunks/each.D6YF6ztN.js";import{p as Ee}from"../chunks/stores.Sk82oRER.js";const Ve="https://pokeapi.co/api/v2/";async function Se(){return(await(await fetch(Ve+"pokemon?limit=151&offset=0")).json()).results}async function je(l){return await(await fetch(Ve+"pokemon/"+l)).json()}function we(l,t,a){const e=l.slice();return e[24]=t[a],e[26]=a,e}function Pe(l,t,a){const e=l.slice();return e[24]=t[a],e}function qe(l){let t,a=re(l[2]),e=[];for(let s=0;s<a.length;s+=1)e[s]=Ie(Pe(l,a,s));return{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=ne()},l(s){for(let n=0;n<e.length;n+=1)e[n].l(s);t=ne()},m(s,n){for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(s,n);z(s,t,n)},p(s,n){if(n&100){a=re(s[2]);let r;for(r=0;r<a.length;r+=1){const h=Pe(s,a,r);e[r]?e[r].p(h,n):(e[r]=Ie(h),e[r].c(),e[r].m(t.parentNode,t))}for(;r<e.length;r+=1)e[r].d(1);e.length=a.length}},d(s){s&&d(t),De(e,s)}}}function Me(l){let t,a="Loading...";return{c(){t=u("p"),t.textContent=a},l(e){t=f(e,"P",{"data-svelte-h":!0}),$(t)!=="svelte-qdsr2u"&&(t.textContent=a)},m(e,s){z(e,t,s)},p:pe,d(e){e&&d(t)}}}function Ce(l){let t,a,e="X",s,n,r,h,D,p,k,w,_,N=l[6].name+"",A,P,x,C,V,U=l[6].types[0].type.name+"",c,I,E,T,y,M=l[6].stats[1].base_stat+"",S,v,O,q,K,J=l[6].stats[2].base_stat+"",Q,j,b,B,m,R=l[6].stats[0].base_stat+"",te,le,he;return{c(){t=u("div"),a=u("button"),a.textContent=e,s=H(),n=u("div"),r=u("img"),D=H(),p=u("div"),k=u("div"),w=F("NAME: "),_=u("p"),A=F(N),P=H(),x=u("div"),C=F("TYPE: "),V=u("p"),c=F(U),I=H(),E=u("div"),T=F("ATTACK: "),y=u("p"),S=F(M),v=H(),O=u("div"),q=F("DEFENCE: "),K=u("p"),Q=F(J),j=H(),b=u("div"),B=F("HEALTH POINTS: "),m=u("p"),te=F(R),this.h()},l(X){t=f(X,"DIV",{class:!0});var Y=g(t);a=f(Y,"BUTTON",{class:!0,"data-svelte-h":!0}),$(a)!=="svelte-1jzd9e1"&&(a.textContent=e),s=L(Y),n=f(Y,"DIV",{class:!0});var _e=g(n);r=f(_e,"IMG",{src:!0,alt:!0,class:!0}),_e.forEach(d),D=L(Y),p=f(Y,"DIV",{class:!0});var W=g(p);k=f(W,"DIV",{class:!0});var ie=g(k);w=G(ie,"NAME: "),_=f(ie,"P",{class:!0});var me=g(_);A=G(me,N),me.forEach(d),ie.forEach(d),P=L(W),x=f(W,"DIV",{class:!0});var ce=g(x);C=G(ce,"TYPE: "),V=f(ce,"P",{class:!0});var ve=g(V);c=G(ve,U),ve.forEach(d),ce.forEach(d),I=L(W),E=f(W,"DIV",{class:!0});var ue=g(E);T=G(ue,"ATTACK: "),y=f(ue,"P",{class:!0});var be=g(y);S=G(be,M),be.forEach(d),ue.forEach(d),v=L(W),O=f(W,"DIV",{class:!0});var fe=g(O);q=G(fe,"DEFENCE: "),K=f(fe,"P",{class:!0});var ke=g(K);Q=G(ke,J),ke.forEach(d),fe.forEach(d),j=L(W),b=f(W,"DIV",{class:!0});var de=g(b);B=G(de,"HEALTH POINTS: "),m=f(de,"P",{class:!0});var ge=g(m);te=G(ge,R),ge.forEach(d),de.forEach(d),W.forEach(d),Y.forEach(d),this.h()},h(){i(a,"class","btn btn-xs absolute right-2 top-2"),ae(r.src,h=l[6].sprites.front_default)||i(r,"src",h),i(r,"alt","Pokemon"),i(r,"class","w-60 h-60 mx-auto my-auto"),i(n,"class","w-[60%]"),i(_,"class","text-white"),i(k,"class","mt-1 ml-5 text-info text-start"),i(V,"class","text-white"),i(x,"class","mt-1 ml-5 text-info text-start"),i(y,"class","text-white"),i(E,"class","mt-1 ml-5 text-info text-start"),i(K,"class","text-white"),i(O,"class","mt-1 ml-5 text-info text-start"),i(m,"class","text-white"),i(b,"class","mt-1 ml-5 text-info text-start"),i(p,"class","ml-3 mr-3 mt-2 w-[40%] border-l-[1px] border-black"),i(t,"class","modal-box flex justify-between")},m(X,Y){z(X,t,Y),o(t,a),o(t,s),o(t,n),o(n,r),o(t,D),o(t,p),o(p,k),o(k,w),o(k,_),o(_,A),o(p,P),o(p,x),o(x,C),o(x,V),o(V,c),o(p,I),o(p,E),o(E,T),o(E,y),o(y,S),o(p,v),o(p,O),o(O,q),o(O,K),o(K,Q),o(p,j),o(p,b),o(b,B),o(b,m),o(m,te),le||(he=ee(a,"click",l[14]),le=!0)},p(X,Y){Y&64&&!ae(r.src,h=X[6].sprites.front_default)&&i(r,"src",h),Y&64&&N!==(N=X[6].name+"")&&Z(A,N),Y&64&&U!==(U=X[6].types[0].type.name+"")&&Z(c,U),Y&64&&M!==(M=X[6].stats[1].base_stat+"")&&Z(S,M),Y&64&&J!==(J=X[6].stats[2].base_stat+"")&&Z(Q,J),Y&64&&R!==(R=X[6].stats[0].base_stat+"")&&Z(te,R)},d(X){X&&d(t),le=!1,he()}}}function Ie(l){let t,a,e,s,n,r,h,D=l[24].name+"",p,k,w,_=l[24].types[0].type.name+"",N,A,P,x,C,V;function U(){return l[13](l[24])}let c=l[6]&&Ce(l);return{c(){t=u("div"),a=u("div"),e=u("div"),s=u("img"),r=H(),h=u("h2"),p=F(D),k=H(),w=u("p"),N=F(_),A=H(),P=u("dialog"),c&&c.c(),x=H(),this.h()},l(I){t=f(I,"DIV",{class:!0});var E=g(t);a=f(E,"DIV",{class:!0});var T=g(a);e=f(T,"DIV",{class:!0});var y=g(e);s=f(y,"IMG",{src:!0,alt:!0,class:!0}),r=L(y),h=f(y,"H2",{class:!0});var M=g(h);p=G(M,D),M.forEach(d),k=L(y),w=f(y,"P",{class:!0});var S=g(w);N=G(S,_),S.forEach(d),y.forEach(d),T.forEach(d),E.forEach(d),A=L(I),P=f(I,"DIALOG",{class:!0});var v=g(P);c&&c.l(v),x=L(v),v.forEach(d),this.h()},h(){ae(s.src,n=l[24].sprites.front_default)||i(s,"src",n),i(s,"alt","Pokemon"),i(s,"class","w-32 h-32 mx-auto"),i(h,"class","text-white text-2xl font-bold"),i(w,"class","text-info"),i(e,"class","text-center"),i(a,"class","card-body"),i(t,"class","card bg-slate-700 m-4 shadow-lg shadow-blue-900 hover:bg-slate-600 cursor-pointer"),i(P,"class","modal min-w-fit"),oe(P,"modal-open",l[5])},m(I,E){z(I,t,E),o(t,a),o(a,e),o(e,s),o(e,r),o(e,h),o(h,p),o(e,k),o(e,w),o(w,N),z(I,A,E),z(I,P,E),c&&c.m(P,null),o(P,x),C||(V=ee(t,"click",U),C=!0)},p(I,E){l=I,E&4&&!ae(s.src,n=l[24].sprites.front_default)&&i(s,"src",n),E&4&&D!==(D=l[24].name+"")&&Z(p,D),E&4&&_!==(_=l[24].types[0].type.name+"")&&Z(N,_),l[6]?c?c.p(l,E):(c=Ce(l),c.c(),c.m(P,x)):c&&(c.d(1),c=null),E&32&&oe(P,"modal-open",l[5])},d(I){I&&(d(t),d(A),d(P)),c&&c.d(),C=!1,V()}}}function xe(l){let t,a="Edit Page",e,s,n,r,h="X",D,p,k="Edit Your PokePage",w,_,N="Here you can make edits to your page, such as description or pokemon selected.",A,P,x="Edit your description",C,V,U,c,I="Select your pokemon",E,T,y,M,S,v="Save Edits",O,q,K,J,Q=re(l[1]),j=[];for(let b=0;b<Q.length;b+=1)j[b]=Te(we(l,Q,b));return{c(){t=u("button"),t.textContent=a,e=H(),s=u("dialog"),n=u("div"),r=u("button"),r.textContent=h,D=H(),p=u("h3"),p.textContent=k,w=H(),_=u("p"),_.textContent=N,A=H(),P=u("p"),P.textContent=x,C=H(),V=u("textarea"),U=H(),c=u("p"),c.textContent=I,E=H(),T=u("div"),y=u("input"),M=H(),S=u("button"),S.textContent=v,O=H(),q=u("div");for(let b=0;b<j.length;b+=1)j[b].c();this.h()},l(b){t=f(b,"BUTTON",{class:!0,"data-svelte-h":!0}),$(t)!=="svelte-18s12xk"&&(t.textContent=a),e=L(b),s=f(b,"DIALOG",{class:!0});var B=g(s);n=f(B,"DIV",{class:!0});var m=g(n);r=f(m,"BUTTON",{class:!0,"data-svelte-h":!0}),$(r)!=="svelte-jchefy"&&(r.textContent=h),D=L(m),p=f(m,"H3",{class:!0,"data-svelte-h":!0}),$(p)!=="svelte-wt989y"&&(p.textContent=k),w=L(m),_=f(m,"P",{class:!0,"data-svelte-h":!0}),$(_)!=="svelte-uy6q1u"&&(_.textContent=N),A=L(m),P=f(m,"P",{class:!0,"data-svelte-h":!0}),$(P)!=="svelte-dx9vp6"&&(P.textContent=x),C=L(m),V=f(m,"TEXTAREA",{class:!0}),g(V).forEach(d),U=L(m),c=f(m,"P",{class:!0,"data-svelte-h":!0}),$(c)!=="svelte-19rc207"&&(c.textContent=I),E=L(m),T=f(m,"DIV",{class:!0});var R=g(T);y=f(R,"INPUT",{type:!0,class:!0,placeholder:!0}),M=L(R),S=f(R,"BUTTON",{class:!0,"data-svelte-h":!0}),$(S)!=="svelte-adty40"&&(S.textContent=v),R.forEach(d),O=L(m),q=f(m,"DIV",{class:!0});var te=g(q);for(let le=0;le<j.length;le+=1)j[le].l(te);te.forEach(d),m.forEach(d),B.forEach(d),this.h()},h(){i(t,"class","btn btn-info mt-5"),i(r,"class","btn btn-xs absolute right-2 top-2"),i(p,"class","mt-2"),i(_,"class","text-xs text-[#88898a] mt-2"),i(P,"class","text-white p-2"),i(V,"class","textarea textarea-bordered textarea-lg w-full max-w-md h-[300px]"),i(c,"class","text-white p-2"),i(y,"type","text"),i(y,"class","input input-bordered w-full"),i(y,"placeholder","Search for a pokemon!"),i(S,"class","btn btn-success mt-5 w-[200px]"),i(T,"class","col-span-3"),i(q,"class","grid grid-cols-3 overflow-y-scroll max-h-[600px] m-3"),i(n,"class","modal-box"),i(s,"class","modal min-w-lg"),oe(s,"modal-open",l[4])},m(b,B){z(b,t,B),z(b,e,B),z(b,s,B),o(s,n),o(n,r),o(n,D),o(n,p),o(n,w),o(n,_),o(n,A),o(n,P),o(n,C),o(n,V),se(V,l[3].description),o(n,U),o(n,c),o(n,E),o(n,T),o(T,y),se(y,l[7]),o(T,M),o(T,S),o(n,O),o(n,q);for(let m=0;m<j.length;m+=1)j[m]&&j[m].m(q,null);K||(J=[ee(t,"click",l[15]),ee(r,"click",l[16]),ee(V,"input",l[17]),ee(y,"input",l[18]),ee(S,"click",l[19])],K=!0)},p(b,B){if(B&8&&se(V,b[3].description),B&128&&y.value!==b[7]&&se(y,b[7]),B&1162){Q=re(b[1]);let m;for(m=0;m<Q.length;m+=1){const R=we(b,Q,m);j[m]?j[m].p(R,B):(j[m]=Te(R),j[m].c(),j[m].m(q,null))}for(;m<j.length;m+=1)j[m].d(1);j.length=Q.length}B&16&&oe(s,"modal-open",b[4])},d(b){b&&(d(t),d(e),d(s)),De(j,b),K=!1,Ae(J)}}}function ye(l){let t,a,e,s=l[24].name+"",n,r,h,D,p;function k(){return l[20](l[26])}return{c(){t=u("button"),a=u("div"),e=u("h2"),n=F(s),r=H(),this.h()},l(w){t=f(w,"BUTTON",{class:!0});var _=g(t);a=f(_,"DIV",{class:!0});var N=g(a);e=f(N,"H2",{class:!0});var A=g(e);n=G(A,s),A.forEach(d),N.forEach(d),r=L(_),_.forEach(d),this.h()},h(){i(e,"class","text-white text-xl"),i(a,"class","text-center"),i(t,"class",h="card bg-slate-700 h-12 p-1 m-1 justify-center items-center "+(l[3].pokemon_ids.includes(l[26]+1)?"border-2 border-blue-600":""))},m(w,_){z(w,t,_),o(t,a),o(a,e),o(e,n),o(t,r),D||(p=ee(t,"click",k),D=!0)},p(w,_){l=w,_&2&&s!==(s=l[24].name+"")&&Z(n,s),_&8&&h!==(h="card bg-slate-700 h-12 p-1 m-1 justify-center items-center "+(l[3].pokemon_ids.includes(l[26]+1)?"border-2 border-blue-600":""))&&i(t,"class",h)},d(w){w&&d(t),D=!1,p()}}}function Te(l){let t=l[24].name.includes(l[7]),a,e=t&&ye(l);return{c(){e&&e.c(),a=ne()},l(s){e&&e.l(s),a=ne()},m(s,n){e&&e.m(s,n),z(s,a,n)},p(s,n){n&130&&(t=s[24].name.includes(s[7])),t?e?e.p(s,n):(e=ye(s),e.c(),e.m(a.parentNode,a)):e&&(e.d(1),e=null)},d(s){s&&d(a),e&&e.d(s)}}}function Ue(l){var V,U;let t,a,e,s,n,r,h,D,p=l[3].description+"",k,w,_,N;function A(c,I){return c[2]===void 0?Me:qe}let P=A(l),x=P(l),C=l[8]==((U=(V=l[0])==null?void 0:V.user)==null?void 0:U.email)&&xe(l);return{c(){t=u("div"),a=u("div"),e=u("div"),s=u("h1"),n=F(l[8]),r=F("'s Page"),h=H(),D=u("p"),k=F(p),w=H(),_=u("div"),x.c(),N=H(),C&&C.c(),this.h()},l(c){t=f(c,"DIV",{class:!0});var I=g(t);a=f(I,"DIV",{class:!0});var E=g(a);e=f(E,"DIV",{class:!0});var T=g(e);s=f(T,"H1",{class:!0});var y=g(s);n=G(y,l[8]),r=G(y,"'s Page"),y.forEach(d),h=L(T),D=f(T,"P",{class:!0});var M=g(D);k=G(M,p),M.forEach(d),w=L(T),_=f(T,"DIV",{class:!0});var S=g(_);x.l(S),S.forEach(d),N=L(T),C&&C.l(T),T.forEach(d),E.forEach(d),I.forEach(d),this.h()},h(){i(s,"class","text-white font-bold text-4xl"),i(D,"class","py-3 max-w-md mx-auto"),i(_,"class","grid grid-cols-3"),i(e,"class","max-w-2xl text-center"),i(a,"class","hero-content"),i(t,"class","hero min-h-screen bg-base-300")},m(c,I){z(c,t,I),o(t,a),o(a,e),o(e,s),o(s,n),o(s,r),o(e,h),o(e,D),o(D,k),o(e,w),o(e,_),x.m(_,null),o(e,N),C&&C.m(e,null)},p(c,[I]){var E,T;I&256&&Z(n,c[8]),I&8&&p!==(p=c[3].description+"")&&Z(k,p),P===(P=A(c))&&x?x.p(c,I):(x.d(1),x=P(c),x&&(x.c(),x.m(_,null))),c[8]==((T=(E=c[0])==null?void 0:E.user)==null?void 0:T.email)?C?C.p(c,I):(C=xe(c),C.c(),C.m(e,null)):C&&(C.d(1),C=null)},i:pe,o:pe,d(c){c&&d(t),x.d(),C&&C.d()}}}function Be(l,t,a){let e,s;Ne(l,Ee,v=>a(12,s=v));let{data:n}=t,{supabase:r,session:h}=n,D=[],p=[],k={description:"This is your description, feel free to write about yourself or your favorite Pokemon.",pokemon_ids:[1,2,3]},w=!1,_=!1,N=null,A="";async function P(){a(2,p=[]),k.pokemon_ids.map(async v=>{const O=await je(v.toString());p===void 0?a(2,p=[O]):a(2,p=[...p,O])})}async function x(){var q,K,J;const{data:v,error:O}=await r.from("profiles").select("*").eq("email",e);(v==null?void 0:v.length)===0?await r.from("profiles").insert({...k,user_id:(q=h==null?void 0:h.user)==null?void 0:q.id,email:(K=h==null?void 0:h.user)==null?void 0:K.email}):await r.from("profiles").update(k).eq("user_id",(J=h==null?void 0:h.user)==null?void 0:J.id)}Ee.subscribe(async()=>{var q;a(1,D=await Se());const{data:v,error:O}=await r.from("profiles").select("description, pokemon_ids").eq("email",e);(v==null?void 0:v.length)==0&&e==((q=h==null?void 0:h.user)==null?void 0:q.email)?(console.log("SAVE PROFILE"),await x()):v!=null&&v.length>0?a(3,k=v[0]):(console.log("NO PROFILE"),a(3,k={description:"This user does not have a profile yet!",pokemon_ids:[]})),await P()});async function C(){await x(),await P(),a(4,w=!1)}async function V(v){let O=k.pokemon_ids;if(O.length>=3&&!O.includes(v)){alert("You can only have 3 pokemon maximum!");return}if(O.includes(v)){let q=O.indexOf(v);O.splice(q,1)}else O.push(v);a(3,k.pokemon_ids=[...O],k)}const U=v=>{a(6,N=v),a(5,_=!0)},c=()=>a(5,_=!1),I=()=>a(4,w=!0),E=()=>a(4,w=!1);function T(){k.description=this.value,a(3,k)}function y(){A=this.value,a(7,A)}const M=()=>C(),S=v=>V(v+1);return l.$$set=v=>{"data"in v&&a(11,n=v.data)},l.$$.update=()=>{l.$$.dirty&2048&&a(0,{supabase:r,session:h}=n,h),l.$$.dirty&4096&&a(8,e=s.params.email)},[h,D,p,k,w,_,N,A,e,C,V,n,s,U,c,I,E,T,y,M,S]}class Re extends He{constructor(t){super(),Le(this,t,Be,Ue,Oe,{data:11})}}export{Re as component};
