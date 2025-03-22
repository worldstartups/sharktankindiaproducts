import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SeasonProducts from "./pages/SeasonProducts";
import CategoryProducts from "./pages/CategoryProducts";  // Import the CategoryProducts component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Route for Season Products */}
        <Route path="/season/:seasonId" element={<SeasonProducts />} />
        
        {/* Route for Category Products */}
        <Route path="/categories/:category" element={<CategoryProducts />} />
        {/* Other routes can go here */}
      </Routes>
    </Router>
  );
}

export default App;
