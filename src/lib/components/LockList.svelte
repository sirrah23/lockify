<script lang="ts">
    import { liveQuery } from "dexie";
    import { db } from "$lib/data/db";
	import { flip } from "svelte/animate";

    let locks = liveQuery(
        () => db.locks.orderBy('createdAt').reverse().toArray()
    );
</script>

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
</style>

<div >
    <h2>Lock list</h2>
    {#if $locks}
        {#each $locks as lock (lock.id)}
            <!-- Consider a lock component here with code hiding -->
            <div 
                class="container black-border"
                animate:flip={{duration: 500}}
            >
                <p>Code: {lock.lock}</p>
                <p>Created at: {lock.createdAt}</p>
                <p>Note:</p>
                <textarea class="textarea" readonly disabled>{lock.note || ""}</textarea>
            </div>
        {/each}
    {:else}
            <p>...</p>
    {/if}
</div>