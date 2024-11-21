declare namespace Todo {
  type Item = {
    id: number;
    content: string;
    isCompleted: boolean;
    createdAt: string;
    updatedAt: string;
  };

  declare namespace Query {
    type TodoItem = {
      id: number;
    };
  }

  declare namespace Mutation {
    type CreateTodoItem = {
      content: string;
      isCompleted?: boolean;
    };
    type UpdateTodoItem = {
      id: number;
      data: {
        content?: string;
        isCompleted?: boolean;
      };
    };
    type DeleteTodoItem = {
      id: number;
    };
  }
}
