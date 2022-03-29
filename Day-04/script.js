let computador = Math.trunc(Math.random() * (10 - 0 + 1) + 0);
let usuario = prompt("Digite um número de 0 a 10: ");
let acerto = false;

for (let i = 1; i <= 2; i++) {
    if(usuario == computador) {
        alert(`Você acertou o número é ${computador}`);
        acerto = true;
        break
    } else {
        alert(`Você errou!`);
        usuario = prompt("Digite um número de 0 a 10: ");
    }
}

if(!acerto) {
    alert(`Suas chances acabaram o número era ${computador}`)
}