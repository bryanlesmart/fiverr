<script lang="ts">
	import { path, orders } from '$lib/data';
	type IUser = {
		id: number;
		username: string;
		isSeller: boolean;
	};

	const currentUser: IUser = {
		id: 1,
		username: 'M',
		isSeller: true
	};
</script>

<div class="orders">
	<div class="container">
		<div class="title">Orders</div>
		<table>
			<tr>
				<th>Image</th>
				<th>Title</th>
				<th>Price</th>
				<th>{currentUser.isSeller ? 'Buyer' : 'Seller'}</th>
				<th>Contact</th>
			</tr>
			{#each orders as order}
				<tr>
					<td>
						<img class="image" src={order.productImg} alt={order.username} />
					</td>
					<td>{order.title}</td>
					<td>{order.price}.<sup>{order.sup}</sup></td>
					<td>{order.username}</td>
					<td>
						<a href="/message/123" class="link"
							><img class="message" src="{path}message.png" alt="" /></a
						>
					</td>
				</tr>
			{/each}
		</table>
	</div>
</div>

<style lang="scss">
	.orders {
		display: flex;
		justify-content: center;
		color: #555;

		.container {
			width: 1400px;
			padding: 50px 0px;

			.title {
				display: flex;
				justify-content: space-between;
			}

			table {
				width: 100%;

				tr {
					height: 50px;
					th {
						text-align: left;
					}
					td {
						sup {
							font-size: 12px;
						}

						.image {
							width: 50px;
							height: 25px;
							object-fit: cover;
						}

						.message {
							width: 25px;
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
