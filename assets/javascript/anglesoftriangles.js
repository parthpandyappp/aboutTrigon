// For calculating sum_of_triangles
var sumSubmit = document.getElementById("sum-smt");

sumSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    var angleOne = document.getElementById("angle-one-val");
    var angleTwo = document.getElementById("angle-two-val");
    var angleThree = document.getElementById("angle-three-val");
    var outputEl = document.getElementById("outputEl");
    var result = Number(angleOne.value) + Number(angleTwo.value) + Number(angleThree.value);

    if (result == 180) {
        outputEl.innerHTML = "<h3> Yay! The angle forms a legit Triangle</h3>"
    }
    else {
        outputEl.innerHTML = "<h3>The sum of angles doesn't form a Triangle!</h3>"
    }

})