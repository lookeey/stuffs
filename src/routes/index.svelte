<script lang="ts">
	import { SvelteLogo } from '$components/Icon';
	import Wrapper from '$lib/layout/Wrapper';
</script>

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
	<div class="desc">
		This site is a multipurpose collection of tools I find useful and a small playground for
		experimenting new stuff. <br />
		Made with love, <SvelteLogo style="vertical-align: sub;" /> Svelte &
		<span style="font-size: larger">▲</span> Vercel.
		<span class="hidden">&#40;and Sass, and Typescript, Node, Yarn, etc.&#41;</span>
	</div>
</Wrapper>

<style lang="scss">
	@import '$lib/lib.scss';

	.hero {
		display: flex;
		padding: 14vh 0 10vh;
		justify-content: center;

		img {
			max-width: 360px;
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

		@media screen and (max-width: $breakpoint-sm) {
			flex-direction: column;
			padding: 10vh 0 10vh;

			img {
				max-width: 280px;
				margin: auto;
				padding-bottom: 12px;
			}

			& > div {
				margin: auto;
			}
		}
	}

	.desc {
		font-size: 20px;
		max-width: 600px;
		padding: 0 24px;
		margin: 0 auto;

		.hidden {
			opacity: 0.07;

			&:hover {
				opacity: 0.7;
			}
		}
	}
</style>
