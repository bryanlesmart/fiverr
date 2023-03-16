<div class="footer">
	<div class="container">
		<div class="top">
			<div class="item">
				<h2>Categories</h2>
				<span>Graphics & Design</span>
				<span>Digital Marketing</span>
				<span>Writing & Translation</span>
				<span>Video & Animation</span>
				<span>Music & Audio</span>
				<span>Programming & Tech</span>
				<span>Data</span>
				<span>Business</span>
				<span>Lifestyle</span>
				<span>Photography</span>
				<span>Sitemap</span>
			</div>
			<div class="item">
				<h2>About</h2>
				<span>Press & News</span>
				<span>Partnerships</span>
				<span>Privacy Policy</span>
				<span>Terms of Service</span>
				<span>Intellectual Property Claims</span>
				<span>Investor Relations</span>
				<span>Contact Sales</span>
			</div>
			<div class="item">
				<h2>Support</h2>
				<span>Help & Support</span>
				<span>Trust & Safety</span>
				<span>Selling on Fiverr</span>
				<span>Buying on Fiverr</span>
			</div>
			<div class="item">
				<h2>Community</h2>
				<span>Customer Success Stories</span>
				<span>Community hub</span>
				<span>Forum</span>
				<span>Events</span>
				<span>Blog</span>
				<span>Influencer</span>
				<span>Affiliates</span>
				<span>Podcast</span>
				<span>Invite a Friend</span>
				<span>Become a Seller</span>
				<span>Community Standards</span>
			</div>
			<div class="item">
				<h2>More From Fiverr</h2>
				<span>Fiverr Business</span>
				<span>Fiverr Pro</span>
				<span>Fiverr Logo Maker</span>
				<span>Fiverr Guides</span>
				<span>Get Inspired</span>
				<span>Fiverr Select</span>
				<span>ClearVoice</span>
				<span>Fiverr Workspace</span>
				<span>Learn</span>
				<span>Working Not Working</span>
			</div>
		</div>
		<hr />
		<div class="bottom">
			<div class="left">
				<h2>fiverr</h2>
				<span>© Fiverr International Ltd. 2023</span>
			</div>
			<div class="right">
				<div class="social">
					<img src="/img/twitter.png" alt="" />
					<img src="/img/facebook.png" alt="" />
					<img src="/img/linkedin.png" alt="" />
					<img src="/img/pinterest.png" alt="" />
					<img src="/img/instagram.png" alt="" />
				</div>
				<div class="link">
					<img src="/img/language.png" alt="" />
					<span>English</span>
				</div>
				<div class="link">
					<img src="/img/coin.png" alt="" />
					<span>USD</span>
				</div>
				<img src="/img/accessibility.png" alt="" />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.footer {
		display: flex;
		justify-content: center;
		color: #666;
		margin: 50px 0px;

		img {
			width: 24px;
			height: 24px;
		}

		.container {
			width: 1400px;
			.top {
				display: flex;
				justify-content: space-between;
				.item {
					display: flex;
					flex-direction: column;
					gap: 20px;
					h2 {
						font-size: 16px;
						color: #555;
					}
					span {
						font-weight: 300;
					}
				}
			}

			hr {
				margin: 50px 0px;
				height: 0;
				border: 1px solid #ebe9e9;
			}
			.bottom {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.left {
					width: max-content;
					display: flex;
					align-items: center;
					gap: 20px;

					span {
						font-size: 13px;
						white-space: nowrap;
					}
				}
				.right {
					width: max-content;
					display: flex;
					align-items: center;
					gap: 30px;

					.social {
						display: flex;
						gap: 20px;
					}

					.link {
						display: flex;
						align-items: center;
						gap: 10px;
					}
				}
			}
		}
	}
</style>
