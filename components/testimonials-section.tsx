"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "veeranjaneyulu",
    role: "network engineer · dell",
    content:
      "they literally redid my whole resume and blasted it out to like 30 roles. i got 5 interviews in a week. best investment i ever made.",
    rating: 5,
  },
  {
    name: "himavanth",
    role: "network engineer · arista networks",
    content:
      "ngl i was super skeptical at first, but they delivered. my cv looks 10x better and they found legit roles i didn't even know existed.",
    rating: 5,
  },
  {
    name: "hema nalluri",
    role: "network engineer · city of cleveland",
    content:
      "these guys got me a crazy remote gig right before my opt expired. the process was super smooth and honestly a steal for the price.",
    rating: 5,
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

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <section id="testimonials" className="border-b border-white/10 bg-black py-20" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-black uppercase tracking-widest text-[#dc2626]">
            receipts
          </span>
          <h2
            className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-4 whitespace-nowrap"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            real people. real offers. real results.
          </h2>
          <p className="mt-2 text-base sm:text-lg leading-relaxed text-white/60">
            we've helped hundreds land their dream roles — these are just a few who said it best.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              custom={i + 1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8 transition-all duration-300 hover:border-[#dc2626]/60 hover:bg-white/8"
            >
              <div>
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="size-4 fill-[#dc2626] text-[#dc2626]"
                    />
                  ))}
                </div>
                <p className="mb-6 text-sm sm:text-base leading-relaxed italic text-white/70">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="flex size-10 items-center justify-center rounded-lg bg-[#dc2626] text-sm font-black text-white uppercase">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-black text-white capitalize">
                    {testimonial.name}
                  </p>
                  <p className="text-xs font-bold text-[#dc2626] capitalize mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
