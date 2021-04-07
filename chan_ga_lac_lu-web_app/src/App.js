
import "./App.css"
import 'antd/dist/antd.css';
import React, {useEffect, useState} from "react";
import {useDispatch} from 'react-redux'
import {initSockets} from "./socketio";
import { initAddress } from "./action/addressAction";
import { initCustomer } from "./action/customerAction";
import RootRouter from "./rootRouter";


function App() {
  const dispatch = useDispatch()
  const [value, setValue] = useState();

  useEffect(() => {
    // initSockets({value, setValue})
    dispatch(initAddress())
    dispatch(initCustomer())
    console.log('app')
  }, []);

  return (
    <RootRouter/>
  );
}

export default App;
