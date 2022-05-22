<script lang="ts">
	import Copy from '$components/CopyButton';
	import Wrapper from '$lib/layout/Wrapper';
	import Content from '$lib/layout/Wrapper/Content.svelte';
</script>

<Wrapper>
	<Content>
		<h1>Contact</h1>
		<p>
			If you'd like to reach out, I frequently check my discord messages. You can also reach me
			through email:
		</p>
		<ul>
			<li>
				Discord: lookee#3067
				<Copy text="lookee#3067" />
			</li>
			<li>
				Mail:
				<a href="mailto:loo.kees@proton.me">loo.kees@proton.me</a>
				<Copy text="loo.kees@proton.me" />
			</li>
		</ul>
	</Content>
</Wrapper>
