export default class MainMenu {
    static load(mainMenu:HTMLElement | null){
        if(mainMenu != null){
            mainMenu.innerHTML = `
            <div class="d-flex">
                <div style="width:55vw;height:40vh;background-color:black;">
                    <h1 style="color:white;">Olá, mundo!</h1>
                </div>
            </div>
            `
        }
    }
}
