import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";
import { Children } from "react";
const MockTodoFooter = ({ num }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={num} />
    </BrowserRouter>
  );
};

describe("TodoFooter Tests", () => {
  describe("Test plural tasks", () => {
    it("should render the correct amount of incomplete tasks", async () => {
      render(<MockTodoFooter num={5} />);
      const paragraphElement = screen.getByText(/5 tasks left/i);
      expect(paragraphElement).toBeInTheDocument();
    });
  });

  describe("Test singular Task", () => {
    it("should render 'task' if the number of incomplete tasks is 1", async () => {
      render(<MockTodoFooter num={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toBeInTheDocument();
    });
  });
});

// it("should render 'task' if the number of incomplete tasks is 1", async () => {
//   render(<MockTodoFooter num={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toContainHTML("p");
// });

// it("should render 'task' if the number of incomplete tasks is 1", async () => {
//   render(<MockTodoFooter num={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toHaveTextContent("1 task left");
// });
