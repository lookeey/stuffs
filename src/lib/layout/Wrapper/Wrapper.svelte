<script lang="ts">
	import { slide } from 'svelte/transition';
</script>

<div class="wrapper" transition:slide>
	<slot />
</div>

<style lang="scss">
	.wrapper {
		max-width: 1366px;
		margin: 0 auto;
		background-color: white;
	}
</style>
