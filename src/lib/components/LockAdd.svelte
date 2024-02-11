<script lang="ts">
	let lockerCode: number[];
	let note: string;
	let status: {message: string, isError: boolean};

	function generateCode() {
		let newDigits: number[] = [];
		for (let i = 0; i < 4; i++) {
			newDigits.push(Math.floor(Math.random() * 9));
		}
		lockerCode = [...newDigits];
	}

	import { db } from '$lib/data/db';

	async function saveLock() {
		try {
			const id = await db.locks.add({
				lock: lockerCode,
				note,
                // TODO: Can indexdb generate this for me?
				createdAt: new Date()
			});
			status = {message: `Persisted lock with id ${id}`, isError: false}
		} catch (error) {
			status = {message: `Failed to persist lock: ${error}`, isError: true}
		}
	}
</script>

<h2>Add a lock</h2>
<div class="black-border container">
    {#if status} 
        <p class="{status.isError ? "error-message" : "success-message"}">{status.message}</p>
    {/if}
	<div>
		<button on:click={() => generateCode()}>Generate a code</button>
		<button on:click={() => saveLock()}>Save</button>
	</div>
	<p>Your locker code is: {lockerCode ? lockerCode : '...'}</p>
	<p>Notes:</p>
	<textarea class="textarea" bind:value={note}></textarea>
</div>

<style>
	.black-border {
		border: 2px solid black;
		padding: 10px;
	}
	.container {
		padding: 10px;
		margin: 10px;
	}
	.textarea {
		height: 5rem;
		width: 50%;
	}
    .error-message {
        color: red
    }
    .success-message {
        color: green
    }
</style>
