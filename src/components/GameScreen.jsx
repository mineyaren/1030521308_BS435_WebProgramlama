import { useState } from "react";

export default function GameScreen({ images, onFinish }) {
  const [firstPickWrong, setFirstPickWrong] = useState(false);

  function handlePick(i) {
    if (images[i].isAI) return onFinish(true);
    if (!firstPickWrong) setFirstPickWrong(true);
    else onFinish(false);
  }

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h2>Hangisi AI tarafından üretildi?</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img.url}
            alt={`img-${i}`}
            width={250}
            onClick={() => handlePick(i)}
            style={{ borderRadius: 8, cursor: "pointer" }}
          />
        ))}
      </div>
      {firstPickWrong && <p>💡 İpucu: Arka plan detaylarına dikkat et!</p>}
    </div>
  );
}
