import { render } from "@testing-library/react";
import React from "react";
import SearchResults from "../components/SearchResults";

describe("renders search to dom", () => {
  it("renders Search", () => {
    const { asFragment } = render(<SearchResults />);

    expect(asFragment()).toMatchSnapshot();
  });
});
