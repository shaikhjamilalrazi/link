function getPin() {
  const random = Math.trunc(Math.random() * 10000);
  const pin = random + "";
  if (pin.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

// get pin
const inputPin = document.querySelector("#pin");
const pinBtn = document.querySelector("#generatepin");
pinBtn.addEventListener("click", function () {
  inputPin.value = getPin();
});

document
  .querySelector("#digit-container")
  .addEventListener("click", function (e) {
    const digit = e.target.innerText;
    if (!isNaN(digit)) {
      const typedInput = document.querySelector("#typed-pin");
      typedInput.value = typedInput.value + digit;
    } else {
      if (digit === "B") {
        const valueInput = document.querySelector("#typed-pin");
        valueInput.value = valueInput.value.substring(
          0,
          valueInput.value.length - 1
        );
      } else {
        const valueInput = document.querySelector("#typed-pin");
        valueInput.value = "";
      }
    }
  });

document.getElementById("match-pin").addEventListener("click", function () {
  const gtPin = document.querySelector("#pin").value;
  const inpPin = document.querySelector("#typed-pin").value;

  if (gtPin === inpPin) {
    const correctPin = document.getElementById("corr");
    correctPin.style.display = "block";
  } else {
    const notCorrectPin = document.getElementById("notcorr");
    notCorrectPin.style.display = "block";
  }
});
