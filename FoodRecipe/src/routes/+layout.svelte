<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}


<style>
:global(body) {

	background-image: url('/backg.jpeg');
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	font-family: system-ui, sans-serif;
}
/* :global(html), :global(body) {
	height: 100%;
} */

</style>