/// <reference types="@sveltejs/kit" />

declare module "*.svelte" {
	export { SvelteComponentDev as default } from "svelte/internal"
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}
