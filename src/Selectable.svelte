<script>
	export let element;
	export let category;
	export let disabled;
	export let onClick;
</script>

<div class="layout {disabled ? 'disabled' : ''}" style="border: 3px solid {category.color}" on:click="{onClick}" data-element="{element.id}">
	<div class="icon" style="background: {category.color}">
		<img src={category.icon} alt={category.title} />
	</div>
	<div>		
		{element.title}
	</div>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 50px 1fr;
		gap: 8px;
		background: lightgrey;
		cursor: default;
	  -webkit-user-select: none; /* Safari 3.1+ */
  	-moz-user-select: none; /* Firefox 2+ */
  	-ms-user-select: none; /* IE 10+ */
  	user-select: none; /* Standard syntax */
	}
	.icon {
		padding: 4px;
	}
	.disabled {
		opacity: 50%;
	}
</style>