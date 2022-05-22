<script lang="ts">
	import { page } from '$app/stores';

	export let href = '';
	export let label = '';

	$: path = $page.url.pathname.split('/')[1];
	$: active = path === href || href === $page.url.pathname;
</script>

<a {href} class:active sveltekit:noscroll>{label}</a>

<style lang="scss">
	a {
		color: black;
		text-decoration: none;
		margin: 0 8px;
		font-weight: initial;

		&.active {
			font-weight: 600;
			text-decoration: underline;
		}
	}
</style>
