import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FeedBackProvider } from "./context/FeedBackContext";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    // <FeedBackProvider>
    <Router>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
    // </FeedBackProvider>
  );
};

export default App;
