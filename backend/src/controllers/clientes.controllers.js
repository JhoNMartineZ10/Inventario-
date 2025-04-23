import getConnection from "./../db/database.js"
const postClientes = async (req,res)=>{
    try {
       const{ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad}=req.body;
       
       const client ={ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad}
       const connection = await getConnection();
       const result=await connection.query("INSERT INTO clientes SET ?",client)
        
        res.json(result)

    } catch (error) {
        console.error("error 500");
    }
}

export const mthodHTTP={
    postClientes
}