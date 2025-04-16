export const load=async(serverLoadEvent)=> {
    const {fetch,params} =serverLoadEvent;
    const  {recipeid}=params;
    const responce =await fetch(`/api/recipes/${recipeid}`)
    // const recipe=await responce.json()
    
    return{
        recipe: await responce.json()
    }
}