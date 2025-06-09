var _=Object.defineProperty;var u=(r,e,s)=>e in r?_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var a=(r,e,s)=>u(r,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(i){if(i.ep)return;i.ep=!0;const t=s(i);fetch(i.href,t)}})();class m{constructor(e,s){a(this,"_cardsContainer");a(this,"_menu");this._cardsContainer=e,this._menu=s,this._init()}_init(){this._menu.querySelectorAll(".menu-item").forEach(s=>{s.onclick=()=>{var i;const c=+((i=s.dataset)==null?void 0:i.count);if(!isNaN(+c))this._cardsContainer.innerHTML=this._createCards(c);else{const t=this._menu.querySelector(".side-menu__container");this._createMenuItems().forEach(d=>t.append(d))}}})}_createCards(e){if(e===0)return"";let s=`
            <div class="card" tabindex="0">
                <div class="card__body">
                    <div class="card__image">
                        <picture class="card__picture">
                            <source media="(max-width: 639px)" srcset="public/img_5_600x600.png">
                            <source media="(max-width: 1023px)" srcset="public/img_4_800x800.jpg">
                            <img class="card__picture__img" src="public/img_1.webp" />
                        </picture>
                        <div class="card__image__scroll scroll">
                            <span class="scroll__arrow"></span>
                            <span class="scroll__thumb"></span>
                            <svg class="scroll__icon-container" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                <use class="scroll__icon" href="public/icons.svg#hand-index-icon"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="card__content">
                        <h5 class="card__title">1. Тэг picture</h5>
                        <p class="card__text">
                            В данной карточке показано изменение изображений в зависимости от ширины экрана
                        </p>
                    </div>
                </div>
            </div>
        `;for(let c=0;c<e-1;c++)s+=`
                <div class="card" tabindex="0">
                    <div class="card__body">
                        <div class="card__image">
                            <picture class="card__picture">
                                <source media="(max-width: 639px)" srcset="public/img_5_600x600.png">
                                <source media="(max-width: 1023px)" srcset="public/img_4_800x800.jpg">
                                <img class="card__picture__img" src="public/img_1.webp" />
                            </picture>
                            <div class="card__image__scroll scroll">
                                <span class="scroll__arrow"></span>
                                <span class="scroll__thumb"></span>
                                <svg class="scroll__icon-container" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                    <use class="scroll__icon" href="public/icons.svg#hand-index-icon"></use>
                                </svg>
                            </div>
                        </div>
                        <div class="card__content">
                            <h5 class="card__title">${c+2}. Тэг picture</h5>
                            <p class="card__text">
                                В данной карточке показано изменение изображений в зависимости от ширины экрана
                            </p>
                        </div>
                    </div>
                </div>
            `;return s+='<div class="cards__close"></div>',s}_createMenuItems(){let e=[];for(let s=0;s<20;s++){const c=document.createElement("li");c.classList.add("side-menu__item"),c.innerHTML=`
                <div class="side-menu__item__icon">
                    <svg class="side-menu__item__icon-container" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <use href="icons.svg#circle-icon"></use>
                    </svg>
                </div>
                <div class="side-menu__item__content">
                    <span>What is Lorem Ipsum?</span>
                </div>
            `,e.push(c)}return e}}const o=document.querySelector(".cards"),l=document.querySelector(".side-menu");o&&l&&new m(o,l);
