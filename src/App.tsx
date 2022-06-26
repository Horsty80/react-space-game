import { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { io } from "socket.io-client";
import socketService from "./services/socketService";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

const WelcomeText = styled.div`
  margin: 0;
  color: #8e44ad;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const connectSocket = async () => {
    const socket = await socketService.connect("http://localhost:9000").catch((err) => {
      console.log("Error: ", err);
    });
  };

  useEffect(() => {
    connectSocket();
  }, []);
  
  return (
    <AppContainer>
      <WelcomeText>Welcome to {import.meta.env.VITE_GAME_TITLE}</WelcomeText>
      <MainContainer>Hey</MainContainer>
    </AppContainer>
  );
}

export default App;
