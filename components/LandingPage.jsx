import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import Freelancing from "./Freelancing";
import Experience from "./Experience";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="mx-auto w-full max-w-2xl border-dashed border-x border-white/20 bg-black/10 px-4 pt-10 backdrop-blur-sm">
      <AboutMe />
      <div className="mt-4 border border-dashed border-gray-100/10 " />
      <Experience />
      <div className="mt-4 border border-dashed border-gray-100/10 " />
      <MySkills />
      <div className="mt-4 border border-dashed border-gray-100/10 " />
      <Freelancing />
      <div className="mt-4 border border-dashed border-gray-100/10 " />
      <Footer />
    </div>
  );
};

export default LandingPage;
