<script lang="ts">
    import { liveQuery } from "dexie";
    import { db } from "$lib/data/db";
	import { flip } from "svelte/animate";
	import LockItem from "./LockItem.svelte";

    let locks = liveQuery(
        () => db.locks.orderBy('createdAt').reverse().toArray()
    );
</script>

<div >
    {#if $locks}
        {#each $locks as lock (lock.id)}
            <div 
                animate:flip={{duration: 500}}
                class="mb-2"
            >
                <LockItem lock={lock} />
            </div>
        {/each}
    {:else}
            <p>...</p>
    {/if}
</div>