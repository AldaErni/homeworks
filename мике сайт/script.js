const englishWords = ["Apple", "Banana", "Cat", "Dog"];
const russianWords = ["Яблоко", "Банан", "Кошка", "Собака"];

let currentCardIndex = 0;

const wordElement = document.getElementById("word");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showCurrentCard() {
    if (currentCardIndex >= 0 && currentCardIndex < englishWords.length) {
        const wordToShow = showEnglish ? englishWords[currentCardIndex] : russianWords[currentCardIndex];
        wordElement.textContent = wordToShow;
    }
}

function showNextCard() {
    currentCardIndex = (currentCardIndex + 1) % englishWords.length;
    showCurrentCard();
}

function showPrevCard() {
    currentCardIndex = (currentCardIndex - 1 + englishWords.length) % englishWords.length;
    showCurrentCard();
}

let showEnglish = true;
document.querySelector(".card").addEventListener("click", function() {
    showEnglish = !showEnglish;
    showCurrentCard();
});

nextBtn.addEventListener("click", showNextCard);
prevBtn.addEventListener("click", showPrevCard);

showCurrentCard();
