import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NetflixNav from "./Components/NetflixNav";
import NetflixFooter from "./Components/NetflixFooter";
import NetflixHeader from "./Components/NetflixHeader";
//import NetflixFilm from "./Components/NetflixFilm";
//import NetflixProfile from "./Components/NetflixProfile";
//import NetflixSettings from "./Components/NetflixSettings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShow from "./Components/TvShow";

function App() {
  return (
    <>
      <BrowserRouter>
        <NetflixNav />
        <NetflixHeader />
        <Routes>
          <Route path="/" element={TvShow}></Route>
        </Routes>
        <NetflixFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
