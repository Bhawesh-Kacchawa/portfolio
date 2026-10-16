import { div } from "framer-motion/client";

const Footer = () => {
  return (
    <div>
      <div className="mt-4 mb-5 flex item-center">
      <p className = "text-gray-300 font-bold italic" 
      >"Be the designer of your world and not just the consumer of it."</p>
        <p className="ml-2 text-gray-300 font-bold italic">- James Clear</p>
      </div>
      <footer className="mt-4 mb-10 text-center text-xs text-gray-400">
      &copy; {new Date().getFullYear()} Bhawesh Kacchawa. All rights reserved.
    </footer>
    </div>
  );
};

export default Footer;