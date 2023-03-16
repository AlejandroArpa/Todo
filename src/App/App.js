import React, { useState } from "react";
import {AppUI} from "./AppUI";
import "../Styles/App.css";
import { TodoProvider } from "../Hooks/TodoContext";




function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
