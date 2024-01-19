import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Tsk";
import { Saludar } from "./Saludar";
import { Post } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    console.log("hola eefef");
  }, []);
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 10);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 10);
        }}
      >
        restar
      </button>
      <hr />
    </div>
  );
}

root.render(
  <>
    <Counter />
    {/* <Post /> */}
  </>
);

{
  /* <TaskCard ready={true} />
    <Saludar />
    <Button text="Click me" />
    <Button text="Pay" />
    <Button text="" />
    <form onSubmit={handleChange}>
      <h1>Registro de usuario</h1>
      <button>Enviar</button>
    </form>
    <input onChange={handleChange} /> */
}
{
  /* <UserCard
      name="Ryan"
      amount={3000}
      married={true}
      points={[99.33, 33.3]}
      address={{ street: "1 main street", city: "new York" }}
      greet={alerta}
    /> */
}
