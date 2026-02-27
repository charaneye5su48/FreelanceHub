"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Rocket,
  FileCheck,
  DollarSign,
  HeadphonesIcon,
  Layers,
} from "lucide-react"

const features = [
  {
    icon: Rocket,
    title: "Zero Effort Applications",
    description: "We find, prepare, and submit job applications. You just wait for interview calls.",
  },
  {
    icon: FileCheck,
    title: "ATS-Ready Resume",
    description: "Your resume gets rebuilt with optimized formatting and keywords that pass screening systems.",
  },
  {
    icon: DollarSign,
    title: "Low Price",
    description: "Full service at one transparent price. No hidden fees, no upsells. And it's flexible.",
  },
  {
    icon: Layers,
    title: "Multiple Platforms",
    description: "We apply across LinkedIn, Indeed, Glassdoor, and niche boards for maximum coverage.",
  },
  {
    icon: HeadphonesIcon,
    title: "Personal Support",
    description: "A dedicated point of contact guides you through the process and provides regular updates.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function WhyChooseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="why-us" className="border-y border-black/[0.06] bg-black/[0.015] py-28" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35">
            Why FreelanceHub
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Built for people who hate job hunting
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-black/50">
            We eliminate every pain point of the job search — so you only
            focus on showing up prepared.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i + 1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="group flex gap-4 rounded-xl border border-black/[0.06] bg-white p-5 transition-all duration-300 hover:border-black/12 hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-black/[0.04] text-black/60 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                <feature.icon className="size-[18px]" />
              </div>
              <div>
                <h3
                  className="mb-1 text-[15px] font-semibold text-black"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-black/45">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
