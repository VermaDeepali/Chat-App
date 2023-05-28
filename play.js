/*
index.js content -- server 
*/

const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io")

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// defines path for express config
const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public")

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

let count = 0;

// server (emit) -> client(receive) -- countUpdated
// client(emit) -> server(receive) -- increment

io.on('connection', (socket) => {
    console.log('New websocket connection!!');

    socket.emit('countUpdated', count);

    socket.on('increment', ()=>{
        count++
        // socket.emit('countUpdated', count)  -- single client updates
        io.emit('countUpdated', count)  // updates all the client
    })
})

server.listen(port, () => {
    console.log(`Server is up and runnning on port ${port}`);
})

// npm run start || npm run dev


/*
chat.js content   --- client side javascript
*/

const socket = io()

socket.on('countUpdated', (count) => {
    console.log('The count has been updated!', count);
})

document.querySelector("#increment").addEventListener('click', ()=>{
    console.log('Clicked');
    socket.emit("increment")
})

/*
index.html
*/

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Chat App</title>
// </head>

// <body>
//     <h1>Chat App</h1>
//     <button id="increment">+1</button>
//     <script src="/socket.io/socket.io.js"></script>
//     <script src="/js/chat.js"></script>
// </body>

// </html>