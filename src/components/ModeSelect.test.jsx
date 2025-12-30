import { render, screen, fireEvent } from "@testing-library/react";
import ModeSelect from "./ModeSelect";

test("Mod seçilip oyun başlatılır", () => {
  const setMode = jest.fn();
  const startGame = jest.fn();

  render(<ModeSelect setMode={setMode} startGame={startGame} />);

  fireEvent.click(screen.getByText(/Zor/i));

  expect(setMode).toHaveBeenCalled();
  expect(startGame).toHaveBeenCalled();
});
