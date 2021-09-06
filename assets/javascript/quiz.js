const quizform = document.getElementById("quiz-smt");
const submitBtn = document.getElementById("ans-smt");
const outputEl = document.getElementById("outputEl");

const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
];

function calculateScore(e) {
    e.preventDefault();
    const formResults = new FormData(quizform);
    let score = 0,
        index = 0;
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    // console.log("The score is "+score);
    outputEl.innerText = "The score is " + score;
}

quizform.addEventListener("submit", (e) => {
    console.log("TRigger")
    e.preventDefault();
    const formResults = new FormData(quizform);
    let score = 0,
        index = 0;
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
        console.log(score)
    }
    // console.log("The score is "+score);
    outputEl.innerText = "The score is " + score;
});