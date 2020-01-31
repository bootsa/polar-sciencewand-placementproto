<script>
	export let element;
	export let category = {
		color: 'orange',
	};
	export let disabled;
	export let position;
	export let onClick;
</script>

{#if element}
	<div class="placeItem {disabled ? 'disabled' : ''}" style="{!disabled && `background:${category.color}`}" title="{element.title || ''}" data-position="{position}" data-element="{element.id || ''}" on:click={!disabled && onClick}>
		{#if category.icon}
			<img src="{category.icon}" alt="{element.title}" />
		{/if}
	</div>
{:else}
	<div class="placeItem" data-position="{position}" on:click={onClick}>
	</div>
{/if}

<style>
	.placeItem {
		background: orange;
		padding: 5px;
		overflow: hidden;
	}
	.disabled {
		background: grey;
	}
</style>