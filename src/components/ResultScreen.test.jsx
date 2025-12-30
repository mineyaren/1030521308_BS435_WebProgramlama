import { render, screen } from "@testing-library/react";
import ResultScreen from "./ResultScreen";

test("ResultScreen sonucu ve butonu gösterir", () => {
  render(<ResultScreen />);

  expect(
    screen.getByText(/Yanlış tahmin/i)
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: /Yeni Tur Başlat/i })
  ).toBeInTheDocument();
});
