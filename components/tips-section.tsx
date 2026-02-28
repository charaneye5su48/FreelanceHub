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
        title: "tailor that resume",
        description: "stop sending the exact same vague pdf to 100 different companies. highlight what actually matters.",
    },
    {
        icon: CheckSquare,
        title: "match the keywords",
        description: "drop the exact buzzwords they use in the job description so they know you actually read it.",
    },
    {
        icon: FileSearch,
        title: "beat the ats bot",
        description: "keep your formatting stupidly simple. no crazy columns or graphics, just clean text.",
    },
    {
        icon: FileText,
        title: "drop a short note",
        description: "a quick, genuinely written message goes way further than a generic 5-paragraph cover letter nobody reads.",
    },
    {
        icon: Target,
        title: "stay in your lane",
        description: "focus hard on the roles that actually fit your profile. don't waste time on stuff that's way out of reach.",
    },
    {
        icon: ListTodo,
        title: "don't ghost yourself",
        description: "keep track of what you applied for. following up professionally shows you actually care.",
    },
    {
        icon: Users,
        title: "network authentically",
        description: "don't just spam connection requests. build real relationships with people on linkedin in your industry.",
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

export function TipsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-40px" })

    return (
        <section id="tips" className="border-b border-white/10 bg-black py-20" ref={ref}>
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    custom={0}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeUp}
                    className="mx-auto max-w-2xl text-center"
                >
                    <span className="text-xs font-black uppercase tracking-widest text-[#dc2626]">
                        free game
                    </span>
                    <h2
                        className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        some free advice if you're riding solo
                    </h2>
                    <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/60 mx-auto max-w-xl">
                        if you're gonna rawdog the job market on your own, at least do it right.
                        here's how you actually get an interview.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {tips.map((tip, i) => (
                        <motion.div
                            key={tip.title}
                            custom={i + 1}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={fadeUp}
                            className="group relative flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[#dc2626]/60 hover:bg-white/8"
                        >
                            <div className="flex size-12 items-center justify-center rounded-lg bg-[#dc2626]/10 text-[#dc2626] transition-colors duration-300 group-hover:bg-[#dc2626] group-hover:text-white">
                                <tip.icon className="size-6" />
                            </div>
                            <h3
                                className="mt-2 text-lg font-black text-white"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {tip.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-white/50">
                                {tip.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
