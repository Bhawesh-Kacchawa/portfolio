import AboutMe from "./AboutMe";
import MySkills from "./MySkills";

const LandingPage = () => {
    return (
        <div 
            className="pt-10 px-4 dark:bg-black"
        >
            <AboutMe />
                  <div className="mt-4 border border-dashed border-gray-100/10 "/ >

            <MySkills />
        </div>
    );
};



export default LandingPage;