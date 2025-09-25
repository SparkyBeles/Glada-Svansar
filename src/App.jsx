import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import About from "./pages/About";
import Dogs from "./pages/Dogs";
import Home from "./pages/Home";
import Dog from "./pages/Dog";
import Page404 from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/dogs" element={<Dogs />}></Route>
          <Route path="/dog" element={<Dog />}></Route>
          <Route path="dog/:chip" element={<Dog />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
