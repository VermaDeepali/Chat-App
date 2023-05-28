Reference: https://socket.io/

-- WebSockets allow for full-duplex communication
-- WebSocket is a seperate protocol from HTTP Protocol
-- Persistent connection between client and server


-- socket.emit()
The first is to use socket.emit.

We know that emits the event

to the single client that we're referring to,

-- io.emit()
and we also have io.emit,

and we know this emits the event

to every single connected client.

-- Event scknowledgements

server (emit) -> client(receive) -- acknowledgement --> server
client(emit) -> server(receive) -- acknowledgement --> client


## Now so far, we've sent events from server to client using three methods.

### socket.emit -- We had Socket dot emit that sends an event to a specific client.

### io.emit -- We then had IO dot emit, which sends an event to every connected client.

### socket.broadcast.emit -- And finally, we had Socket dot broadcast dot emit which sends an event to every connected client except for this one(socket written on first).


## Now with the introduction of rooms, we're gonna have two new setups we'll be using for emitting messages.


One is a variation of this,(io.emit)

and the other is a variation of this.(socket.broadcast.emit)

So the first is the following,
1. io.to.emit() ( IO dot To dot emit),

Now To is indeed a function

and will learn how to call it shortly.

But essentially, what this does

is it emits an event to everybody in a specific room.

So that's going to allow us to send a message to everyone

in a room without sending it to people in other rooms.

The other option we have is a variation

on this that is 

2. socket.broadcast.to.emit (Socket dot broadcast dot to dot emit),

So similar to above, this is sending an event

to everyone except for the specific client

but it's limiting it to a specific chatroom.