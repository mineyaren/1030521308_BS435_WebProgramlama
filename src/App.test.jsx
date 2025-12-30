import { render, screen } from "@testing-library/react";
import App from "./App";

test("uygulama başla ekranıyla açılır", () => {
  render(<App />);
  expect(screen.getByText(/gerçeği bul/i)).toBeInTheDocument();
});