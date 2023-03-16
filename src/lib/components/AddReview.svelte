<div class="review">
	<div class="add">
		<h3>Add a review</h3>
		<form action="" class="addForm">
			<textarea placeholder="write your opinion" />
			<select name="" id="">
				<option value={1}>1</option>
				<option value={2}>2</option>
				<option value={3}>3</option>
				<option value={4}>4</option>
				<option value={5}>5</option>
			</select>
			<button>Send</button>
		</form>
	</div>
	<hr />
</div>

<style lang="scss">
	.review {
		margin-top: 90px;

		.add {
			margin-top: 20px;
			display: flex;
			flex-direction: column;
			gap: 20px;

			.addForm {
				display: flex;
				flex-direction: column;
				gap: 20px;

				textarea {
					padding: 20px;
				}

				select {
					width: 200px;
					padding: 20px;
					align-self: flex-end;
				}
				button {
					align-self: flex-end;
					width: 100px;
					border: none;
					padding: 10px;
					color: white;
					background-color: #1dbf73;
					cursor: pointer;
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
