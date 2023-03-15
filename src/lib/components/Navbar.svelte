<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
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

<div class={active || $page.url.pathname !== '/' ? 'navbar active' : 'navbar'}>
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
								<a href="/gigs"><span>Gigs</span></a>
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

	{#if active || $page.url.pathname !== '/'}
		<hr />
		<div class="menu">
			<a href="/" class="link menu-link">
				<span>Graphics & Design</span>
			</a>
			<a href="/" class="link menu-link">
				<span>Graphics & Design</span>
			</a>
			<a href="/" class="link menu-link">
				<span>Video & Animation</span>
			</a>
			<a href="/" class="link menu-link">
				<span>Writing & Translation</span>
			</a>
			<a href="/" class="link menu-link">
				<span>A1 Services</span>
			</a>
			<a href="/" class="link menu-link">
				<span>Digital Marketing</span>
			</a>
			<a href="/" class="link menu-link">
				<span>Music & Audio</span>
			</a>
			<a href="/" class="link menu-link">
				<span>Programming & Tech</span>
			</a>
			<a href="/" class="link menu-link">
				<span>Lifestyle</span>
			</a>
		</div>
		<hr />
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
		z-index: 999;
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
				span {
					white-space: nowrap;
				}
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
			width: calc(100% - 2px);
			height: 0;
			border-top: 0.5px solid #ebe9e9;
			border-bottom: 0.5px solid #ebe9e9;
		}
		.menu {
			width: 1400px;
			padding: 10px 0px;
			display: inline-block;
			padding: 10px 20px;
			align-items: center;
			gap: 10px;
			color: gray;
			font-weight: 300;
			font-family: 'Montserrat', sans-serif;
		}
	}
</style>
