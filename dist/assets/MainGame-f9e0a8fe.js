import{d as g,a as F,o as h,h as x,e as f,w as O,f as D,t as T,n as w,_ as C,r as d,i as G,b as u,p as R,g as $,j as k,F as N,k as V,c as B}from"./index-76610f25.js";const E={class:"card"},M=g({__name:"TouchPanel",props:{index:null,touched:null},emits:["touch-panel"],setup(e,{emit:i}){const l=e,t=()=>{i("touch-panel",l.index)};return(s,o)=>{const n=F("v-btn");return h(),x("div",E,[f(n,{type:"button",onClick:t,class:w({disable:l.touched})},{default:O(()=>[D(T(e.index),1)]),_:1},8,["class"])])}}});const L=C(M,[["__scopeId","data-v-56d4cb72"]]),j=e=>(R("data-v-25302a1e"),e=e(),$(),e),A={class:"timer"},H=j(()=>u("span",{class:"CenterColon"},":",-1)),U=g({__name:"Timer",props:{isStart:null,isFin:null,isTimeOut:null},emits:["game-timeout","game-cleartime"],setup(e,{emit:i}){const l=e;let t=0;const s=d("0"),o=d("0"),n=d("0"),c=d("0");let a=null;const I=()=>{i("game-timeout",!1)},m=()=>{i("game-cleartime",t)};function p(){t=0,s.value="0",o.value="0",n.value="0",c.value="0"}function b(){const y=Date.now();a&&clearInterval(a),a=setInterval(()=>{t=Date.now()-y;const S=Math.floor(t/1e3%60),r=t%100;let _=S.toString().padStart(2,"0").split("");s.value=_[0],o.value=_[1];let v=r.toString().padStart(2,"0").split("");n.value=v[0],c.value=v[1],t>3e4&&(clearInterval(a),I())},48)}return G(()=>l.isStart,(y,S)=>{y==!0?b():p()}),G(()=>l.isFin,(y,S)=>{y==!0&&(clearInterval(a),m(),p())}),(y,S)=>(h(),x("div",A,[u("span",null,T(s.value),1),u("span",null,T(o.value),1),H,u("span",null,T(n.value),1),u("span",null,T(c.value),1)]))}});const z=C(U,[["__scopeId","data-v-25302a1e"]]),X={class:"timer"},Y=g({__name:"CountDown",props:{isCountDown:null,isRetry:null},emits:["game-start"],setup(e,{emit:i}){const l=e,t=()=>{i("game-start",!0)};let s=2;const o=d(3),n=d(!1);let c=null;const a=()=>{c&&clearInterval(c),c=setInterval(()=>{s=s-1,o.value=Math.floor(s%60)+1,s<0&&(clearInterval(c),n.value=!0,t())},1e3)};a();const I=()=>{c=null,clearInterval(c),s=2,o.value=3,n.value=!1};return G(()=>l.isCountDown,(m,p)=>{m==!0&&a()}),G(()=>l.isRetry,(m,p)=>{m==!0&&(I(),a())}),(m,p)=>(h(),x("div",{class:w(["overlay",{hidden:n.value}])},[u("div",X,[u("span",null,T(o.value),1)])],2))}});const q=C(Y,[["__scopeId","data-v-7cb2711d"]]),J={class:"BtnTop"},K=g({__name:"BtnPageReload",emits:["game-retry"],setup(e,{emit:i}){const l=()=>{i("game-retry",!1)};return(t,s)=>{const o=F("v-btn"),n=F("router-link");return h(),x("div",null,[f(o,{onClick:l,color:"primary"},{default:O(()=>[D("RETRY")]),_:1}),u("div",J,[f(n,{to:"/",class:"text-decoration-none text-orange"},{default:O(()=>[D("TOP")]),_:1})])])}}});const P=C(K,[["__scopeId","data-v-1f3c9f29"]]),Q=e=>(R("data-v-884d70ce"),e=e(),$(),e),W={class:"box"},Z=Q(()=>u("div",{class:"Title"},"ClearTime",-1)),ee={class:"ClearTime"},te=g({__name:"GameFin",props:{isFin:null,clearTime:null},emits:["game-retry"],setup(e,{emit:i}){const l=e,t=d(!1),s=d("00:00");G(()=>l.isFin,(c,a)=>{c==!0&&(t.value=!0,s.value=n(l.clearTime))});const o=()=>{s.value="00:00",t.value=!1,i("game-retry",!0)};function n(c){const a=Math.floor(c/1e3%60),I=c%100;let m=a.toString().padStart(2,"0").split(""),p=I.toString().padStart(2,"0").split("");return m[0]+m[1]+":"+p[0]+p[1]}return(c,a)=>(h(),x("div",{class:w(["overlay",{active:t.value}])},[u("div",W,[Z,u("div",ee,T(n(e.clearTime)),1),f(P,{onGameRetry:o})])],2))}});const se=C(te,[["__scopeId","data-v-884d70ce"]]),ae=e=>(R("data-v-3688ede7"),e=e(),$(),e),ne={class:"box"},le=ae(()=>u("p",null,"Sorry...TimeOut!",-1)),oe=g({__name:"GameTimeOut",props:{isTimeOut:null},emits:["game-retry"],setup(e,{emit:i}){const l=e,t=d(!1);G(()=>l.isTimeOut,(o,n)=>{o==!0&&(t.value=!0)});const s=()=>{t.value=!1,i("game-retry",!0)};return(o,n)=>(h(),x("div",{class:w(["overlay",{active:t.value}])},[u("div",ne,[le,f(P,{onGameRetry:s})])],2))}});const ce=C(oe,[["__scopeId","data-v-3688ede7"]]),ie=e=>(R("data-v-1a145ed1"),e=e(),$(),e),ue={class:"GameHeader"},re={class:"NextNumber"},de=ie(()=>u("span",null,"NEXT",-1)),_e={class:"PanelList"},ve=g({__name:"Game",setup(e){const i=d(1),l=d(!1),t=d(!1),s=d(!1),o=d(!1),n=d(!1),c=d(0),a=k([{index:1,touched:!1},{index:2,touched:!1},{index:3,touched:!1},{index:4,touched:!1},{index:5,touched:!1},{index:6,touched:!1},{index:7,touched:!1},{index:8,touched:!1},{index:9,touched:!1},{index:10,touched:!1},{index:11,touched:!1},{index:12,touched:!1},{index:13,touched:!1},{index:14,touched:!1},{index:15,touched:!1},{index:16,touched:!1}]),I=()=>{t.value=!1,l.value=!0,s.value=!1;const r=[...a];for(let _=r.length-1;_>0;_--){const v=Math.floor(Math.random()*(_+1));[r[_],r[v]]=[r[v],r[_]]}a.splice(0,a.length,...r)},m=()=>{l.value=!1,o.value=!1,t.value=!0,n.value=!1,c.value=0,i.value=1,s.value=!0,a.forEach(r=>{r.touched=!1}),p()},p=()=>{t.value=!0},b=r=>{c.value=r,s.value=!1},y=()=>{n.value=!0,s.value=!1},S=r=>{if(r!==i.value)return;const _=a.findIndex(v=>v.index===r);if(_!==-1){const v={...a[_],touched:!0};a.splice(_,1,v),i.value++}r==16&&(o.value=!0)};return(r,_)=>(h(),x("div",null,[f(q,{onGameStart:I,isCountDown:t.value,isRetry:s.value},null,8,["isCountDown","isRetry"]),u("div",ue,[u("div",re,[de,u("b",null,T(i.value),1)]),f(z,{isStart:l.value,isFin:o.value,isTimeOut:n.value,onGameTimeout:y,onGameCleartime:b},null,8,["isStart","isFin","isTimeOut"])]),u("div",_e,[(h(!0),x(N,null,V(a,v=>(h(),x("div",{key:v.index},[f(L,{index:v.index,touched:v.touched,onTouchPanel:S},null,8,["index","touched"])]))),128))]),f(se,{isFin:o.value,clearTime:c.value,onGameRetry:m},null,8,["isFin","clearTime"]),f(ce,{isTimeOut:n.value,onGameRetry:m},null,8,["isTimeOut"])]))}});const me=C(ve,[["__scopeId","data-v-1a145ed1"]]),fe=g({__name:"MainGame",setup(e){return(i,l)=>(h(),B(me))}});export{fe as default};
