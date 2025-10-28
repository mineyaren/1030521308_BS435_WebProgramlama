import { useMemo, useState } from "react";
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import ResultScreen from "./components/ResultScreen";

export default function App() {
  const [phase, setPhase] = useState("start");
  const [result, setResult] = useState(null);

  const images = useMemo(() => {
    const urls = [
      "https://picsum.photos/seed/a/400/300",
      "https://picsum.photos/seed/b/400/300",
      "https://picsum.photos/seed/c/400/300",
    ];
    const aiIndex = Math.floor(Math.random() * 3);
    return urls.map((url, i) => ({ url, isAI: i === aiIndex }));
  }, [phase]);

  function start() {
    setResult(null);
    setPhase("game");
  }

  function finish(isCorrect) {
    setResult(isCorrect);
    setPhase("result");
  }

  function restart() {
    setPhase("start");
  }

  if (phase === "start") return <StartScreen onStart={start} />;
  if (phase === "game") return <GameScreen images={images} onFinish={finish} />;
  return <ResultScreen isCorrect={result} onRestart={restart} />;
}
