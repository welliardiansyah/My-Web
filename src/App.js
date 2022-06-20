import React from 'react';
import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Navbar, Footer } from './components';

// SEARCH PAGE MASTER
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>

      <GlobalStyles />
        <Navbar />

        <Routes>
          <Route path="/" caseSensitive={false} exact element={<Home />} />
        </Routes>

        <Footer />

    </Router>
  );
}

export default App;
