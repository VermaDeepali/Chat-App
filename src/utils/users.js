const users = []

const addUser = ({ id, username, room }) => {
    // clean the data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // check the existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // validate username
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => {
        return user.id === id
    })

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find(user => user.id === id)

}


const getUserInRoom = (room) => {
    const getusers = users.filter((user) => user.room === room)
    return getusers
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}

// addUser({id: 1, username: 'Deep', room: 'South'})
// addUser({id: 2, username: 'MAnnu', room: 'norht'})
// console.log(users);
// const u = getUser(2)
// console.log(u);
// const g = getUserInRoom('south')
// console.log(g);
// const d = removeUser(1)
// console.log(d);
// console.log(users);

