function darkMode(){
    const pagina = document.body;

    pagina.classList.toggle("darkMode");   //toggle: geralmente representados por um botão que pode ser clicado para ativar ou desativar uma determinada funcionalidade.

    const botao = document.querySelector("button");

    const isDarkMode = document.body.classList.contains("darkMode"); // aqui vai armazenar a classe "darkMode" para verficar essa classe

    if(isDarkMode == true){
        botao.textContent = "Modo Claro"
    }
    else{
        botao.textContent = "Modo Escuro "
    }
}