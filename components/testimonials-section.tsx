"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Specialist",
    content:
      "They revamped my resume and applied to 30+ jobs in one week. I had 5 interview calls within days. Best service I ever spent money on.",
    rating: 5,
  },
  {
    name: "Raj Patel",
    role: "Software Developer",
    content:
      "I was skeptical, but they delivered. My resume looks 10x better and they found positions I wouldn't have discovered on my own.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Graphic Designer",
    content:
      "They updated my resume, applied to multiple jobs, and I landed a great remote gig. The fee was incredibly low too.",
    rating: 5,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="testimonials" className="border-t border-black/[0.06] py-28" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35">
            Testimonials
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Trusted by job seekers worldwide
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-black/50">
            Real results from real people who let us handle their job search.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              custom={i + 1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="relative rounded-2xl border border-black/[0.06] bg-white p-7 transition-all duration-300 hover:border-black/12 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="size-4 fill-black text-black"
                  />
                ))}
              </div>
              <p className="mb-6 text-[14px] leading-relaxed text-black/60">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full bg-black text-[12px] font-bold text-white">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-black">
                    {testimonial.name}
                  </p>
                  <p className="text-[12px] text-black/40">
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
