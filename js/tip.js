const billAmount = document.querySelector(".bill-amount");
const tipPercent = document.querySelector(".tip-amount");

const displayTip = document.querySelector(".display-tip");
const displayBill = document.querySelector(".display-bill");

const totalTip= document.querySelector(".total-tip");
const totalBill = document.querySelector(".total-bill");

const payBtn = document.querySelector(".pay-btn");


billAmount.addEventListener("input", () => {
  
  displayBill.textContent = `Bill: $${billAmount.value}`;
  if (billAmount.value === "") {
    displayBill.textContent = "Bill: $0";
  }

  calculateTotal()
})

tipPercent.addEventListener("input", () => {

  if (tipPercent.value === "") {
    tipPercent.value = 0;
  } else if (Number(tipPercent.value) > 40) {
    tipPercent.value = 40;
  }
  displayTip.textContent = `Tip: ${tipPercent.value}%`;

  calculateTotal()
});

payBtn.addEventListener("click", () => {
  const grandTotal = calculateTotal();

  if (grandTotal === 0) {
    alert("Please enter amount")
  } else {
    alert(`$${grandTotal} paid successfully`)
  }
  
});


function calculateTotal() {
  const bill = Number(billAmount.value);
  const tip = Number(tipPercent.value);
  const totalTipAmount = tip / 100 * bill

  const grandTotal = totalTipAmount + bill
  
  totalTip.textContent = `Total tip: $${totalTipAmount}`;

  totalBill.textContent = `Total Amount: $${grandTotal}`

  return grandTotal;
};

