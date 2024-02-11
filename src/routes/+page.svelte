<script>
	import 'bulma/css/bulma.css';
	import LockAdd from '$lib/components/LockAdd.svelte';
	import LockList from '$lib/components/LockList.svelte';

	let showLockAddModal = false;
</script>

<section class="hero is-info">
	<div class="hero-body">
		<p class="title is-1">Lockify</p>
		<p class="subtitle">Protect the goods</p>
	</div>
</section>
<div class="section">
	<button
		class="button is-info is-medium is-pulled-right"
		on:click={() => (showLockAddModal = true)}>Add</button
	>
</div>
<div class="section">
	<LockList />
</div>
{#if showLockAddModal}
	<div class="section">
		<LockAdd onDone={() => (showLockAddModal = false)} />
	</div>
{/if}
