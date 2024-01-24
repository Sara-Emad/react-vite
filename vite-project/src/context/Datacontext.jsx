import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = { name: "Sara", age: 28, startCount: 0, theme: "light" };
 
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };

    case "CHANGE_AGE":
      return { ...state, age: action.newValue };

    case "CHANGE_COUNT":
      return { ...state, startCount: action.newValue };

    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};


export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const toggleTheme = (newTheme) => {
    dispatch({ type: "CHANGE_THEME", newValue: newTheme });
  };

  const changeName = (newName) => {
    dispatch({ type: "CHANGE_NAME", newValue: newName });
  };

  const changeAge = () => {
    dispatch({ type: "CHANGE_AGE", newValue: "30" });
  };

  const changeCount = (newCount) => {
    dispatch({ type: "CHANGE_COUNT", newValue: newCount });
  };

  return (
    <ThemeContexttt.Provider value={{ ...firstState ,changeName, changeAge,changeCount,toggleTheme}}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
