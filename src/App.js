import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";  // Import the HomePage component
import Header from "./components/Header"; // Import the Header component

function App() {
  return (
    <Router>
      {/* Header will be displayed on all pages */}
      <Header />
      <Routes>
        {/* Route to HomePage */}
        <Route path="/" element={<HomePage />} />  
      </Routes>
    </Router>
  );
}

export default App;
