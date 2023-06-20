(()=>{document.addEventListener("DOMContentLoaded",()=>{let o=document.getElementById("theme-switcher"),l=document.getElementById("mobile-theme-switch");if(localStorage.getItem("mode")==="dark"){if(d(),document.getElementById("hero-video")){let e=document.getElementById("hero-video");e.src=`https://assets.mexemnews.com/mexem2/videos/hero/ai/${e.dataset.video}-dark.webm`,e.play()}document.getElementById("deshe-logo-light")&&(document.getElementById("deshe-logo-light").classList.add("hide"),document.getElementById("deshe-logo-dark").classList.remove("hide"))}o.addEventListener("click",()=>{localStorage.getItem("mode")===null&&localStorage.setItem("mode","light");let e=localStorage.getItem("mode");t(e)}),l.addEventListener("click",()=>{localStorage.getItem("mode")===null&&localStorage.setItem("mode","light");let e=localStorage.getItem("mode");t(e)});function t(e){switch(e){case"light":if(d(),document.getElementById("hero-video")){let r=document.getElementById("hero-video");r.src=`https://assets.mexemnews.com/mexem2/videos/hero/ai/${r.dataset.video}-dark.webm`,r.play()}document.getElementById("deshe-logo-light")&&(document.getElementById("deshe-logo-light").classList.add("hide"),document.getElementById("deshe-logo-dark").classList.remove("hide"));break;case"dark":if(a(),document.getElementById("hero-video")){let r=document.getElementById("hero-video");r.src=`https://assets.mexemnews.com/mexem2/videos/hero/ai/${r.dataset.video}-light.webm`,r.play()}document.getElementById("deshe-logo-dark")&&(document.getElementById("deshe-logo-dark").classList.add("hide"),document.getElementById("deshe-logo-light").classList.remove("hide"));break}}function d(){localStorage.setItem("mode","dark"),document.getElementById("switch-dark")&&(document.getElementById("switch-dark").style.display="block"),document.getElementById("switch-light")&&(document.getElementById("switch-light").style.display="none"),document.getElementById("nav-logo-dark")&&(document.getElementById("nav-logo-dark").style.display="inline-block"),document.getElementById("nav-logo-light")&&(document.getElementById("nav-logo-light").style.display="none"),document.getElementById("trust-pilot-light")&&(document.getElementById("trust-pilot-light").style.display="block"),document.getElementById("trust-pilot-dark")&&(document.getElementById("trust-pilot-dark").style.display="none"),document.getElementById("exchanges-dark-theme")&&(document.getElementById("exchanges-dark-theme").style.display="inline-block"),document.getElementById("exchanges-light-theme")&&(document.getElementById("exchanges-light-theme").style.display="none"),document.querySelectorAll(".text-color-dark-1").forEach(e=>{e.classList.remove("text-color-dark-1"),e.classList.add("text-color-light-1")}),document.querySelectorAll(".background-color-light-1").forEach(e=>{e.classList.remove("background-color-light-1"),e.classList.add("background-color-dark-1")}),document.querySelectorAll(".background-color-light-2").forEach(e=>{e.classList.remove("background-color-light-2"),e.classList.add("background-color-dark-2")}),document.querySelectorAll(".background-color-light-3").forEach(e=>{e.classList.remove("background-color-light-3"),e.classList.add("background-color-dark-3")}),document.querySelectorAll(".background-color-light-4").forEach(e=>{e.classList.remove("background-color-light-4"),e.classList.add("background-color-dark-4")}),document.querySelectorAll(".text-color-light-1.theme-reverse").forEach(e=>{e.classList.remove("text-color-light-1","theme-reverse"),e.classList.add("text-color-dark-1","theme-reverse")}),document.querySelectorAll(".background-color-dark-1.theme-reverse").forEach(e=>{e.classList.remove("background-color-dark-1","theme-reverse"),e.classList.add("background-color-light-1","theme-reverse")}),document.querySelectorAll(".background-color-dark-2.theme-reverse").forEach(e=>{e.classList.remove("background-color-dark-2","theme-reverse"),e.classList.add("background-color-light-2","theme-reverse")}),document.querySelectorAll(".background-color-dark-3.theme-reverse").forEach(e=>{e.classList.remove("background-color-dark-3","theme-reverse"),e.classList.add("background-color-light-3","theme-reverse")}),document.querySelectorAll(".gradient-color-card-light-1").forEach(e=>{e.classList.remove("gradient-color-card-light-1"),e.classList.add("gradient-color-card-dark-1")}),document.querySelectorAll(".gradient-color-card-light-2").forEach(e=>{e.classList.remove("gradient-color-card-light-2"),e.classList.add("gradient-color-card-dark-2")}),document.querySelectorAll(".gradient-color-card-light-3").forEach(e=>{e.classList.remove("gradient-color-card-light-3"),e.classList.add("gradient-color-card-dark-3")}),document.querySelectorAll(".backdrop-effect-light").forEach(e=>{e.classList.remove("backdrop-effect-light"),e.classList.add("backdrop-effect-dark")})}function a(){localStorage.setItem("mode","light"),document.getElementById("switch-light")&&(document.getElementById("switch-light").style.display="block"),document.getElementById("switch-dark")&&(document.getElementById("switch-dark").style.display="none"),document.getElementById("nav-logo-light")&&(document.getElementById("nav-logo-light").style.display="inline-block"),document.getElementById("nav-logo-dark")&&(document.getElementById("nav-logo-dark").style.display="none"),document.getElementById("trust-pilot-dark")&&(document.getElementById("trust-pilot-dark").style.display="block"),document.getElementById("trust-pilot-light")&&(document.getElementById("trust-pilot-light").style.display="none"),document.getElementById("exchanges-light-theme")&&(document.getElementById("exchanges-light-theme").style.display="inline-block"),document.getElementById("exchanges-dark-theme")&&(document.getElementById("exchanges-dark-theme").style.display="none"),document.querySelectorAll(".text-color-light-1").forEach(e=>{e.classList.remove("text-color-light-1"),e.classList.add("text-color-dark-1")}),document.querySelectorAll(".background-color-dark-1").forEach(e=>{e.classList.remove("background-color-dark-1"),e.classList.add("background-color-light-1")}),document.querySelectorAll(".background-color-dark-2").forEach(e=>{e.classList.remove("background-color-dark-2"),e.classList.add("background-color-light-2")}),document.querySelectorAll(".background-color-dark-3").forEach(e=>{e.classList.remove("background-color-dark-3"),e.classList.add("background-color-light-3")}),document.querySelectorAll(".background-color-dark-4").forEach(e=>{e.classList.remove("background-color-dark-4"),e.classList.add("background-color-light-4")}),document.querySelectorAll(".text-color-dark-1.theme-reverse").forEach(e=>{e.classList.remove("text-color-dark-1","theme-reverse"),e.classList.add("text-color-light-1","theme-reverse")}),document.querySelectorAll(".background-color-light-1.theme-reverse").forEach(e=>{e.classList.remove("background-color-light-1","theme-reverse"),e.classList.add("background-color-dark-1","theme-reverse")}),document.querySelectorAll(".background-color-light-2.theme-reverse").forEach(e=>{e.classList.remove("background-color-light-2","theme-reverse"),e.classList.add("background-color-dark-2","theme-reverse")}),document.querySelectorAll(".background-color-light-3.theme-reverse").forEach(e=>{e.classList.remove("background-color-light-3","theme-reverse"),e.classList.add("background-color-dark-3","theme-reverse")}),document.querySelectorAll(".gradient-color-card-dark-1").forEach(e=>{e.classList.remove("gradient-color-card-dark-1"),e.classList.add("gradient-color-card-light-1")}),document.querySelectorAll(".gradient-color-card-dark-2").forEach(e=>{e.classList.remove("gradient-color-card-dark-2"),e.classList.add("gradient-color-card-light-2")}),document.querySelectorAll(".gradient-color-card-dark-3").forEach(e=>{e.classList.remove("gradient-color-card-dark-3"),e.classList.add("gradient-color-card-light-3")}),document.querySelectorAll(".backdrop-effect-dark").forEach(e=>{e.classList.remove("backdrop-effect-dark"),e.classList.add("backdrop-effect-light")})}});Weglot.initialize({api_key:"wg_62d9b9b0750831f48721322c8384946b6"});Weglot.on("initialized",()=>{let o=Weglot.getCurrentLang()});document.querySelectorAll(".wg-element-wrapper.sw6 [lang]").forEach(o=>{o.addEventListener("click",function(l){l.preventDefault(),Weglot.switchTo(this.getAttribute("lang"))})});document.querySelectorAll(".nav-link-block").forEach(o=>{o.addEventListener("click",s)});function s(o){let l=this.dataset.navLink;document.querySelectorAll("[data-nav-content]").forEach(t=>{t.classList.remove("active"),t.classList.add("inactive")}),document.querySelectorAll(".link-bg").forEach(t=>{t.classList.remove("active"),t.classList.add("inactive")});let c=document.querySelector(`[data-nav-content="${l}"]`);c.classList.remove("inactive"),c.classList.add("active"),this.querySelector(".link-bg").classList.remove("inactive"),this.querySelector(".link-bg").classList.add("active")}})();
