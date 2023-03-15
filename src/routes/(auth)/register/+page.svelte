<div class="register">
	<form>
		<div class="left">
			<h1>Create a new account</h1>
			<label for="username">Username</label>
			<input name="username" type="text" placeholder="johndoe" />
			<label for="email">Email</label>
			<input name="email" type="email" placeholder="email" />
			<label for="password">Password</label>
			<input name="password" type="password" />
			<label for="file">Profile Picture</label>
			<input type="file" />
			<label for="country">Country</label>
			<input name="country" type="text" placeholder="Usa" />
			<button type="submit">Register</button>
		</div>
		<div class="right">
			<h1>I want to become a seller</h1>
			<div class="toggle">
				<label for="">Activate the seller account</label>
				<label class="switch">
					<input type="checkbox" />
					<span class="slider round" />
				</label>
			</div>
			<label for="">Phone Number</label>
			<input name="phone" type="text" placeholder="+1 234 567 89" />
			<label for="">Description</label>
			<textarea
				placeholder="A short description of yourself"
				name="desc"
				id=""
				cols="30"
				rows="10"
			/>
		</div>
	</form>
</div>

<style lang="scss">
	.register {
		display: flex;
		align-items: center;
		justify-content: center;

		form {
			width: 960px;
			padding: 100px 0px;
			display: flex;
			gap: 120px;

			h1 {
				color: gray;
				margin-bottom: 20px;
			}

			.left,
			.right {
				flex: 1;
				display: flex;
				flex-direction: column;
				gap: 10px;
				justify-content: space-between;

				label {
					color: gray;
					font-size: 18px;
				}

				input,
				textarea {
					padding: 20px;
					border: 1px solid rgb(216, 214, 214);
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

				.toggle {
					display: flex;
					align-items: center;
					gap: 10px;

					.switch {
						position: relative;
						display: inline-block;
						width: 50px;
						height: 24px;
					}

					/* Hide default HTML checkbox */
					.switch input {
						opacity: 0;
						width: 0;
						height: 0;
					}

					.slider {
						position: absolute;
						cursor: pointer;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background-color: #ccc;
						-webkit-transition: 0.4s;
						transition: 0.4s;
						border-radius: 24px;
					}

					.slider:before {
						position: absolute;
						content: '';
						height: 16px;
						width: 16px;
						left: 4px;
						bottom: 4px;
						background-color: white;
						-webkit-transition: 0.4s;
						transition: 0.4s;
						border-radius: 50%;
					}

					input:checked + .slider {
						background-color: #2196f3;
					}

					input:focus + .slider {
						box-shadow: 0 0 1px #2196f3;
					}

					input:checked + .slider:before {
						-webkit-transform: translateX(26px);
						-ms-transform: translateX(26px);
						transform: translateX(26px);
					}
				}
			}
		}
	}
</style>
