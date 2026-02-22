import HHero from "./sections/HHero";
import HClients from "./sections/HClients";
import HServices from "./sections/HServices";
import HAboutUs from "./sections/HAboutUs";
import HAllProjectOverview from "./sections/HAllProjectOverview";
import HOurWorkFlow from "./sections/HOurWorkFlow";
import HNewsLetter from "./sections/HNewsLetter";
import HGetInTouch from "./sections/HGetInTouch";
import HPricing from "./sections/HPricing";
import HTeam from "./sections/HTeam";
import HBlog from "./sections/HBlog";
import HTestimonial from "./sections/HTestimonial";
import HPortfolio from "./sections/HPortfolio";
import HVideo from "./sections/HVideo";

const Home = () => {
  return (
    <div>
      <HHero />
      {/* <HVideo /> */}
      <div
        className="relative"
        style={{
          background: "url('/assets/images/Partical_4.png')",
          backgroundSize: "100%",
          backgroundPosition: "top",
        }}
      >
        <HServices />
      </div>
      <div
        className="relative"
        style={{
          background: "url('/assets/images/Partical_3.png')",
          backgroundSize: "100%",
          backgroundPosition: "top",
        }}
      >
        <HAboutUs />
      </div>
      <HAllProjectOverview />
      <HOurWorkFlow />
      {/* <HPortfolio /> */}
      {/* <HNewsLetter /> */}
      {/* <HTeam /> */}
      <div
        className="relative"
        style={{
          background: "url('/assets/images/Partical_5.png')",
          backgroundSize: "100%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <HPricing />
      </div>
      <div className="bg-[#f4f2ff]">
        <HTestimonial />
      </div>

      <div
        className="relative"
        style={{
          background: "url('/assets/images/Partical_3.png')",
          backgroundSize: "100%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <HGetInTouch />
      </div>
    </div>
  );
};

export default Home;
