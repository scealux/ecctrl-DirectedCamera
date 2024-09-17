import { Grid, KeyboardControls, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import Ecctrl from "../src/Ecctrl";
import Floor from "./Floor";
import Lights from "./Lights";
import Steps from "./Steps";
import Slopes from "./Slopes";
import RoughPlane from "./RoughPlane";
import RigidObjects from "./RigidObjects";
import FloatingPlatform from "./FloatingPlatform";
import DynamicPlatforms from "./DynamicPlatforms";
import ShotCube from "./ShotCube";
import { useControls } from "leva";
import CharacterModel from "./CharacterModel";
import React, { useEffect, useState } from "react";
import Courtyard from "./Courtyard";
import TeleportTarget from "./TeleportTarget";
import { PlayerProvider, usePlayer } from './PlayerContext';
import LocationCollider from "./LocationColliders";
import MouseControls from "./MouseControls";

function ExperienceContent() {
  // Delay physics activate
  const [pausedPhysics, setPausedPhysics] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPausedPhysics(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  // Debug settings
  const { physics, disableControl, disableFollowCam } = useControls("World Settings", {
    physics: false,
    disableControl: false,
    disableFollowCam: false,
  });

  // Keyboard control preset
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
    { name: "action1", keys: ["1"] },
    { name: "action2", keys: ["2"] },
    { name: "action3", keys: ["3"] },
    { name: "action4", keys: ["KeyF"] },
  ];

  const { controlScheme } = usePlayer();

  return (
    <>
      <Perf position="top-left" minimal />
      <Lights />
        <Physics debug={physics} timeStep="vary" paused={pausedPhysics}>
        {/* Conditionally render based on control scheme */}
        {controlScheme === 'keyboard' ? (
            <KeyboardControls map={keyboardMap}>
              <Ecctrl
                debug
                animated
                followLight
                springK={2}
                dampingC={0.2}
                autoBalanceSpringK={1.2}
                autoBalanceDampingC={0.04}
                autoBalanceSpringOnY={0.7}
                autoBalanceDampingOnY={0.05}
                disableControl={disableControl}
                disableFollowCam={disableFollowCam}
                mode="FixedCamera"
              >
                <CharacterModel />
              </Ecctrl>
              {/* <LocationCollider name="Courtyard" position={[0,1,-5]} scale={[45,4,45]}/>
              <LocationCollider name="Entrance" position={[0,1,23.5]} scale={[16.5,4,8]}/> */}
            
            </KeyboardControls>
          ) : (
            <>
              <MouseControls />

              {/*Teleport Targets*/}
              <TeleportTarget position={[0,0,30]} name="Lobby"/>
              <TeleportTarget position={[20,0,30]} name="Room 1"/>
              <TeleportTarget name="Courtyard"/>
            </>
          )}
          <Courtyard/>
         
        </Physics >
    </>
  );
}

export default function Experience() {
  return (
      <ExperienceContent />
  );
}
