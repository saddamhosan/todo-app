import { Route, Routes } from "react-router-dom";
import Calendar from "./component/Calendar";
import Completed from "./component/Completed";
import Home from "./component/Home";
import Menu from "./Menu";


function App() {
  return (
    <div>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/completed" element={<Completed/>}/>
      </Routes>
    </div>
  );
}

export default App;
