import { memo } from "react";

// components
import { TodoItem } from "@/entities/todo/ui";
import {
  useDeleteTodoMutation,
  useGetTodoListQuery,
  useUpdateTodoMutation,
} from "@/entities/todo/hooks";

export const TodoList = memo(() => {
  const { todoList } = useGetTodoListQuery();

  const { updateTodo } = useUpdateTodoMutation();
  const { deleteTodo } = useDeleteTodoMutation();

  const handleUpdateTodo = (id: number, isCompleted: boolean) => {
    updateTodo({ id, data: { isCompleted } });
  };

  return (
    <div id="todo-list" className="perfect-scrollbar">
      {todoList?.map((todo) => (
        <TodoItem
          key={todo.id}
          item={todo}
          onDelete={() => deleteTodo(todo.id)}
          onToggle={() => handleUpdateTodo(todo.id, !todo.isCompleted)}
        />
      ))}
    </div>
  );
});
