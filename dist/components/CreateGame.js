import ComparisonList from "../utils/ComparisonList.js";
export default class CreateGame {
    constructor(listCards, cardDesignType, imageFormat) {
        this.listCards = ["rock", "paper", "scissors"];
        this.cardDesignType = "default";
        this.imageFormat = "png";
        listCards != null && (this.listCards = listCards);
        cardDesignType != null && (this.cardDesignType = cardDesignType);
        imageFormat != null && (this.imageFormat = imageFormat);
    }
    load(game) {
        game.innerHTML = `
            <div id="container">
                <div id="utils"></div>
                <div id="opponent_deck"></div>
                <div id="result_fight"></div>
                <div id="your_deck"></div>
            </div>
        `;
        let opponent_deck = document.getElementById("opponent_deck");
        let your_deck = document.getElementById("your_deck");
        let transform = null;
        if (your_deck != null && opponent_deck != null) {
            //SHUFFLE YOUR CARDS
            let id_cards = shuffleArray(this.listCards);
            for (let i = 0; i < id_cards.length; i++) {
                let imageSrc = `${id_cards[i]}_design-${this.cardDesignType}`;
                switch (i) {
                    case 0:
                        transform = "left";
                        break;
                    case id_cards.length - 1:
                        transform = "right";
                        break;
                    default:
                        transform = null;
                        break;
                }
                your_deck.innerHTML += `
                    <div style="position:relative;left:0;top:0;" id="${id_cards[i]}" title="${id_cards[i]}" class="card_design-${this.cardDesignType} ${transform}">
                        <img src="../../dist/images/${imageSrc}.${this.imageFormat}" />
                    </div>
                `;
                if (i != id_cards.length - 1) {
                    your_deck.innerHTML += `
                        <div class="space-15"></div>
                    `;
                }
            }
            //SHUFFLE OPPONENT CARDS
            id_cards = shuffleArray(this.listCards);
            for (let i = 0; i < id_cards.length; i++) {
                switch (i) {
                    case 0:
                        transform = "left";
                        break;
                    case id_cards.length - 1:
                        transform = "right";
                        break;
                    default:
                        transform = null;
                        break;
                }
                opponent_deck.innerHTML += `
                    <div style="position:relative;left:0;top:0;" id="${btoa(id_cards[i])}" class="card_design-${this.cardDesignType} ${transform}">
                        <img src="../../dist/images/back_design-default.${this.imageFormat}" />
                    </div>
                `;
                //ADDS TO EACH LOOP A SPACE BETWEEN THE CARDS, EXCEPT ON THE LAST CARD
                if (i != id_cards.length - 1) {
                    opponent_deck.innerHTML += `
                        <div class="space-15"></div>
                    `;
                }
            }
        }
        function shuffleArray(arr) {
            // Loop em todos os elementos
            for (let i = arr.length - 1; i > 0; i--) {
                // Escolhendo elemento aleatório
                const j = Math.floor(Math.random() * (i + 1));
                // Reposicionando elemento
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            // Retornando array com aleatoriedade
            return arr;
        }
    }
    start() {
        let your_cards = document.querySelectorAll(`#your_deck .card_design-${this.cardDesignType}`);
        your_cards.forEach((yourCard) => {
            yourCard.addEventListener("click", () => {
                !yourCard.classList.contains("card_disabled") && manipulatingGame(yourCard);
            });
        });
        function manipulatingGame(yourCard) {
            //DISABLING ALL YOUR CARDS BY ADDING THE CLASS "card_disabled"
            your_cards.forEach((c) => {
                c.classList.add("card_disabled");
            });
            yourCard.setAttribute("style", "opacity:0;margin-bottom:1rem;");
            let opponentCard = randomSelectionOpponentCard();
            let src = opponentCard.children[0].getAttribute("src");
            let newSrc = src === null || src === void 0 ? void 0 : src.replace("back", atob(opponentCard.id));
            let result_fight = document.getElementById("result_fight");
            result_fight.innerHTML = `
                    <div id="opponent" style="width:9rem;height:100%;max-height:12rem;">
                        <img width="100%" height="100%" src="${newSrc}" />
                    </div>
                    <div id="you">
                        <img width="100%" height="100%" src="${yourCard.children[0].getAttribute("src")}" />
                    </div>
                `;
            let comparisonList = new ComparisonList(yourCard.id, atob(opponentCard.id));
            comparisonList.compare();
            setTimeout(() => {
                yourCard.setAttribute("style", "position:relative;left:0;top:0;");
                opponentCard.setAttribute("style", "position:relative;left:0;top:0;");
                result_fight.innerHTML = "";
                //ENABLING ALL YOUR CARDS BY REMOVING THE CLASS "card_disabled"
                your_cards.forEach((c) => {
                    c.classList.remove("card_disabled");
                });
            }, 4000);
        }
        function randomSelectionOpponentCard() {
            let opponent_cards = document.querySelectorAll("#opponent_deck .card_design-default");
            let i = Math.floor(Math.random() * opponent_cards.length);
            opponent_cards[i].setAttribute("style", "opacity:0;margin-bottom:1rem;");
            return opponent_cards[i];
        }
    }
}
