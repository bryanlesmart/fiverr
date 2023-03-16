<script lang="ts">
	import '../app.scss';
	import { Navbar, Footer } from '../lib/components';
</script>

<svelte:head>
	<title>fiverr</title>
</svelte:head>
<div class="app">
	<Navbar />
	<slot />
	<Footer />
</div>
