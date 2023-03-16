<div class="message">
	<div class="container">
		<span class="breadcrumbs">
			<a href="/messages" class="link"><button>Messages</button></a> > John Doe >
		</span>
		<div class="messages">
			<div class="item">
				<img
					src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt=""
				/>
				<p>message by client</p>
			</div>
			<div class="item owner">
				<img
					src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt=""
				/>
				<p>message by the owner</p>
			</div>
		</div>
		<hr />
		<div class="write">
			<textarea placeholder="write a message" />
			<button>Send</button>
		</div>
	</div>
</div>

<style lang="scss">
	.message {
		display: flex;
		justify-content: center;
		.container {
			width: 1200px;
			margin: 50px;
			.breadcrumbs {
				font-weight: 300;
				font-size: 13px;
				color: #555;
				button {
					background-color: #1dbf73;
					color: white;
					font-weight: 500;
					border: none;
					padding: 10px;
					cursor: pointer;
				}
			}
			.messages {
				margin: 30px 0px;
				padding: 50px;
				display: flex;
				flex-direction: column;
				gap: 20px;
				height: 500px;
				overflow: scroll;

				.item {
					display: flex;
					gap: 20px;
					max-width: 600px;
					font-size: 18px;

					&.owner {
						flex-direction: row-reverse;
						align-self: flex-end;

						p {
							max-width: 500px;
							border-radius: 20px 0px 20px 20px;
							background-color: royalblue;
							color: white;
						}
					}

					img {
						width: 40px;
						height: 40px;
						border-radius: 50%;
						object-fit: cover;
					}

					p {
						max-width: 500px;
						padding: 20px;
						background-color: rgb(244, 241, 241);
						border-radius: 0px 20px 20px 20px;
						color: gray;
						font-weight: 300;
					}
				}
			}

			hr {
				height: 0;
				border: 0.5px solid rgb(232, 230, 230);
				margin-bottom: 20px;
			}

			.write {
				display: flex;
				align-items: center;
				justify-content: space-between;

				textarea {
					width: 80%;
					height: 100px;
					padding: 10px;
					border: 1px solid lightgray;
					border-radius: 10px;
				}

				button {
					background-color: #1dbf73;
					padding: 20px;
					color: white;
					font-weight: 500;
					border: none;
					border-radius: 10px;
					cursor: pointer;
					width: 100px;
				}
			}
		}
	}
</style>
