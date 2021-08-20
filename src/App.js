import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./Routes";

export default function App(){
  return(
    <Router>
      <div className="container">
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}