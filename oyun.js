function Quiz() {
  let dogru = 0;
  let next = document.getElementById("next");

  let sual1 = prompt(
    "McDonald's hansı ölkədə yaradılıb? (Ölkənin qısaldılmış formasını yaz)"
  );
  if (sual1 && sual1.toUpperCase() === "ABŞ") {
    dogru++;
  }

  let sual2 = prompt(
    "McDonald's-ın ən məşhur hamburgerinin adı nədir?"
  );
  if (sual2 && sual2.toUpperCase() === "BİG MAC") {
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
    document.getElementById("message").innerText = "Siz uduzdunuz ❌";
  } 
  else if (dogru === 1) {
    document.body.style.backgroundColor = "yellow";
    document.getElementById("message").innerText = "Bir az da çalış 🙂";
  } 
  else if (dogru === 2) {
    document.body.style.backgroundColor = "blue";
    document.getElementById("message").innerText = "Yaxşı nəticə 👍";
  } 
  else if (dogru === 3) {
    document.body.style.backgroundColor = "green";
    document.getElementById("message").innerText =
      "Siz 50% endirim qazandınız 🎉";
    next.style.display = "inline-block";
  }
}

let next = document.getElementById("next");
next.addEventListener("click", function () {
  window.location.href = "endirimli.html";
});