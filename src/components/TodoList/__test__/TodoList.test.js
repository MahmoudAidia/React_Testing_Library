import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import TodoList from "../TodoList";
import { render } from "@testing-library/react";

const MockedTodoList = function () {
  return (
    <BrowserRouter>
      <TodoList />
    </BrowserRouter>
  );
};

describe("Footer testing", () => {
  it("Should render remaining tasks", () => {
    render(<MockedTodoList />);
  });
});
