var u=Object.defineProperty;var m=(s,e,t)=>e in s?u(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var a=(s,e,t)=>m(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();class h{constructor(){this._init()}_init(){document.querySelectorAll(".menu-trigger").forEach(t=>t.addEventListener("click",this._handleClick))}_handleClick(e){e.preventDefault();const t=document.body.getAttribute("aria-expanded")==="true";document.body.setAttribute("aria-expanded",!t)}}class p{constructor(e){a(this,"_container");this._container=e,this._init()}hideLastRow(){const e=Array.from(this._container.querySelectorAll(".card"));if(!e.length)return;e.forEach(o=>{o.style.display==="none"&&(o.style.display="")});const{gap:t,containerWidth:n,cardWidth:i}=this._getSizes(e[0]),r=Math.trunc((n+t)/(i+t));if(e.length<=r)return;const c=e.length%r;for(let o=e.length-1;o>e.length-1-c;o--)e[o].style.display="none"}_getSizes(e){const t=window.getComputedStyle(this._container),n=parseInt(t.gap),i=this._container.getBoundingClientRect().width,r=e.getBoundingClientRect().width;return{gap:n,containerWidth:i,cardWidth:Math.trunc(r)}}_init(){window.addEventListener("resize",()=>this.hideLastRow())}}class f{constructor(e,t,n){a(this,"_callback");a(this,"_cardsContainer");a(this,"_menu");this._callback=e,this._cardsContainer=t,this._menu=n,this._init()}_init(){this._menu.querySelectorAll(".menu-item").forEach(t=>{t.onclick=()=>{var i;const n=+((i=t.dataset)==null?void 0:i.count);if(!isNaN(+n))this._cardsContainer.innerHTML=this._createCards(n),this._callback();else{const r=this._menu.querySelector(".side-menu__container");this._createMenuItems().forEach(o=>r.append(o))}}})}_createCards(e){if(e===0)return"";let t=`
            <div class="card">
                <h5>1. Very big titleeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h5>
                <p>
                    Small card's content
                </p>
            </div>
        `;for(let n=0;n<e-1;n++)t+=`
                <div class="card">
                    <h5>${n+2}. Lorem Ipsum</h5>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, ad reprehenderit adipisci maiores dolores quae? Repellat voluptates fugit, aliquam ipsam itaque iusto expedita veniam quod quae doloribus quidem accusantium temporibus!
                    </p>
                </div>
            `;return t}_createMenuItems(){let e=[];for(let t=0;t<20;t++){const n=document.createElement("li");n.classList.add("side-menu__item"),n.innerHTML=`
                <div class="side-menu__item__icon">
                    <svg class="button" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <circle opacity="0.13" cx="11.5" cy="11.5" r="11.5" fill="black"/>
                    </svg>
                </div>
                <div class="side-menu__item__content">
                    <span>Lorem Ipsum</span>
                </div>
            `,e.push(n)}return e}}const d=document.querySelector(".cards"),l=document.querySelector(".side-menu");if(d){const s=new p(d);s.hideLastRow(),l&&new f(()=>s.hideLastRow(),d,l)}new h;
