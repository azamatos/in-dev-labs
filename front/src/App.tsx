import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// widgets
import { TodoContainer } from "./widgets/todo-container";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TodoContainer />
    </QueryClientProvider>
  );
};

export default App;
