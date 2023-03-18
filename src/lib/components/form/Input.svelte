<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface $$Props extends HTMLInputAttributes {
		name: string;
		label?: string;
		id: string;
		type?: string;
		value?: string | undefined;
		errors?: string[] | undefined;
	}

	export let label: string | undefined = undefined;
	export let name: string;
	export let id: string;
	export let type: string = 'text';
	// export let value: string | undefined = undefined;
	// export let errors: string[] | undefined = undefined;
</script>

<label for={name}>{label}</label>
<input {type} {name} {id} />

<style>
</style>
