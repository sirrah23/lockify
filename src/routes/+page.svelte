<script>
	import 'bulma/css/bulma.css';
	import githubLogo from '$lib/assets/github-mark.png';
	import LockAdd from '$lib/components/LockAdd.svelte';
	import LockList from '$lib/components/LockList.svelte';

	let showLockAddModal = false;
</script>

<div class="p-4 is-flex is-justify-content-center is-align-items-center">
	<div class="is-flex-grow-1"></div>
	<!-- This empty div will push the content to the right -->
	<div>
		<div>
			<a href="https://github.com/sirrah23/lockify">
				<figure class="image is-24x24">
					<img class="is-rounded" alt="link to project on github" src={githubLogo} />
				</figure>
			</a>
		</div>
	</div>
</div>

<section class="hero is-info is-small">
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
