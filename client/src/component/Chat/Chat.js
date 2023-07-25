// import React, { useEffect, useState } from 'react'
// import {user} from "../Join/Join";
// import sockerIO from "socket.io-client";
// import "./Chat.css"; 
// import Message from "../Message/Message";
// import ReactScrollToBottom from "react-scroll-to-bottom";


// const ENDPOINT = "http://localhost:8000/";
// let socket;



// const Chat = () => {
// const [id,setid] = useState("");

// const [messages,setMessages] = useState([])

//  const send = ()=>{
//     const message=document.getElementById('chatInput').value;
//     socket.emit('message',{message,id});
//     document.getElementById('chatInput').value="";
//  }
//   useEffect(() => {

//       socket = sockerIO(ENDPOINT, { transports: ['websocket'] });


//     socket.on('connect',()=>{
//         alert('connected')
//         setid(socket.id);
//     })

//     socket.emit('joined',{user})
//     socket.on('welcome',(data)=>{
//         setMessages([...messages,data]);
//         console.log(data.user,data.message);
//     })

//     socket.on('userJoined',(data)=>{
//         setMessages([...messages,data]);
//         console.log(data.user,data.message)
//     })
//     socket.on('leave',(data)=>{
//         setMessages([...messages,data]);
//         console.log(data.user,data.message )
//     })

//     return ()=>{
//     socket.emit('disconnectt');
//     socket.off();
//     }

//   },[]);

// useEffect(()=>{
// socket.on('sendMessage',(data)=>{
//     setMessages([...messages,data]);
//     console.log(data.user,data.message,data.id);
// })
// return ()=>{
//      socket.off();
// }
// },[messages])

//   return (
//     <div className='chatPage'>
//     <div className='chatContainer'>
//     <div className='header'></div>
//    <ReactScrollToBottom className="chatBox">
//                     {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
//      </ReactScrollToBottom>
   
//     <div className='inputBox'></div>
//      <input type='text' id='chatInput'/>
//      <button onClick={send} className='sendBtn'>Send<img src='' alt=''/></button>   
    
//     </div>
      
//     </div>
//   )
// }

// export default Chat







// import React, { useEffect, useState } from 'react';
// import { user } from '../Join/Join';
// import sockerIO from 'socket.io-client';
// import './Chat.css';
// import Message from '../Message/Message';
// import ReactScrollToBottom from 'react-scroll-to-bottom';

// const ENDPOINT = 'http://localhost:8000/';
// let socket;

// const Chat = () => {
//   const [id, setid] = useState('');
//   const [messages, setMessages] = useState([]);

//   const send = () => {
//     const message = document.getElementById('chatInput').value;
//     socket.emit('message', { message, id });
//     document.getElementById('chatInput').value = '';
//   };

//   useEffect(() => {
//     socket = sockerIO(ENDPOINT, { transports: ['websocket'] });

//     socket.on('connect', () => {
//       alert('connected');
//       setid(socket.id);
//     });

//     socket.emit('joined', { user });
//     socket.on('welcome', (data) => {
//       setMessages([...messages, data]);
//       console.log(data.user, data.message);
//     });

//     socket.on('userJoined', (data) => {
//       setMessages([...messages, data]);
//       console.log(data.user, data.message);
//     });

//     socket.on('leave', (data) => {
//       setMessages([...messages, data]);
//       console.log(data.user, data.message);
//     });

//     return () => {
//       socket.emit('disconnectt');
//       socket.off();
//     };
//   }, []);

//   useEffect(() => {
//     socket.on('sendMessage', (data) => {
//       setMessages([...messages, data]);
//       console.log(data.user, data.message, data.id);
//     });

//     return () => {
//       socket.off();
//     };
//   }, [messages]);

//   return (
//     <div className="chatPage">
//       <div className="chatContainer">
//         <div className="header"></div>
//         <ReactScrollToBottom className="chatBox">
//           {messages.map((item, i) => (
//             <Message
//               user={item.id === id ? '' : item.user}
//               message={item.message}
//               classs={item.id === id ? 'right' : 'left'}
//             />
//           ))}
//         </ReactScrollToBottom>

//         <div className="inputBox">
//           <input type="text" id="chatInput" />
//           <button onClick={send} className="sendBtn">
//             Send <img src="" alt="" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;







// const io = require('socket.io')();

// io.on('connection', (socket) => {
//   // Access the socket ID
//   const socketId = socket.id;
//   console.log(`New client connected with ID: ${socketId}`);

//   // Rest of your socket event handlers and logic
// });

// io.listen(8000); // Listen on the specified port (e.g., 8000)











import React, { useEffect, useState } from 'react';
import { user } from '../Join/Join';
import sockerIO from 'socket.io-client';
import './Chat.css';
import Message from '../Message/Message';
import ReactScrollToBottom from 'react-scroll-to-bottom';

const ENDPOINT = 'http://localhost:8000/';
let socket;

const Chat = () => {
  const [id, setid] = useState('');
  const [messages, setMessages] = useState([]);

  const send = () => {
    const message = document.getElementById('chatInput').value;
    socket.emit('message', { message, id });
    document.getElementById('chatInput').value = '';
  };

  useEffect(() => {
    socket = sockerIO(ENDPOINT, { transports: ['websocket'] });

    socket.on('connect', () => {
      // alert('connected');
      setid(socket.id);
    });

    socket.emit('joined', { user });
    socket.on('welcome', (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    socket.on('userJoined', (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    socket.on('leave', (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    return () => {
      socket.emit('disconnectt');
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on('sendMessage', (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message, data.id);
    });

    return () => {
      socket.off();
    };
  }, [messages]);

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header">
           <img className='imageh' src='https://t3.ftcdn.net/jpg/00/96/08/90/240_F_96089033_p0CbHMQFfTBMmmu51tYj2FNy3fYSY0KD.jpg' />
            <a href='/'> <img src='https://cdn-icons-png.flaticon.com/128/1617/1617543.png' /></a></div>
        <ReactScrollToBottom className="chatBox">
          {messages.map((item, i) => (
            <Message
              key={i}
              user={item.user}
              message={item.message}
              classs={item.id === id ? 'right' : 'left'}
            />
          ))}
        </ReactScrollToBottom>

        <div className="inputBox">
          <input type="text" id="chatInput" />
          <button onClick={send} className="sendBtn">
            Send <img src="" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;




