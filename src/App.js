import TheHeader from "./layout/TheHeader";
import Card from "./views/Card";
import TodoView from "./layout/TodoView";

function App() {
  return (
    <div>
      <TheHeader />
      <Card>
        <TodoView />
      </Card>
    </div>
  );
}

export default App;
