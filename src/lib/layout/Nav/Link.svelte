<script lang="ts">
	import { page } from '$app/stores';

	export let href = '';
	export let label = '';

	$: path = $page.url.pathname.split('/')[1];
	$: active = path === href || href === $page.url.pathname;
</script>

<a {href} class:active>{label}</a>

<style lang="scss">
	a {
		font-size: 22px;
		color: black;
		text-decoration: none;
		margin: 0 8px;

		&.active {
			font-weight: 600;
		}
	}
</style>
