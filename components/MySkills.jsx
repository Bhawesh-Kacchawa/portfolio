import {
  siClaude,
  siCss,
  siCursor,
  siDbeaver,
  siFigma,
  siGithub,
  siGithubcopilot,
  siGooglegemini,
  siHtml5,
  siJavascript,
  siMui,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOllama,
  siOpenapiinitiative,
  siPostgresql,
  siPostman,
  siReact,
  siRedis,
  siRedux,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

const skillGroups = [
  {
    title: "Frontend",
    className: "md:col-span-7",
    skills: [
      { name: "React.js", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "TypeScript", icon: siTypescript },
      { name: "JavaScript", icon: siJavascript },
      { name: "HTML5", icon: siHtml5 },
      { name: "CSS3", icon: siCss },
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "Material UI", icon: siMui },
      { name: "Redux", icon: siRedux },
      { name: "Zustand", color: "#8b7355", mark: "Z" },
      { name: "Context API", icon: siReact },
    ],
  },
  {
    title: "Backend & Data",
    className: "md:col-span-5",
    skills: [
      { name: "Node.js", icon: siNodedotjs },
      { name: "REST APIs", icon: siOpenapiinitiative },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "MongoDB", icon: siMongodb },
      { name: "MySQL", icon: siMysql },
      { name: "Redis", icon: siRedis },
    ],
  },
  {
    title: "Tools",
    className: "md:col-span-5",
    skills: [
      { name: "GitHub", icon: siGithub },
      { name: "Postman", icon: siPostman },
      { name: "DBeaver", icon: siDbeaver },
      { name: "Figma", icon: siFigma },
    ],
  },
  {
    title: "AI",
    className: "md:col-span-7",
    skills: [
      { name: "ChatGPT", color: "#10a37f", mark: "AI" },
      { name: "GitHub Copilot", icon: siGithubcopilot },
      { name: "Cursor AI", icon: siCursor },
      { name: "Claude", icon: siClaude },
      { name: "Ollama", icon: siOllama },
      { name: "OpenAI API", color: "#10a37f", mark: "API" },
      { name: "Gemini", icon: siGooglegemini },
    ],
  },
  
];

const MySkills = () => {
  return (
    <section aria-labelledby="skills-heading" className="mt-4 pb-10">
      <div className="mb-3 flex items-end justify-between">
        <h3 id="skills-heading" className="text-lg font-semibold tracking-tight">
          Skills & Tools
        </h3>
        {/* <span className="text-xs text-gray-400">28 technologies</span> */}
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            aria-label={group.title}
            className={`rounded-smF border border-dashed border-white/50 p-4 ${group.className}`}
          >
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              {group.title}
            </h4>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-3">
              {group.skills.map(({ name, icon, color, mark }) => (
                <li key={name} className="flex min-w-0 items-center gap-2.5">
                  {icon ? (
                    <svg
                      aria-hidden="true"
                      className="size-5 shrink-0"
                      viewBox="0 0 24 24"
                      fill={`#${icon.hex}`}
                    >
                      <path d={icon.path} />
                    </svg>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex size-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold"
                      style={{ backgroundColor: color, color: "#fff" }}
                    >
                      {mark}
                    </span>
                  )}
                  <span className="truncate text-xs text-white">{name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
};

export default MySkills;