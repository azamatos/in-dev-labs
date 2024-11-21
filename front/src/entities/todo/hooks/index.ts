import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import todoService from "../services";
import { AxiosError } from "axios";

const useGetTodoListQuery = () => {
  const query = useQuery<Todo.Item[], AxiosError>({
    queryKey: ["todo-list"],
    queryFn: todoService.getTodoList,
  });

  return {
    isLoading: query.isLoading,
    error: query.error,
    todoList: query.data,
  };
};

const useGetTodoItemQuery = (id: number) => {
  const query = useQuery<Todo.Item, AxiosError>({
    queryKey: ["todo-item", id],
    queryFn: () => todoService.getTodoItem(id),
  });

  return {
    isLoading: query.isLoading,
    error: query.error,
    data: query.data,
  };
};

const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    Todo.Item,
    AxiosError,
    Todo.Mutation.CreateTodoItem
  >({
    mutationKey: ["create-todo"],
    mutationFn: (data) => todoService.createTodoItem(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo-list"] });
    },
  });

  return {
    isLoading: mutation.isPending,
    createTodo: mutation.mutate,
  };
};

const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    Todo.Item,
    AxiosError,
    Todo.Mutation.UpdateTodoItem
  >({
    mutationKey: ["update-todo"],
    mutationFn: (data) => todoService.updateTodoItem(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo-list"] });
    },
  });

  return {
    isLoading: mutation.isPending,
    updateTodo: mutation.mutate,
  };
};

const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<Todo.Item, AxiosError, number>({
    mutationKey: ["delete-todo"],
    mutationFn: (data) => todoService.deleteTodoItem(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo-list"] });
    },
  });

  return {
    isLoading: mutation.isPending,
    deleteTodo: mutation.mutate,
  };
};

export {
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useGetTodoItemQuery,
  useGetTodoListQuery,
};
