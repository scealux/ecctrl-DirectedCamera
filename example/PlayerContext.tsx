// PlayerContext.tsx
import React, { createContext, useState, useContext } from 'react';
import * as THREE from 'three';

type ControlScheme = 'keyboard' | 'mouse';

type PlayerContextType = {
  position: THREE.Vector3;
  setPosition: (position: THREE.Vector3) => void;
  controlScheme: ControlScheme;
  setControlScheme: (scheme: ControlScheme) => void;
  locationName: String;
  setLocationName: (locationName: String) => void;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC = ({ children }) => {
  const [position, setPosition] = useState(new THREE.Vector3(0, 0, 0))
  const [controlScheme, setControlScheme] = useState<ControlScheme>('mouse')
  const [locationName, setLocationName] = useState("Courtyard")

  return (
    <PlayerContext.Provider value={{ position, setPosition, controlScheme, setControlScheme, locationName, setLocationName }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};