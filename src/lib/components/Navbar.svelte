<script lang="ts">
	import { onMount } from 'svelte';

	let active: boolean = false;
	let modal: boolean = false;

	const isActive = () => {
		window.scrollY > 0 ? (active = true) : (active = false);
	};

	interface CurrentUser {
		id: number;
		username: string;
		isSeller: boolean;
	}
	const currentUser: CurrentUser = {
		id: 1,
		username: 'M',
		isSeller: true
	};
	onMount(() => {
		window.addEventListener('scroll', isActive);
		return () => {
			window.removeEventListener('scroll', isActive);
		};
	});

	function toggleModal() {
		modal = !modal;
	}
</script>

<div class={active ? 'navbar active' : 'navbar'}>
	<div class="container">
		<div class="logo">
			<a href="/" class="link">
				<span class="text">fiverr</span>
			</a>
			<span class="dot">.</span>
		</div>
		<div class="links">
			<span>Fiverr Business</span>
			<span>Explore</span>
			<span>English</span>
			<span>Sign in</span>
			{#if !currentUser.isSeller}
				<span>Become a seller</span>
			{/if}
			{#if !currentUser}
				<button>Join</button>
			{:else}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="user" on:click={toggleModal}>
					<img src="https://picsum.photos/id/237/200/300" alt="/" />
					<span>{currentUser?.username}</span>
					{#if modal}
						<div class="options">
							{#if currentUser?.isSeller}
								<span>Gigs</span>
								<span>Add new Gigs</span>
							{/if}
							<span>Orders</span>
							<span>Message</span>
							<span>Logout</span>
						</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>
	<hr />
	{#if active}
		<div class="menu">
			<span>test</span>
			<span>test2</span>
		</div>
	{/if}
</div>

<style lang="scss">
	.navbar {
		display: flex;
		justify-content: center;
		background-color: #013914;
		flex-direction: column;
		color: white;
		align-items: center;
		transition: 0.5 all ease;
		position: sticky;
		top: 0;

		&.active {
			background-color: white;
			color: black;
		}
		.container {
			width: 1400px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20px 0px;
			.logo {
				font-size: 34px;
				font-weight: bold;

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

				.user {
					display: flex;
					align-items: center;
					gap: 10px;
					cursor: pointer;
					position: relative;

					img {
						width: 32px;
						height: 32px;
						border-radius: 50%;
						object-fit: cover;
					}

					.options {
						position: absolute;
						top: 50px;
						right: 0;
						padding: 20px;
						background-color: white;
						border-radius: 10px;
						z-index: 999;
						border: 1px solid lightgrey;
						display: flex;
						flex-direction: column;
						gap: 10px;
						width: 200px;
						font-weight: 300;
						color: gray;
					}
				}
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

		hr {
			width: 100%;
			height: 0;
			border: 0.5px solid rgb(228, 277, 277);
		}
		.menu {
			width: 1400px;
			padding: 10px 0px;
			display: flex;
			justify-content: space-between;
			font-weight: 300;
			color: gray;
			font-family: 'Montserrat', sans-serif;
		}
	}
</style>
