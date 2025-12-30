import reportWebVitals from "./reportWebVitals";

test("reportWebVitals parametresiz çağrıldığında çökmez", () => {
  expect(() => reportWebVitals()).not.toThrow();
});

test("reportWebVitals fonksiyon parametresi ile de çökmez", () => {
  const mockFn = jest.fn();
  expect(() => reportWebVitals(mockFn)).not.toThrow();
});
