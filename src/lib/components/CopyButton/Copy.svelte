<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	export let text = '';

	let copied = false;
	let timeout: number;

	function copy() {
		navigator.clipboard.writeText(text);
		copied = true;

		if (timeout) {
			clearTimeout(timeout);
		}

		timeout = window.setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<div>
	{#if copied}
		<div out:fade|local in:fly|local={{ y: -20, duration: 500 }} on:click={copy}>{'<copied!>'}</div>
	{:else}
		<div out:fly|local={{ y: 20, duration: 500 }} in:fade|local on:click={copy}>{'<copy>'}</div>
	{/if}
</div>

<style lang="scss">
	div {
		display: inline-block;
		font-style: italic;
		text-decoration: underline;
		padding-left: 8px;
		cursor: pointer;
		width: 100px;

		vertical-align: top;
		text-indent: 0;

		div {
			position: absolute;
		}
	}
</style>
