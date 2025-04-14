const url="http://localhost:5000/api/categorias"
fetch (url)
/*.then(resultado=>{
    
    return resultado.json();
})
.then(data=>{
   
   showndata(data)
})*/
import { obtainCategories } from "../apiConnection/consumeApi.js"

document.addEventListener("DOMContentLoaded",()=>{
    getCategories();
})



async function getCategories(){
    const categoriesObteined= await obtainCategories();
    const container = document.querySelector('tbody')
    categoriesObteined.forEach((category)=>{
        const {CategoriaID, CategoriaNombre, Descripcion, Imagen} =category
        const row= document.createElement('tr');
        row.innerHTML=`
        <td>
        ${CategoriaID}
        </td>
        <td>
        ${CategoriaNombre}
        </td>
        <td>
        ${Descripcion}
        </td>
        <td>
        <img src="${Imagen}" width="100px" class="cuenta">
        </td>
        <td>
        <button class="btn color3">Details</button>
        </td>
        <td>
        <button class="btn color2">Edit</button>
        </td>
        <td>
        <button class="btn color5">Delete</button>
        </td>
        `;
        container.appendChild(row)
    })
}
