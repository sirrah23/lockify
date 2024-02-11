<script lang="ts">
	export let code: number[];
    export let reveal = false;
</script>

{#each code as digit}
	<span class="black-border" style="margin-right:5px">{reveal ? digit : "*"}</span>
{/each}

<style>
	.black-border {
		border: 2px solid black;
		padding: 10px;
	}
</style>
