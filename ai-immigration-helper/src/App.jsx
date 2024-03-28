import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import EducationalPage from "./pages/EducationalPage/EducationalPage";
import SignupPage from "./pages/SignupPage/SignupPage"
import AIAssistancePage from "./pages/AIAssistancePage/AIAssistancePage"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header/> 
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/aiassistance" element={<AIAssistancePage/>} />
      <Route path="/educational" element={<EducationalPage/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
