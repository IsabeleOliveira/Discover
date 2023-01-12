// Transformar notas escolares

// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

// let score = 100;


// function transformarNotas(score){
    
//     let scoreA = score >= 90 && score <= 100;
//     let scoreB = score >= 80 && score <= 89;
//     let scoreC = score >= 70 && score <= 79;
//     let scoreD = score >= 60 && score <= 69;
//     let scoreE = score < 60 && score >= 0;
    
//     let scoreFinal;

//     if(scoreA){
//         scoreFinal = 'A';
//     }else if(scoreB){
//         scoreFinal = 'B';
//     }else if(scoreC){
//         scoreFinal = 'C';
//     }else if(scoreD){
//         scoreFinal = 'D';
//     }else if(scoreE){
//         scoreFinal = 'E';
//     }else{
//         scoreFinal = 'Nota inválida';   
//     }

//     return scoreFinal;
// }

// console.log(transformarNotas(101));
// console.log(transformarNotas(45));
// console.log(transformarNotas(60));
// console.log(transformarNotas(-1));
// console.log(transformarNotas(0));


/* ### Sistema de gastos familiares

Crie um objeto que possuirá 2 propriedades, 
ambas do tipo array:

    * receitas: []
    * despesas: []


Agora, crie uma função que irá calcular o total de 
receitas e despesas e irá mostrar uma mensagem se a
família está com saldo positivo ou negativo, seguido
do valor do saldo

*/
// let family = {
//     receitas: [100, 200, 300],
//     despesas: [50, 100, 200]
// }

// function soma(array){
//     let total = 0;

//     for (let value of array){
//         total += value;
//     }
//     return total

// }

// function calcularbalanco(){
//     const calcularReceitas = soma(family.receitas);
//     const calcularDespesas = soma(family.despesas);

//     const total = calcularReceitas - calcularDespesas;

//     const itsOk = total >= 0;

//     let balanceText = "negativo";
//     if(itsOk){  
//         balanceText = "positivo";
//     }

//     console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`);
// }

// calcularbalanco();

/* ### Celsius em Fahrenheit

    Crie uma função que receba uma string em celsius ou
    fahrenheit e faça a transformação de uma unidade para
    outra.

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

// let temperature = 30;

// function transformartemp(temperature){
//     const celsiusExists = temperature.toUpperCase().includes('C');
//     const fahrenheitExists = temperature.toUpperCase().includes('F');

//     if(!celsiusExists && !fahrenheitExists){
//         throw new Error('Grau não identificado');
//     }

//     // fluxo ideal, F -> C
//     let updatedTemperature = Number(temperature.toUpperCase().replace("F", ""));
//     let formula = fahrenheit => (fahrenheit - 32) * 5/9;
//     let degreeSign = 'C';


//     // fluxo alternativo C -> F
//     if(celsiusExists){
//         updatedTemperature = Number(temperature.toUpperCase().replace("C", ""));
//         formula = celsius => celsius * 9/5 + 32;
//         degreeSign = 'F';
//     }

//     return formula(updatedTemperature) + degreeSign;
// }

// try{
//     console.log(transformartemp('10C'));
//     console.log(transformartemp('50F'));
//     transformartemp('50Z');
// }catch(error){
//     console.log(error.message);
// }

/* ### Buscando e contando dados em Arrays
Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

// let booksByCategory = [
//     {
//         category: "Riqueza",
//         books: [
//             {
//                 title: "Os segredos da mente milionária",
//                 author: "T. Harv Eker",
//             },
//             {
//                 title: "O homem mais rico da Babilônia",
//                 author: "George S. Clason",
//             },

//             {
//                 title: "Pai rico, pai pobre",
//                 author: "Robert T. Kiyosaki e Sharon L. Lechter",
//             },
//         ],
//     },
//     {
//         category: "Inteligência Emocional",
//         books: [
//             {
//                 title: "Você é insubstituível",
//                 author: "Augusto Cury",
//             },
//             {
//                 title: "Ansiedade - Como enfrentar o mal do século",
//                 author: "Augusto Cury",
//             },
//             {
//                 title: "Os 7 hábitos das pessoas altamente eficazes",
//                 author: "Stephen R. Covey",
//             },
//         ],
//     }
// ];

// const totalCategories = booksByCategory.length;
// // console.log(totalCategories);


// const totalBooks = booksByCategory.map((category) => {
//     return category.books.length;
// });

// // console.log(totalBooks);

// const totalAuthors = booksByCategory.map((category) => {
//     return category.books.map((book) => {
//         return book.author;
//     });
// }
// );

// const booksByAugustoCury = booksByCategory.map((category) => {
//     return category.books.filter((book) => {
//         return book.author === 'Augusto Cury';
//     });
// });



// function booksOfAuthor(author){
//     const books = booksByCategory.map((category) => {
//         return category.books.filter((book) => {
//             return book.author === author;
//         });
//     });
//     return books;
// }

// console.log(booksOfAuthor('Augusto Cury'));