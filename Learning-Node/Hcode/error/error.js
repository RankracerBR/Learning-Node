//throw new Error('Ah não, deu erro! Não é possível, na minha máquina funciona')

//console.log('Depois do erro') //não funciona depois do erro

//Executa e detecta o erro
function execute(){
    executeTo()
}

function executeTo(){
    throw new Error('Ah não, deu erro! Não é possível, na minha máquina funciona')
}

function init(){
    try{
        execute()
    } catch (e){
        console.log(`Temos um problema! ${e}`)
    }
}
init()
console.log('Depois do erro')
