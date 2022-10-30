const $btnPercentage = document.querySelectorAll(".btn-percentage");
const price =  document.querySelector("#input-price");
const tipAmoun = document.getElementById("tip-person");
const tipTotal = document.getElementById("total-person");
const ttPerson = document.querySelector(".error");
const contBtn = document.querySelector(".container-buttons");
const btnReset = document.querySelector(".reset");
const inputPercen = document.querySelector("#input-percentage");
btnReset.style.backgroundColor = "rgb(44 98 104)";
const selectRating = (e) => {
  $btnPercentage.forEach((btn) => {
    btn.classList.remove("active");
  });

  e.currentTarget.classList.add("active");
};

$btnPercentage.forEach((btn) => {
  btn.addEventListener("click", selectRating);
});

function disabledinput() {
  let x = price.value;
  if (x > 0) {
    btnReset.style.pointerEvents = "auto";
    btnReset.style.backgroundColor = "var(--Strong-cyan)";
    contBtn.style.pointerEvents = "auto";
    ttPerson.style.pointerEvents = "auto";
  }
}

disabledinput();

function inputPercentage() {
  let x = price.value;
  let intPerc = parseFloat(
    document.querySelector("#input-percentage").value / 100
  );
  let $totalPersons = parseInt(ttPerson.value);

  if (x > 0) {
    if (intPerc > 0) {
      contBtn.style.pointerEvents = "none";
      inputPercen.style.pointerEvents = "fill";

      if ($totalPersons > 0) {
        let tipPerson = intPerc * x;
        tipAmoun.innerHTML = "$" + (tipPerson / $totalPersons).toFixed(2);
        tipTotal.innerHTML =
          "$" + (tipPerson / $totalPersons + x / $totalPersons).toFixed(2);
      }
    } else if (intPerc == "") {
      contBtn.style.pointerEvents = "all";
    }
  }
}
inputPercentage();

$btnPercentage.forEach((boton) => {
  boton.addEventListener("click", (x) => {
    let y = price.value;
    let tip = x.currentTarget.value / 100;
    let $totalPersons = parseInt(ttPerson.value);
    document.querySelector(".alert").style.visibility = "visible";
    ttPerson.style.border = "solid red";

    if ($totalPersons > 0) {
      document.querySelector(".alert").style.visibility = "hidden";
      ttPerson.style.border = "solid var(--Very-light-grayish-cyan)";
      let tipPerson = tip * y;
      tipAmoun.innerHTML = "$" + (tipPerson / $totalPersons).toFixed(2);
      tipTotal.innerHTML =
        "$" + (tipPerson / $totalPersons + y / $totalPersons).toFixed(2);
    }
  });
});

btnReset.addEventListener('click', () =>{
 price.value = "";
 inputPercen. value = "";
 ttPerson.value = "";
 tipAmoun.innerHTML = '$0.00'; 
 tipTotal.innerHTML = '$0.00';
 btnReset.style.backgroundColor = "rgb(44 98 104)";
 contBtn.style.pointerEvents = "none";
 ttPerson.style.pointerEvents = "none";
 btnReset.style.pointerEvents = "none";
 
});