<script lang="ts">
	import { SvelteLogo } from '$components/Icon';
	import Title from '$components/Title';
	import Wrapper from '$lib/layout/Wrapper';
	import Content from '$lib/layout/Wrapper/Content.svelte';
</script>

<Title />

<Wrapper>
	<div class="hero">
		<img src="./lowwkey.png" alt="lowkey" />
		<div>
			<h1>lookee's</h1>
			<br />
			<h2>stuffs</h2>
		</div>
		<br />
	</div>
	<Content>
		<p>
			This site is a multipurpose collection of tools I find useful and a small playground for
			experimenting new stuff.
		</p>
		<p>
			Made with love, <SvelteLogo style="vertical-align: sub;" />
			<a href="https://svelte.dev/"> Svelte</a>
			&
			<span style="font-size: larger">▲</span>&nbsp;<a href="https://vercel.com/">Vercel</a>.
			<span class="hidden">&#40;and Sass, and Typescript, Node, Yarn, etc.&#41;</span>
		</p>

		<div style="text-align: center; text-indent: 0;"><br />.<br />.<br />.<br /><br /></div>

		<h2>Why Svelte?</h2>
		<p>
			Svelte is practical when it comes to SEO and offers the fastest load time of web applications.
			It merges the speed of server&nbsp;side&nbsp;rendered apps with the versatility of single page
			applications.
		</p>
		<p>
			Although it's a young project, it's evolving rapidly and its core concept has potential to
			change the scenario of web development.
		</p>

		<h2>Where are you?</h2>
		<p>In the furthest depths of the brazilian araucaria forests, somewhere around the south.</p>
		<p>
			If you want to talk to me, you may look at the <a href="/contact" sveltekit:noscroll
				>contact</a
			> page.
		</p>
	</Content>
</Wrapper>

<style lang="scss">
	@import '$lib/lib.scss';

	.hero {
		display: flex;
		padding: 14vh 0 10vh;
		justify-content: center;

		img {
			max-height: 320px;
			padding-right: 48px;
		}

		& > div {
			text-align: right;
			margin: auto 0;

			h1,
			h2 {
				display: inline;
			}

			h1 {
				font-size: 64px;
				margin: 0;
				line-height: 1;
			}

			h2 {
				margin: 0;
			}
		}

		@media screen and (max-width: $screen-sm) {
			flex-direction: column;
			padding: 10vh 0 10vh;

			img {
				max-height: 256px;
				margin: auto;
				padding-bottom: 24px;
				padding-right: 0;
			}

			& > div {
				margin: auto;
			}
		}
	}

	.hidden {
		opacity: 0.07;

		&:hover {
			opacity: 0.7;
		}
	}
</style>
