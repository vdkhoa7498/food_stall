const socketIo = require("socket.io");
const { SOCKET_ACTION } = require("../utils/enums")

const users = new Map();
const userSockets = new Map();
const games = [];
let numberUsers = 0;


const SocketServer = (server) => {
    const io = socketIo(server);

    io.on('connection', (socket) => {
        console.log('Có người kết nối')
    })
}
module.exports = SocketServer;
