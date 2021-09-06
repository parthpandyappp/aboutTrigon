// For calculating hypotenuse
var areaSubmit = document.getElementById("area-smt");

areaSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    var baseVal = document.getElementById("base-val");
    var hgtVal = document.getElementById("hgt-val");
    var outputEl = document.getElementById("outputEl");
    console.log(baseVal.value)
    console.log(hgtVal.value)
    var result = ((baseVal.value) * (hgtVal.value)) * 0.5;

    outputEl.innerHTML = "<h3> Area of Triangle is " + result + "</h3>"

})
