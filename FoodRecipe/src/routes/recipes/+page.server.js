export const load=async(serverLoadEvent)=>{
const {fetch}=serverLoadEvent;
const responce=await fetch("/api/recipes");
// http://localhost:5173
const recipe=await responce.json();
// const recipename=recipe.map((r)=>r.name)

return{
    recipe
}

}