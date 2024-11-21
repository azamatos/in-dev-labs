import { useCallback, useEffect, useState } from "react";

// components
import { TodoListActions } from "@/features/todo-actions";
import { TodoList } from "@/features/todo-list";

export const TodoContainer = () => {
  const [coordinates, setCoordinates] = useState({
    x: 600,
    y: 100,
  });

  // handlers
  const handleSetCoordinates = useCallback((event: MouseEvent) => {
    setCoordinates({ x: event.clientX - 16, y: event.clientY - 22 });
  }, []);

  const handleStartDragging = () => {
    window.addEventListener("mousemove", handleSetCoordinates);
  };

  const handleStopDragging = useCallback(() => {
    window.removeEventListener("mousemove", handleSetCoordinates);
  }, [handleSetCoordinates]);

  useEffect(() => {
    window.addEventListener("mouseup", handleStopDragging);

    return () => {
      window.removeEventListener("mouseup", handleStopDragging);
      window.removeEventListener("mousemove", handleSetCoordinates);
    };
  }, [handleStopDragging, setCoordinates, handleSetCoordinates]);

  return (
    <div id="container" style={{ top: coordinates.y, left: coordinates.x }}>
      <svg
        onMouseDown={handleStartDragging}
        className="icon drag-icon"
        fill="currentColor"
      >
        <use xlinkHref="#draggable"></use>
      </svg>
      <h1>Todo List</h1>
      <TodoList />
      <TodoListActions />
    </div>
  );
};
