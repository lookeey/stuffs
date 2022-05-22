<div class="content"><slot /></div>

<style lang="scss">
	@import '$lib/lib.scss';

	.content {
		font-size: 20px;
		max-width: 680px;
		padding: 0 24px 10vh 48px;
		margin: 0 auto;
		text-indent: 16px;

		&:global {
			h1,
			h2,
			h3 {
				margin-bottom: 10px;
			}

			p {
				margin: 6px 0;
			}
		}

		@media screen and (max-width: $screen-sm) {
			padding: 0 24px 10vh;
		}
	}
</style>
