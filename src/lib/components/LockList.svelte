<script lang="ts">
    interface Lock {
        id: number;
        code: number[];
        note: string
        createdAt: Date;
    }

    let locks: Lock[] = [
        {id: 1, code: [4, 3, 2, 1], note: "Locker 13", createdAt: new Date()},
        {id: 1, code: [1, 5,5, 2], note: "Locker 13", createdAt: new Date()},
        {id: 1, code: [9, 1, 2, 3], note: "Locker 15", createdAt: new Date()},
    ];

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
    {#each locks as lock}
        <!-- Consider a lock component here with code hiding -->
        <div class="container black-border">
            <p>Code: {lock.code}</p>
            <p>Created at: {lock.createdAt}</p>
            <p>Note:</p>
            <textarea class="textarea">{lock.note}</textarea>
        </div>
    {/each}
</div>