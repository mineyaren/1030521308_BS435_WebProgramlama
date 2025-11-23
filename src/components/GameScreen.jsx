// src/components/GameScreen.jsx

import React, { useState, useEffect } from "react";
import images from "../data/images";

export default function GameScreen({ mode, restart }) {
  const [set, setSet] = useState([]);
  const [correctId, setCorrectId] = useState(null);
  const [message, setMessage] = useState("");
  const [hintVisible, setHintVisible] = useState(false);
  const [attempt, setAttempt] = useState(1); // 1. hak / 2. hak

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    let selected = images.sort(() => Math.random() - 0.5).slice(0, 3);
    setSet(selected);

    const aiImage = selected.find((img) => img.isAI);
    setCorrectId(aiImage.id);
  };

  const handleSelect = (id) => {

    // -------------------------
    //  MODE 1: HARDCORE MODE
    // -------------------------
    if (mode === "hardcore") {
      if (id === correctId) {
        setMessage("Tebrikler! Doğru tahmin 🎉");
      } else {
        setMessage("Yanlış 😢 Hardcore modda tek hakkın vardı.");
      }
      return;
    }

    // -------------------------
    //  MODE 2: SECOND CHANCE MODE
    // -------------------------
    if (mode === "secondChance") {

      // İlk hak
      if (attempt === 1) {
        if (id === correctId) {
          setMessage("Helal! İlk denemede bildin 🎉");
        } else {
          // yanlışsa ipucu ver → 2. hak açılır
          setHintVisible(true);
          setAttempt(2);
        }
        return;
      }

      // İkinci hak
      if (attempt === 2) {
        if (id === correctId) {
          setMessage("Tebrikler 🎉 İkinci denemede doğruyu buldun!");
        } else {
          setMessage("Maalesef… Yanlış. 2 hakkını da kullandın 😢");
        }
        return;
      }
    }
  };

  return (
    <div style={{ textAlign: "center", padding: 30 }}>
      <h2>
        {mode === "hardcore"
          ? "Hardcore Mod"
          : "Second Chance (2 Hak + İpucu)"}
      </h2>

      {/* SONUÇ EKRANI */}
      {message ? (
        <div>
          <h3>{message}</h3>
          <button onClick={restart} style={btn}>
            Yeniden Oyna
          </button>
        </div>
      ) : (
        <div>
          {/* İPUCU (sadece second chance modunda ve yanlışta görünür) */}
          {hintVisible && (
            <p style={{ color: "orange", marginBottom: 20 }}>
              🔍 İpucu: Arka plan detaylarına ve kenarlara dikkat et.
            </p>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              marginTop: 20,
            }}
          >
            {set.map((img) => (
              <img
                key={img.id}
                src={img.url}
                alt=""
                onClick={() => handleSelect(img.id)}
                style={{
                  width: 200,
                  height: 200,
                  cursor: "pointer",
                  borderRadius: 8,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const btn = {
  padding: "10px 16px",
  fontSize: "16px",
  cursor: "pointer",
};

