"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
    FileEdit,
    CheckSquare,
    FileSearch,
    FileText,
    Target,
    ListTodo,
    Users,
} from "lucide-react"

const tips = [
    {
        icon: FileEdit,
        title: "Tailor your resume",
        description: "Customize your resume to highlight experience directly relevant to each specific job.",
    },
    {
        icon: CheckSquare,
        title: "Match skills & keywords",
        description: "Include keywords from the job description to signal you're a perfect match.",
    },
    {
        icon: FileSearch,
        title: "Keep it ATS-friendly",
        description: "Use simple, clean formatting so automated applicant tracking systems can read your data.",
    },
    {
        icon: FileText,
        title: "Write a short cover note",
        description: "A clear, concise cover note or message can make a lasting impression on recruiters.",
    },
    {
        icon: Target,
        title: "Target fitting roles",
        description: "Focus your energy on positions that strongly align with your actual profile and experience.",
    },
    {
        icon: ListTodo,
        title: "Track & follow up",
        description: "Keep a log of your applications and follow up professionally if you don't hear back.",
    },
    {
        icon: Users,
        title: "Build connections",
        description: "Stay visible on LinkedIn and actively connect with industry professionals.",
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

export function TipsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-80px" })

    return (
        <section id="tips" className="py-24" ref={ref}>
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    custom={0}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeUp}
                    className="mx-auto max-w-2xl text-center"
                >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35">
                        Success Strategies
                    </span>
                    <h2
                        className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Essential Job Search Tips
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-black/50">
                        Applying on your own? Follow these proven best practices to increase your chances of landing an interview.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {tips.map((tip, i) => (
                        <motion.div
                            key={tip.title}
                            custom={i + 1}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={fadeUp}
                            className="group relative flex flex-col gap-3 rounded-2xl border border-black/[0.06] bg-black/[0.01] p-6 transition-all duration-300 hover:border-black/15 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                        >
                            <div className="flex size-10 items-center justify-center rounded-xl bg-black/[0.04] text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                                <tip.icon className="size-[18px]" />
                            </div>
                            <h3
                                className="mt-2 text-[15px] font-semibold text-black"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {tip.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-black/50">
                                {tip.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
