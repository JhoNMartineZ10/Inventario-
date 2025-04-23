import getConnection from "./../db/database.js"

const updateProductos = async (req,res)=>{
    try {
        const{ProductoID}= req.params
       const{ProductoNombre, PrecioUnitario, UnidadesStock }=req.body;
       const product ={ ProductoNombre, PrecioUnitario, UnidadesStock }
       const connection = await getConnection();
       const result=await connection.query("UPDATE productos SET ? WHERE ProductoID = ? ",[product, ProductoID])
        
        res.json(result)

    } catch (error) {
        console.error("error 500");
    }
}

export const mthodHTTP={
    updateProductos
}