import {useContext } from "react";
import ThemeContext from "./context/Datacontext";


const Page2 = () => {
  const {name , age , theme ,startCount} = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <h2>welcome to Page2</h2>
      <h3>my name is {name}</h3>
      <h3>my age is {age}</h3>
      <h4>{startCount}</h4>
    </div>
  );
}

export default Page2;
