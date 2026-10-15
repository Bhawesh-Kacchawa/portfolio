import profilePic from "../public/profile.png";
import Image from "next/image";

const contactLinks = [
  { label: "GitHub", href: "https://github.com/your-username", icon: "github" },
  { label: "Twitter", href: "https://twitter.com/your-username", icon: "X" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: "linkedin" },
  { label: "Email", href: "mailto:bhaweshkacchawa@.com", icon: "email" },
  { label: "Resume", href: "https://drive.google.com/file/d/1WjQ7hfouYsejuEqrAs1pSJzvAgTI69cP/view?usp=sharing ", icon: "resume" },
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
          <p className="mt-1 text-xs text-gray-300 tracking-tight">
            Passionate about building interactive and user-friendly web
            applications.
          </p>
          <nav aria-label="Contact and social links" className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {contactLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" || label === "Resume" ? undefined : "_blank"}
                rel={label === "Email" || label === "Resume" ? undefined : "noreferrer"}
                className="inline-flex items-center gap-1.5 text-xs text-gray-300 transition-colors hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="size-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill={icon === "github" || icon === "X" ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icon === "github" && (
                    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.48.09.65-.2.65-.46v-1.67c-2.65.58-3.21-1.13-3.21-1.13-.44-1.1-1.06-1.39-1.06-1.39-.87-.6.07-.59.07-.59.96.07 1.47.98 1.47.98.85 1.46 2.23 1.04 2.77.79.09-.62.33-1.04.61-1.28-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.89.98-2.56-.1-.24-.43-1.21.09-2.53 0 0 .8-.26 2.61.98a9.1 9.1 0 0 1 4.75 0c1.81-1.24 2.61-.98 2.61-.98.52 1.32.19 2.29.09 2.53.61.67.98 1.52.98 2.56 0 3.67-2.23 4.48-4.36 4.72.34.3.65.88.65 1.78v2.51c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z" />
                  )}
                  {icon === "X" && (
                    <path d="M22 5.9a8 8 0 0 1-2.36.65 4.12 4.12 0 0 0 1.81-2.27 8.2 8.2 0 0 1-2.61 1 4.1 4.1 0 0 0-7 3.74 11.64 11.64 0 0 1-8.45-4.28 4.1 4.1 0 0 0 1.27 5.47 4.08 4.08 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02 4.1 4.1 0 0 1-1.85.07 4.11 4.11 0 0 0 3.83 2.85A8.24 8.24 0 0 1 2 18.39a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.67l-.01-.53A8.33 8.33 0 0 0 22 5.9Z" />
                  )}
                  {icon === "linkedin" && (
                    <>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </>
                  )}
                  {icon === "email" && <path d="M3 5h18v14H3z M3 6l9 7 9-7" />}
                  {icon === "resume" && <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M8 13h8 M8 17h8" />}
                </svg>
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>
      
      <div className="mt-4 border border-dashed border-gray-100/10 "/ >
      {/* yaha oe manu arora ka cool effect add kerna hai */}

      <p className=" mt-4 text-sm w-full tracking-tight flex flex-col justify-start">
        Frontend Developer who builds fast, polished web apps with React,
        Next.js, and TypeScript. I enjoy solving real problems with clean code
        and good design, and I’m always learning something new. I can tailor
        either one for a specific purpose, such as a resume summary, a LinkedIn
        headline, or a portfolio hero section, if you tell me where you’ll use
        it.
      </p>
      {/* <div className="size-[180px] mt-4 md:mt-0 md:ml-4 flex justify-center items-center">
        <Image src={profilePic} alt="Bhawesh Kacchawa" className="w-32 h-32 rounded-full" />
      </div> */}
    </div>
  );
};

export default AboutMe;
