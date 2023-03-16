<script lang="ts">
	import { path } from '$lib/data';
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
			<tr>
				<td>
					<img
						class="image"
						src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
						alt=""
					/>
				</td>
				<td>Stunning concept art</td>
				<td>59.<sup>99</sup></td>
				<td>Maria Andres</td>
				<td>
					<a href="/message" class="link"><img class="message" src="{path}message.png" alt="" /></a>
				</td>
			</tr>
			<tr>
				<td>
					<img
						class="image"
						src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
						alt=""
					/>
				</td>
				<td>Ai generated concept art</td>
				<td>79.<sup>99</sup></td>
				<td>Francisco Chang</td>
				<td>
					<a href="/message" class="link"><img class="message" src="{path}message.png" alt="" /></a>
				</td>
			</tr>
			<tr>
				<td>
					<img
						class="image"
						src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
						alt=""
					/>
				</td>
				<td>High quality digital character</td>
				<td>110.<sup>99</sup></td>
				<td>Roland Mendel</td>
				<td>
					<a href="/message" class="link"><img class="message" src="{path}message.png" alt="" /></a>
				</td>
			</tr>
			<tr>
				<td>
					<img
						class="image"
						src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
						alt=""
					/>
				</td>
				<td>Illustration hyper realistic painting</td>
				<td>39.<sup>99</sup></td>
				<td>Helen Bennett</td>
				<td>
					<a href="/message" class="link"><img class="message" src="{path}message.png" alt="" /></a>
				</td>
			</tr>
			<tr>
				<td>
					<img
						class="image"
						src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
						alt=""
					/>
				</td>
				<td>Original ai generated digital art</td>
				<td>119.<sup>99</sup></td>
				<td>Michael Green</td>
				<td>
					<a href="/message" class="link"><img class="message" src="{path}message.png" alt="" /></a>
				</td>
			</tr>
			<tr>
				<td>
					<img
						class="image"
						src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
						alt=""
					/>
				</td>
				<td>Text based ai generated art</td>
				<td>49.<sup>99</sup></td>
				<td>Giovanni Rock</td>
				<td>
					<a href="/message" class="link"><img class="message" src="{path}message.png" alt="" /></a>
				</td>
			</tr>
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

				// button {
				// 	background-color: #1dbf73;
				// 	color: white;
				// 	font-weight: 500;
				// 	border: none;
				// 	padding: 10px;
				// 	cursor: pointer;
				// }
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
