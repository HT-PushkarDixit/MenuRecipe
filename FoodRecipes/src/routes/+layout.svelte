<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}


<style>
:global(body) {
	margin: 0;
	padding: 0;
	background-image: url('backg.jpeg');
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	background-position: center;
	font-family: system-ui, sans-serif;
}
:global(html), :global(body) {
	height: 100%;
}

</style>