import{i as a}from"./assets/error-icon-805dd091.js";import{i as n}from"./assets/vendor-ad859c2f.js";const c="/goit-js-hw-10/assets/snackbar-success-icon-edaedad4.svg",t=document.querySelector(".form");t.querySelector("button[type=submit]");t.querySelector("input[name=delay]");t.querySelector("input[value=fulfilled]");t.querySelector("input[value=rejected]");t.addEventListener("submit",e=>{e.preventDefault();const{delay:o,state:i}=e.currentTarget.elements;let s=o.value,l=i.value;m(s,l).then(r=>{n.show({title:"OK",titleSize:"16px",titleLineHeight:"24px",titleColor:"#fff",message:`✅ Fulfilled promise in ${r}ms`,messageColor:"#fff",position:"topCenter",messageLineHeight:"24px",messageSize:"16px",backgroundColor:"#59A10D",iconUrl:c,theme:"dark",transitionIn:"fadeIn,"})}).catch(r=>{n.show({title:"Error",titleColor:"#fff",titleLineHeight:"24px",titleSize:"16px",message:`❌ Rejected promise in ${r}ms`,messageColor:"#fff",messageLineHeight:"24px",backgroundColor:"#EF4040",position:"topCenter",messageSize:"16px",iconUrl:a,transitionIn:"fadeIn,",theme:"dark"})}),t.reset()});const m=(e,o)=>new Promise((i,s)=>{setTimeout(()=>{o==="fulfilled"?i(e):s(e)},e)});
//# sourceMappingURL=commonHelpers2.js.map
