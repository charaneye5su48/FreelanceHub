"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, DollarSign, Bot, Target } from "lucide-react"

const services = [
  {
    icon: Briefcase,
    step: "01",
    title: "secure the role",
    description: "we only fw direct-hire roles. no shady c2c contracts, no fake agencies. just real jobs.",
  },
  {
    icon: DollarSign,
    step: "02",
    title: "keep your whole check",
    description: "no weird cuts or haircuts. you worked for it, you keep it. literally zero deductions taken from your pay.",
  },
  {
    icon: Bot,
    step: "03",
    title: "ai-powered rezryt™",
    description: "we rebuild your cv so it actually beats the ats and gets interviews.",
  },
  {
    icon: Target,
    step: "04",
    title: "25–30 daily apps",
    description: "we apply for you. 25-30 targeted apps every single day with fresh resumes.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <section id="about" className="py-20 bg-black border-b border-white/10" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <span className="text-xs font-black uppercase tracking-widest text-[#dc2626]">
            what we actually do
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            stop getting ghosted. start interviewing.
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60">
            we only apply to full-time positions that fit F-1/OPT reqs.
            no contracts. no staffing agencies holding your paycheck hostage.
            only long-term, legit jobs that respect your time.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i + 1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="group relative rounded-xl border border-white/10 bg-white/5 hover:bg-white/8 p-6 sm:p-8 transition-all duration-300 hover:border-[#dc2626]/60"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-lg bg-[#dc2626]/10 text-[#dc2626] transition-colors duration-300 group-hover:bg-[#dc2626] group-hover:text-white">
                  <item.icon className="size-6" />
                </div>
                <span
                  className="text-4xl font-black text-white/10 group-hover:text-[#dc2626]/20 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.step}
                </span>
              </div>
              <h3
                className="mb-3 text-lg sm:text-xl font-black text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/50">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
