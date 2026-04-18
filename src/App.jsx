import TaskB from "./Components/TaskB";
import TaskA from "./Components/TaskA";
import { HashRouter, Routes, Route } from "react-router-dom";
import Task from "./Components/Task";
import TaskC from "./Components/TaskC";
import TaskD from "./Components/TaskD";


function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/TaskA" element={<TaskA />} />
          <Route path="/TaskB" element={<TaskB />} />
          <Route path="/TaskC" element={<TaskC />} />
          <Route path="/TaskD" element={<TaskD />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
