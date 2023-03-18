<script lang="ts">
	import { path } from '$lib/data';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="myGigs">
	<div class="container">
		<div class="title">
			<h1>{data?.user?.isSeller ? 'Gigs' : 'Orders'}</h1>
			{#if data?.user?.isSeller}
				<a href="/add"><button>Add New Gig</button></a>
			{/if}
		</div>
		<table>
			<tr>
				<th>Image</th>
				<th>Title</th>
				<th>Price</th>
				<th>Sales</th>
				<th>Action</th>
			</tr>
			{#each data.gigs as gig}
				<tr>
					<td>
						<img
							class="image"
							src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
							alt=""
						/>
					</td>
					<td>{gig.title}</td>
					<td>{gig.price}</td>
					<td>sale</td>
					<td>
						<img class="delete" src="{path}delete.png" alt="" />
					</td>
				</tr>
			{/each}
		</table>
	</div>
</div>

<style lang="scss">
	.myGigs {
		display: flex;
		justify-content: center;
		color: #555;

		.container {
			width: 1400px;
			padding: 50px 0px;

			.title {
				display: flex;
				justify-content: space-between;

				button {
					background-color: #1dbf73;
					color: white;
					font-weight: 500;
					border: none;
					padding: 10px;
					cursor: pointer;
				}
			}

			table {
				width: 100%;

				tr {
					height: 50px;
					th {
						text-align: left;
					}
					td {
						.image {
							width: 50px;
							height: 25px;
							object-fit: cover;
						}

						.delete {
							width: 20px;
							cursor: pointer;
						}
					}
					&:nth-child(even) {
						background-color: #1dbf730f;
					}
				}
			}
		}
	}
</style>
