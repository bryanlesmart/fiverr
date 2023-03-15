<script lang="ts">
	import { Featured, TrustedBy, Slide } from '../lib/components';
	import { cards } from '../lib/data';
</script>

<div class="home">
	<Featured />
	<TrustedBy />
	<Slide {cards} />
</div>
