import React from "react";
import { API_URI } from "../../../envs/envUtil";
import { AddTodo } from "../Todos";

function App() {
  console.log("API_URI2", API_URI);

  return (
    <div>
      <h1 role="h1">Hello world React!</h1>
      <AddTodo />
    </div>
  );
}

export default App;
