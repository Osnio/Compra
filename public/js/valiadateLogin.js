let email = document.querySelector("#email")
let senha =document.querySelector("#senha")
let form = document.querySelector("#formlogin")


form.addEventListener("submit", (e)=>{
    //previne o comportamento normal ou padrao do formulario. Para evitar que os dados do usuario sejem enviados na URL.
    e.preventDefault()
    enviarDados()
})

async function enviarDados(){
    await fetch("http://localhost:3333/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "email":email.value,
            "senha":senha.value
        })
    })
    .then(resp=>{
        return resp.json()
    })
    .then(data=>{
        if(data.message==="NOT EXISTS"){
            alert("USUARIO E/OU SENHA INVALIDOS")
        }else{
            window.location.href="../../views/perfil.html"
        }
    })
    .catch(err=>alert("TENTE MAIS TARDE"))
}

