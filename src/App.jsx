import { useState } from "react";
import StartScreen from "./components/StartScreen";
import ModeSelect from "./components/ModeSelect";
import GameScreen from "./components/GameScreen";

export default function App() {
  // Ekran akışı: start → mode → game → result (result varsa)
  const [screen, setScreen] = useState("start");
  const [mode, setMode] = useState(null);

  return (
    <div>
      {/* Başlangıç ekranı */}
      {screen === "start" && (
        <StartScreen onStart={() => setScreen("mode")} />
      )}

      {/* Mod seçme ekranı */}
      {screen === "mode" && (
        <ModeSelect
          setMode={setMode}
          startGame={() => setScreen("game")}
        />
      )}

      {/* Oyun ekranı */}
      {screen === "game" && (
        <GameScreen
          mode={mode}
          restart={() => setScreen("mode")}
        />
      )}
    </div>
  );
}
