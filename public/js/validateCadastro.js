//Ligar variaveis a elementos html pelo seu selector
let pnome   = document.querySelector("#pnome")
let snome   = document.querySelector("#snome")
let email   = document.querySelector("#email")
let senha   = document.querySelector("#senha")
let validar = document.querySelector("#validar")
let form = document.querySelector('#formcadastro')

//Funcao para validar os dados do usuario pelo click. 

form.addEventListener("click",(e)=>{
    //Abstrair o comportamento normmal de formulario no nosso componente
    e.preventDefault()
    //Funcao que capta os dados do usuario e manda para a API
    enviarDados()
})

//Funcao asincorna, e aquela que a sua nao execucao imediata nao afeta o comportamneto do nosso codigo e retorna uma promessa

async function enviarDados(){
    //Pegando os valores de cada input
    await fetch("http://localhost:3333/formulario",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "p_nome":pnome.value,
            "s_nome":snome.value,
            "email":email.value,
            "senha":senha.value
        })
    })
    .then(resp=>{
        return resp.json()
    })
    .then(data=>{
        if(data.message==="EXISTS"){
            return alert("IMPOSSIVEL EFETUAR CADASTRO, USARIO JA EXISTE")
        }else if(data.message==="Usuario Cadastrado"){
            alert("USUARIO CADASTRADO COM SUCESSO")
            if(form.innerText!=="enviar dados"){
                window.location.href="../../views/perfil.html"
            }else{
                window.location.href="file:///C:/Users/marti/Documents/Projecto-de-TLP/Compra/Dashboard/index.html"
            }
        }
    })
    .catch(err=>alert("ERRO AO CADASTRAR USUARIO"))
    .finally(()=>{
        pnome.value = ""
        snome.value = ""
        senha.value = ""
        email.value = ""
    })
}

