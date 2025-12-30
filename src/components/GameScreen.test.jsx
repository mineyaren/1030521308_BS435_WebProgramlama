import { render, screen } from "@testing-library/react";
import GameScreen from "./GameScreen";

test("GameScreen render olur", () => {
  render(<GameScreen mode="hardcore" restart={() => {}} />);
  expect(screen.getByText(/Hardcore/i)).toBeInTheDocument();
});
