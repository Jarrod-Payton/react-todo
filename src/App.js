import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import NewListPage from "./pages/NewListPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-screen flex justify-center bg-slate-200">
      <div className=" max-w-lg w-full h-full bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list">
            <Route path=":listId" element={<ListPage />} />
            <Route path="new" element={<NewListPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
