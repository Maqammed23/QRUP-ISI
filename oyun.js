function Quiz() {
  let dogru = 0;
  let sual1 = prompt(
    "Bu işarələmə dili vasitəsi ilə web səhifəmizin strukturunu qururuq."
  );
  if (sual1 && sual1.toUpperCase() === "HTML") {
    dogru++;
  }

  let sual2 = prompt(
    "Bu işarələmə dili vasitəsi ilə web səhifəmizin dizaynını qururuq."
  );
  if (sual2 && sual2.toUpperCase() === "CSS") {
    dogru++;
  }
  let sual3 = prompt(
    "Bu proqramlaşdırma dili vasitəsi ilə web səhifəmizin funksionallığını qururuq."
  );
  if (sual3 && sual3.toUpperCase() === "JS") {
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