<script lang="ts">
	import { SvelteLogo } from '$components/Icon';
	import Title from '$components/Title';
	import Wrapper from '$lib/layout/Wrapper';
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
	<div class="content">
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
		.<br />.<br />.

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
		<p>If you want to talk to me, you may want to reach me through Discord.</p>
	</div>
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

	.content {
		font-size: 20px;
		max-width: 680px;
		padding: 0 24px 10vh 48px;
		margin: 0 auto;
		text-indent: 16px;

		h2 {
			margin-bottom: 10px;
		}

		p {
			margin: 6px 0;
		}

		.hidden {
			opacity: 0.07;

			&:hover {
				opacity: 0.7;
			}
		}

		@media screen and (max-width: $breakpoint-sm) {
			padding: 0 24px 10vh;
		}
	}
</style>
