import React, { useReducer } from "react";

const initialState = { theme: "light" };

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleToggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const appStyles = {
    backgroundColor: state.theme === "light" ? "#fff" : "#333",

    color: state.theme === "light" ? "#000" : "#fff",

    height: "100vh",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    flexDirection: "column",
  };

  return (
    <div style={appStyles}>
      <h1>{`Current Theme: ${state.theme}`}</h1>

      <button onClick={handleToggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
