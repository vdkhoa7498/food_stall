const keyMirror = require("keymirror")

const SOCKET_ACTION = keyMirror({
    JOIN_ROOM: null,
    STEP_NOTIFICATION_AFTER_RECORD_STEP: null,
    CREATE_NEW_GAME: null,
    FIND_RIVAL: null,
    FIND_RIVAL_SUCCESS: null,
    MOVE: null,
    MOVE_NOTIFICATION: null,
    DISCONNECT: null,
    ON_RECONNECT: null,
    UNDO_REQUEST: null,
    UNDO_RESPONSE: null,
    NEW_GAME_REQUEST: null,
    NEW_GAME_RESPONSE: null,
})

module.exports = {
    SOCKET_ACTION
}
