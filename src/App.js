import React, {useState} from "react";
import "./style.css";
import Counter from "./components/Counter";
import UserInput from "./components/UserInput";

export default function App() {
  return (
    <div>
      <Counter  name="Dave"/>
      <UserInput />
    </div>
  );
}
