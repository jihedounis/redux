import "./css/main.css";
import Display from "./components/Display";
import Todo from "./components/Todo";
function App() {
  return (
    <div className="App">
        <h1 className="text">Todo App</h1>
        <Todo />
        <Display />
    
    </div>
  );
}

export default App;
