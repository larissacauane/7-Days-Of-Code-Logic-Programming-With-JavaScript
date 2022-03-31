
function soma(valor_1, valor_2) {
    return valor_1 + valor_2
}

function subtracao(valor_1, valor_2) {
    return valor_1 - valor_2;
}

function multiplicacao(valor_1, valor_2) {
    return valor_1 * valor_2;
}

function divisao(valor_1, valor_2) {
    return valor_1 / valor_2;
}

let opcao;


while(opcao != "sair") {
    opcao = prompt("Escolha uma das opções disponíveis: soma, subtração, multiplicação, divisão, e sair");

    while(opcao != "soma" && opcao != "subtração" && opcao != "multiplicação" && opcao != "divisão" && opcao != "sair") {
        alert("Opção inválida");
        opcao = prompt("Escolha uma das opções disponíveis: soma, subtração, multiplicação, divisão, e sair");
    }

    if(opcao === "sair"){
        alert("Até a próxima...")
        break;
    }

    // opcao = prompt("Escolha uma das opções disponíveis: soma, subtração, multiplicação, divisão, e sair");
    const valor_1 = Number(prompt("Digite o primeiro valor: "));
    const valor_2 = Number(prompt("Digite o segundo valor: "));

    switch (opcao) {
        case "soma":
            alert(soma(valor_1, valor_2));
            break;
    
        case "subtração":
            alert(subtracao(valor_1, valor_2));
            break;
        
        case "multiplicação":
            alert(multiplicacao(valor_1, valor_2));
            break;

        case "divisão":
            alert(divisao(valor_1, valor_2));
            break
            
    }   


}

