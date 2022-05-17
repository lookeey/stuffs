<script lang="ts">
	import Link from './Link.svelte';

	let active;
</script>

<div class="navbar">
	<Link href="/" label="home" />
	<Link href="tools" label="tools" />
</div>
<div class="wrapper">
	<slot />
</div>

<style lang="scss">
	$nav-height: 64px;

	.navbar {
		position: fixed;
		display: flex;
		height: $nav-height;
		width: 100%;
		top: 0;
		background-color: white;

		justify-content: center;
		align-items: center;
	}

	.wrapper {
		padding-top: $nav-height;
	}
</style>
