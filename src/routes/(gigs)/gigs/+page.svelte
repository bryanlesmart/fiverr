<script lang="ts">
	import { GigCard } from '$lib/components';
	import { gigs } from '$lib/data';
	let open: boolean = false;
	let sort: string = 'sales';

	let min: HTMLInputElement;
	let max: HTMLInputElement;

	function toggleOpen() {
		open = !open;
	}

	const resort = (type: string) => {
		sort = type;
		open = false;
	};

	const apply = () => {
		console.log(max.value);
		console.log(min.value);
	};
</script>

<div class="gigs">
	<div class="container">
		<span class="breadcrumbs">Liver > Graphics & Design ></span>
		<h1>AI Artists</h1>
		<p>Explore the boundaries of art and technology with Liver's AI artists</p>
		<div class="menu">
			<div class="left">
				<span>Budget</span>
				<input bind:this={min} type="number" placeholder="min" />
				<input bind:this={max} type="number" placeholder="max" />
				<button on:click={apply}>Apply</button>
			</div>
			<div class="right">
				<span class="sortBy">Sort by</span>
				<span class="sortType">
					{sort === 'sales' ? 'Best Selling' : 'Newest'}
				</span>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img
					src="https://raw.githubusercontent.com/safak/youtube23/fiverr-ui/public/img/down.png"
					alt="AI"
					on:click={toggleOpen}
				/>
				{#if open}
					<div class="rightMenu">
						{#if sort === 'sales'}
							<span on:keydown on:click={() => resort('createdAt')}>Newest</span>
						{:else}
							<span on:keydown on:click={() => resort('sales')}>Best Selling</span>
						{/if}
						<span on:keydown on:click={() => resort('sales')}>Popular</span>
					</div>
				{/if}
			</div>
		</div>
		<div class="cards">
			{#each gigs as gig}
				<GigCard {gig} />
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.gigs {
		width: 100%;
		display: flex;
		justify-content: center;

		.container {
			width: 1400px;
			padding: 30px 0px;
			display: flex;
			flex-direction: column;
			gap: 15px;

			.breadcrumbs {
				font-weight: 300;
				text-transform: uppercase;
				font-size: 13px;
				color: #555;
			}

			p {
				color: #999;
				font-weight: 300;
			}

			.menu {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 20px;

				.left {
					display: flex;
					align-items: center;
					gap: 10px;
					color: #555;
					font-weight: 300;

					input {
						padding: 5px;
						border: 1px solid lightgrey;
						border-radius: 5px;
						outline: none;

						&::placeholder {
							color: #999;
						}
					}

					button {
						padding: 5px 10px;
						background-color: #1dbf73;
						color: white;
						border: none;
						font-weight: 500;
						border-radius: 5px;
						cursor: pointer;
					}
				}

				.right {
					position: relative;
					display: flex;
					align-items: center;
					gap: 10px;

					.sortBy {
						color: #555;
						font-weight: 300;
					}

					.sortType {
						font-weight: 500;
					}

					img {
						width: 15px;
						cursor: pointer;
					}

					.rightMenu {
						padding: 20px;
						background-color: white;
						border: 0.5px solid lightgrey;
						border-radius: 5px;
						position: absolute;
						top: 30px;
						right: 0;
						z-index: 9;
						display: flex;
						flex-direction: column;
						gap: 20px;
						color: #555;

						span {
							cursor: pointer;
						}
					}
				}
			}

			.cards {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
			}
		}
	}
</style>
