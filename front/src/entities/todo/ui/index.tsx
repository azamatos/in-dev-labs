import { FC } from "react";

interface Props {
  item: Todo.Item;
  onDelete: () => void;
  onToggle: () => void;
}

export const TodoItem: FC<Props> = ({ item, onDelete, onToggle }) => {
  return (
    <div className={`todo ${item.isCompleted ? "task-complete" : ""}`}>
      <label>
        <input type="checkbox" onChange={onToggle} />
        {item.content}
      </label>
      <svg onClick={onDelete} className="icon todo-close" fill="currentColor">
        <use xlinkHref="#cross"></use>
      </svg>
    </div>
  );
};
