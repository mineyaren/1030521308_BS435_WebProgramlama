import { useState, useEffect } from "react";
import images from "../data/images";
import { themes } from "../themes";

export default function GameScreen({ mode, restart }) {
  const theme = themes[mode] || themes.secondChance;

  const [set, setSet] = useState([]);
  const [correctId, setCorrectId] = useState(null);
  const [message, setMessage] = useState("");
  const [hintVisible, setHintVisible] = useState(false);
  const [attempt, setAttempt] = useState(1);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    const aiImages = images.filter((i) => i.isAI);
    const realImages = images.filter((i) => !i.isAI);

    const ai =
      aiImages[Math.floor(Math.random() * aiImages.length)];

    const reals = [...realImages]
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    const finalSet = [...reals, ai].sort(
      () => Math.random() - 0.5
    );

    setSet(finalSet);
    setCorrectId(ai.id);
  };

  const handleSelect = (id) => {
    if (mode === "hardcore") {
      setMessage(
        id === correctId
          ? "Tebrikler! Doğru 🎉"
          : "Yanlış 😢 Tek hakkın vardı."
      );
      return;
    }
  if (attempt === 1) {
   if (id === correctId) {
     setMessage("Helal! İlk denemede 🎉");
   }  else {
     setHintVisible(true);
     setAttempt(2);
     loadImages(); // 👈 YENİ SET GELİR
   }
   return;
 }

    setMessage(
      id === correctId
        ? "Tebrikler 🎉"
        : "Yanlış 😢 2 hakkın da bitti."
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: theme.background,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: theme.card,
          padding: 32,
          borderRadius: 20,
          width: "90%",
          maxWidth: 900,
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ color: theme.primary, marginBottom: 20 }}>
          {mode === "hardcore"
            ? "🔥 Hardcore Mod"
            : "🎯 Second Chance Mod"}
        </h2>

        {message ? (
          <>
            <h3 style={{ marginBottom: 20 }}>{message}</h3>
            <button
              onClick={restart}
              style={button(theme)}
            >
              Yeniden Oyna
            </button>
          </>
        ) : (
          <>
            {hintVisible && (
              <p style={{ color: theme.primary }}>
                🔍 İpucu: Kenarlara dikkat et
              </p>
            )}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
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
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                    borderRadius: 14,
                    cursor: "pointer",
                    border: `4px solid ${theme.primary}`,
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const button = (theme) => ({
  padding: "14px 26px",
  fontSize: 16,
  borderRadius: 12,
  backgroundColor: theme.primary,
  color: "#fff",
  border: "none",
  cursor: "pointer",
});


