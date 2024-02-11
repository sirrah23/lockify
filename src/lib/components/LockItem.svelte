<script lang="ts">
	import type { Lock } from '$lib/data/db';
	import Code from './Code.svelte';
	export let lock: Lock;
</script>

<div class="container black-border">
	<p>
		Code:
		<Code code={lock.lock} />
	</p>
	<p>Created at: {lock.createdAt}</p>
	<p>Note:</p>
	<textarea class="textarea" readonly disabled>{lock.note || ''}</textarea>
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
</style>
