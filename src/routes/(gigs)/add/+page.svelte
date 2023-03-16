<div class="add">
	<div class="container">
		<h1>Add New Gig</h1>
		<div class="sections">
			<div class="info">
				<label for="">Title</label>
				<input type="text" placeholder="e.g. I will do something I'm really good at" />
				<label for="">Category</label>
				<select name="cats" id="cats">
					<option value="design">Design</option>
					<option value="web">Web Development</option>
					<option value="animation">Animation</option>
					<option value="music">Music</option>
				</select>
				<label for="">Cover Image</label>
				<input type="file" />
				<label for="">Upload Images</label>
				<input type="file" multiple />
				<label for="">Description</label>
				<textarea
					name=""
					id=""
					placeholder="Brief descriptions to introduce your service to customers"
					cols="0"
					rows="16"
				/>
				<button>Create</button>
			</div>
			<div class="details">
				<label for="">Service Title</label>
				<input type="text" placeholder="e.g. One-page web design" />
				<label for="">Short Description</label>
				<textarea
					name=""
					id=""
					placeholder="Short description of your service"
					cols="30"
					rows="10"
				/>
				<label for="">Delivery Time (e.g. 3 days)</label>
				<input type="number" />
				<label for="">Revision Number</label>
				<input type="number" />
				<label for="">Add Features</label>
				<input type="text" placeholder="e.g. page design" />
				<input type="text" placeholder="e.g. file uploading" />
				<input type="text" placeholder="e.g. setting up a domain" />
				<input type="text" placeholder="e.g. hosting" />
				<label for="">Price</label>
				<input type="number" />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.add {
		display: flex;
		justify-content: center;

		.container {
			width: 1400px;
			padding: 50px 0px;

			h1 {
				width: max-content;
				margin-bottom: 30px;
				color: gray;
				font-weight: 300;
			}

			.sections {
				display: flex;
				justify-content: space-between;
				gap: 100px;

				label {
					color: gray;
					font-size: 18px;
				}

				.info,
				.details {
					flex: 1;
					display: flex;
					flex-direction: column;
					gap: 10px;
					justify-content: space-between;

					input,
					select,
					textarea {
						padding: 20px;
					}

					button {
						border: none;
						padding: 20px;
						color: white;
						font-weight: 500;
						font-size: 18px;
						background-color: #1dbf73;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>
