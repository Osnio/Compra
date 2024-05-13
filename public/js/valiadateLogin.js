let email = document.querySelector("#email")
let send = document.querySelector("#send")


send.addEventListener("click", (e)=>{
    e.preventDefault()
    enviarDados()
})

function enviarDados(){
    
    let email = email.value
    let senha = senha.value

    try{
        fetch("http://localhost:3333/login",{
            methor:"POST",
            headers:{
            "content-Type": "application/json"
            },
            body:JSON.stringify({
                "email": email,
                "Senha":senha
            })

        })

        if()
        return
    } catch(error){
        console.log(error)
    }
    

}
