(() => {
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // env-ns:env
  var MEXEM_API_KEY = "GQctPdXhHOreo";

  // src/scripts/channel.js
  document.addEventListener("DOMContentLoaded", function() {
    let playlistNavs = document.querySelectorAll(".news-playlist-nav");
    [...playlistNavs].forEach((button) => {
      button.addEventListener("click", switchPlaylist);
    });
    loadPlaylist("PLYXblLTStn53lv1nW7j5ebG-QJCyv1zHm");
  });
  function loadPlaylist(playlistId) {
    return __async(this, null, function* () {
      let playlist = document.querySelector("[data-video-playlist]");
      let videoItem = document.querySelector("[data-video-item]");
      let videoClone = videoItem.cloneNode(true);
      playlist.replaceChildren();
      let res = yield fetchVideos(playlistId);
      let videoPlayer = document.querySelector("[data-youtube-player]");
      videoPlayer.src = updateYoutubeLink(res[0].youtubeLink);
      res.forEach((item) => {
        let newItem = videoClone.cloneNode(true);
        let videoThump = newItem.querySelector("[data-video-thump]");
        let videoTitle = newItem.querySelector("[data-video-title]");
        let videoDetails = newItem.querySelector("[data-video-details]");
        newItem.addEventListener("click", updateVideoPlayer);
        newItem.dataset.youtubeLink = updateYoutubeLink(item.youtubeLink);
        videoTitle.innerText = item.title;
        videoThump.src = item.thumbnails.high;
        videoDetails.innerHTML = ` <span> ${item.statistics.channelTitle} \u2022 </span>${item.statistics.viewCount} Views <span> \u2022 </span> ${item.statistics.duration} `;
        playlist.append(newItem);
      });
    });
  }
  function updateYoutubeLink(link) {
    return link.replace("watch?v=", "embed/");
  }
  function fetchVideos(playlistId) {
    return __async(this, null, function* () {
      let api = "https://api.mexemnews.com/graphql";
      let response = yield fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Mexem-API": MEXEM_API_KEY
        },
        body: JSON.stringify({
          query: `{
        getVideosByPlaylist(playlistId: "${playlistId}") {
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
      }`
        })
      });
      let data = yield response.json();
      return data.data.getVideosByPlaylist;
    });
  }
  function updateVideoPlayer(e) {
    let videoPlayer = document.querySelector("[data-youtube-player]");
    videoPlayer.src = e.currentTarget.dataset.youtubeLink;
  }
  function switchPlaylist(e) {
    let playlistNavs = document.querySelectorAll(".news-playlist-nav");
    loadPlaylist(e.currentTarget.dataset.playlistId);
    [...playlistNavs].forEach((button) => {
      button.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  }
})();
