import{a as d,S as f,i as c}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function u(s){const o="https://pixabay.com/api/",r=new URLSearchParams({key:"56029004-579adc8bb65fd3fada05aacf1",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),a=`${o}?${r}`;return(await d.get(a)).data}const i={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},m=new f(".gallery a");function p(s){const o=s.map(r=>`<li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="info">
    <div class="info-item">
      <p>Likes</p>
      <p>${r.likes}</p>
    </div>

    <div class="info-item">
      <p>Views</p>
      <p>${r.views}</p>
    </div>

    <div class="info-item">
      <p>Comments</p>
      <p>${r.comments}</p>
    </div>

    <div class="info-item">
      <p>Downloads</p>
      <p>${r.downloads}</p>
    </div>
  </div>
</li>`).join("");i.gallery.insertAdjacentHTML("beforeend",o),m.refresh()}function y(){i.gallery.innerHTML=""}function h(){i.loader.classList.remove("hidden")}function l(){i.loader.classList.add("hidden")}const g=document.querySelector(".form");g.addEventListener("submit",async s=>{s.preventDefault();const r=new FormData(s.currentTarget).get("search-text").trim();if(r===""){c.error({title:"Помилка",message:"Введіть текст для пошуку"});return}y(),h();const a=await u(r);if(a.hits.length===0){l(),c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}p(a.hits),l()});
//# sourceMappingURL=index.js.map
