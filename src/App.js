import React from 'react';
import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Navbar, Footer } from './components';

// SEARCH PAGE MASTER

import Home from './pages/Home/Home';
import Whitepaper from './pages/Whitepaper/Whitepaper';

// END SEARCH PAGE MASTER

function App() {
  return (
    <Router>

      <GlobalStyles />
        <Navbar />

        <Routes>
          <Route path="/" caseSensitive={false} exact element={<Home />} />
          <Route path="/whitepaper" caseSensitive={false} element={<Whitepaper />} />
        </Routes>

        <Footer />

    </Router>
  );
}

export default App;
