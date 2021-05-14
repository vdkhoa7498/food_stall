import io from "socket.io-client";
import {socketEvents} from "./events";
import {SERVER_IP} from '../config/index'


//Connect to the server
export const socket = io.connect(`${SERVER_IP}`); //io()

//Init the session
export const initSockets = ({value, setValue}) => {
  setValue({error: socket == null}); //We store if there is an error
  socketEvents({value, setValue}); //We init events
};
