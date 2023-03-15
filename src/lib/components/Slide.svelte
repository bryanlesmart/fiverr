<script lang="ts">
	let currentSlide = 0;
	let slideCount = 0;

	type TCard = {
		id: number;
		title: string;
		desc: string;
		img: string;
	};

	export let cards: TCard[];
</script>

<div class="owl-carousel">
	<div class="owl-slide">
		{#each cards as card}
			<img src={card.img} alt={card.title} />
		{/each}
	</div>
</div>

<style>
	.owl-carousel {
		display: flex;
		margin-left: 100px;
	}

	.owl-slide {
		display: flex;
		padding: 10px;
	}
	img {
		height: 300px;
		padding: 10px;
	}
</style>
