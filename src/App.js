import "./App.css";
import BusinessCurrently from "./Components/BusinessCurrently";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import VideoReview from "./Components/VideoReview";
import Review from "./Components/Review";
import GetFromUs from "./Components/GetFromUs";
import HowDoesEverythingWork from "./Components/HowDoesEverythingWork";
import Svg from "./Components/Svg";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="w-full h-full ">
      <Home />
      <VideoReview />
      <BusinessCurrently/>
      <GetFromUs/>
      <HowDoesEverythingWork/>
      <Review/>
      <Contact/>
      <Footer />
      {/* <Svg/> */}
    </div>
  );
}

export default App;
