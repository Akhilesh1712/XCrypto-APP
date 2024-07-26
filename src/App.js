import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Coins from "./Components/Coins";
import Exchanges from "./Components/Exchanges";
import CoinDetails from "./Components/CoinDetails";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element = {<Home></Home>} />
        <Route path="/Coins" element = {<Coins></Coins>} />
        <Route path="/Exchanges" element = {<Exchanges></Exchanges>} />
        <Route path="/coin/:id" element = {<CoinDetails></CoinDetails>} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
