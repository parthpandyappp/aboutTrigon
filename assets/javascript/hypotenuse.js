// For calculating hypotenuse
var hypoSubmit = document.getElementById("hypo-smt");

hypoSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    var baseVal = document.getElementById("base-val");
    var hgtVal = document.getElementById("hgt-val");
    var outputEl = document.getElementById("outputEl");
    var result = ((baseVal.value) ** 2 + (hgtVal.value) ** 2) ** 0.5;

    outputEl.innerHTML = "<h3> Hypotenuse is " + result + "</h3>"

})
