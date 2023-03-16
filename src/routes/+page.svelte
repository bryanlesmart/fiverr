<script lang="ts">
	import { Featured, TrustedBy, Slide, ProjectCard } from '../lib/components';
	import { path } from '../lib/data';
</script>

<div class="home">
	<Featured />
	<TrustedBy />
	<!-- <Slide {cards} /> -->
	<h1 style="text-align: center; ">SLIDE</h1>
	<div class="features">
		<div class="container">
			<div class="item">
				<h1>A whole world of freelance talent at your fingertips</h1>
				<div class="title">
					<img src="{path}check.png" alt="" />
					The best for every budget
				</div>
				<p>
					Find high-quality services at every price point. No hourly rates, just project-based
					pricing.
				</p>
				<div class="title">
					<img src="{path}check.png" alt="" />
					Quality work done quickly
				</div>
				<p>Find the right freelancer to begin working on your project within minutes.</p>
				<div class="title">
					<img src="{path}check.png" alt="" />
					Protected payments, every time
				</div>
				<p>
					Always know what you'll pay upfront. Your payment isn't released until you approve the
					work.
				</p>
				<div class="title">
					<img src="{path}check.png" alt="" />
					24/7 support
				</div>
				<p>
					Find high-quality services at every price point. No hourly rates, just project-based
					pricing.
				</p>
			</div>
			<div class="item">
				<!-- svelte-ignore a11y-media-has-caption -->
				<video src="{path}video.mp4" controls />
			</div>
		</div>
	</div>
	<div class="explore">
		<div class="container">
			<h1>Explore the marketplace</h1>
			<div class="items">
				<div class="item">
					<img
						src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
						alt=""
					/>
					<div class="line" />
					<span>Graphics & Design</span>
				</div>
				<div class="item">
					<img
						src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
						alt=""
					/>
					<div class="line" />

					<span>Digital Marketing</span>
				</div>
				<div class="item">
					<img
						src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
						alt=""
					/>
					<div class="line" />
					<span>Writing & Translation</span>
				</div>
				<div class="item">
					<img
						src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
						alt=""
					/>
					<div class="line" />
					<span>Video & Animation</span>
				</div>
				<div class="item">
					<img
						src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
						alt=""
					/>
					<div class="line" />
					<span>Music & Audio</span>
				</div>
				<div class="item">
					<img
						src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
						alt=""
					/>
					<div class="line" />
					<span>Programming & Tech</span>
				</div>
				<div class="item">
					<img
						src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
						alt=""
					/>
					<div class="line" />
					<span>Business</span>
				</div>
				<div class="item">
					<img
						src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
						alt=""
					/>
					<div class="line" />
					<span>Lifestyle</span>
				</div>
				<div class="item">
					<img
						src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
						alt=""
					/>
					<div class="line" />
					<span>Data</span>
				</div>
				<div class="item">
					<img
						src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
						alt=""
					/>
					<div class="line" />
					<span>Photography</span>
				</div>
			</div>
		</div>
	</div>
	<div class="features dark">
		<div class="container">
			<div class="item">
				<h1>
					liver <i>business</i>
				</h1>
				<h1>
					A business solution designed for <i>teams</i>
				</h1>
				<p>
					Upgrade to a curated experience packed with tools and benefits, dedicated to businesses
				</p>
				<div class="title">
					<img src="{path}check.png" alt="" />
					Connect to freelancers with proven business experience
				</div>

				<div class="title">
					<img src="{path}check.png" alt="" />
					Get matched with the perfect talent by a customer success manager
				</div>

				<div class="title">
					<img src="{path}check.png" alt="" />
					Manage teamwork and boost productivity with one powerful workspace
				</div>
				<button>Explore Liver Business</button>
			</div>
			<div class="item">
				<img
					src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
					alt=""
				/>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.home {
		.features {
			background-color: #f1fdf7;
			display: flex;
			justify-content: center;
			padding: 100px 0px;

			&.dark {
				background-color: #0d084d;

				h1 {
					color: white !important;
				}

				i {
					font-weight: 300;
				}

				p {
					margin-bottom: 20px;
					color: white !important;
				}

				.title {
					color: white !important;
					font-weight: 300 !important;
					font-size: 14px !important;
				}

				button {
					background-color: #1dbf73;
					border: none;
					color: white;
					padding: 10px 20px;
					border-radius: 5px;
					width: max-content;
					font-size: 16px;
					cursor: pointer;
					margin-top: 20px;
				}
			}

			.container {
				width: 1400px;
				display: flex;
				align-items: center;
				gap: 200px;
				.item {
					display: flex;
					flex-direction: column;
					gap: 15px;
					&:first-child {
						flex: 2;
					}
					&:last-child {
						flex: 3;
					}

					img {
						width: 100%;
					}
					h1 {
						font-weight: 500;
						margin-bottom: 10px;
					}
					.title {
						display: flex;
						align-items: center;
						gap: 10px;
						font-weight: 500;
						font-size: 18px;
						color: #666;
						img {
							width: 24px;
							height: 24px;
						}
					}
					p {
						font-size: 18px;
						font-weight: 300;
						color: gray;
						line-height: 28px;
						letter-spacing: 1px;
					}

					video {
						width: 720px;
					}
				}
			}

			//   &.reverse {
			//     background-color: #0d084d;
			//     color: white;
			//     .container {
			//       flex-direction: row-reverse;
			//     }
			//   }
		}

		.explore {
			display: flex;
			justify-content: center;
			padding: 100px 0px;

			.container {
				width: 1400px;

				h1 {
					color: #555;
				}

				.items {
					width: 100%;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;

					.item {
						width: 250px;
						height: 150px;
						display: flex;
						flex-direction: column;
						gap: 10px;
						align-items: center;
						justify-content: center;
						text-align: center;
						cursor: pointer;

						img {
							width: 50px;
							height: 50px;
						}

						.line {
							width: 50px;
							height: 2px;
							background-color: lightgray;
							transition: all 0.3s ease;
						}

						span {
							font-weight: 300;
						}

						&:hover {
							.line {
								width: 80px;
								background-color: #1dbf73;
							}
						}
					}
				}
			}
		}
	}
</style>
