import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import About from "./pages/About";
import Dogs from "./pages/Dogs";
import Home from "./pages/Home";
import Dog from "./pages/Dog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Dogs" element={<Dogs />}></Route>
          <Route path="/Dog" element={<Dog />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
