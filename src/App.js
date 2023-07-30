import React from "react";
import Todo from "./components/Todo";

export default function App() {
  return (
    <div>
      <h1> My Todos</h1>
      <Todo title="first title" button="delete" />
      <Todo title="second title" button="remove" />
      <Todo title="third title" button="confirm" />
    </div>
  );
}
