import React from "react";
// import Header from "./Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";

function App() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("State", state);
  if(state.todo.isLoading) {
    return <h1>Loading...</h1>
  }
  
  return (
    <>
    
    <div className="App">
  <h1>Redux Toolkit API Call:</h1>
  <button className="button" onClick={(e) => dispatch(fetchTodos())}>
    Fetch Todos
  </button>
  <div className="todo-container">
    {state.todo.data &&
      state.todo.data.map((e) => (
        <div className="todo-item" key={e.id}>
          {e.title}
        </div>
      ))}
  </div>
</div>

    </>
  );
}

export default App;
