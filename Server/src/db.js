
import {createConnection} from "mysql"


export const db = createConnection({
    user:"root",
    password:"",
    host:"localhost",
    port:"3306",
    database:"Compras"
})
