import React from "react";
import Button from "./components/Button";
import { ButtonType } from "./components/Button/Button";
import User from "./components/User";
import Title from "./components/Title";



const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          title={"Primary"}
          type={ButtonType.Primary}
          onClick={() => {}}
        />
        <Button
          title={"Secondary"}
          type={ButtonType.Secondary}
          onClick={() => {}}
        />
        <Button title={"Error"} type={ButtonType.Error} onClick={() => {}} />
        <User userName={"Artem Malkin"}/>
        <Title title={"Blog"}/>
      </header>
    </div>
  );
};

export default App;
