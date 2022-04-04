import React, { createContext, useEffect, useState } from 'react'
import {getData} from './components/utls/FetchData';
import io from 'socket.io-client';
export const DataContext = createContext();

export const DataProvider = ({children})=>{

    const [products,setProducts] = useState([]);
    const [socket,setSocket] = useState();

    useEffect(()=>{
        getData('/product')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err.response.data))
        const socket = io();
        setSocket(socket);
        return () => socket.close();
    },[]);

    const state = {
        products:[products,setProducts],
        socket
    };
    return (
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>
    )
}