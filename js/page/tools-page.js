function toolsPageHandle(){const o=document.querySelector(".tools-nav-box");if(o){const e=o.querySelector(".tool-item-list").querySelectorAll(".tool-category-name"),n=o.querySelectorAll(".tools-nav-list .tool-nav-category");e.forEach(e=>{let t=!1;const o=[];let l=e.nextElementSibling;for(;l&&l.classList.contains("tool-item");)o.push(l),l=l.nextElementSibling;const n=e.querySelector(".fold");n.addEventListener("click",()=>{t=!t,n.classList.remove("fa-chevron-"+(t?"down":"left")),n.classList.add("fa-chevron-"+(t?"left":"down")),o.forEach(e=>e.style.display=t?"none":"block")})});const a=()=>{n.forEach(e=>e.classList.remove("active"))};{n.forEach(e=>{var t=o.querySelector("#"+e.dataset.anchor);KEEP.utils.title2Top4HTag(e,t,300,()=>{a(),e.classList.add("active")})});const t=[...e].map(e=>e.getBoundingClientRect().top);let l=KEEP.utils.headerWrapperDom.getBoundingClientRect().height;KEEP.utils.isHideHeader&&(l=0),window.addEventListener("scroll",()=>{const o=KEEP.utils.getScrollTop();t.forEach((e,t)=>{o+l>e&&(a(),n[t].classList.add("active"))})})}}}!0===KEEP.theme_config?.pjax?.enable&&KEEP.utils?toolsPageHandle():window.addEventListener("DOMContentLoaded",toolsPageHandle);