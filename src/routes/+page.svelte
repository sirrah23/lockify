<script>
	import "bulma/css/bulma.css"
	import LockAdd from "$lib/components/LockAdd.svelte";
	import LockList from "$lib/components/LockList.svelte";
</script>
<section class="hero is-info">
	<div class="hero-body">
		<p class="title is-1">Lockify</p>
		<p class="subtitle">Protect the goods</p>
	</div>
</section>
<div class="section">
	<LockAdd />
</div>
<div class="section">
	<LockList />
</div>