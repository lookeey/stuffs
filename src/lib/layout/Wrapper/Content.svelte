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

			div {
				text-indent: 0;
			}

			input,
			input:focus,
			input:focus-visible {
				font-family: monospace;
				font-size: 18px;
				border: 2.5px solid gray;
				padding: 4px 6px;
				outline: none;
			}

			input:focus {
				border-color: darkgray;
			}
		}

		@media screen and (max-width: $screen-sm) {
			padding: 0 24px 10vh;
		}
	}
</style>
