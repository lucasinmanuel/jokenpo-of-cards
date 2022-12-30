export default class ComparisonList{
    private list:any = {
        rock:(opponentCard:string)=>{
            switch(opponentCard){
                case "rock":
                    this.showResult("tie")
                    break;
                case "paper":
                    this.showResult("defeat")
                    break;
                case "scissors":
                    this.showResult("victory")
                    break;
            }
        },
        paper:(opponentCard:string)=>{
            switch(opponentCard){
                case "paper":
                    this.showResult("tie")
                    break;
                case "scissors":
                    this.showResult("defeat")
                    break;
                case "rock":
                    this.showResult("victory")
                    break;
            }
        },
        scissors:(opponentCard:string)=>{
            switch(opponentCard){
                case "scissors":
                    this.showResult("tie")
                    break;
                case "rock":
                    this.showResult("defeat")
                    break;
                case "paper":
                    this.showResult("victory")
                    break;
            }
        },
    }
    private yourCard:string;
    private opponentCard:string;
    constructor(yourCard:string,opponentCard:string){
        this.yourCard = yourCard;
        this.opponentCard = opponentCard;
    }
    compare(){
        this.list[this.yourCard](this.opponentCard)    
    }
    showResult(result:string){
        let boardResult = document.getElementById("utils") as HTMLElement
        boardResult.innerHTML = `<p>${result}</p>`
        setTimeout(()=>{
            boardResult.innerHTML = "";
        },3500)
    }
}