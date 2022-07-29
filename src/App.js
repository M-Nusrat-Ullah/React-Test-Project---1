import "@fontsource/montserrat";
import "./App.css";
import backgroundPicture from "./backgroundPicture.jpg";
import picture1 from "./backgroundPicture2.jpg";
import FooterContainer from "./components/Footer/Footer";
import LogoTop from "./components/Logo/Logo";
import HandleMenuColor from "./components/Menu/Menu";

function App() {
  return (
    <>
      <LogoTop />
      <div className="menu">
        <HandleMenuColor />
        <div>
          <button>
            <h4>Get A Free Quote</h4>
          </button>
        </div>
      </div>

      <div className="background1">
        <img src={backgroundPicture} alt="buildings"></img>
      </div>

      <div className="picture1">
        <img src={picture1} alt="crane"></img>
      </div>

      <div className="contentMain">
        <div>
          <h1>Building Homes Efficiently and Creatively</h1>
        </div>
        <div>
          <h4>Building houses is our specialty.</h4>
        </div>
        <div>
          <button>
            <h4>Contact Us</h4>
          </button>
        </div>
      </div>
      <FooterContainer />
    </>
  );
}

export default App;
