const weight = document.querySelector("#weight");
const purity = document.querySelector("#purity");
const price = document.querySelector("#price");
const makingCharge = document.querySelector("#makingcharge");
const gst = document.querySelector("#gst");
const btn = document.querySelector("#button");
const result = document.querySelector("#result");

btn.addEventListener("click", () => {
  if (
    isNaN(weight.value) ||
    isNaN(purity.value) ||
    isNaN(price.value) ||
    isNaN(makingCharge.value) ||
    isNaN(gst.value)
  ) {
    alert("Please Fill The Valid Values");
  } else {
    const goldValue =
      (parseFloat(weight.value) *
        parseFloat(purity.value) *
        parseFloat(price.value)) /
      24;

    const makingChargeAmount =
      (goldValue * parseFloat(makingCharge.value)) / 100;

    const gstAmount =
      ((goldValue + makingChargeAmount) * parseFloat(gst.value)) / 100;

    const totalCost = goldValue + makingChargeAmount + gstAmount;

    result.innerHTML = `
    <h5>Total Gold Value : Rs ${goldValue.toFixed(2)}</h5>
    <h5>Making Charge is : Rs ${makingChargeAmount.toFixed(2)}</h5>
    <h5>GST Amount is : Rs ${gstAmount.toFixed(2)}</h5>
    <h2>Total Cost of Gold is : Rs ${totalCost.toFixed(2)}</h2>
    `;

    weight.value = "";
    purity.value = "";
    price.value = "";
    makingCharge.value = "";
    gst.value = "";
  }
});

const handleSubmit = (e) => {
  e.preventDefault();
};
