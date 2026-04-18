
import TaskB from "./Components/TaskB";
import TaskA from "./Components/TaskA"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task from "./Components/Task";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/TaskA" element={<TaskA/>} />
          <Route path="/Task" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
