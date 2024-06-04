let logout = document.querySelector("#kkk")

logout.addEventListener("click",()=>{
    let valid = confirm("Quer mesmo terminar sessao")
    if(valid){
        localStorage.removeItem("dados_usuario")
        localStorage.clear()
        window.location.href="./index.html"
    }
})