alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random()*100 + 1);
console.log(numeroSecreto)
let chute

while (chute != numeroSecreto) {
    
    let chute = prompt('Escolha um número entre 1 e 100');
    if (chute == numeroSecreto)
    alert ('Parabéns!! Você acertou o número secreto ' + numeroSecreto)

    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ` + chute);
    } else {
        alert(`O número secreto é maior que ` + chute);
    }
}