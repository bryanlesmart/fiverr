<script lang="ts">
	import { path } from '$lib/data';
	import { AboutGig } from '$lib/components';
</script>

<div class="gig">
	<div class="container">
		<AboutGig />
		<div class="right">
			<div class="price">
				<h3>1 AI generated image</h3>
				<h2>$ 59.99</h2>
			</div>
			<p>
				I will create a unique high quality AI generated image based on a description that you give
				me
			</p>
			<div class="details">
				<div class="item">
					<img src="{path}clock.png" alt="" />
					<span>2 Days Delivery</span>
				</div>
				<div class="item">
					<img src="{path}recycle.png" alt="" />
					<span>3 Revisions</span>
				</div>
			</div>
			<div class="features">
				<div class="item">
					<img src="{path}greencheck.png" alt="" />
					<span>Prompt writing</span>
				</div>
				<div class="item">
					<img src="{path}greencheck.png" alt="" />
					<span>Artwork delivery</span>
				</div>
				<div class="item">
					<img src="{path}greencheck.png" alt="" />
					<span>Images</span>
				</div>
				<div class="item">
					<img src="{path}greencheck.png" alt="" />
					<span>Additional design</span>
				</div>
			</div>
			<a href="/pay" class="link btn">Continue</a>
		</div>
	</div>
</div>

<style lang="scss">
	.gig {
		display: flex;
		justify-content: center;

		.container {
			width: 1400px;
			padding: 30px 0px;
			display: flex;
			gap: 50px;
			.right {
				flex: 1;
				border: 1px solid lightgray;
				padding: 20px;
				border-radius: 5px;
				display: flex;
				flex-direction: column;
				gap: 20px;
				height: max-content;
				max-height: 500px;
				position: sticky;
				top: 150px;

				.price {
					display: flex;
					align-items: center;
					justify-content: space-between;

					h2 {
						font-weight: 300;
					}

					h3 {
						font-weight: 500;
					}
				}

				p {
					color: gray;
					margin: 10px 0px;
				}

				.details {
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 14px;

					.item {
						display: flex;
						align-items: center;
						gap: 10px;

						img {
							width: 20px;
						}
					}
				}

				.features {
					.item {
						display: flex;
						align-items: center;
						gap: 10px;
						font-weight: 300;
						color: gray;
						margin-bottom: 5px;

						img {
							width: 14px;
						}
					}
				}

				.btn {
					background-color: #1dbf73;
					padding: 10px;
					color: white;
					font-weight: 500;
					border: none;
					font-size: 18px;
					cursor: pointer;
					text-align: center;
				}
			}
		}
	}
</style>
