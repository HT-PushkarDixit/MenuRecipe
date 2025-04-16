<script>
	import { goto } from '$app/navigation';


export let data;

const recipe=data.recipe


</script>


<main>
	<button on:click={()=>{goto('/recipes')}}>Back &lt;-- </button>

<h1> <u>{recipe.id}.  {recipe.name} </u></h1>  

<div>
    <img src={recipe.image} alt="foodImg" id="recipeImg">
</div>


<div class="ratingBox">
   
    <span class="rate"> {recipe.rating} </span>

   
    <img src="/star.jpg" alt="star" class="star">

</div>

<p>This Dish is very orignaly from {recipe.cuisine}. It is very {recipe.difficulty} to make. Mostly this dish People prefer at {recipe.mealType} Times</p>

<br>
<h2>Ingredients</h2>
<ol>
{#each recipe.ingredients as item}
    <li>{item}</li>
{/each}

</ol>

<br><br>
<h2>Instructions</h2>
<ul>
    {#each recipe.instructions as item}
        <li>{item}</li>
    {/each}
</ul>


<h2>Time Require</h2>
<p>Cooking Time: {recipe.cookTimeMinutes} Min. </p>


<p>We are making for {recipe.servings} people</p>
<p>In each Serving calories = {recipe.caloriesPerServing} calories</p>



<button on:click={()=>{goto('/recipes')}}>Back &lt;-- </button>
</main>


<style>
main {
	max-width: 800px;
	margin: 0 auto;
	padding: 1rem;
	font-family: sans-serif;
	
	background-color: white;
}
h1{
	font-size: 2rem;
	font-family: Georgia, 'Times New Roman', Times, serif;
}
h2{
	font-size: 1rem;
	font-weight: bolder;
}
#recipeImg {
	width: 50%;
	height: auto;
	border-radius: 8px;
	position:relative;
	left: 20%;
	object-fit: cover;
	margin-bottom: 1rem;
}
button{
	background-color: #ff9500;
	width: 10%;
	height: 10%;
	padding: 1% 0;
	border: 1px solid black;
	border-radius: 50px;
	font-weight: bolder;
}

.ratingBox {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	/* gap: 0.5rem; */
	/* font-size: 1.5rem; */
	/* margin: 0% 80% 0% 10%; */
	background-color: rgb(248, 248, 248);
	position: relative;
	right: 0%;
}

.rate {
	color: #ff9500;
	font-weight: bold;
	font-size: 1.5rem;
	/* position: relative; */
	/* left: 5%; */
}
.star {

	/* position: sticky; */
	width: 10%;
	height: 10%;
	

}

p {
	line-height: 1.6;
	margin: 1rem 0;
}

ol,
ul {
	padding-left: 1.5rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
}

ol {
	list-style-type: decimal;
	list-style-position: outside;
}

ul {
	list-style-type: disc;
	list-style-position: outside;
}

li {
	margin-bottom: 0.5rem;
}


</style>