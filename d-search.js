(()=>{var d=(u,h,i)=>new Promise((p,o)=>{var a=e=>{try{s(i.next(e))}catch(n){o(n)}},t=e=>{try{s(i.throw(e))}catch(n){o(n)}},s=e=>e.done?p(e.value):Promise.resolve(e.value).then(a,t);s((i=i.apply(u,h)).next())});var m;function g(){return d(this,null,function*(){m=yield h(!0),document.querySelectorAll("[data-mexem-deshe-search]").forEach((a,t)=>{o(a,t)});function h(a){return d(this,null,function*(){let t={method:"POST",headers:{"Mexem-API":"GQctPdXhHOreo","Content-Type":"application/json"},body:JSON.stringify({query:`
        query{
            desheTickers(prefered: ${a}){
                ticker
                ticker_exchange
                company_name
                deshe_exchange_code
                exchange_name
                flag
              }
          }
        `})};return(yield(yield fetch("https://api.mexemnews.com/graphql",t)).json()).data.desheTickers})}function i(a,t,s){a.forEach(e=>{let n=document.createElement("li");n.classList.add("deshe-list-li");let l=document.createElement("img");l.src=e.flag;let r=document.createElement("a");r.href=`/stock-report?ticker=${e.ticker_exchange}&dex_id=${e.deshe_exchange_code}`,(s==null?void 0:s.toLowerCase())==="true"?r.target="_self":r.target="_blank",r.innerText=e.ticker;let c=document.createElement("span");c.innerText=e.company_name,r.prepend(l),r.appendChild(c),n.appendChild(r),t.appendChild(n)})}function p(a,t){return d(this,null,function*(){let s=a.target.value.toLowerCase();m=yield h(s==="");let n=a.target.dataset.mexemDesheInput,l=document.getElementById(`deshe-list-ul-${n}`),r=m.filter(c=>c.ticker.substr(0,s.length).toLowerCase()===s||c.company_name.substr(0,s.length).toLowerCase()===s);l.innerHTML="",i(r,l,t)})}function o(a,t){return d(this,null,function*(){let s=`<form class="deshe-search-form" id="deshe-search-form-${t}">
      <div class="search-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 487.95 487.95"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1    c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4    c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"
              />
            </g>
          </g>
        </svg>
        <input
          type="text"
          class="deshe-search-input"
          name="ticker-deshe"
          id="deshe-search-input-${t}"
          placeholder="Search by Symbol or Company"
          data-mexem-deshe-input="${t}"
        />
        <div id="deshe-list" class="deshe-list">
          <ul id="deshe-list-ul-${t}" ></ul>
        </div>
      </div>
    </form>`;a.innerHTML=s;let e=document.getElementById(`deshe-list-ul-${t}`),n=document.getElementById(`deshe-search-input-${t}`),l=a.getAttribute("same-page");n.addEventListener("input",r=>p(r,l)),i(m,e,l),itemHeight=e.firstChild.offsetHeight,e.style.maxHeight=itemHeight*4+"px"})}})}g();})();
