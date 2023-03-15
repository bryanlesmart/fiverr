<div class="featured">
	<div class="container">
		<div class="left">
			<h1>
				Find the perfect <span>freelance</span> services for your business
			</h1>
			<div class="search">
				<div class="searchInput">
					<img src="./img/search.png" alt="" />
					<input type="text" placeholder="Try building mobil app" />
				</div>
				<button>Search</button>
			</div>
			<div class="popular">
				<span>Popular:</span>
				<button>Web Design</button>
				<button>WordPress</button>
				<button>Logo Design</button>
				<button>AI Services</button>
			</div>
		</div>
		<div class="right">
			<img
				src="https://raw.githubusercontent.com/safak/youtube23/fiverr-ui/public/img/man.png"
				alt=""
			/>
		</div>
	</div>
</div>

<style lang="scss">
	.featured {
		height: 600px;
		display: flex;
		justify-content: center;
		background-color: #013914;
		color: white;

		.container {
			width: 1400px;
			display: flex;
			align-items: center;

			.left {
				display: flex;
				flex-direction: column;
				gap: 30px;

				h1 {
					font-size: 50px;

					span {
						font-style: italic;
						font-weight: 300;
					}
				}

				.search {
					background-color: white;
					border-radius: 5px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					overflow: hidden;

					.searchInput {
						display: flex;
						align-items: center;
						gap: 10px;
						img {
							width: 20px;
							height: 20px;
							margin: 10px;
						}

						input {
							border: none;
							outline: none;

							&::placeholder {
								color: gray;
							}
						}
					}

					button {
						width: 120px;
						height: 50px;
						border: none;
						background-color: #1dbf73;
						color: white;
						align-self: flex-end;
						cursor: pointer;
					}
				}

				.popular {
					display: flex;
					align-items: center;
					gap: 10px;

					span {
						width: max-content;
					}

					button {
						width: max-content;
						color: white;
						border: 1px solid white;
						padding: 5px 10px;
						border-radius: 20px;
						background-color: transparent;
						font-size: 14px;
					}
				}
			}

			.right {
				height: 100%;
				img {
					height: 100%;
					object-fit: contain;
				}
			}
		}
	}
</style>
