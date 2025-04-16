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

<button on:click={()=>{goto('/')}} style="background-color: #ff9500;">Back &lt;--</button>



<h1>Select Your Food </h1>



<div>
    <select name="rid" id="rid" bind:value={val}>
        <option value="">Select You Favorite Dish</option>
        {#each recipes as recipe}
            
        <option value={recipe.id}>{recipe.name}</option>

        {/each}


    </select>

<button on:click={goGetit} class="give">Give</button>




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
	width: 10%;
	height: 10%;
	padding: 1% 0;
	border: 1px solid black;
	border-radius: 50px;
	font-weight: bolder;
    }
    .give{
        position: relative;
        left: 50%;
    }


    div{
        background-color: white;
    }
</style>