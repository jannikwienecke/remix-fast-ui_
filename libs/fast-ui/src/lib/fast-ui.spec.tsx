import { render } from "@testing-library/react";

import FastUi from "./fast-ui";

describe("FastUi", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FastUi />);
    expect(baseElement).toBeTruthy();
  });
});
