<script lang="ts">
	import type { Lock } from '$lib/data/db';
	import Code from './Code.svelte';
	export let lock: Lock;
	let reveal = false;
</script>

<div class="box">
	<div class="block">
		<p>
			Code:
			<Code code={lock.lock} {reveal} />
			<label>
				<input type="checkbox" bind:checked={reveal} />
				Reveal
			</label>
		</p>
	</div>
	<div class="block">
		<p>Created at: {lock.createdAt}</p>
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
