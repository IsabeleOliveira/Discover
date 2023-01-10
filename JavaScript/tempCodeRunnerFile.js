let person = {
    name: 'Isabele',
    age: 20,
    weight: 50.5
}

for(let property in person){
    console.log(property);
    console.log(person[property]);
}