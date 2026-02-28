"use client"

import { useState, useRef, type FormEvent } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, AlertTriangle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

type FormStatus = "idle" | "submitting" | "success" | "error"

interface FieldErrors {
  fullName?: string
  phone?: string
  email?: string
  state?: string
}

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

export function ApplicationForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errors, setErrors] = useState<FieldErrors>({})
  const [showBanner, setShowBanner] = useState(false)

  function validate(data: Record<string, FormDataEntryValue | null>): FieldErrors {
    const errs: FieldErrors = {}
    if (!data.fullName || String(data.fullName).trim() === "") errs.fullName = "full name is required"
    if (!data.phone || String(data.phone).trim() === "") errs.phone = "phone number is required"
    if (!data.email || String(data.email).trim() === "") errs.email = "email address is required"
    if (!data.state || String(data.state).trim() === "") errs.state = "state of living is required"
    return errs
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      state: formData.get("state"),
    }

    const errs = validate(data)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      setShowBanner(true)
      return
    }

    setErrors({})
    setShowBanner(false)
    setStatus("submitting")

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

  function clearError(field: keyof FieldErrors) {
    setErrors((prev) => {
      const next = { ...prev }
      delete next[field]
      if (Object.keys(next).length === 0) setShowBanner(false)
      return next
    })
  }

  return (
    <section id="apply" className="border-b border-white/10 bg-black py-20" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-black uppercase tracking-widest text-[#dc2626]">
            let's work
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ready to stop rawdogging the job market?
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/60 mx-auto max-w-lg">
            drop your details below. our team will hit you up within 24 hours
            to get your job search actually moving.
          </p>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mx-auto mt-12 max-w-md"
        >
          <div className="rounded-xl border border-white/10 bg-white/5 p-8 sm:p-10 shadow-2xl shadow-black/80">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-4 py-8 text-center"
              >
                <div className="flex size-16 items-center justify-center rounded-full bg-[#dc2626]">
                  <CheckCircle2 className="size-8 text-white" />
                </div>
                <h3
                  className="text-2xl font-black text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  secured.
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-white/60">
                  we got it. our team will review and reach out within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setStatus("idle")}
                  className="mt-6 h-10 rounded-lg border-white/20 bg-transparent px-6 text-sm font-bold text-white hover:bg-white/10"
                >
                  submit another
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

                {/* Global warning banner */}
                {showBanner && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30 px-4 py-3"
                  >
                    <AlertTriangle className="size-4 shrink-0 text-yellow-400 mt-0.5" />
                    <p className="text-sm font-bold text-yellow-400">
                      please fill in all required fields before submitting.
                    </p>
                  </motion.div>
                )}

                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="fullName" className="text-sm font-bold text-white">
                    full name <span className="text-[#dc2626]">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="john doe"
                    onChange={() => clearError("fullName")}
                    className={`h-12 rounded-lg text-base text-white placeholder:text-white/30 bg-white/8 transition-colors
                      ${errors.fullName
                        ? "border-red-500/70 focus-visible:ring-red-500/40 focus-visible:border-red-500"
                        : "border-white/10 focus-visible:ring-[#dc2626]/50 focus-visible:border-[#dc2626]"
                      }`}
                  />
                  {errors.fullName && (
                    <p className="flex items-center gap-1.5 text-xs font-bold text-red-400">
                      <AlertCircle className="size-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="phone" className="text-sm font-bold text-white">
                    phone number <span className="text-[#dc2626]">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    onChange={() => clearError("phone")}
                    className={`h-12 rounded-lg text-base text-white placeholder:text-white/30 bg-white/8 transition-colors
                      ${errors.phone
                        ? "border-red-500/70 focus-visible:ring-red-500/40 focus-visible:border-red-500"
                        : "border-white/10 focus-visible:ring-[#dc2626]/50 focus-visible:border-[#dc2626]"
                      }`}
                  />
                  {errors.phone && (
                    <p className="flex items-center gap-1.5 text-xs font-bold text-red-400">
                      <AlertCircle className="size-3.5" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email" className="text-sm font-bold text-white">
                    email address <span className="text-[#dc2626]">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    onChange={() => clearError("email")}
                    className={`h-12 rounded-lg text-base text-white placeholder:text-white/30 bg-white/8 transition-colors
                      ${errors.email
                        ? "border-red-500/70 focus-visible:ring-red-500/40 focus-visible:border-red-500"
                        : "border-white/10 focus-visible:ring-[#dc2626]/50 focus-visible:border-[#dc2626]"
                      }`}
                  />
                  {errors.email && (
                    <p className="flex items-center gap-1.5 text-xs font-bold text-red-400">
                      <AlertCircle className="size-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* State */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="state" className="text-sm font-bold text-white">
                    state of living <span className="text-[#dc2626]">*</span>
                  </Label>
                  <Input
                    id="state"
                    name="state"
                    type="text"
                    placeholder="california"
                    onChange={() => clearError("state")}
                    className={`h-12 rounded-lg text-base text-white placeholder:text-white/30 bg-white/8 transition-colors
                      ${errors.state
                        ? "border-red-500/70 focus-visible:ring-red-500/40 focus-visible:border-red-500"
                        : "border-white/10 focus-visible:ring-[#dc2626]/50 focus-visible:border-[#dc2626]"
                      }`}
                  />
                  {errors.state && (
                    <p className="flex items-center gap-1.5 text-xs font-bold text-red-400">
                      <AlertCircle className="size-3.5" /> {errors.state}
                    </p>
                  )}
                </div>

                {/* API error */}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm font-bold text-red-400 border border-red-500/20"
                  >
                    <AlertCircle className="size-4 shrink-0" />
                    something went wrong. please try again.
                  </motion.div>
                )}



                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 h-14 rounded-xl bg-[#dc2626] text-base font-black text-white hover:bg-[#dc2626]/80 transition-all"
                  size="lg"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="size-5 animate-spin mr-2" />
                      sending...
                    </>
                  ) : (
                    <>
                      send it
                      <ArrowRight className="ml-2 size-5" />
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
