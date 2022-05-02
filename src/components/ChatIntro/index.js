/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './style.css';

export default ()=>{
    return(
        <div className="chatIntro">
            <img src="https://i.ibb.co/M6t72Kh/intro-connection-light-c98cc75f2aa905314d74375a975d2cf2.jpg" alt=""/>
            <h1>Mantenha o celular conectado</h1>
            <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.<br/>
                Para reduzir o uso de dados, conect seu telefone a uma rede Wi-Fi</h2>
        </div>
    );
}