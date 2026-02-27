"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function MotoSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-80px" })

    return (
        <section className="bg-black pt-28 pb-16 text-white" ref={ref}>
            <div className="mx-auto max-w-2xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2
                        className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Reset. Restart. Refocus.
                    </h2>
                    <div className="mx-auto mb-6 h-[2px] w-8 bg-white/20" />
                    <p className="text-[15px] leading-relaxed text-white/70 sm:text-base md:text-lg md:leading-relaxed">
                        "No matter how many times life knocks you down, rise again, stronger,
                        clearer, and more determined. Your future self will thank you for not
                        giving up today!" <span className="inline-block ml-1.5 text-lg">😊</span>
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
