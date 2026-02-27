"use client"

import { useState, useRef, type FormEvent } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

type FormStatus = "idle" | "submitting" | "success" | "error"

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

export function ApplicationForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [status, setStatus] = useState<FormStatus>("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      state: formData.get("state"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="apply" className="border-t border-black/[0.06] bg-black/[0.015] py-28" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35">
            Apply Now
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Start your journey today
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-black/50">
            Fill in your details and our team will reach out within 24 hours
            to get started on your job search.
          </p>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mx-auto mt-12 max-w-md"
        >
          <div className="rounded-2xl border border-black/[0.08] bg-white p-8 shadow-[0_8px_40px_rgb(0,0,0,0.05)] sm:p-10">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-4 py-8 text-center"
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-black">
                  <CheckCircle2 className="size-7 text-white" />
                </div>
                <h3
                  className="text-xl font-semibold text-black"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Application Submitted!
                </h3>
                <p className="max-w-xs text-[14px] text-black/50">
                  Thank you! Our team will review your application and reach
                  out within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setStatus("idle")}
                  className="mt-2 rounded-lg border-black/15 text-[13px]"
                >
                  Submit Another
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="fullName" className="text-[13px] font-medium text-black/70">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="h-11 rounded-lg border-black/10 bg-black/[0.02] text-[14px] placeholder:text-black/25 focus-visible:ring-black/20"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="phone" className="text-[13px] font-medium text-black/70">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    required
                    className="h-11 rounded-lg border-black/10 bg-black/[0.02] text-[14px] placeholder:text-black/25 focus-visible:ring-black/20"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email" className="text-[13px] font-medium text-black/70">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="h-11 rounded-lg border-black/10 bg-black/[0.02] text-[14px] placeholder:text-black/25 focus-visible:ring-black/20"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="state" className="text-[13px] font-medium text-black/70">
                    State of Living
                  </Label>
                  <Input
                    id="state"
                    name="state"
                    type="text"
                    placeholder="California"
                    required
                    className="h-11 rounded-lg border-black/10 bg-black/[0.02] text-[14px] placeholder:text-black/25 focus-visible:ring-black/20"
                  />
                </div>

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-[13px] text-red-600"
                  >
                    <AlertCircle className="size-4 shrink-0" />
                    Something went wrong. Please try again.
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="h-12 rounded-xl bg-black text-[14px] font-medium text-white hover:bg-black/85"
                  size="lg"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="ml-1.5 size-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
