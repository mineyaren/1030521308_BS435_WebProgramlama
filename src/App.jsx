import { useState } from "react";
import ModeSelect from "./components/ModeSelect";
import GameScreen from "./components/GameScreen";

export default function App() {
  const [screen, setScreen] = useState("mode"); // mode → game → result
  const [mode, setMode] = useState(null);

  const startGame = () => setScreen("game");

  return (
    <div>
      {screen === "mode" && (
        <ModeSelect setMode={setMode} startGame={startGame} />
      )}

      {screen === "game" && (
        <GameScreen mode={mode} restart={() => setScreen("mode")} />
      )}
    </div>
  );
}
