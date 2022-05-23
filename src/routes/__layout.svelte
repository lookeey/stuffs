<script lang="ts">
	import Nav from '$lib/layout/Nav';
</script>

<Nav>
	<slot />
</Nav>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
		rel="stylesheet"
	/>

	<meta name="description" content="the one-stop place for all of lookee's web stuffs." />
	<meta name="keywords" content="WebDev, Web Development, HTML, CSS, Svelte,, React" />
	<meta name="author" content="lookee" />

	<meta property="og:description" content="the one-stop place for all of lookee's web stuffs." />
	<meta property="og:image" content="./lowwkey.png" />
</svelte:head>

<style lang="scss">
	:global {
		* {
			box-sizing: border-box;
		}

		body {
			font-family: 'Merriweather', serif;
			margin: 0;
			line-height: 1.7;

			a {
				color: black;
				font-weight: 600;
			}
		}
	}
</style>
