(() => {
  var i = videojs("campus-video-player"),
    d,
    n,
    c = {},
    s = 0;
  document.addEventListener("DOMContentLoaded", function () {
    var e;
    u(), (e = document.querySelector("[data-video-id]")) == null || e.click();
  });
  function u() {
    g(),
      m(),
      i.on("timeupdate", function () {
        p();
      }),
      i.on("ended", function () {
        v();
        let e = a();
        b(parseInt(e.toFixed(0))),
          console.log(`Overall progress: ${e.toFixed(2)}%`);
      });
  }
  function a() {
    return (Object.values(c).filter((t) => t).length / s) * 100;
  }
  function f(e, t) {
    let r = `https://img.youtube.com/vi/${h(e)}/maxresdefault.jpg`;
    t.poster(r), t.src({ type: "video/youtube", src: e });
  }
  function g() {
    document.querySelectorAll(".video-favorite").forEach((e) => {
      e.addEventListener("click", (t) => {
        t.stopPropagation(), e.classList.toggle("liked");
      });
    });
  }
  function m() {
    document.querySelectorAll("[data-video-id]").forEach((e, t) => {
      e.addEventListener("click", (o) => {
        (n = o.currentTarget.dataset.videoId),
          I(),
          E(),
          (d = document.querySelector(`[data-video-progress="${n}"]`)),
          f(o.currentTarget.dataset.videoUrl, i),
          (c[n] = !1);
      }),
        (s = t + 1);
    });
  }
  function p() {
    let e = y(i);
    d.style.width = `${e.toFixed(2)}%`;
  }
  function v() {
    c[n] = !0;
    let e = parseInt(n) + 1,
      t = document.querySelector(`[data-video-id="${e}"]`);
    t ? t.click() : console.log("No more videos in the list.");
  }
  function h(e) {
    return e.split("https://youtu.be/")[1];
  }
  function y(e) {
    let t = e.duration(),
      o = e.currentTime();
    return t > 0 ? (o / t) * 100 : 0;
  }
  function I() {
    document.querySelectorAll("[data-video-id]").forEach((e) => {
      e.classList.toggle("is-playing", e.dataset.videoId === n);
    });
  }
  function E() {
    document.querySelectorAll("[data-video-description]").forEach((e) => {
      e.classList.toggle("hide", e.dataset.videoDescription !== n);
    });
  }
  function b(e) {
    let t = document.getElementById("circleprogress"),
      o = document.getElementById("course-progress-text"),
      r = 2 * Math.PI * t.getAttribute("r"),
      l = r - (e / 100) * r;
    (t.style.strokeDashoffset = l), (o.innerText = a().toFixed(0) + "%");
  }
})();
