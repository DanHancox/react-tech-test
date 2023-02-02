import { render } from "@testing-library/react";
import React from "react";
import Search from "../components/Search";

describe("renders search to dom", () => {
  it("renders Search", () => {
    const { asFragment } = render(<Search />);

    expect(asFragment()).toMatchSnapshot();
  });
});
