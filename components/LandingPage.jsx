import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import Freelancing from "./Freelancing";

const LandingPage = () => {
  return (
    <div className="pt-10 px-4 dark:bg-black">
      <AboutMe />
      <div className="mt-4 border border-dashed border-gray-100/10 " />
      <MySkills />
      <div className="mt-4 border border-dashed border-gray-100/10 " />
      <Freelancing />
    </div>
  );
};

export default LandingPage;
