/* eslint-disable import/no-anonymous-default-export */
import React, {useState, useEffect} from 'react';
import './App.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

export default () => {

  const [chatList, setChatList] = useState([
      {chatId: 1, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
      {chatId: 2, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
      {chatId: 3, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
      {chatId: 4, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
      id: 1234,
      avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Herivelton Santos'
  });

  return(

      <div className="app-window">
        <div className="sidebar">

              <header>
                   <img className="header--avatar" src={user.avatar} alt="" />
                   <div className="header--buttons">
                          <div className="header--btn">
                              <DonutLargeIcon style={{ color: '#919191'}} />
                          </div>
                          <div className="header--btn">
                              <ChatIcon style={{ color: '#919191'}} />
                          </div>
                          <div className="header--btn">
                              <MoreVertIcon style={{ color: '#919191'}} />
                          </div>
                   </div>
              </header>

              <div className="search">
                    <div className="search--input">
                          <SearchIcon fontSize="small" style={{ color: '#919191'}} />
                          <input type="search" placeholder="Procurar ou come??ar uma nova conversa" />
                    </div>
              </div>

              <div className=" chatList">
                    {chatList.map((item, key) => (
                        <ChatListItem
                        key={key}
                        data={item}
                        active={activeChat.chatId === chatList[key].chatId}
                        onClick={()=>setActiveChat(chatList[key])}
                        />
                    ))}
              </div>
           
        </div>
        <div className="contentArea">
          {activeChat.chatId !== undefined &&
              <ChatWindow 
                user={user}
                activeChat={activeChat}
              />
          }
           {activeChat.chatId === undefined &&
              <ChatIntro />
           }
        </div>
      </div>
    );

}