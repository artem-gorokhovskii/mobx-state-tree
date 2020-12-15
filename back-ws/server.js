const WebSocket = require('ws');
const { PORT, REFRESH_INTERVAL_MS } = require('./const');
const http = require('http');
const iconv = require('iconv-lite');

const listeners = {};

// Send information for subscribers
setInterval(() => {
    Object.keys(listeners).forEach(key => {
        sendRequest(key, listeners[key].type);
    });
}, REFRESH_INTERVAL_MS);


function sendRequest(id, type) {
    http.request(`http://rzhunemogu.ru/RandJSON.aspx?CType=${type}`, {
        method: 'GET',
        encoding: null
    }, (res) => {
        res.resume();
        let data = '';
        
        res.on('data', (chunk) => {
            data += iconv.decode(chunk, 'win1251');
        });

        res.on('end', () => {
            listeners[id].ws.send(data.replace('{"content":"', '').replace('"}', ''));
        });
    }).end();
}


const wss = new WebSocket.Server({ port: PORT });
console.log('Websocket server is listening ' + PORT + ' port');

wss.on('connection', (ws) => {
    const id = Math.round(Math.random() * Date.now());
    listeners[id] = {
        type: 1,
        ws,
    };

    ws.on('message', function incoming(message) {
        listeners[id].type = message;
    });

    ws.on('close', (ws) => {
        console.log('DISCONNECTED ', id);
        console.log('Connections: ', listeners);
        delete listeners[id];
    });
});

