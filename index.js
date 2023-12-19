// import { readFileSync } from 'fs';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';

// let cert = readFileSync('./server.cert', 'utf8');
// let key = readFileSync('./server.key', 'utf8');

// let options = {
//     cert,
//     key
// }

const server = createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('\n');
});
const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    ws.send('something');
});

server.listen(3000);
console.log(`http://127.0.0.1:${server.address().port}`);