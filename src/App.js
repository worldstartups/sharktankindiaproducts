import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";  // Import the HomePage component

function App() {
  return (
    <Router>
      <Routes>
        {/* Route to HomePage */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
