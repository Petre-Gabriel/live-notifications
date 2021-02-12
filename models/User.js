// Dummy database
const Users = {
    "Alexandru2007": {
        id: 1,
        fullName: 'Alexandru Petru',
        password: '1234',
        token: 'F983FWU9,@9F',
        socketID: null
    },
    "Gabriel03": {
        id: 2,
        fullName: "Petre Gabriel",
        password: '124343546',
        token: 'f493f8u',
        socketID: null
    }
};


const User = {
    databaseName: 'users',
    validateSocketID: (username, token, socketID) => {
        // You can create the logic here, I just made a dummy example
        if(!username || !token)
            return null;

        const selectedUser =  Users[username];
        if(selectedUser.token === token) {
            selectedUser.socketID = socketID
            return selectedUser;
        }

        return null;
    },
    getSocketID: (username) => Users[username].socketID
}

module.exports = User;