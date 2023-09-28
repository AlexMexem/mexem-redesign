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

  // src/scripts/tags.js
  var currencyMatch;
  document.addEventListener("DOMContentLoaded", () => __async(void 0, null, function* () {
    const divElement = document.querySelector(".w-richtext");
    let divText = divElement.innerHTML;
    const pattern = new RegExp("\\{\\{(.*?)\\}\\}", "gs");
    const matches = divText.match(pattern);
    if (matches) {
      for (let match of matches) {
        if (match.includes("m-tag")) {
          const sanitizedMatch = match.replace(/\n/g, "").replace(/\s+/g, " ");
          const optnPattern = /option="(.*?)"/g;
          const tickerPattern = /ticker="(.*?)"/g;
          const currencyPattern = /currency="(.*?)"/g;
          const optnMatch = optnPattern.exec(sanitizedMatch);
          const tickerMatch = tickerPattern.exec(sanitizedMatch);
          currencyMatch = currencyPattern.exec(sanitizedMatch);
          let result = yield OptionManager(optnMatch, tickerMatch);
          divText = divText.replace(match, result);
        }
      }
      divElement.innerHTML = divText;
      yield loadScriptAsync(
        "https://cdn.jsdelivr.net/gh/AlexMexem/mexem-redesign/tickerChartTag.js"
      );
    }
  }));
  function OptionManager(option, ticker) {
    return __async(this, null, function* () {
      switch (option[1]) {
        case "analysis":
          return `<a href="${url}">${tag[1].toUpperCase()}</a>`;
        case "term":
          return `<a href="${url}">${tag[1].toUpperCase()}</a>`;
        case "search":
          const url = "https://www.mexem.com/search?query=" + tag[1];
          return `<a href="${url}">${tag[1].toUpperCase()}</a>`;
        case "price":
          let currency = currencyMatch[1];
          let data = yield fetchData(ticker[1]);
          return createTickerWidget(data, currency);
        default:
          break;
      }
    });
  }
  function fetchData(ticker) {
    return __async(this, null, function* () {
      try {
        const response = yield fetch(
          `https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=814ec78e2473ac4c01ac84f650c9ce22`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = yield response.json();
        return data[0];
      } catch (error) {
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
        throw error;
      }
    });
  }
  function createTickerWidget(data, currency) {
    let upDown = data.change[0] === "-" ? "down" : "up";
    let formattedPrice = formatPrice(data.price, currency);
    return `<button class="tickerchart-btn" data-currency="${currency}" data-ticker="${data.symbol}" style="display:inline-flex; align-items:center; justify-content:space-between;">(
          <span class="exchange-ticker" style="margin:0 8px;">${data.exchange}:${data.symbol}</span>
          <span  class="inline-blog-ticker-price ${upDown}">${formattedPrice}</span>
          <svg  fill="currentColor" class="inline-blog-ticker-caret ${upDown} pulsate" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="display: block;">
            <path d="M6.1018 16.9814C5.02785 16.9814 4.45387 15.7165 5.16108 14.9083L10.6829 8.59762C11.3801 7.80079 12.6197 7.80079 13.3169 8.59762L18.8388 14.9083C19.5459 15.7165 18.972 16.9814 17.898 16.9814H6.1018Z"></path>
          </svg>
          )
        </button>`;
  }
  function formatPrice(price, currency) {
    formatCurr = currency || "USD";
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: formatCurr
    });
    return formatter.format(price);
  }
  function loadScriptAsync(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = src;
      script.onload = () => {
        resolve(`Script ${src} loaded successfully.`);
      };
      script.onerror = () => {
        reject(new Error(`Failed to load script ${src}.`));
      };
      document.head.appendChild(script);
    });
  }
})();
