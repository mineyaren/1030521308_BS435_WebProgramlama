import { render, screen, fireEvent, act } from "@testing-library/react";
import StartScreen from "./StartScreen";

jest.useFakeTimers();

test("Başla tıklanınca geri sayım başlar ve onStart çağrılır", () => {
  const onStartMock = jest.fn();

  render(<StartScreen onStart={onStartMock} />);

  // Başla'ya tıkla
  act(() => {
    fireEvent.click(screen.getByText("Başla"));
  });

  // 3 saniyeyi TEK TEK ilerlet (kritik nokta)
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  act(() => {
    jest.advanceTimersByTime(1000);
  });

  expect(onStartMock).toHaveBeenCalledTimes(1);
});
