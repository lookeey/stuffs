<script lang="ts">
	import Link from './Link.svelte';

	let active;

	let y = 0;
	$: hideLogo = y < 50;
</script>

<svelte:window bind:scrollY={y} />

<div class="navbar">
	<div class="logo" class:hidden={hideLogo}>
		<img src="../favicon.png" alt=":)" />
	</div>

	<div class="links">
		<Link href="/" label="home" /> /
		<Link href="/contact" label="contact" /> /
		<Link href="tools" label="tools" />
	</div>

	<div class="hamburger" />
</div>

<div class="wrapper">
	<slot />
</div>

<style lang="scss">
	@import '$lib/lib.scss';

	$nav-height: 64px;

	.navbar {
		position: fixed;
		display: flex;
		height: $nav-height;
		width: 100vw;
		top: 0;
		background-color: white;
		justify-content: center;
		align-items: center;

		.logo {
			display: flex;
			justify-content: left;
			padding-left: 24px;
			width: 100%;
			transition: opacity 0.5s;

			&.hidden {
				opacity: 0;
			}

			@media screen and (max-width: $screen-sm) {
				height: 36px;
			}
		}

		.links {
			display: flex;
			align-items: center;
			font-size: 20px;

			@media screen and (max-width: $screen-sm) {
				font-size: 18px;
			}
		}

		.hamburger {
			display: flex;
			justify-content: right;
			width: 100%;
		}
	}

	.wrapper {
		padding-top: $nav-height;
	}
</style>
