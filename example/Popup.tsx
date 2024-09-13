import React, { useState } from "react";
import styled from "styled-components";

function Popup() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible && (
        <BlurryBackground>
          <ControlsScreen onClose={toggleVisibility} />
        </BlurryBackground>
      )}
    </>
  );
}

const BlurryBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  background: rgba(100, 100, 100, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  z-index: 1000000;
`;

function ControlsScreen({ onClose }) {
  return (
    <ControlsSelector>
      <h1>Choose your control method</h1>
      <CloseButton onClick={onClose} />
      <div className="options">
        <ControlsOption onClick={() => console.log("SWITCH TO KEYBOARD CONTROLS")}>
          <h2>Keyboard Controls</h2>
          <p>Move with the "WASD" or arrow keys, camera follows your movement.</p>
          <img src="./keyControls.png" alt="control keys" width="30%" />
        </ControlsOption>
        <p>or</p>
        <ControlsOption onClick={() => console.log("SWITCH TO MOUSE CONTROLS")}>
          <h2>Click and Drag Controls</h2>
          <p>Click and drag to rotate the view, click highlighted zones to teleport.</p>
        </ControlsOption>
      </div>
    </ControlsSelector>
  );
}

const ControlsSelector = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 80%;
  background: rgba(255,255,255,0.7);
  border-radius: 3em;
  padding: 40px 80px;
  position: relative;
  h1 {
    margin: 0px;
    font-weight: 100;
  }
  .options {
    display: flex;
    align-items: center;
  }
`;

const ControlsOption = styled.div`
  width: 80%;
  height: 200px;
  border: 3px solid gray;
  border-radius: 2em;
  margin: 10px;
  padding: 20px 40px;
  transition: 0.1s ease-in-out all;
  h2 {
    font-family: sans-serif;
    font-weight: 100;
    margin-bottom: 10px;
  }
  p {
    margin: 0px;
  }
  &:hover {
    background: rgba(255,255,255, 1);
    scale: 1.01;
    cursor: pointer;
  }
`;

function CloseButton({ onClick }) {
  return (
    <XButton onClick={onClick}>
      x
    </XButton>
  );
}

const XButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: red;
  font-weight: bold;
  font-size: 40px;
  cursor: pointer;
`;

export default Popup;