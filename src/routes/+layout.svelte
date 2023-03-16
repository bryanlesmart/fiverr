<script lang="ts">
	import '../app.scss';
	import { Navbar, Footer } from '../lib/components';
</script>

<div class="app">
	<Navbar />
	<slot />
	<Footer />
</div>
