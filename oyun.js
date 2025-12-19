function Quiz() {
  let dogru = 0;
  let sual1 = prompt(
    "McDonald's hansı ölkədə yaradılıb?(Olkenin Qisaldilma formatini yaz)"
  );
  if (sual1 && sual1.toUpperCase() === "ABŞ") {
    dogru++;
  }

  let sual2 = prompt(
    "McDonald's-ın ən məşhur hamburgerinin adı nədir?"
  );
  if (sual2 && sual2.toUpperCase() === "Big Mac") {
    dogru++;
  }
  let sual3 = prompt(
    "McDonald's loqosunda hansı hərf var?"
  );
  if (sual3 && sual3.toUpperCase() === "M") {
    dogru++;
  }
  document.getElementById("result").innerText =
    "Düzgün cavabların sayı: " + dogru;

  if (dogru === 0) {
    document.body.style.backgroundColor = "red";
  } else if (dogru === 1) {
    document.body.style.backgroundColor = "yellow";
  } else if (dogru === 2) {
    document.body.style.backgroundColor = "blue";
  } else if (dogru === 3) {
    document.body.style.backgroundColor = "green";
  }
}