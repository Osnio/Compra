
import cors from "cors"
import express, {json} from "express"
import { db } from "./db.js"
//Ajuda a pegar o valor do corpo do formulario
import bodyParser from "body-parser"

const app = express()

app.use(cors());
app.use(json());

// habilita a pegar cada um dos dados do corpo da requisicao
app.use(bodyParser.urlencoded({extended:true}))
//para permitir qu
app.use(bodyParser.json())


//Get vai ir buscar os dados
app.get("/", (req, res)=>{
    let sql = "select * from userdata"
    db.query(sql,(err, result)=>{
        if(err) return console.log("Erro na query")
        return res.json(result)

    })
})
app.post("/formulario", (req, res)=>{
    let pnome = req.body.p_nome;
    let snome = req.body.s_nome;
    let email = req.body.email;
    let senha = req.body.senha;
    let Confsenha = req.body.c_senha;
    let sql = `insert into userdata (id, nome, S_nome, email, Senha, Conf_Senha) 
    VALUES(DEFAULT, '${pnome}', '${snome}', '${email}', '${senha}', '${Confsenha}' );`
    db.query(sql,(err, result)=>{
        if(err) return console.log("Erro no Cadastro")
            console.log("Usuario Cadastrado")

    })
})

app.post("/login", (req, res)=>{
    let email = req.body.email;
    let senha = req.body.senha;
    let sql = `select*from userdata where email='${email}' and Senha='${senha}'`
    db.query(sql,(err, result)=>{
        if(result == null || result==0)
            res.send(' Verifique os seus dados')
        else
            res.redirect('/home')
    })
})



app.delete("/eraseData",(req, res)=>{
    const {id}=req.body
    let sql = `delete from userdata where id=${id};`
    db.query(sql,(err)=>{
        if(err) return console.log("Erro ao apagar")
        console.log("Sucess delete")
    })
})

app.put("/update", (req, res)=>{
    const {id, novoNome} = req.body
    let sql = `update userdata set nome='${novoNome}' where id=${id};`
    db.query(sql, (err, result)=>{
        if(err) return console.log("Erro ao atualizar")
            console.log("Atualzado com sucesso")
    })
})


const port = 3333
app.listen(port, ()=>{
    console.log(`SERVIDOR RODANDO NO ENDERECO http://localhost:${port}`)
})