
import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({
    port: 3000
});

wss.on('connection', function (ws) {
    ws.on('error', console.error);

    ws.on('open', function () {
        ws.send('something 1');
    });

    ws.on('message', function (data) {
        console.log('received: %s', data);
    });

    ws.send('something 2');
});