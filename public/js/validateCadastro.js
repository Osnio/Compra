//Ligar variaveis a elementos html pelo seu selector
let pnome = document.querySelector("#pnome")
let snome = document.querySelector("#snome")
let email = document.querySelector("#email")
let senha = document.querySelector("#senha")
let c_senha = document.querySelector("#c_senha")
let validar = document.querySelector("#validar")

//Funcao para validar os dados do usuario pelo click. 

validar.addEventListener("click",(e)=>{
    //Abstrair o comportamento normmal de formulario no nosso componente
    e.preventDefault()
    //Funcao que capta os dados do usuario e manda para a API
    enviarDados()
})

//Funcao asincorna, e aquela que a sua nao execucao imediata nao afeta o comportamneto do nosso codigo e retorna uma promessa

function enviarDados(){
    //Pegando os valores de cada input
    let nomeValue = pnome.value
    let sNomeValue = snome.value
    let senhaValue = senha.value
    let c_Value = c_senha.value
    let emailValue = email.value
   
    //consumir a rota do cadastro de usuario usando tratamento de excessão
    try {
        fetch("http://localhost:3333/formulario",{
             method:"POST", //Verbo http. padrao get 
             headers:{ //informaoes do cabecalho como o tipo de dado a ser enviado
                 "Content-Type": "application/json"
             },
             //Converter um obejto js em json
             body:JSON.stringify({ //Corpo da requisicao
                 "p_nome":nomeValue ,
                 "s_nome":sNomeValue, 
                 "email":emailValue,
                 "senha":senhaValue, 
                 "c_senha":c_Value
             })
          })
         return 
        
    } catch (error) {
        console.log(error)
    }finally{
        pnome.value=""
        snome.value=""
        senha.value=""
        c_senha.value=""
        email.value =""
    }

    
}

