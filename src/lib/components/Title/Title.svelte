<script lang="ts">
	export let text = '';

	$: title = `lookee's stuffs${text && ' | '}${text}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta property="og:title" content={title} />
</svelte:head>
