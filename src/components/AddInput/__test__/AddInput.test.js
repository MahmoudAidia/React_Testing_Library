// import { render, screen, fireEvent } from "@testing-library/react";
// import AddInput from "../AddInput";

import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

// const mockedSetTodo = jest.fn();

// describe("AddInput", () => {
//   it("should render input element", () => {
//     render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
//     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
//     expect(inputElement).toBeInTheDocument();
//   });

//   it("should be able to type into input", () => {
//     render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
//     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
//     fireEvent.click(inputElement);
//     fireEvent.change(inputElement, {
//       target: { value: "Go Grocery Shopping" },
//     });
//     expect(inputElement.value).toBe("Go Grocery Shopping");
//   });

//   it("should be able to type into input", () => {
//     render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
//     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
//     fireEvent.click(inputElement);
//     fireEvent.change(inputElement, {
//       target: { value: "Go Grocery Shopping" },
//     });
//     const buttonElement = screen.getByRole("button", { name: /Add/i });
//     fireEvent.click(buttonElement);
//     expect(mockedSetTodo).toBeCalled();
//   });

//   it("should have empty input when add button is cliked", () => {
//     render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
//     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
//     fireEvent.change(inputElement, {
//       target: { value: "Go Grocery Shopping" },
//     });
//     const buttonElement = screen.getByRole("button", { name: /Add/i });
//     fireEvent.click(buttonElement);
//     expect(inputElement.value).toBe("");
//   });
// });

const mockSetTodos = jest.fn();
describe("Testing Input Element", () => {
  it("Should render Input Element", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("Should change input value", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "test test test" } });
    expect(inputElement.value).toBe("test test test");
  });
  it("Should clear input when clicked", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const button = screen.getByRole("button");
    fireEvent.change(inputElement, { target: { value: "test test test" } });
    fireEvent.click(button);
    expect(inputElement.value).toBe("");
  });
});
