import { json } from "@sveltejs/kit";

export async function GET() {
    const data=await fetch("https://dummyjson.com/recipes");
    const recipes=await data.json();

    return json(recipes.recipes);
}

