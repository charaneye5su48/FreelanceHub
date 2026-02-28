"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
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

const metrics = [
  { value: "$100K+", label: "Target Salary" },
  { value: "100%", label: "Legit Compliant" },
  { value: "0%", label: "Sketchy Deductions" },
]

export function HeroSection() {
  return (
    <section id="home" className="pt-16 pb-16 border-b border-white/10 bg-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#dc2626]/30 bg-[#dc2626]/10 px-4 py-1.5"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#dc2626] opacity-40" />
            <span className="relative inline-flex size-2 rounded-full bg-[#dc2626]" />
          </span>
          <span className="text-xs sm:text-sm font-bold tracking-wide text-[#dc2626]">
            opt running out? yeah, we know the stress.
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl text-balance text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black leading-[1.1] tracking-tight text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          secure your <span className="text-[#dc2626]">$100k bag</span>
          <br />
          <span className="text-white/40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 block">before opt (stem, h-1b) expires</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60"
        >
          real talk: applying to jobs all day just to get ghosted is completely cooked.
          your opt window is closing. <strong className="text-white">applylegit™</strong> skips the bs and gets
          your resume straight in front of recruiters for real, full-time, direct-hire roles.
          no shady third-parties. period.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="h-12 rounded-lg bg-[#dc2626] px-8 text-sm sm:text-base font-black text-white hover:bg-[#dc2626]/80"
          >
            <a href="#apply">
              let's get started
              <ArrowRight className="ml-2 size-4 sm:size-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-lg border-white/20 bg-transparent px-8 text-sm sm:text-base font-bold text-white hover:bg-white/10 hover:border-white/40"
          >
            <a href="#about">see how we do it</a>
          </Button>
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-20 grid w-full max-w-3xl grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6"
        >
          {metrics.map((item, i) => (
            <motion.div
              key={item.label}
              custom={5 + i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col items-center gap-1.5"
            >
              <span
                className="text-4xl sm:text-5xl font-black text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.value}
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#dc2626]">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
