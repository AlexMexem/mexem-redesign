(() => {
  // src/scripts/portfolio-calculator.js
  var startBtn = document.getElementById("portfolio-calculator-start").addEventListener("click", init);
  var selectedPackageBtn = document.querySelector(
    ".portfolio-package-btn.active"
  );
  var packageBtns = document.querySelectorAll(".portfolio-package-btn");
  [...packageBtns].forEach((btn) => {
    btn.addEventListener("click", packageChange);
  });
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  var depositInput = document.getElementById("deposit-input");
  var monthlyInput = document.getElementById("monthly-input");
  var startInput = document.getElementById("start-input");
  var endInput = document.getElementById("end-input");
  var yearsLostEL = document.getElementById("years-lost-input");
  var deposit;
  var monthly;
  var years;
  var investmentAmount = 0;
  var contributions = 0;
  var isStart = true;
  var yearsLost = 1;
  var yearsProfitLossed = 0;
  var packageDetails = /* @__PURE__ */ new Map();
  packageDetails.set("cautious", {
    title: "Cautious",
    value: 2.8 / 100 + 1,
    class: "orange",
    position: 55
  });
  packageDetails.set("balanced", {
    title: "Balanced",
    value: 4.3 / 100 + 1,
    class: "light-blue",
    position: 40
  });
  packageDetails.set("ambitous", {
    title: "Ambitous",
    value: 5.8 / 100 + 1,
    class: "blue",
    position: 30
  });
  packageDetails.set("adventurous", {
    title: "Adventurous",
    value: 7.2 / 100 + 1,
    class: "dark-blue",
    position: 15
  });
  var chosenPackage = packageDetails.get(
    selectedPackageBtn.dataset.portfolioPackage
  );
  function init() {
    depositInput.addEventListener("change", depositChange);
    monthlyInput.addEventListener("change", monthlyChange);
    startInput.addEventListener("change", startChange);
    endInput.addEventListener("change", endChange);
    yearsLostEL.addEventListener("change", yearsLostChange);
    deposit = depositInput.value;
    monthly = monthlyInput.value;
    years = endInput.value - startInput.value;
    document.getElementById("years-invested").innerText = years;
    calculate();
  }
  function calculate() {
    for (let i = 1; i <= years; i++) {
      for (let j = 1; j <= 12; j++) {
        if (isStart) {
          investmentAmount += parseInt(deposit);
          contributions += parseInt(deposit);
          isStart = false;
          continue;
        } else {
          contributions += parseInt(monthly);
          investmentAmount += parseInt(monthly);
        }
      }
      investmentAmount = investmentAmount * chosenPackage.value;
    }
    yearsProfitLossed = (investmentAmount - contributions) / years * yearsLost;
    setCard();
  }
  function setCard() {
    document.getElementById("chosen-package").classList.remove("orange", "light-blue", "blue", "dark-blue");
    document.getElementById("chosen-package").classList.add(chosenPackage.class);
    document.getElementById("chosen-package-text").innerText = chosenPackage.title;
    document.getElementById("chosen-package-percent").innerText = ` ${((chosenPackage.value - 1) * 100).toFixed(2)}%`;
    document.getElementById("expected-result-text").innerText = formatter.format(investmentAmount);
    document.getElementById("expected-profit-text").innerText = formatter.format(
      investmentAmount - contributions
    );
    document.getElementById(
      "result-card-loader"
    ).style.transform = `translateY(${chosenPackage.position}%)`;
    document.getElementById("expected-loss-text").innerText = formatter.format(yearsProfitLossed);
    document.getElementById("expected-loss-desc").innerText = yearsLost === "1" ? `Missed profits for ${yearsLost} year` : `Missed profits for ${yearsLost} years`;
    document.getElementById("years-lost-desc").innerText = yearsLost === "1" ? `year` : `years`;
  }
  function packageChange(e) {
    [...packageBtns].forEach((btn) => {
      btn.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    chosenPackage = packageDetails.get(e.currentTarget.dataset.portfolioPackage);
    investmentAmount = 0;
    contributions = 0;
    yearsProfitLossed = 0;
    isStart = true;
    calculate();
  }
  function depositChange(e) {
    deposit = e.currentTarget.value;
    investmentAmount = 0;
    contributions = 0;
    yearsProfitLossed = 0;
    isStart = true;
    calculate();
  }
  function monthlyChange(e) {
    monthly = e.currentTarget.value;
    investmentAmount = 0;
    contributions = 0;
    yearsProfitLossed = 0;
    isStart = true;
    calculate();
  }
  function startChange(e) {
    years = endInput.value - e.currentTarget.value;
    document.getElementById("years-invested").innerText = years;
    investmentAmount = 0;
    contributions = 0;
    yearsProfitLossed = 0;
    isStart = true;
    calculate();
  }
  function endChange(e) {
    years = e.currentTarget.value - startInput.value;
    document.getElementById("years-invested").innerText = years;
    investmentAmount = 0;
    contributions = 0;
    yearsProfitLossed = 0;
    isStart = true;
    calculate();
  }
  function yearsLostChange(e) {
    let yearslostVal = e.currentTarget.value;
    yearsLost = yearslostVal;
    investmentAmount = 0;
    contributions = 0;
    yearsProfitLossed = 0;
    isStart = true;
    if (yearsLost <= years) {
      calculate();
    }
  }
})();
