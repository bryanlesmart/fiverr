<script>
	import Reviews from './Reviews.svelte';
	import { path, gig } from '$lib/data';
</script>

{#each gig as item}
	<div class="left">
		<span class="breadcrumbs">Liver > Graphics & Design ></span>
		<h1>I will create ai generated art for you</h1>
		<div class="user">
			<img class="pp" src={item.userImg} alt="" />
			<span>{item.username}</span>
			<div class="stars">
				<img src="{path}star.png" alt="" />
				<img src="{path}star.png" alt="" />
				<img src="{path}star.png" alt="" />
				<img src="{path}star.png" alt="" />
				<img src="{path}star.png" alt="" />
				<span>{item.rating}</span>
			</div>
		</div>
		<div class="slider">
			<img
				src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
				alt=""
			/>
			<img
				src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
				alt=""
			/>
			<img
				src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
				alt=""
			/>
		</div>
		<h2>About This Gig</h2>
		<p>
			{item.gigContent}
		</p>
		<div class="seller">
			<h2>About The Seller</h2>
			<div class="user">
				<img src={item.userImg} alt="" />
				<div class="info">
					<span>{item.username}</span>
					<div class="stars">
						<img src="{path}star.png" alt="" />
						<img src="{path}star.png" alt="" />
						<img src="{path}star.png" alt="" />
						<img src="{path}star.png" alt="" />
						<img src="{path}star.png" alt="" />
						<span>{item.rating}</span>
					</div>
					<button>Contact Me</button>
				</div>
			</div>
			<div class="box">
				<div class="items">
					<div class="item">
						<span class="title">From</span>
						<span class="desc">{item.country}</span>
					</div>
					<div class="item">
						<span class="title">Member since</span>
						<span class="desc">{item.memberDate}</span>
					</div>
					<div class="item">
						<span class="title">Avg. response time</span>
						<span class="desc">{item.averageTime}</span>
					</div>
					<div class="item">
						<span class="title">Last delivery</span>
						<span class="desc">{item.delivery}</span>
					</div>
					<div class="item">
						<span class="title">Languages</span>
						<span class="desc">{item.languages}</span>
					</div>
				</div>
				<hr />
				<p>
					{item.aboutMe}
				</p>
			</div>
		</div>

		<Reviews />
	</div>
{/each}

<style lang="scss">
	.left {
		flex: 2;
		display: flex;
		flex-direction: column;
		gap: 20px;

		.breadcrumbs {
			font-weight: 300;
			text-transform: uppercase;
			font-size: 13px;
			color: #555;
		}

		.user {
			display: flex;
			align-items: center;
			gap: 10px;

			.pp {
				width: 32px;
				height: 32px;
				border-radius: 50%;
				object-fit: cover;
			}

			span {
				font-size: 14px;
				font-weight: 500;
			}

			.stars {
				display: flex;
				align-items: center;
				gap: 5px;

				img {
					height: 14px;
					width: 14px;
				}

				span {
					font-size: 14px;
					font-weight: bold;
					color: #ffc108;
				}
			}
		}

		.slider {
			background-color: #f5f5f5;
			img {
				max-height: 500px;
				object-fit: contain;
			}
		}

		h2 {
			font-weight: 400;
		}

		p {
			font-weight: 300;
			line-height: 25px;
			color: #555;
		}

		.seller {
			margin-top: 50px;
			display: flex;
			flex-direction: column;
			gap: 20px;

			.user {
				display: flex;
				align-items: center;
				gap: 20px;

				img {
					width: 100px;
					height: 100px;
					border-radius: 50%;
					object-fit: cover;
				}

				.info {
					display: flex;
					flex-direction: column;
					gap: 10px;

					.stars {
						display: flex;
						align-items: center;
						gap: 5px;

						img {
							height: 14px;
							width: 14px;
						}

						span {
							font-size: 14px;
							font-weight: bold;
							color: #ffc108;
						}
					}

					button {
						background-color: white;
						border-radius: 5px;
						border: 1px solid gray;
						padding: 10px;
					}
				}
			}

			.box {
				border: 1px solid lightgray;
				border-radius: 5px;
				padding: 20px;
				margin-top: 20px;

				.items {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;

					.item {
						width: 300px;
						display: flex;
						flex-direction: column;
						gap: 10px;
						margin-bottom: 20px;

						.title {
							font-weight: 300;
						}
					}
				}

				hr {
					height: 0;
					border: 0.5px solid lightgray;
					margin-bottom: 20px;
				}
			}
		}
	}
</style>
