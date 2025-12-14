import { useState } from "react";
import StartScreen from "./components/StartScreen";
import ModeSelect from "./components/ModeSelect";
import GameScreen from "./components/GameScreen";
import { themes } from "./themes";

export default function App() {
  const [screen, setScreen] = useState("start");
  const [mode, setMode] = useState(null);
  const currentTheme = themes[mode] || themes.secondChance;


  return (
    <div
     style={{
     minHeight: "100vh",
     backgroundColor: currentTheme.background,
     color: currentTheme.text,
     transition: "0.3s",
  }}
>
      {screen === "start" && (
        <StartScreen onStart={() => setScreen("mode")} />
      )}

      {screen === "mode" && (
        <ModeSelect
          setMode={setMode}
          startGame={() => setScreen("game")}
        />
      )}

      {screen === "game" && (
        <GameScreen
          mode={mode}
          restart={() => setScreen("mode")}
        />
      )}
    </div>
  );
}
