"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "home", href: "#home" },
  { label: "services", href: "#about" },
  { label: "why us", href: "#why-us" },
  { label: "pricing", href: "#pricing" },
  { label: "receipts", href: "#testimonials" },
  { label: "tips", href: "#tips" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-md"
    >

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-2.5">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "drop-shadow(0 0 6px rgba(220, 38, 38, 0.7))" }}
          >
            <rect width="34" height="34" rx="9" fill="#111111" />
            <rect width="34" height="34" rx="9" stroke="#dc2626" strokeWidth="1.5" />
            <path d="M10 26L17 8L24 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="12.5" y1="20" x2="21.5" y2="20" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span
            className="text-lg font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            applylegit
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-black tracking-wide text-white transition-colors duration-200 hover:text-white group"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-[#dc2626] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://mail.google.com/mail/?view=cm&to=nani161302@gmail.com&su=I%27m%20Interested%20%E2%80%94%20ApplyLegit&body=Hey%20ApplyLegit%20Team%2C%0A%0AI%20came%20across%20your%20platform%20and%20I%27m%20genuinely%20interested%20in%20your%20job%20search%20services.%20Would%20love%20to%20connect%20and%20learn%20more%20about%20how%20you%20can%20help%20me%20land%20a%20role.%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
            target="_blank"
            rel="noopener noreferrer"
            title="nani161302@gmail.com"
            className="flex h-9 items-center gap-2 rounded-md border border-white/10 px-4 text-sm font-bold text-white hover:border-[#dc2626]/60 hover:text-[#dc2626] transition-all duration-200"
          >
            <Mail className="size-4" />
            mail us
          </a>
          <Button asChild className="h-9 rounded-md bg-[#dc2626] px-4 text-sm font-black text-white hover:bg-[#dc2626]/80">
            <a href="#apply">get started</a>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center p-2 text-white/80 hover:text-white md:hidden"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-black md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-sm font-black tracking-wide text-white/80 hover:text-white border-l-2 border-transparent hover:border-[#dc2626] pl-3 transition-all duration-200"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2 h-10 w-full bg-[#dc2626] text-sm font-black text-white hover:bg-[#dc2626]/80">
                <a href="#apply" onClick={() => setMobileOpen(false)}>
                  get started
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
