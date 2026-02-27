"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, Send, BadgeDollarSign } from "lucide-react"

const services = [
  {
    icon: FileText,
    step: "01",
    title: "Resume Overhaul",
    description:
      "We professionally rewrite and format your resume with ATS-optimized keywords, modern layouts, and compelling action verbs that get noticed by recruiters.",
  },
  {
    icon: Send,
    step: "02",
    title: "Mass Job Applications",
    description:
      "We identify relevant openings across top platforms and submit tailored applications on your behalf — dozens of jobs, zero effort from you.",
  },
  {
    icon: BadgeDollarSign,
    step: "03",
    title: "Affordable & Low Price",
    description:
      "Everything starts at a low price — and we're flexible. One fee covers resume updates, profile optimization, and all your job applications.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" className="py-28" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35">
            How It Works
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Three steps to your next job
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-black/50">
            We take care of your entire job search pipeline — from resume to
            application — so you only deal with interviews.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i + 1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="group relative rounded-2xl border border-black/[0.06] bg-white p-8 transition-all duration-300 hover:border-black/15 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl bg-black/[0.04] transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                  <item.icon className="size-5" />
                </div>
                <span
                  className="text-3xl font-bold text-black/[0.06]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.step}
                </span>
              </div>
              <h3
                className="mb-3 text-lg font-semibold text-black"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-black/50">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
