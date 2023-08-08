(() => {
  Weglot.on("initialized", () => {
    let e = Weglot.getCurrentLang();
  });
  document.querySelectorAll(".wg-element-wrapper.sw6 [lang]").forEach((e) => {
    e.addEventListener("click", function (n) {
      n.preventDefault(), Weglot.switchTo(this.getAttribute("lang"));
    });
  });
  document.querySelectorAll(".nav-link-block").forEach((e) => {
    e.addEventListener("click", a);
  });
  function a(e) {
    let n = this.dataset.navLink;
    document.querySelectorAll("[data-nav-content]").forEach((t) => {
      t.classList.remove("active"), t.classList.add("inactive");
    }),
      document.querySelectorAll(".link-bg").forEach((t) => {
        t.classList.remove("active"), t.classList.add("inactive");
      });
    let c = document.querySelector(`[data-nav-content="${n}"]`);
    c.classList.remove("inactive"),
      c.classList.add("active"),
      this.querySelector(".link-bg").classList.remove("inactive"),
      this.querySelector(".link-bg").classList.add("active");
  }
})();
