<script lang="ts">
	import { browser } from '$app/env';

	import Title from '$components/Title';
	import Wrapper, { Content } from '$lib/layout/Wrapper';
	import QRCode from 'qrcode';

	let text: string;
	let svg: string;

	$: code = browser && text ? QRCode.create(text, {}) : undefined;
	$: if (browser && text) QRCode.toString(text, { type: 'svg' }).then((result) => (svg = result));
</script>

<Title text="QR Code Gen" />

<Wrapper>
	<Content>
		<h2>QR Code Generator</h2>
		<h3><em>Warning: under construction!</em></h3>
		<p>To use this QR Code Generator, simply put your desired URL in the field below.</p>
		<div class="box">
			<input placeholder="URL" bind:value={text} />
		</div>
		{#if text}
			{@html svg}
			<a href="data:image/svg+xml;charset=utf-8,{encodeURIComponent(svg)}" download="qrcode.svg"
				><em>Download</em></a
			>
			<!--h3><em>Advanced Options</em></h3-->
		{/if}
	</Content>
</Wrapper>

<style lang="scss">
	.box {
		margin: 0 16px;
		margin-top: 12px;
		height: 42px;
		display: flex;
		width: 100%;

		input {
			flex-grow: 1;
			height: 100%;
			vertical-align: top;
		}

		/* button {
			border: 2px solid gray;
			border-left: 0;
			font-family: inherit;
			font-style: italic;
			font-size: 18px;
			cursor: pointer;
		} */
	}

	:global(svg) {
		display: block;
		height: 300px;
		margin: 36px auto;
	}
</style>
