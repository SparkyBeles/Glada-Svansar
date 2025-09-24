import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import OmOss from "./pages/OmOss";
import Hundar from "./pages/Hundar";
import Hem from "./pages/Hem";
import Hund from "./pages/Hund";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Hem />}></Route>
          <Route path="/OmOss" element={<OmOss />}></Route>
          <Route path="/Hundar" element={<Hundar />}></Route>
          <Route path="/Hund" element={<Hund />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
