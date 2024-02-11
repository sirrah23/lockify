<script lang="ts">
	import type { Lock } from '$lib/data/db';
	import Code from './Code.svelte';
	export let lock: Lock;
	let reveal = false;
</script>

<div class="box">
	<div class="block">
		<p class="is-size-5">Date and time: {lock.createdAt.toLocaleString("en-US")}</p>
	</div>
	<div class="block">
		<Code code={lock.lock} {reveal} />
		<button class="button is-small" on:click={() => reveal = !reveal}>👁</button>
	</div>
	<div class="block">
		<p>Note:</p>
		<textarea class="textarea" readonly disabled>{lock.note || ''}</textarea>
	</div>
</div>

<style>
	.textarea {
		height: 5rem;
		width: 50%;
	}
</style>
