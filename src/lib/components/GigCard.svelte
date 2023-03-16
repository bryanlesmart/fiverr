<script lang="ts">
	type TGig = {
		id: number;
		img: string;
		pp: string;
		desc: string;
		price: number;
		star: number;
		username: string;
	};

	export let gig: TGig;
</script>

<a href="/gig/123" class="link cards">
	<div class="gigCard">
		<img src={gig.img} alt="" />
		<div class="info">
			<div class="user">
				<img src={gig.pp} alt="" />
				<span>{gig.username}</span>
			</div>
			<p>{gig.desc}</p>
			<div class="star">
				<img src="" alt="" />
				<span>{gig.star}</span>
			</div>
		</div>
		<hr />
		<div class="detail">
			<img src="" alt="" />
			<div class="price">
				<span>STARTING AT</span>
				<h2>$ {gig.price}</h2>
				<!-- <sup>99</sup> -->
			</div>
		</div>
	</div>
</a>

<style lang="scss">
	.gigCard {
		width: 324px;
		height: 400px;
		// border: 1px solid rgb(237, 236, 236);
		border: 1px solid rgb(228, 228, 228);
		margin-bottom: 40px;

		img {
			width: 100%;
			height: 50%;
			object-fit: cover;
		}

		.info {
			padding: 10px 20px;
			display: flex;
			flex-direction: column;
			gap: 20px;

			.user {
				display: flex;
				align-items: center;
				gap: 10px;

				img {
					width: 26px;
					height: 26px;
					border-radius: 50%;
					object-fit: cover;
				}
			}

			p {
				color: #111;
			}

			.star {
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

		hr {
			height: 0;
			border: 0.5px solid rgb(228, 228, 228);
		}

		.detail {
			padding: 10px 20px;
			display: flex;
			align-items: center;
			justify-content: space-between;

			img {
				width: 16px;
				height: 16px;
				cursor: pointer;
				object-fit: cover;
			}

			.price {
				span {
					color: #999;
					font-size: 12px;
				}

				h2 {
					color: #555;
					font-size: 18px;
					font-weight: 400;
					text-align: end;
				}

				sup {
					font-size: 12px;
					font-weight: 300;
				}
			}
		}
	}
</style>
