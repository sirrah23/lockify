<script lang="ts">
	import { db } from '$lib/data/db';
	import { onMount } from 'svelte';
	import Code from './Code.svelte';

	export let onDone: () => void = () => {};

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
			console.dir({ message: `Persisted lock with id ${id}`, isError: false });
			// Reset the form
			lockerCode = [];
			note = '';
		} catch (error) {
			console.dir({ message: `Failed to persist lock: ${error}`, isError: true });
		} finally {
			onDone();
		}
	}

	onMount(() => {
		generateCode();
	});
</script>

<div class="modal is-active">
	<div class="modal-background"></div>
	<div class="modal-card">
		<header class="modal-card-head">
			<p class="modal-card-title">Add a lock</p>
			<button class="delete" aria-label="close" on:click={onDone}></button>
		</header>
		<section class="modal-card-body">
			<div class="block">
				Generated code
				<button class="button is-small is-rounded" on:click={() => generateCode()}>↺</button>
			</div>
			<div class="block">
				{#if lockerCode}
					<div>
						<Code code={lockerCode} reveal />
					</div>
				{:else}
					...
				{/if}
			</div>
			<div class="block">
				<p>Note:</p>
			</div>
			<div class="block">
				<textarea class="textarea" bind:value={note}></textarea>
			</div>
		</section>
		<footer class="modal-card-foot">
			<button class="button is-info" on:click={() => saveLock()}>Save</button>
			<button class="button" on:click={onDone}>Cancel</button>
		</footer>
	</div>
</div>

<style>
	.textarea {
		height: 5rem;
		width: 50%;
	}
</style>
