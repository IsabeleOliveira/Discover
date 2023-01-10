// For
// break - execução do loop
// continue - pula a execução do loop

for(var i = 0; i < 10; i++) {
    if(i == 5) {
        continue;
    }
    console.log(i);
}

// for(inicialização de uma variável; 
//condição de continuação para o loop; 
// expressão final)

// While

let i = 0;
while(i < 10){
    console.log(i)

    i++;
}

// for of

let name = 'Isabele';
let nomes = ['João', 'Maria', 'Gabriel'];

for(let name of nomes){
    console.log(name);
}

for(let char of name){
    console.log(char);
}

// for in

let person = {
    name: 'Isabele',
    age: 20,
    weight: 50.5
}

for(let property in person){
    console.log(property);
    console.log(person[property]);
}
