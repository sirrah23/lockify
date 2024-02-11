<script>
	import 'bulma/css/bulma.css';
	import githubLogo from '$lib/assets/github-mark.png';
	import LockAdd from '$lib/components/LockAdd.svelte';
	import LockList from '$lib/components/LockList.svelte';

	let showLockAddModal = false;
</script>

<nav class="navbar">
	<div class="container">
		<div class="navbar-end">
			<div class="navbar-item">
				<div class="buttons">
					<a href="https://github.com/sirrah23/lockify">
						<figure class="image is-24x24 is-pulled-right">
							<img class="is-rounded" alt="link to github" src={githubLogo} />
						</figure>
					</a>
				</div>
			</div>
		</div>
	</div>
</nav>

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
