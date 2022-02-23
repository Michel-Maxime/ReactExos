import { render, screen } from "@testing-library/react";
import Carde from "../components/Card";

describe(Carde.name, () => {
  it("render a button with 'Learn More'", () => {
    render(<Carde title={""} id={""} img={""} details={""} />);
    expect(
      screen.getByRole("button", { name: "Learn More" })
    ).toBeInTheDocument();
  });
});
