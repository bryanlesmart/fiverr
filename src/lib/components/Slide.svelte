<script lang="ts">
	type TCard = {
		id: number;
		title: string;
		desc: string;
		img: string;
	};

	export let cards: TCard[];
</script>

<a href="/gigs" class="link">
	<div class="slide">
		<div class="cards">
			{#each cards as card}
				<img src={card.img} alt={card.title} />
			{/each}
		</div>
	</div>
</a>

<style lang="scss">
	.slide {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 50px;
		margin-bottom: 100px;
		.cards {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			img {
				width: 150px;
				height: 140px;
				padding: 40px;
				object-fit: cover;
				padding: 1px;
			}
		}
	}
</style>
