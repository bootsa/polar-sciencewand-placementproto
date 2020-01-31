<script>
	import { places, teacherSelection } from './stores.js'
	import { nodes, links } from './data.js';
	import { genColors } from './genColors.js';
	
	import Selectable from './Selectable.svelte'
	import Cell from './Cell.svelte';
	import Details from './Details.svelte';
	
	let selElement = null;
	let showTSel = false;

	places.useLocalStorage();
	teacherSelection.useLocalStorage();
	
	// following derived values will probably be provided by a graphQL query
	// #TODO change to provide only needed elements (teacher selection + other elements already on map)
	// #TODO produce category lookup (iis in object format) to be passed to Cell for background colour, etc - does subcats suffice?
	const fis = nodes.filter(d => d.type == "fis");
	const bis = nodes.filter(d => d.type == "bis");
	
	$: placed = Object.values($places)
	
	$: selectables = fis.filter(d => !placed.includes(d.id));

	const subCats = bis.map(a => links.filter(b => b['source'] == a.id).map(c => c.target));
	
	const colours = genColors({
		categories: subCats,
		minScale: 60,
    maxScale: 90,
    saturation: false,
    valOtherScale: 75
});
	
	function select(e, _this = this) {
		const elId = +_this.dataset['element'];
		if (!elId) {
			return;
		}
		if (selElement === elId) {
			selElement = null;
			return;
		}
		selElement = elId
	}
	
	const range = (n = 10, s = 0) => {
		let res = []
		for (let i = s; i < s + n; i++) {
			res.push(i)
		}
		return res;
	}
	
	function clickPlace(e) {
		if (!selElement) {
			select(e, this);
			$places[this.dataset['position']] = null;
			return;
		}
		const pos = +this.dataset['position'];
		$places[pos] = +selElement;
		selElement = null;
	}

	const getColor = (el) => {
		if (!el) return
		return colours[links.find(a => a.target == el).source]
	}
	
	const getCategory = (el) => {
		const cat = nodes.find(d => el && d.id == links.find(d => d.target == el).source);
		return {...cat, color: getColor(el)};
	}
	const getElement = (el, key = null) => {
		if (!el) return;
		const element = nodes.find(d => d.id == el);
		return key ? element[key] : element;
	}

	function clearMap() {
		// #TODO: bit hacky, no persistence of initial / reset value
		places.clean();
		$places = {};
	};

</script>

<svelte:head>
	<title>Science Wand Demo</title>
</svelte:head>

<div class="layoutGrid">
	<div class="leftWrapper">
		<div class="selectableGrid">
			{#each selectables as element (element.id)}
				<Selectable element="{element}" category="{getCategory(element.id)}" disabled="{selElement && selElement != +element.id}" onClick="{select}" />
			
				<!--<button disabled="{selElement == null ? false : selElement == +element.id ? false : true}" value="{element.id}" on:click="{select}" >
					{element.title || '___'}
				</button>-->
			
			{:else}
				Empty
			{/each}
		</div>
	</div>

	<div class="centerWrapper">
		<div class="placeGrid">
		{#each range(140) as place}
			<Cell element="{getElement($places[place])}" category="{getCategory($places[place])}" disabled="{selElement && (selElement != getElement($places[place], 'id'))}" position="{place}" onClick="{clickPlace}" />
		{:else}
			Empty
		{/each}
	</div>
	</div>

	<div class="rightWrapper">
		<div class="info">
			<Details item="{nodes.find(d => d.id == selElement)}" />
		</div>
	</div>
	<div class="topWrapper">
		<div>
			<details>
				<summary>Teacher's selection</summary>
				<div class="tSelGrid">
					{#each $teacherSelection as tSSet}
					<div>
						{#each fis as fNode}
							<label><input type="checkbox" on:checked="{true}" /> {fNode.title}</label>
						{/each}
					</div>
					{/each}
					<div>
						<button>
							+
						</button>
					</div>
				</div>
				<div>
					<input type="button" on:click="{() => clearMap()}" value="clear map">
				</div>
			</details>
			<label>Highlight <input type="checkbox" bind:checked={showTSel}/></label>
		</div>
	</div>

</div>

<style>
	.layoutGrid{
  	height: 100%;
  	width: 100%;
  	margin: 0;
  	padding: 0;
  	overflow: hidden;
		display: grid;
		grid-template-columns: 220px 450px 1fr;
	}
	.topWrapper {
		grid-column: 1 / -1;
	}
	.tSelGrid {
		display: grid;
		grid-template-columns: repeat(7, 1fr) 0.5fr;
	}
	.leftWrapper{
		overflow-y:auto;
	}
	.selectableGrid {
		display: grid;
		gap: 4px;
	}
	.centerWrapper{
		/* margin: 0 auto; /* <- should centre content but adds a margin when it shouldn't */
		overflow-y: auto;
		overflow-x: hidden;
	}
	.placeGrid {
		background: purple;
		display: grid;
		grid-template-columns: repeat(7, 50px);
		grid-auto-rows: 50px;
		gap: 10px;
		padding: 10px;
	}
	.rightWrapper{
		overflow-y:auto;
	}
	.info {
		padding: 10px;
	}
</style>