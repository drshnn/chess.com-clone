import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="h-screen w-screen bg-neutral-800">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
