<script>
	import { onMount } from 'svelte';
	// import WebSocket from 'ws';
	export let data;
	onMount(() => {
		const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
		console.log(`${protocol}//${window.location.host}`);
		// let serverUrl = `${protocol}//${window.location.host}`;
		let serverUrl = `wss://congenial-acorn-q676j594xwhxjg4-3000.app.github.dev`;
		let ws = new WebSocket(serverUrl);
		console.log(ws);
		ws.addEventListener('error', console.error);

		ws.addEventListener('open', () => {
			console.log('open');
			ws.send('something');
		});

		ws.addEventListener('message', (data) => {
			console.log('received: %s', data);
		});
	});
</script>

<div class="prediction">
	<div class="prediction-header">
		<div class="predition-title">Prediction title</div>
		<div class="prediction-timer">Submissions closing in 2:00</div>
	</div>
	<div class="prediction-body"></div>
</div>
