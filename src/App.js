import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import ContextProvider from "./context/Context";
import Students from "./pages/Students";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Students />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
