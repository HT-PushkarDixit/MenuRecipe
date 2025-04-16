import { json } from '@sveltejs/kit';

export async function GET(requestEvent) {
    const {params}=requestEvent
    const recipeid=params.recipeid
    const data=await fetch(`https://dummyjson.com/recipes/${recipeid}`)
    const recipe=await data.json();

    return json(recipe);



}