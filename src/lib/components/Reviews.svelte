<script lang="ts">
	import { path, reviews } from '$lib/data';
	import AddReview from './AddReview.svelte';

	let isPayment: boolean = true;
</script>

<div class="reviews">
	<h2>Reviews</h2>
	{#each reviews as review}
		<div class="item">
			<div class="user">
				<img class="pp" src={review.img} alt={review.username} />
				<div class="info">
					<span>{review.username}</span>
					<div class="country">
						<img src={review.countryFlag} alt={review.country} />
						<span>{review.country}</span>
					</div>
				</div>
			</div>
			<div class="stars">
				<img src="{path}star.png" alt="" />
				<img src="{path}star.png" alt="" />
				<img src="{path}star.png" alt="" />
				<img src="{path}star.png" alt="" />
				<img src="{path}star.png" alt="" />
				<span>{review.rating}</span>
			</div>
			<p>
				{review.reviewMessage}
			</p>
			<div class="helpful">
				<span>Helpful?</span>
				<img src="{path}like.png" alt="" />
				<span>Yes</span>
				<img src="{path}dislike.png" alt="" />
				<span>No</span>
			</div>
		</div>
		<hr />
	{/each}
	{#if isPayment}
		<AddReview />
	{/if}
</div>

<style lang="scss">
	.reviews {
		margin-top: 50px;
		.item {
			display: flex;
			flex-direction: column;
			gap: 20px;
			margin: 20px 0px;
			.user {
				display: flex;
				align-items: center;
				.pp {
					height: 50px;
					width: 50px;
					border-radius: 50%;
				}

				.country {
					display: flex;
					align-items: center;
					gap: 10px;
					color: gray;

					img {
						width: 20px;
					}
				}
			}

			.stars {
				display: flex;
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

			.helpful {
				display: flex;
				align-items: center;
				gap: 10px;

				img {
					width: 14px;
				}
			}
		}

		hr {
			height: 0;
			border: 0.5px solid lightgray;
			margin: 50px 0px;
		}
	}
</style>
