"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ShieldCheck, UserCheck, CreditCard, Building2 } from "lucide-react"

const features = [
  {
    icon: Building2,
    title: "direct, full‑time roles",
    description: "clear career path and actual stability. no stringing you along.",
  },
  {
    icon: UserCheck,
    title: "clear employer relationship",
    description: "no third-party complications or weird middlemen taking a cut.",
  },
  {
    icon: CreditCard,
    title: "no sticky payrolls",
    description: "direct compensation from your boss. clean, transparent, and yours.",
  },
  {
    icon: ShieldCheck,
    title: "audit-safe, future-proof",
    description: "only 100% legit, direct-hire opportunities that won't ruin your visa.",
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

export function WhyChooseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <section id="why-us" className="border-b border-white/10 bg-black py-20" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex justify-center mb-4">
            <span className="text-3xl sm:text-4xl">🛡️</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#dc2626] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            100% legit. no sketchiness. period.
          </h2>
          <p className="mt-2 text-base sm:text-lg font-bold text-white/80">
            no shady loopholes. no playing games with your visa.
          </p>
          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-white/60 text-left sm:text-center max-w-2xl mx-auto">
            <p>
              <strong className="text-white">applylegit™</strong> is built for international students who just want a real,
              safe career in the u.s. we skip the consultancies that push you into risky c2c contracts
              and only get you direct-hire roles. why? because sketchy jobs will come back to bite you
              during h-1b or green card processing.
            </p>
            <p>
              <strong className="text-[#dc2626]">real talk:</strong> don't risk your whole future for a quick gig that leaves
              compliance gaps on your record. when that happens, entire careers collapse. we keep
              it clean, transparent, and audit-safe.
            </p>
          </div>
        </motion.div>

        <div className="mt-16">
          <motion.h3
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="text-center text-xl sm:text-2xl font-black text-white mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            why we're different
          </motion.h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i + 2}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                className="group flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[#dc2626]/60 hover:bg-white/8"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#dc2626]/10 text-[#dc2626] transition-all duration-300 group-hover:bg-[#dc2626] group-hover:text-white">
                  <feature.icon className="size-6" />
                </div>
                <div>
                  <h4
                    className="mb-2 text-base sm:text-lg font-black text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    ✓ {feature.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-white/50">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
