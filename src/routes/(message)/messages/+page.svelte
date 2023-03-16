<script lang="ts">
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

	const message = `IM A SCIENTIST; BECAUSE I INVENT, TRANSFORM, CREATE, AND DESTROY FOR A LIVING, AND WHEN I DON'T LIKE SOMETHING ABOUT THE WORLD, I CHANGE IT.`;
</script>

<div class="messages">
	<div class="container">
		<div class="title">
			<h1>Messages</h1>
		</div>
		<table>
			<tr>
				<th>{currentUser.isSeller ? 'Buyer' : 'Seller'}</th>
				<th>Last Message</th>
				<th>Date</th>
				<th>Action</th>
			</tr>
			<tr class="active">
				<td>Charley Sharp</td>
				<td>
					<a href="/message/123" class="link">
						{message.substring(0, 100)}...
					</a>
				</td>
				<td>1 hour ago</td>
				<td>
					<button>Mark as Read</button>
				</td>
			</tr>
			<tr class="active">
				<td>John Doe</td>

				<td>
					<a href="/message/123" class="link">
						{message.substring(0, 100)}...
					</a>
				</td>
				<td>2 hours ago</td>
				<td>
					<button>Mark as Read</button>
				</td>
			</tr>
			<tr>
				<td>Elinor Good</td>
				<td>
					<a href="/message/123" class="link">
						{message.substring(0, 100)}...
					</a>
				</td>
				<td>1 day ago</td>
			</tr>
			<tr>
				<td>Garner David </td>
				<td>
					<a href="/message/123" class="link">
						{message.substring(0, 100)}...
					</a>
				</td>
				<td>2 days ago</td>
			</tr>
			<tr>
				<td>Troy Oliver</td>
				<td>{message.substring(0, 100)}</td>
				<td>1 week ago</td>
			</tr>
		</table>
	</div>
</div>

<style lang="scss">
	.messages {
		display: flex;
		justify-content: center;

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
					height: 100px;
					th {
						text-align: left;
					}
					td {
						padding: 10px;

						&:first-child {
							font-weight: 500;
						}

						&:nth-child(2),
						&:nth-child(3) {
							color: gray;
						}
					}

					button {
						background-color: #1dbf73;
						color: white;
						padding: 10px;
						border: none;
						cursor: pointer;
					}

					&.active {
						background-color: #1dbf730f;
					}
				}
			}
		}
	}
</style>
