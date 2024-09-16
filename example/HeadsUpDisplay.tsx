import React, { useState } from "react";
import styled from "styled-components";
import { usePlayer } from './PlayerContext';

function HeadsUpDisplay() {
  const { locationName } = usePlayer();
  return (
    <>
      <HUDContainer>
        {locationName}
      </HUDContainer>
    </>
  );
}

const HUDContainer= styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border: 10px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  pointer-events: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  z-index: 1000000;
`;

export default HeadsUpDisplay;