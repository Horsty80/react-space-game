import { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { io } from "socket.io-client";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

function App() {
  const connect = () => {
    const socket = io("http://localhost:9000");

    socket.on("connect", () => {
      socket.emit("custom_event", { name: "Cyril", age: 30 });
    });
  };

  useEffect(() => {
    connect();
  }, []);

  return (
    <AppContainer>
      <h1>Welcome to {import.meta.env.VITE_GAME_TITLE}</h1>
    </AppContainer>
  );
}

export default App;
