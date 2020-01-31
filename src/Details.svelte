<script>
	export let item = null
</script>

{#if item}
	<h3>
		{item.title}
	</h3>
	<h5>
		{item.id}
	</h5>
	<p>
		{item.description}
	</p>
{:else}
	<p>
		Select an element to see its details.
	</p>
{/if}