<script lang="ts">
	export let code: number[];
    export let reveal = false;
</script>

{#each code as digit}
	<span class="border" style="margin-right:5px">{reveal ? digit : "*"}</span>
{/each}

<style>
	.border {
		border: 2px solid grey;
		padding: 10px;
	}
</style>
