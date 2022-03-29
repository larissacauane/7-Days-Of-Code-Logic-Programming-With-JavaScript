const frutas = [];
const verdurasLegumes = [];
const laticionios = [];
const congelados = [];
const doces = [];
const materialDeLimpeza = [];


let adicionarNovoItem = "sim";
while(adicionarNovoItem != "não" ) {
    adicionarNovoItem = prompt("Deseja adicionar um item na sua lista de compras? Reponda 'sim' ou 'não'");

    while(adicionarNovoItem != "sim" && adicionarNovoItem != "não") {
        alert("Opção Inválida");
        adicionarNovoItem = prompt("Deseja adicionar um item na sua lista de compras? Reponda 'sim' ou 'não'");
    }

    if(adicionarNovoItem === "não") {
        break;
    }

    let item = prompt("Qual item você deseja inserir na lista de compras?");
    let categoria = prompt("Em qual categoria essa item se encaixa? Escolha entre as opções: frutas, legumes, laticínios, congelados, doces e material de limpeza");

    if(categoria === "frutas") {
        frutas.push(item);
    } else if(categoria === "legumes") {
        legumes.push(item);
    } else if(categoria === "laticínios") {
        laticionios.push(item);
    } else if(categoria === "congelados") {
        congelados.push(item);
    } else if(categoria === "doces") {
        doces.push(item);
    }  else if(categoria === "material de limpeza") {
        materialDeLimpeza.push(item);
    } else {
        alert("Essa categoria não foi definida");
    }


}

alert(`Lista de Compras:\n Frutas: ${frutas}\n Verduras: ${verdurasLegumes}\n Laticínios: ${laticionios}\n Congelados: ${congelados}\n Doces: ${doces}\n Material de Limpeza: ${materialDeLimpeza}`);

