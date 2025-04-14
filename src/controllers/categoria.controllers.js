<<<<<<< HEAD
import getConnection from "./../db/database.js"
const getCategorias = async (req, res)=>{
    try {
    const connection = await getConnection();
    const result=await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias")
    res.json(result);
    } catch (error) {
        console.error("error 500");
    }
    
=======
const getCategorias =(req, res)=>{
    res.json({"Categoria":"Electrodomesticos"})
>>>>>>> e2ab291bbac683f3e4ea318d79bcef4b296e1a66
}

export const mthodHTTP ={
    getCategorias
}
