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

<div class="myGigs">
	<div class="container">
		<div class="title">
			<h1>{currentUser.isSeller ? 'Gigs' : 'Orders'}</h1>
			{#if currentUser.isSeller}
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
				<td>13</td>
				<td>
					<img class="delete" src="{path}delete.png" alt="" />
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
				<td>120.<sup>99</sup></td>
				<td>41</td>
				<td>
					<img class="delete" src="{path}delete.png" alt="" />
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
				<td>79.<sup>99</sup></td>
				<td>55</td>
				<td>
					<img class="delete" src="{path}delete.png" alt="" />
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
				<td>119.<sup>99</sup></td>
				<td>29</td>
				<td>
					<img class="delete" src="{path}delete.png" alt="" />
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
				<td>59.<sup>99</sup></td>
				<td>34</td>
				<td>
					<img class="delete" src="{path}delete.png" alt="" />
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
				<td>110.<sup>99</sup></td>
				<td>16</td>
				<td>
					<img class="delete" src="{path}delete.png" alt="" />
				</td>
			</tr>
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
						sup {
							font-size: 12px;
						}

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
