// - ESTRUTURAS CONDICIONAIS

console.clear(); 

const idade = 19;

if (idade >= 18) {
    console.log("Você é maior de idade");
}
else {
    console.log("Você é menor de idade");
}

// se média >= 7, aprovado
// se média < 7 e media >= 5 recuperação
// se média < 5, reprovado

console.clear();

let media = 10;

if (media >= 7) {
    console.log("Aprovado");
}
else if (media >= 5) {
    console.log("Recuperação");
}
else {
    console.log("Reprovado");
}

// Switch

console.clear();

switch(media) {
    case 1:
        console.log("Aprovado com louvor");
        break;
    case 2:
        console.log("Aprovado");
        break;
    case 3:
        console.log("Recuperação");
        break;
    case 4:
        console.log("Reprovado");
        break;
    default:
        console.log("Nota inválida");
}