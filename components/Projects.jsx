"use client";

import { motion, useReducedMotion } from "framer-motion";

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="projects-heading" className="mt-4 pb-10">
      <div className="mb-3 flex items-end justify-between">
        <h3 id="projects-heading" className="text-lg font-semibold">
          Projects
        </h3>
        {/* <span className="text-xs text-gray-400">Selected work</span> */}
      </div>

      <div className="space-y-3">
        
        <a
          href="https://himumma.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit the Hi Mumma website"
          className="block w-full overflow-hidden transition-colors"
        >
          <article className="flex min-h-24 w-full items-center justify-between gap-4 border border-dashed border-white/20 px-5 py-4">
            <div className="flex-1">
              {/* <p className="text-[11px] uppercase tracking-wider text-gray-400">Project 01</p> */}
              <section className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="mt-1 text-base font-semibold text-white">
                  HiMumma
                </h4>
                <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 px-2 py-1 text-xs text-emerald-200">
                  <span aria-hidden="true" className="relative size-2 shrink-0">
                    {!shouldReduceMotion && (
                      <>
                        <motion.span
                          className="absolute inset-0 rounded-full bg-emerald-400"
                          initial={{ opacity: 0.75, scale: 0.9 }}
                          animate={{ opacity: 0, scale: 3 }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                            repeat: Infinity,
                          }}
                        />
                      </>
                    )}
                    <span className="absolute inset-0 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-[10px] font-semibold">Currently working with them</span>
                </span>
              </section>

              <p className="mt-1 text-xs text-gray-400">
                An early-stage startup, Himumma is building a maternity and
                pregnancy e-commerce platform.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-gray-300">
                <span className="font-semibold">
                  I worked primarily as a frontend developer
                </span>
                , crafting responsive, user-focused interfaces, while also
                collaborating with the backend team on APIs and integrations to
                deliver reliable, scalable product features.
              </p>
            </div>
          </article>
        </a>

        <article className="flex mt-2 min-h-24 items-center justify-between gap-4 border border-dashed border-white/20 px-5 py-4">
          <div>
            {/* <p className="text-[11px] uppercase tracking-wider text-gray-400">Project 02</p> */}
            <h4 className="mt-1 text-base font-semibold text-white">
              Bazar Gyan
            </h4>
            <p className="mt-1 text-xs text-gray-400">
              A stock market learning platform
            </p>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-gray-300">
              Built UI components and integrated APIs to support the learning
              experience.
            </p>
          </div>
          {/* <span aria-hidden="true" className="text-2xl text-gray-500">
            02
          </span> */}
        </article>
      </div>
    </section>
  );
};

export default Projects;
