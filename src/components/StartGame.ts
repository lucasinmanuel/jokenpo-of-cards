export default class StartGame{

    private cardConfiguration:{cardDesignClass:string,cardImages:string[]} = {
        cardDesignClass:"card_design-default card", cardImages: [
            "scissors_design-default.svg",
            "rock_design-default.svg",
            "paper_design-default.svg"
        ]
    };

    constructor(cardDesignClass:string | null){
        if(cardDesignClass != null){
            this.cardConfiguration.cardDesignClass = cardDesignClass;
        }
    }

    start(startGame:HTMLElement | null){
        if(startGame != null){
            startGame.innerHTML = `
                <div class="container">
                    <div id="opponent_deck"></div>
                    <div id="fight"></div>
                    <div id="your_deck"></div>
                </div>
            `
            let opponent_deck:HTMLElement | null = document.getElementById("opponent_deck");
            let your_deck:HTMLElement | null = document.getElementById("your_deck");
            if(your_deck != null && opponent_deck != null){
                //EMBARALHANDO DECK
                let your_arr:string[] = shuffleArray(this.cardConfiguration.cardImages)
                let id_card = [your_arr[0].split("_")[0],your_arr[1].split("_")[0],your_arr[2].split("_")[0]]

                your_deck.innerHTML = `
                    <div style="position:relative;left:0;top:0;" id="${id_card[0]}" title="${id_card[0]}" class="${this.cardConfiguration.cardDesignClass} left">
                        <img src="../../dist/images/${your_arr[0]}" />
                    </div>
                    <div class="space-15"></div>
                    <div style="position:relative;left:0;top:0;" id="${id_card[1]}" title="${id_card[1]}" class="${this.cardConfiguration.cardDesignClass} middle">
                        <img src="../../dist/images/${your_arr[1]}" />
                    </div>
                    <div class="space-15"></div>
                    <div style="position:relative;left:0;top:0;" id="${id_card[2]}" title="${id_card[2]}" class="${this.cardConfiguration.cardDesignClass} right">
                        <img src="../../dist/images/${your_arr[2]}" />
                    </div>
                `
                let oppenent_arr:string[] = shuffleArray(this.cardConfiguration.cardImages)
                opponent_deck.innerHTML = `
                    <div style="position:relative;left:0;top:0;" class="${this.cardConfiguration.cardDesignClass} left">
                        <img src="../../dist/images/${oppenent_arr[0]}" />
                    </div>
                    <div class="space-15"></div>
                    <div style="position:relative;left:0;top:0;" class="${this.cardConfiguration.cardDesignClass} middle">
                        <img src="../../dist/images/${oppenent_arr[1]}" />
                    </div>
                    <div class="space-15"></div>
                    <div style="position:relative;left:0;top:0;" class="${this.cardConfiguration.cardDesignClass} right">
                        <img src="../../dist/images/${oppenent_arr[2]}" />
                    </div>
                `
            }

            let your_cards:NodeListOf<Element> = document.querySelectorAll("#your_deck .card");
            let styles:string | null = null;

            if(your_deck != null){
                    your_cards.forEach((card)=>{
                    card.addEventListener("click",()=>{
                        !card.classList.contains("card_disabled") && yourSelectionCards(card);
                    })
                })
            }

            function yourSelectionCards(pCard:Element){

                //ADICIONANDO A CLASSE 'card_disabled' NAS CARTAS DO JOGADOR
                your_cards.forEach((c)=>{
                    if(c.id != pCard.id){
                        c.classList.add("card_disabled");
                    }
                });
                        
                setTimeout(()=>{
                    let left = document.documentElement.clientWidth / 2 - 
                    (pCard.getBoundingClientRect().left + 41)

                    styles = `position:relative;left:${left}px;top:-34.8vh;width:8rem;height:100%;max-height:10rem;transform:none;`;
                    styles != null && (
                        pCard.setAttribute("style",styles)
                    );

                    opponentCardSelection();
                },500)
            }

            function opponentCardSelection(){
                let opponent_cards:NodeListOf<Element> =  document.querySelectorAll("#opponent_deck .card_design-default");

                let i = Math.floor(Math.random() * opponent_cards.length);

                let left = document.documentElement.clientWidth / 2 - 
                (opponent_cards[i].getBoundingClientRect().left + opponent_cards[i].clientWidth + 15);

                styles = `position:relative;left:${left}px;top:30vh;transform:none;`;
                styles != null && (
                    opponent_cards[i].setAttribute("style",styles),
                    opponent_cards[i].children[0].setAttribute("style","background-color:transparent;")
                );
            }

            function shuffleArray(arr:string[]) {
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
    }
}