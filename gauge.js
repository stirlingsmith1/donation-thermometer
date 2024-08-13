const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  // Update the gauge fill based on the value
  gauge.querySelector(".gauge__fill").style.transform = `rotate(${value / 2}turn)`;

  // Update the text in the gauge cover
  gauge.querySelector(".gauge__cover").textContent = `${Math.round(value * 100)}%`;

  // Update the gauge percentage display
  gauge.querySelector(".gauge-percentage").textContent = `${Math.round(value * 100)}%`;
}

setGaugeValue(gaugeElement, 0.3); // Example to set gauge to 30%

