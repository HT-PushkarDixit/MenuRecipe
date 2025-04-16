export const load=async(serverLoadEvent)=>{
const {fetch}=serverLoadEvent;
const responce=await fetch("http://localhost:5173/api/recipes");

const recipe=await responce.json();
// const recipename=recipe.map((r)=>r.name)

return{
    recipe
}

}