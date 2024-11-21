import axiosInstance from "@/shared/lib/api";

const todoService = {
  getTodoList() {
    return axiosInstance({
      method: "GET",
      url: "/todos",
    }).then((res) => res.data);
  },

  getTodoItem(id: number) {
    return axiosInstance({
      method: "GET",
      url: "/todos/" + id,
    }).then((res) => res.data);
  },

  createTodoItem(data: Todo.Mutation.CreateTodoItem) {
    return axiosInstance({
      method: "POST",
      url: "/todos/",
      data,
    }).then((res) => res.data);
  },

  updateTodoItem({ id, data }: Todo.Mutation.UpdateTodoItem) {
    return axiosInstance({
      method: "PATCH",
      url: "/todos/" + id,
      data,
    }).then((res) => res.data);
  },

  deleteTodoItem(id: number) {
    return axiosInstance({
      method: "DELETE",
      url: "/todos/" + id,
    }).then((res) => res.data);
  },
};

export default todoService;
