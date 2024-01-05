import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AutocompleteLink from "./components/Display";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/display/:id" element={<AutocompleteLink />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
