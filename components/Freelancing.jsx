const Freelancing = () => {
  return (
    <section aria-labelledby="freelancing-heading" className="mt-4 pb-10">
      <div className="mb-3 flex items-end justify-between">
        <h3
          id="freelancing-heading"
          className="text-lg font-semibold tracking-tight"
        >
          Freelancing
        </h3>
      </div>

      <p className="text-sm text-white tracking-tight">
        I help startups and small businesses turn ideas into fast, polished web
        products. I work mainly with React, Next.js, TypeScript, and Tailwind
        CSS, and I’m comfortable on the backend side too (Node.js, REST APIs,
        PostgreSQL, MongoDB), so I can handle features end to end instead of
        just the UI.{" "}
      </p>

      <div className=" mt-2 border border-dashed items-center border-white/40 py-2 px-1 flex flex-col sm:flex-row sm:justify-between">
        <p className="text-md font-bold text-sky-300 pl-1">
          Got a project? Send me a short brief and I’ll reply with a plan and
          timeline.
        </p>
        <button className="w-[150px] cursor-pointer rounded-sm bg-white/10 px-4 py-2 text-sm font-bold text-white hover:bg-white/20">
          Hire me
        </button>
      </div>
    </section>
  );
};

export default Freelancing;
