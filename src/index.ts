import express from 'express';
import _expressWs from 'express-ws';

// To get types, have to get app from expressWs
// const app = express();
const socket = _expressWs(express());
const app = socket.app;

console.log("STARTING UP");

app.listen(8080, () =>
  console.log('Example app listening on port 8080!'),
);


app.ws('/echo', function(ws, req) {
    ws.on('message', function(msg) {
        console.log("MESSAGE: ", msg);
        ws.send(msg);
    });
});
