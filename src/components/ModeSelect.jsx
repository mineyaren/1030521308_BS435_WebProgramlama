export default function ModeSelect({ setMode, startGame }) {
  const selectMode = (mode) => {
    setMode(mode);
    startGame();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <h2>Oyun Modu Seç</h2>

      <button
        onClick={() => selectMode("secondChance")}
        style={btnBlue}
      >
        🎯 Kolay (2 Hak)
      </button>

      <button
        onClick={() => selectMode("hardcore")}
        style={btnRed}
      >
        🔥 Zor (Tek Hak)
      </button>
    </div>
  );
}

const btnBlue = {
  padding: "16px 28px",
  fontSize: 18,
  borderRadius: 14,
  backgroundColor: "#3B82F6",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

const btnRed = {
  ...btnBlue,
  backgroundColor: "#EF4444",
};

