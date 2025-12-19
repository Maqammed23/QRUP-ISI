function Quiz() {

    let span = document.querySelector("span");

    let sualCavab = [
        {
            sual: "",
            cavab: "HTML"
        },
        {
            sual: "Saytın dizaynını qurur",
            cavab: "CSS"
        },
        {
            sual: "Saytın funksionallığını qurur",
            cavab: "JS"
        }
    ];

    let duzgunCavabSayi = 0;

    sualCavab.forEach(element => {
        let promptSual = prompt(element.sual);
        if (promptSual == element.cavab) {
            duzgunCavabSayi++;
        }
    });

    span.innerText = duzgunCavabSayi;

    switch (duzgunCavabSayi) {
        case 0:
            document.body.style.backgroundColor = "red";
            break;
        case 1:
            document.body.style.backgroundColor = "yellow";
            break;
        case 2:
            document.body.style.backgroundColor = "blue";
            break;
        case 3:
            document.body.style.backgroundColor = "green";
            break;
        default:
            break;
    }
}