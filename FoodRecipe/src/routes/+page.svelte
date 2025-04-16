<script>
	import { goto } from "$app/navigation";

    
    const goMenu=()=>{
        goto("/recipes")
    }
</script>

<main>
<h1>Welcome To Recipe Book </h1>

<button on:click={goMenu}>Menu</button>




</main>

<style>
    h1{
        font-size: 5rem;
        margin: 2% 15%;
        text-shadow: 5px 5px white;
    }
    button{
        font-size: 5rem;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        align-items: center;
        margin: 10% 40%;
        background-color: white;
        padding: 1%;
        border-radius: 100px;
    }

</style>