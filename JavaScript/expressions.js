// Expressões e Operadores

// - Expressions
// - Operators
//     - Binary
//     - Unary
//     - Ternary

let number = 1

// Binary
console.log(number + 1)

// Unary
console.log(++number)
console.log(typeof number)

// Ternary
console.log(true ? 'alo' : 'nada')


// new
let name = new String('João')
console.log(name.surName = "Silva")
let age = new Number(27)


// Operadores unários
    // typeof
    // delete

const person = {
    name: 'João',
    age: 27
}

delete person.age
console.log(person)

// Operadores Aritméticos
    // * Multiplicação
    console.log(3 * 5)

    // / Divisão
    console.log(12 / 2)
    
    // + Adição
    console.log(2 + 2)

    // - Subtração
    console.log(2 - 2)

    // ** Potenciação
    console.log(2 ** 3)

    // % Resto da divisão
    let remainder
    remainder = 11 % 9
    console.log(remainder)

    // ++ Incremento
    let increment = 0
    console.log(++increment)
    console.log(increment)

    // -- Decremento
    let decrement = 0
    console.log(--decrement)
    console.log(decrement)

    // Grouping operator ()

    let total = (2 + 3) * 5
    console.log(total)


// Operadores de comparação

// Irá comparar valores e retornar um Boolean
// como resposta à comparação

let one = 1
let two = 2

// == igual a
// console.log( two == 1)
// console.log( one == "1")

// != diferente de
// console.log( one != two)
// console.log( one != 1)
// console.log( one != "1")

// === estritamente igual a
// console.log( one === "1")
// console.log( one === 1)

// !== estritamente diferente de
// console.log( two !== "2")
// console.log( two !== 2)

// > maior que
// console.log( one > two)

// >= maior que ou igual a
// console.log( one >= 1)
// console.log( two >= 1)

// < menor que
// console.log( one < two)

// <= menor que ou igual a
// console.log( one <= two)
// console.log( one <= 1)
// console.log( one <= 0)

// Operadores de atribuição (Assignment)
let x

console.log(x)

// assignment
x = 1
console.log(x)

// addition assignment
// x = x + 2
x += 2
console.log(x)

// subtraction assignment
// x = x - 1
x -= 1

// multiplication assignment
// x = x * 2
x *= 2

// division assignment
// x = x / 2
x /= 2


// remainder, exponetiation
// x = x ** 2
x **= 2
// x = x % 2
x %= 2
    
// Conjunções lógicas (Logical operators)

// AND - &&

let idade = 20;
let tenhoCNH = true;

const podeDirigir = idade >= 18 && tenhoCNH;
console.log("Posso dirigir?", podeDirigir)

// OR - || 

idade = 40;
const votoFacultativo = idade < 18 || idade >= 70;

console.log("Posso votar?", votoFacultativo)

// NOT - ! 

const estouGostandoDoCurso = false;
console.log(!estouGostandoDoCurso)

// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã top

let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

// Maior de 18
let idade_pessoa = 16
const canDrive = idade_pessoa >= 18 ? 'can drive' : "can't drive"

console.log(canDrive)

// Operador de String (String operator)

// comparison (comparação)
console.log('a' == 'b')

// concatenation (concatenação)
// Retorna a união de duas Strings
let alpha = 'alpha'
console.log(alpha + 'bet' + 's')
console.log(alpha += 'bet' += 's')

// Type conversion (typecasting) vs Type coersion
// Alteração de um tipo de dado para outro tipo

// Type coersion
console.log('9' + 5)

// Type conversion
console.log(Number('9') + 5)

// De cima para baixo, do mais importante ao menos importante.

// * grouping                      ( )
// * negação e incremento          ! ++ --
// * multiplicação e divisão       * /
// * adição e subtração            + -
// * relacional                    < <= > >=
// * igualdade                     == != === !==
// * AND                           && 
// * OR                            ||
// * condicional                   ?:
// * assignment (atribuição)       = += -= *= %= 