"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const included = [
    "resume rewrite & formatting",
    "ats-optimized layout",
    "apps to 30+ jobs",
    "tailored cover letter",
    "app tracking report",
    "weekly support updates",
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

export function PricingSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-40px" })

    return (
        <section id="pricing" className="border-b border-white/10 bg-black py-20" ref={ref}>
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    custom={0}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeUp}
                    className="mx-auto max-w-2xl text-center"
                >
                    <span className="text-xs font-black uppercase tracking-widest text-[#dc2626]">
                        no cap pricing
                    </span>
                    <h2
                        className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        one flat fee. zero hidden bs.
                    </h2>
                    <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/60 mx-auto max-w-xl">
                        we hate those sneaky subscribe-to-win tricks just as much as you do.
                        one transparent payment gets you the entire playbook. no upsells securely ever.
                    </p>
                </motion.div>

                <motion.div
                    custom={1}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeUp}
                    className="mx-auto mt-12 max-w-[360px]"
                >
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 shadow-2xl shadow-[#dc2626]/10">
                        <div className="text-center">
                            <div className="inline-flex rounded-md bg-[#dc2626]/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#dc2626] border border-[#dc2626]/30">
                                the whole bag
                            </div>
                            <div className="mt-6 flex items-baseline justify-center gap-1">
                                <span
                                    className="text-6xl sm:text-7xl font-black text-white tracking-tighter"
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    $250
                                </span>
                                <span className="text-2xl font-black text-white/50">/mo</span>
                            </div>
                            <p className="mt-2 text-sm font-bold text-white/50 uppercase tracking-wide">
                                per month. stop when you land.
                            </p>
                        </div>

                        <div className="my-8 h-px bg-white/10" />

                        <ul className="flex flex-col gap-4">
                            {included.map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#dc2626]">
                                        <Check className="size-3 text-white" strokeWidth={4} />
                                    </div>
                                    <span className="text-sm sm:text-base font-bold text-white/80">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            asChild
                            size="lg"
                            className="mt-8 h-14 w-full rounded-xl bg-[#dc2626] text-base font-black text-white hover:bg-[#dc2626]/80 transition-all"
                        >
                            <a href="#apply">
                                let's get you hired
                                <ArrowRight className="ml-2 size-5" />
                            </a>
                        </Button>

                        <p className="mt-4 text-center text-xs font-bold text-[#dc2626] uppercase tracking-wider">
                            real talk: your future is worth it.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
