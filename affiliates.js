(() => {
  // src/scripts/affiliates.js
  document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var googleAdParameter = urlParams.get("id");
    var affiliateExtraParameter = urlParams.get("at_gd");
    console.log(googleAdParameter);
    if (googleAdParameter) {
      if (Cookies.get("_id") == null) {
        Cookies.set("_id", googleAdParameter, { expires: 30 });
      }
    }
    if (affiliateExtraParameter) {
      if (Cookies.get("_at_gd") == null) {
        Cookies.set("_at_gd", affiliateExtraParameter, {
          expires: 30
        });
      }
    }
    let links = document.querySelectorAll(`[data-gtrack]`);
    console.log(links);
    let linksToArray = Array.apply(null, links);
    linksToArray.forEach((link) => {
      if (Cookies.get("_id")) {
        let googleAdCokkie = Cookies.get("_id");
        let url = new URL(link.href + "partner");
        url.searchParams.set("id", googleAdCokkie);
        if (Cookies.get("_at_gd")) {
          let affCokkie = Cookies.get("_at_gd");
          url.searchParams.set("at_gd", affCokkie);
        }
        link.href = url;
      }
    });
  });
})();
