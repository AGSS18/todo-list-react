import Todo from "./components/Todo";

function App() {
  return (
    <div className="container">
      <h1 className="center-text text-white">MY TODOS</h1>
      <div className="todos">
        <Todo title="Learn React" />
        <Todo title="Master React"/>
        <Todo title="Learn MySQL"/>
        <Todo title="Master MySQL"/>
        <Todo title="Learn PHP"/>
        <Todo title="Master PHP"/>
      </div>
    </div>
  );
}

export default App;
