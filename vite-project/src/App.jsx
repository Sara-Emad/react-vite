// import { useReducer } from "react";

import "./theme.css";
import "./App.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/Datacontext";

// const initialData = { name: "Sara", age: 28, startCount: 0, theme: "light" };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE_NAME":
//       return { ...state, name: action.newValue };

//     case "CHANGE_AGE":
//       return { ...state, age: action.newValue };

//     case "CHANGE_COUNT":
//       return { ...state, startCount: action.newValue };

//     case "CHANGE_THEME":
//       return { ...state, theme: action.newValue };

//     default:
//       return state;
//   }
// };

function App() {
  const {
    name,
    changeName,
    age,
    changeAge,
    changeCount,
    startCount,
    theme,
    toggleTheme,
  } = useContext(DataContext);

  // const [allData, dispatch] = useReducer(reducer, initialData);

  return (
    <div className={` App ${theme}`}>
      <Link style={{ marginBottom: "30px" }} to="Page2 ">
        Go To Page 2
      </Link>

      <button
        onClick={() => {
          toggleTheme(theme == "light" ? "dark" : "light");
        }}
        style={{ marginBottom: "44px" }}
      >
        Toggle Theme
      </button>

      <br />
      <br />

      <div
        onChange={() => {
          toggleTheme(theme == "light" ? "dark" : "light");
        }}
        className="btn-container"
        style={{ marginBottom: "44px" }}
      >
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
          />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
      </div>

      <div>
        <button
          onClick={() => {
            toggleTheme("light");
          }}
          style={{ marginRight: "26px" }}
        >
          light
        </button>
        <button
          onClick={() => {
            toggleTheme("dark");
          }}
          style={{ marginRight: "26px" }}
        >
          dark
        </button>
        <button
          onClick={() => {
            toggleTheme("grey");
          }}
          style={{ marginRight: "26px" }}
        >
          grey
        </button>
        <button
          onClick={() => {
            toggleTheme("pink");
          }}
        >
          pink
        </button>
      </div>

      <div>
        <h2 style={{ marginTop: "66px" }}>My name is {name}</h2>
        <button
          onClick={() => {
            changeName("Sally");
          }}
        >
          Change Name
        </button>
      </div>

      <br />

      <div>
        <h2>My age is {age} </h2>
        <button
          onClick={() => {
            changeAge();
          }}
        >
          Change age
        </button>
      </div>

      <br />
      <br />

      <button
        onClick={() => {
          changeCount(startCount+1);
        }}
        style={{ marginTop: "66px" }}
      >
        count is {startCount}
      </button>
    </div>
  );
}

export default App;
