<script lang="ts">
	import Title from '$components/Title';
	import Wrapper from '$lib/layout/Wrapper';
	import Content from '$lib/layout/Wrapper/Content.svelte';
</script>

<Title text="tools" />

<Wrapper>
	<Content>
		<h1>Tools</h1>
		<ul>
			<li><a href="./tools/qrcode">QR Code Generator</a></li>
		</ul>
	</Content>
</Wrapper>
