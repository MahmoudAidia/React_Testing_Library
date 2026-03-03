import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
const MockTodo = function () {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

function addTask(tasks) {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const addTodoButton = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(addTodoButton);
  });
}
describe("Integration Todo test", () => {
  it("Should render same text passed to prop", () => {
    render(<MockTodo />);
    addTask(["Go To Gym"]);
    const divElement = screen.getByText(/Go To Gym/i);
    expect(divElement).toBeInTheDocument();
  });

  it("Should render all todos", () => {
    render(<MockTodo />);
    addTask(["Go To Gym", "Home Work", "anything else"]);
    const divElement = screen.getAllByTestId("task-box");
    expect(divElement.length).toBe(3);
  });

  it("Should render todo without line through", () => {
    render(<MockTodo />);
    addTask(["Go To Gym", "Home Work", "anything else"]);
    const divElements = screen.getAllByTestId("task-box");
    divElements.forEach((item) => {
      expect(item).not.toHaveClass("todo-item-active");
    });
  });

  it("Should render todo with line through", () => {
    render(<MockTodo />);
    addTask(["Go To Gym", "Home Work", "anything else"]);
    const divElements = screen.getAllByTestId("task-box");
    divElements.forEach((item) => {
      fireEvent.click(item);
      expect(item).toHaveClass("todo-item-active");
    });
  });

  it("Should render remaining tasks", () => {
    render(<MockTodo />);
    addTask(["Go To Gym", "Home Work", "anything else"]);
    const divElements = screen.getAllByTestId("task-box");
    const tasksLeft = screen.getByTestId("tasks-left");
    const content =
      divElements.length > 1
        ? `${divElements.length} tasks left`
        : `1 task left`;
    expect(tasksLeft.textContent).toBe(content);
  });
});
