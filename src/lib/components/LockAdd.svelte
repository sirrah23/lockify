<script lang="ts">
	import { db } from '$lib/data/db';
	import Code from './Code.svelte';

	let lockerCode: number[];
	let note: string;
	let status: { message: string; isError: boolean };

	function generateCode() {
		let newDigits: number[] = [];
		for (let i = 0; i < 4; i++) {
			newDigits.push(Math.floor(Math.random() * 9));
		}
		lockerCode = [...newDigits];
	}

	async function saveLock() {
		try {
			const id = await db.locks.add({
				lock: lockerCode,
				note,
				// TODO: Can indexdb generate this for me?
				createdAt: new Date()
			});
			status = { message: `Persisted lock with id ${id}`, isError: false };
			// Reset the form
			lockerCode = [];
			note = '';
		} catch (error) {
			status = { message: `Failed to persist lock: ${error}`, isError: true };
		}
	}
</script>

<h2 class="title is-2">Add a lock</h2>
<div class="box">
	{#if status}
		<div class="block">
			<p class={status.isError ? 'error-message' : 'success-message'}>{status.message}</p>
		</div>
	{/if}
	<div class="block">
		<button class="button" on:click={() => generateCode()}>Generate a code</button>
		<button class="button" on:click={() => saveLock()}>Save</button>
	</div>
	<div class="block">
		<p>
			Your locker code is:
			{#if lockerCode}
				<Code code={lockerCode} reveal />
			{:else}
				...
			{/if}
		</p>
	</div>
	<div class="block">
		<p>Note:</p>
	</div>
	<div class="block">
		<textarea class="textarea" bind:value={note}></textarea>
	</div>
</div>

<style>
	.textarea {
		height: 5rem;
		width: 50%;
	}
	.error-message {
		color: red;
	}
	.success-message {
		color: green;
	}
</style>
