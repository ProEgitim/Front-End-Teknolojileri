import App from './App.svelte';

export const app = new App({
	target: document.body,
	props: {
		name: 'Svelte Harcama',
		lastname: 'Takip'
	}
});
// export default app;