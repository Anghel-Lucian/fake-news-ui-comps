import SearchHistory from ".";
import { render, screen } from "@testing-library/react";
import React from "react";

test("on initial render, <SearchHistory /> renders a div and a ul", () => {
  render(<SearchHistory />);

  expect(screen.findByRole("div"));
  expect(screen.findByRole("ul"));
});
