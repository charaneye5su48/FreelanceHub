"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const included = [
    "Professional resume rewrite & formatting",
    "ATS-optimized keywords & layout",
    "Applications to 30+ relevant job openings",
    "Tailored cover letter per application",
    "Detailed application tracking report",
    "Dedicated support & weekly updates",
]

const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.12,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
}

export function PricingSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-80px" })

    return (
        <section id="pricing" className="py-28" ref={ref}>
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    custom={0}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeUp}
                    className="mx-auto max-w-2xl text-center"
                >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35">
                        Pricing
                    </span>
                    <h2
                        className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        One price, everything included
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-black/50">
                        No tiers, no confusion. One clear package that covers your entire
                        job search.
                    </p>
                </motion.div>

                <motion.div
                    custom={1}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeUp}
                    className="mx-auto mt-14 max-w-sm"
                >
                    <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-8 shadow-[0_8px_40px_rgb(0,0,0,0.06)] sm:p-10">
                        <div className="text-center">
                            <div className="inline-flex rounded-full bg-black px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                                Complete Package
                            </div>
                            <div className="mt-6 flex items-baseline justify-center gap-1">
                                <span
                                    className="text-6xl font-bold text-black"
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    $250
                                </span>
                            </div>
                            <p className="mt-2 text-[13px] font-medium text-black/35">
                                One-time fee
                            </p>
                        </div>

                        <div className="my-8 h-px bg-black/[0.06]" />

                        <ul className="flex flex-col gap-3.5">
                            {included.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-black">
                                        <Check className="size-3 text-white" strokeWidth={3} />
                                    </div>
                                    <span className="text-[14px] text-black/70">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            asChild
                            size="lg"
                            className="mt-8 h-12 w-full rounded-xl bg-black text-sm font-medium text-white hover:bg-black/85"
                        >
                            <a href="#apply">
                                Get Started
                                <ArrowRight className="ml-1.5 size-4" />
                            </a>
                        </Button>

                        <p className="mt-4 text-center text-[12px] text-black/30">
                            No credit card required · Talk to us first
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
