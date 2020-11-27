import React from 'react';
import io from 'socket.io-client';

export const CTX = React.createContext();

const initState = {
    thingstoDo:[
        { from:'jyoti', msg: 'hi'},
        { from:'will', msg: 'hi'},
        { from:'deepika', msg: 'hi'},
        { from:'shivani', msg: 'hi'},
        { from:'asim', msg: 'hi'},
    ],
    Accomodation : [
        { from:'jyoti', msg: 'hi'},
        { from:'will', msg: 'hi'},
        { from:'deepika', msg: 'hi'},
        { from:'shivani', msg: 'hi'},
        { from:'asim', msg: 'hi'},
    ]
}


function reducer(state,action){
    const { from, msg, topic } = action.payload;
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return{
                ...state,
                [topic] : [
                    ...state[topic],
                    {
                        from, msg
                    }
                ]
            }
        default:
            return state
    }
}

let socket;

function sendChatAction(value){
    console.log("Value", value)
    socket.emit('chat message',value);
}

export default function Store(props){

    const [allChats, dispatch] = React.useReducer(reducer,initState);


    if(!socket){
        socket = io(':3001');
        socket.on('chat message', function(msg){
            dispatch({type:'RECEIVE_MESSAGE', payload: msg});
        });
    }

    const user = 'User-' + Math.random(100).toFixed(2)

    return(
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    )
}