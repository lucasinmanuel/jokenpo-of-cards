export default class ComparisonList {
    constructor(yourCard, opponentCard) {
        this.list = {
            rock: (opponentCard) => {
                switch (opponentCard) {
                    case "rock":
                        this.showResult("tie");
                        break;
                    case "paper":
                        this.showResult("defeat");
                        break;
                    case "scissors":
                        this.showResult("victory");
                        break;
                }
            },
            paper: (opponentCard) => {
                switch (opponentCard) {
                    case "paper":
                        this.showResult("tie");
                        break;
                    case "scissors":
                        this.showResult("defeat");
                        break;
                    case "rock":
                        this.showResult("victory");
                        break;
                }
            },
            scissors: (opponentCard) => {
                switch (opponentCard) {
                    case "scissors":
                        this.showResult("tie");
                        break;
                    case "rock":
                        this.showResult("defeat");
                        break;
                    case "paper":
                        this.showResult("victory");
                        break;
                }
            },
        };
        this.yourCard = yourCard;
        this.opponentCard = opponentCard;
    }
    compare() {
        this.list[this.yourCard](this.opponentCard);
    }
    showResult(result) {
        let boardResult = document.getElementById("utils");
        boardResult.innerHTML = `<p>${result}</p>`;
        setTimeout(() => {
            boardResult.innerHTML = "";
        }, 3500);
    }
}
