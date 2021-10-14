import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todo from '../Todo';

afterEach(() => {
  cleanup();
});

test('should render non-completed todo', () => {
  // expect(true).toBe(true);
  const todo = { id: 1, title: 'wash dishes', completed: false };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId('todo-1');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash dishes');
  expect(todoElement).not.toContainHTML(
    '<div data-testid="todo-2"><strike><h1>wash car</h1></strike></div>'
  );
});

test('should render completed todo', () => {
  // expect(true).toBe(true);
  const todo = { id: 2, title: 'wash car', completed: true };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId('todo-2');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash car');
  expect(todoElement).toContainHTML(
    '<div data-testid="todo-2"><strike><h1>wash car</h1></strike></div>'
  );
});

test('matches snapshot', () => {
  const todo = { id: 1, title: 'wash dishes', completed: false };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
  // console.log(tree);
});
