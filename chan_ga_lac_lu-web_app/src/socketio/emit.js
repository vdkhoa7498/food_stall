import { socket } from ".";
import SOCKET_ACTION from "../utils/enums"

export const getRooms = () => {
    socket.emit("get rooms");
}

// export const onReconnect = (gameInfo, userInfo) => {
//     if (!socket.findRivalSuccess) {
//         socket.findRivalSuccess = true;
//         socket.emit(SOCKET_ACTION.ON_RECONNECT, { gameInfo, userInfo });
//     }
// }
