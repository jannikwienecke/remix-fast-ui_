import { render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import App from "./app";

describe("App", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });

  it("should have a test as the title", () => {
    // global["fetch"] = jest.fn().mockResolvedValueOnce({
    //   json: () => ({
    //     message: "my message",
    //   }),
    // });

    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(getByText(/test/gi)).toBeTruthy();
  });
});
