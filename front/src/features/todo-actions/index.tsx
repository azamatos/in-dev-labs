import { ChangeEvent, FormEvent, memo, useState } from "react";

// components
import { Button } from "@/shared/ui/button";

// hooks
import { useCreateTodoMutation } from "@/entities/todo/hooks";

export const TodoListActions = memo(() => {
  const [title, setTitle] = useState("");

  // handlers
  const handleSetTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const { createTodo } = useCreateTodoMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title) {
      createTodo({ content: title });
      setTitle("");
    }
  };

  return (
    <div className="footer">
      <form onSubmit={handleSubmit}>
        <input
          maxLength={50}
          value={title}
          onChange={handleSetTitle}
          type="text"
          placeholder="New Todo"
        />
        <Button type="submit">Add Todo</Button>
      </form>
      <small>You can change the position of the container by dragging it</small>
    </div>
  );
});
