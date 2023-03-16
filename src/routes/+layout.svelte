<script lang="ts">
	import '../app.scss';
	import { Navbar, Footer } from '../lib/components';
</script>

<div>
	<Navbar />
	<slot />
	<Footer />
</div>
