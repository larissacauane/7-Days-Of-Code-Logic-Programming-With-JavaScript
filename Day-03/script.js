const area = prompt("Para qual área você deseja seguir? Front-End ou Back-End:");

let linguagem;


if(area === "Front-End") {
    linguagem = prompt("Você quer aprender React ou Vue? ");

} else if(area === "Back-End") {
    linguagem = prompt("Você quer aprender C# ou Java?");
} else {
    linguagem = prompt("Por favor, selecione uma área de especialização válida!")
}

const areaEscolhidaOuFullStack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para se tornar um desenvolvedor FullStack.");

if(areaEscolhidaOuFullStack == 1) {
    alert(`Ótima escolha! Continue estudando ${linguagem} para se especializar na área de ${area}`);
} else if(areaEscolhidaOuFullStack == 2) {
    alert(`Continue estudando outras linguagens e tecnologias além de ${linguagem} para se tornar um desenvolvedor FullStack!`);
}


let tecnologiasParaAprender = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'Ok' para sim")

while (tecnologiasParaAprender === "Ok") {
    let tecnologias = prompt("Qual tecnologia você gostaria de aprender?");
    alert(`${tecnologias} é muito legal! 😀`)
    tecnologiasParaAprender = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'Ok' para sim");
}


