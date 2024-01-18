import { render, screen } from "@testing-library/react";
import App from "./App";

test("App render", () => {
  render(<App />);
  const ele = screen.getByText("hell", { exact: false });
  expect(ele).toBeInTheDocument();
});
