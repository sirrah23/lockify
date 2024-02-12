<script lang="ts">
	import { liveQuery, type Subscription } from 'dexie';
	import { db, type Lock } from '$lib/data/db';
	import { flip } from 'svelte/animate';
	import LockItem from './LockItem.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let locks: Lock[] = [];

	let subscription: Subscription;
	onMount(() => {
		subscription = liveQuery(() => db.locks.orderBy('createdAt').reverse().toArray()).subscribe(
			(newLocks) => {
				locks = newLocks;
			}
		);
	});

	onDestroy(() => {
		subscription && subscription.unsubscribe();
	});
</script>

<div>
	{#if locks}
		{#each locks as lock (lock.id)}
			<div transition:fade={{ duration: 500 }} animate:flip={{ duration: 500 }} class="mb-2">
				<LockItem {lock} />
			</div>
		{/each}
	{:else}
		<p>...</p>
	{/if}
</div>
