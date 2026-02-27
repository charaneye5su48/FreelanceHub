"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const metrics = [
  { value: "500+", label: "Jobs Applied" },
  { value: "95%", label: "Success Rate" },
  { value: "Low", label: "Starting Price" },
  { value: "24h", label: "Turnaround" },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center pt-20"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-20 text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-black/[0.03] px-4 py-1.5"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-black opacity-40" />
            <span className="relative inline-flex size-1.5 rounded-full bg-black" />
          </span>
          <span className="text-[13px] font-medium tracking-wide text-black/70">
            Your Hiring Expert — Now Accepting Clients
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl text-balance text-[2.5rem] font-bold leading-[1.1] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          We Handle Your
          <br />
          <span className="text-black/40">Job Search, End to End</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-black/55 sm:text-[17px]"
        >
          Resume updates, profile optimization, and bulk job applications —
          all handled by hiring experts for a{" "}
          <span className="font-semibold text-black">low price</span>.
          You focus on interviews, we do the rest.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-3.5 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="h-12 rounded-xl bg-black px-8 text-sm font-medium text-white hover:bg-black/85"
          >
            <a href="#apply">
              Start Now
              <ArrowRight className="ml-1.5 size-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-xl border-black/15 px-8 text-sm font-medium text-black hover:bg-black/[0.03]"
          >
            <a href="#pricing">View Pricing</a>
          </Button>
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-20 grid w-full max-w-lg grid-cols-4 gap-6"
        >
          {metrics.map((item, i) => (
            <motion.div
              key={item.label}
              custom={5 + i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col items-center gap-1"
            >
              <span
                className="text-2xl font-bold text-black sm:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.value}
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-black/35">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
