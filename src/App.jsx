import React ,{ useState } from "react";
import "./App.css";
import AppRouter from "./Routes/appRouter";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <AppRouter />
    </React.Fragment>
  );
}

export default App;

