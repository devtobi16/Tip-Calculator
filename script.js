let tipAmountEl = document.getElementById(`zeroDollar1`);
let totalAmountEl = document.getElementById(`zeroDollar2`);
let numPeopleEl = document.querySelector(`.numPeople`);
let bill = document.querySelector(".bill");
let customTip = document.getElementById("tipPercent6");
percent = [5, 10, 15, 25, 50];

//Tips and Totals' function
function calcTipTotal(tipType) {
  //Tip amount
  if (Number(numPeopleEl.value) && Number(numPeopleEl.value) !== 0) {
    numPeopleEl.classList.remove(`numPeople-error`);
    numPeopleEl.classList.add(`input:focus`);

    Number(numPeopleEl.value);
    Number(bill.value * numPeopleEl.value);
    let tip = Number((bill.value * Number(tipType / 100)) / numPeopleEl.value);
    let roundedTip = Number(tip.toFixed(2));
    tipAmountEl.textContent = `$${Number(roundedTip)}`;

    // ...
    let total = Number(bill.value) + tip;
    let roundedTotal = Number(total.toFixed(2) / numPeopleEl.value);
    totalAmountEl.textContent = `$${roundedTotal.toFixed(2)}`;
  } else if (!Number(numPeopleEl.value) && Number(numPeopleEl.value) === 0) {
    numPeopleEl.classList.add(`numPeople-error`);
    numPeopleEl.classList.remove(`input:focus`);
  }
}

//Buttons' Tip
for (let i = 0; i < percent.length; i++) {
  document
    .getElementById(`tipPercent${percent[i]}`)
    .addEventListener(`click`, () => calcTipTotal(percent[i]));
}

// Custom Percent's Tip
document
  .getElementById("tipPercent6")
  .addEventListener("input", () => calcTipTotal(customTip.value));

// Reset Button
document.getElementById(`reset`).addEventListener(`click`, function () {
  tipAmountEl.textContent = `$0.00`;
  totalAmountEl.textContent = `$0.00`;
  numPeopleEl.value = 1; // Set the value to 0 directly
  bill.value = ""; // Set the value to 0 directly
  customTip.value = ""; // Set the value to 0 directly
  numPeopleEl.classList.remove("numPeople-error");
  numPeopleEl.classList.add("input");
});
