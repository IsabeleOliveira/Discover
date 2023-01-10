// throw

// Isso significa que vamos tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que dispare um erro
// caso não seja passado um parâmetro dessa função.

function sayMyName(name){
    if(name === ''){
        throw 'Name is required';
    }
    console.log(name);
}

// try...catch

// O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e, que só existe dentro do catch. Após isso, 
// mesmo com o erro, nossa aplicação não será interrompida por completo

try{
    sayMyName(''); // Name is required
}catch(e){
    console.log(e);
}

console.log('after try/catch');