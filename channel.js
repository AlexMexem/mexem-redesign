(()=>{var d=(e,s,a)=>new Promise((l,t)=>{var m=r=>{try{o(a.next(r))}catch(i){t(i)}},n=r=>{try{o(a.throw(r))}catch(i){t(i)}},o=r=>r.done?l(r.value):Promise.resolve(r.value).then(m,n);o((a=a.apply(e,s)).next())});var p="GQctPdXhHOreo";document.addEventListener("DOMContentLoaded",function(){[...document.querySelectorAll(".news-playlist-nav")].forEach(s=>{s.addEventListener("click",R)}),C("PLYXblLTStn53lv1nW7j5ebG-QJCyv1zHm")});function C(e){return d(this,null,function*(){let s=document.querySelector("[data-video-playlist]"),l=document.querySelector("[data-video-item]").cloneNode(!0);s.replaceChildren();let t=yield S(e),m=document.querySelector("[data-youtube-player]");m.src=c(t[0].youtubeLink),t.forEach(n=>{let o=l.cloneNode(!0),r=o.querySelector("[data-video-thump]"),i=o.querySelector("[data-video-title]"),E=o.querySelector("[data-video-details]");o.addEventListener("click",D),o.dataset.youtubeLink=c(n.youtubeLink),i.innerText=n.title,r.src=n.thumbnails.high,E.innerHTML=` <span> ${n.statistics.channelTitle} \u2022 </span>${n.statistics.viewCount} Views <span> \u2022 </span> ${n.statistics.duration} `,s.append(o)})})}function c(e){return e.replace("watch?v=","embed/")}function S(e){return d(this,null,function*(){return(yield(yield fetch("https://api.mexemnews.com/graphql",{method:"POST",headers:{"Content-Type":"application/json","Mexem-API":p},body:JSON.stringify({query:`{
        getVideosByPlaylist(playlistId: "${e}") {
            youtubeLink
            title
            thumbnails {
                high
              }
            statistics {
              channelTitle
              duration
              likeCount
              viewCount
            }  
        }
      }`})})).json()).data.getVideosByPlaylist})}function D(e){let s=document.querySelector("[data-youtube-player]");s.src=e.currentTarget.dataset.youtubeLink}function R(e){let s=document.querySelectorAll(".news-playlist-nav");C(e.currentTarget.dataset.playlistId),[...s].forEach(a=>{a.classList.remove("active")}),e.currentTarget.classList.add("active")}})();
