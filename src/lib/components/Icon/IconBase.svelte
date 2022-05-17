<script lang="ts">
	import type { IconProps } from './types';
	interface $$Props extends IconProps {}
</script>

<div class="icon" {...$$restProps}><slot /></div>

<style>
	.icon {
		display: inline-block;
		width: 32px;
		height: 32px;
	}
</style>
