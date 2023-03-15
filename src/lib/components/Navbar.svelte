<div class="navbar">
	<div class="container">
		<div class="logo">
			<span class="text">fiverr</span>
			<span class="dot">.</span>
		</div>
		<div class="links">
			<span>Fiverr Business</span>
			<span>Explore</span>
			<span>English</span>
			<span>Sign in</span>
			<span>Become a seller</span>
			<button>Join</button>
		</div>
	</div>
</div>

<style lang="scss">
	.navbar {
		display: flex;
		justify-content: center;
		background-color: #013914;
		color: white;
		.container {
			width: 1400px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20px 0px;
			.logo {
				font-size: 34px;
				font-weight: bold;
				.text {
				}
				.dot {
					color: #1dbf73;
				}
			}
			.links {
				display: flex;
				align-items: center;
				gap: 24px;
				font-weight: bold;
				font-family: 'Montserrat', sans-serif;
				button {
					color: white;
					padding: 10px 20px;
					border-radius: 5px;
					border: 1px solid white;
					cursor: pointer;
					background-color: transparent;
					&:hover {
						background-color: #1dbf73;
						border-color: #1dbf73;
					}
				}
			}
		}
	}
</style>
