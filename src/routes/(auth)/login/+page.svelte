<div class="login">
	<form action="?/login" method="post">
		<h1>Sign in</h1>
		<label for="username">Username</label>
		<input name="username" type="text" placeholder="johndoe" />

		<label for="password">Password</label>
		<input name="password" type="password" />
		<button type="submit">Login</button>
	</form>
</div>

<style lang="scss">
	.login {
		display: flex;
		align-items: center;
		justify-content: center;

		form {
			width: 360px;
			padding: 100px 0px;
			display: flex;
			flex-direction: column;
			gap: 20px;

			h1 {
				color: gray;
				margin-bottom: 20px;
			}

			label {
				color: gray;
				font-size: 18px;
			}

			input {
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
		}
	}
</style>
