import profilePic from "../public/profile.png";
import Image from "next/image";
import { siGithub, siX, siGmail, siGoogle, siFiles } from "simple-icons";

const resumeIcon = siFiles;

const linkedinIcon = {
  hex: "0A66C2",
  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
};

const contactLinks = [
  { label: "GitHub", href: "https://github.com/your-username", icon: siGithub },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    icon: linkedinIcon,
  },
  { label: "Mail", href: "mailto:bhaweshkacchawa@.com", icon: siGmail },
  {
    label: "X",
    href: "https://twitter.com/your-username",
    icon: { ...siX, hex: "FFFFFF" },
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1WjQ7hfouYsejuEqrAs1pSJzvAgTI69cP/view?usp=sharing ",
    icon: resumeIcon,
  },
];

const AboutMe = () => {
  return (
    <div className="font-thin">
      <section className="mt-4 my-auto flex flex-col space-between md:flex-row md:items-center ">
        <div className="size-[130px] mt-4 md:mt-0 md:ml-4 flex justify-center items-center border border-gray-300/10 rounded-lg p-2">
          <Image
            src={profilePic}
            alt="Bhawesh Kacchawa"
            className="size-lg rounded-lg"
          />
        </div>

        <div className="mt-4 md:mt-0 md:ml-4">
          <h2 className="text-xl">
            Bhawesh Kacchawa -{" "}
            <span className="font-semibold">Frontend Developer</span>
          </h2>
          {/* <p className="mt-1 text-xs text-gray-300 tracking-tight">
            Passionate about building interactive and user-friendly web
            applications.
          </p> */}
          <nav
            aria-label="Contact and social links"
            className="mt-2 flex flex-wrap gap-x-4 gap-y-2"
          >
            {contactLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={
                  label === "Email" || label === "Resume" ? undefined : "_blank"
                }
                rel={
                  label === "Email" || label === "Resume"
                    ? undefined
                    : "noreferrer"
                }
                className="inline-flex items-center gap-1.5 text-xs text-gray-300 transition-colors hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="size-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill={`#${icon.hex}`}
                >
                  <path d={icon.path} />
                </svg>
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="mt-4 border border-dashed border-gray-100/10 " />
      {/* yaha oe manu arora ka cool effect add kerna hai */}

      <p className=" mt-4 text-sm w-full tracking-tight flex flex-col justify-start">
        <span className="font-semibold">Frontend Developer passionate about building interactive and
        user-friendly web applications,</span> <span>Builds fast, polished web apps with
        React, Next.js, and TypeScript. I enjoy solving real problems with clean
        code and good design, and I’m always learning something new. I can
        tailor either one for a specific purpose, such as a resume summary, a
        LinkedIn headline, or a portfolio hero section, if you tell me where
        you’ll use it.</span>
      </p>
      {/* <div className="size-[180px] mt-4 md:mt-0 md:ml-4 flex justify-center items-center">
        <Image src={profilePic} alt="Bhawesh Kacchawa" className="w-32 h-32 rounded-full" />
      </div> */}
    </div>
  );
};

export default AboutMe;
