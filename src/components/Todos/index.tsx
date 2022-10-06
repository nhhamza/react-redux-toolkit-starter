import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  addTodo,
  selectTodos,
  Todo,
} from "../../redux/features/todos/todosSlice";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { useAppSelector } from "../../redux/hooks/useAppSelector";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AddTodoProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AddTodo = (_props: AddTodoProps): JSX.Element => {
  const todoRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const { todos } = useAppSelector(selectTodos);

  const generateTodo = (): Todo => {
    return {
      id: uuidv4(),
      text: todoRef?.current?.value,
      isEditing: false,
      createdAt: new Date().toISOString(),
    };
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e?.preventDefault();
    const todo = generateTodo();
    dispatch(addTodo(todo));
  };

  return (
    <div>
      <form onSubmit={onSubmit} noValidate>
        <input ref={todoRef} name="text" autoFocus={true} />
        <input type="submit" value="Create Task" />
      </form>
      <br />
      <div>
        {todos.map((todo: Todo) => (
          <li key={uuidv4()}>{todo.text}</li>
        ))}
      </div>
    </div>
  );
};
