const frutas = [];
const legumes = [];
const laticionios = [];
const congelados = [];
const doces = [];
const materialDeLimpeza = [];


let adicionarNovoItem = "sim";
while(adicionarNovoItem != "não" ) {
    adicionarNovoItem = prompt("Deseja adicionar um item na sua lista de compras? Responda 'sim' ou 'não'");

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

    adicionarNovoItem = prompt("Deseja adicionar um item na sua lista de compras? Responda 'sim', 'não' ou 'remover' para remover um item da lista");

    while(adicionarNovoItem === "remover") {
        let removerItem = prompt(`Lista de Compras:\n Frutas: ${frutas}\n Verduras: ${legumes}\n Laticínios: ${laticionios}\n Congelados: ${congelados}\n Doces: ${doces}\n Material de Limpeza: ${materialDeLimpeza}\n Qual item você deseja remover?`);

        if(frutas.includes(removerItem)){
            frutas.pop();
            alert(`Item removido!`);
            break;
        } else if(legumes.includes(removerItem)) {
            legumes.pop();
            alert(`Item removido!`);
            break;
        } else if(laticionios.includes(removerItem)) {
            laticionios.pop();
            alert(`Item removido!`);
            break;
        } else if(congelados.includes(removerItem)) {
            congelados.pop();
            alert(`Item removido!`);
            break;
        } else if(doces.includes(removerItem)) {
            doces.pop();
            alert(`Item removido!`);
            break;
        } else if(materialDeLimpeza.includes(removerItem)) {
            materialDeLimpeza.pop();
            alert(`Item removido!`);
            break;
        } else{
            alert("Não foi possivél encontrar o item na lista!");
        }
    }

}

alert(`Lista de Compras:\n Frutas: ${frutas}\n Verduras: ${verdurasLegumes}\n Laticínios: ${laticionios}\n Congelados: ${congelados}\n Doces: ${doces}\n Material de Limpeza: ${materialDeLimpeza}`);