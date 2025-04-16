<script>
	import { goto } from "$app/navigation";

    export let data;
    const recipes=data.recipe;
    
    let val='';

const goGetit=()=>{

goto(`/recipes/${val}`)
}


</script>

<main>
<h1>Select Your Food </h1>



<div>
    <select name="rid" id="rid" bind:value={val}>
        <option value="">Select You Favorite Dish</option>
        {#each recipes as recipe}
            
        <option value={recipe.id}>{recipe.name}</option>

        {/each}


    </select>

<button on:click={goGetit}>Give</button>




</div>

</main>

<style>
    h1{
        font-size: 5rem;
        margin: 2% 15%;
        text-shadow: 5px 4px white;
    }
    select{
        position: relative;
        left: 40%;
        width: 20%;
        height: 10%;
        font-size: 1.5rem;
    }
    button{
        font-size: 1.5rem;
    }

    div{
        background-color: white;
    }
</style>