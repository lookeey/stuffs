<script lang="ts">
	import Nav from '$lib/layout/Nav';
</script>

<Nav>
	<slot />
</Nav>

<style lang="scss">
	:global(body) {
		margin: 0;
		line-height: 1.4;
	}
</style>
