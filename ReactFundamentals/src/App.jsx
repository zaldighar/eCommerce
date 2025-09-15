import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import NotFound from "./pages/NotFound.jsx";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/about/:id/:name' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;