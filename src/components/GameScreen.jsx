import React, { useState, useEffect } from "react";

const GameScreen = () => {
  const [images, setImages] = useState([]);
  const [correctIndex, setCorrectIndex] = useState(null);
  const [firstPickWrong, setFirstPickWrong] = useState(false);

  // Yeni rastgele resimleri yükleyen fonksiyon
  const loadImages = () => {
    const randomSeed = Math.floor(Math.random() * 10000); // rastgele sayı
    const newImages = [
      { url: `https://picsum.photos/300/300?random=${randomSeed + 1}` },
      { url: `https://picsum.photos/300/300?random=${randomSeed + 2}` },
      { url: `https://picsum.photos/300/300?random=${randomSeed + 3}` },
    ];
    setImages(newImages);
    setCorrectIndex(Math.floor(Math.random() * 3)); // doğru olanı rastgele seç
    setFirstPickWrong(false);
  };

  useEffect(() => {
    loadImages(); // sayfa açıldığında yükle
  }, []);

  const handlePick = (index) => {
    if (index === correctIndex) {
      alert("🎉 Doğru bildin!");
      loadImages(); // ✅ doğruysa yeni resimleri yükle
    } else {
      setFirstPickWrong(true);
    }
  };

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
};

export default GameScreen;
