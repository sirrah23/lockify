<script lang="ts">
	import type { Lock } from '$lib/data/db';
	import { db } from '$lib/data/db';
	import { toast } from '$lib/toasts';
	import Code from './Code.svelte';
	export let lock: Lock;
	let reveal = false;

	function deleteItem(id: number) {
		db.locks.delete(id);
	}
</script>

<div class="box">
	<div class="block">
		<button
			class="button is-danger is-pulled-right is-small is-rounded"
			on:click={() => {
				if (lock.id) {
					deleteItem(lock.id);
					toast('Deleted a locker code');
				}
			}}>x</button
		>
	</div>
	<div class="block">
		<p class="is-size-5">Date and time: {lock.createdAt.toLocaleString('en-US')}</p>
	</div>
	<div class="block">
		<Code code={lock.lock} {reveal} />
		<button class="button is-small is-rounded" on:click={() => (reveal = !reveal)}>👁</button>
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
