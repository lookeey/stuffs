<script lang="ts">
	import type { IconProps } from './types';
	interface $$Props extends IconProps {}
</script>

<div class="icon" {...$$restProps}><slot /></div>

<style>
	.icon {
		display: inline-block;
		width: 24px;
		height: 24px;
	}
</style>
